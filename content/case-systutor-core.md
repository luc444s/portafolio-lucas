# systutor-core — Arquitectura

Material para el portafolio. Diagrama del kernel + una A.SPEC real
extraída de systutor-OSS-Gas como muestra de la disciplina ADD en vivo.

---

## Diagrama de arquitectura

```text
┌────────────────────────────────────────────────────────────────────┐
│                        apps (host FastAPI)                          │
│        apps/api  ·  GasSettings · registro en el kernel             │
└──────────────────────────────┬─────────────────────────────────────┘
                               │ importa solo desde systutor.*
┌──────────────────────────────▼─────────────────────────────────────┐
│                     SYSTUTOR KERNEL  (MIT)                         │
│                                                                    │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌───────────┐ ┌─────────┐ │
│  │   auth   │ │   RBAC   │ │  tenants │ │   audit   │ │ events  │ │
│  │ JWT      │ │ permisos │ │ tenant_id│ │ audit_log │ │ bus +   │ │
│  │ hashing  │ │ por rol  │ │ branch_id│ │ actor+corr│ │ outbox  │ │
│  └──────────┘ └──────────┘ └──────────┘ └───────────┘ └─────────┘ │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌───────────┐              │
│  │ plugins  │ │documents │ │signatures│ │   tasks   │              │
│  │ runtime  │ │ versioned│ │ sesiones │ │ dramatiq  │              │
│  └──────────┘ └──────────┘ └──────────┘ └───────────┘              │
│                                                                    │
│  core/: config · database · errors · lifecycle · pagination · ...  │
│  sdk/:  systutor.sdk — contexto y registro para plugins            │
│  contracts/: eventos · auditoría · plugins (compartidos)           │
└──────────┬─────────────────────┬─────────────────────┬─────────────┘
           │ manifest + hooks    │ sdk context         │ migraciones propias
┌──────────▼──────────┐ ┌────────▼────────┐ ┌──────────▼──────────┐
│  plugins/logistics  │ │  plugins/crm    │ │  plugins/stock      │
│  plugin.json        │ │                 │ │                     │
│  requires: [crm]    │ │                 │ │                     │
│  42 permisos        │ │                 │ │                     │
│  55 eventos         │ │                 │ │                     │
│  models/dto/integr. │ │                 │ │                     │
└─────────────────────┘ └─────────────────┘ └─────────────────────┘
     ... ventas · productos · commerce · tms (120 permisos en total)

Reglas del contrato:
  - El kernel NO contiene lógica de negocio (deliberado).
  - Plugins importan infraestructura SOLO desde systutor.*.
  - Cada plugin declara identidad, versión, permisos, eventos y
    migraciones propias en plugin.json.
  - Todo endpoint exige contexto tenant; health/ready son globales.
```

Flujo de un request:

```text
request → JWT auth → tenant/branch context → RBAC check (permiso
declarado) → handler del plugin → audit_log + event → response
```

---

## A.SPEC real — API-REST-CON-0001 (systutor-OSS-Gas)

Extraída textualmente de `SPEC-ADD-TMS/API-REST-CON/API-REST-CON-0001.md`.
Es la primera unidad de cambio del puente entre el ERP legacy VB.NET y el
TMS Python. Nota cómo el alcance está acotado antes de escribir código:
ni siquiera la primera pieza toca datos de negocio.

> # A.SPEC API-REST-CON-0001 — Scaffold ERP-SYSTUTOR.API (VB.NET 3.5, HttpListener)
>
> ## WHY
> Python TMS necesita leer datos legacy sin tocar SQL Server. Se requiere una
> superficie de API en VB que sea el único puente permitido.
>
> ## WHAT
> Nuevo proyecto VB.NET 3.5 `ERP-SYSTUTOR.API` dentro de la solución ERP-SYSTUTOR,
> auto-host con `HttpListener` en `http://+:8080/api/`, que reusa
> `ClsConexion.ConnectionString()` para llegar a SQL Server (Linux Mint).
>
> ## SCOPE
> - Creación de `ERP-SYSTUTOR.API.vbproj` + `Program.vb` con listener arrancado.
> - Endpoint de salud `GET /api/health` → `200 {"status":"ok"}`.
>
> ## OUT OF SCOPE
> - Lógica de negocio y transformación de datos (A.SPEC 0002+).
> - Autenticación (A.SPEC 0004).
> - Endpoints de datos (A.SPEC 0002, 0003).
>
> ## CONTRACT
> - Al iniciar, el listener acepta conexiones en `:8080`.
> - `GET /api/health` responde `200 application/json` con `{"status":"ok"}`.
>
> ## INVARIANTS
> - No modifica el ERP existente (solo proyecto hermano en la solución).
> - No conecta TMS/Systutor a SQL Server; el API sí, porque es el legacy.
> - Reusa únicamente `ClsConexion` en modo lectura.
>
> ## VERIFICATION
> - Build del `.vbproj` (VB.NET 3.5) sin errores.
> - Ejecutar el exe en Win10; `curl http://localhost:8080/api/health` → `200`.
>
> ## ROLLBACK
> - Quitar el proyecto del `.sln` y detener el exe. Sin efecto en BD legacy.
>
> ## CHANGE SURFACE
> ```yaml
> allowed:
>   - ERP-SYSTUTOR.API/Program.vb
>   - ERP-SYSTUTOR.API/ERP-SYSTUTOR.API.vbproj
>   - ERP-SYSTUTOR.API/app.config
> prohibited:
>   - plugins/**
>   - kernel/**
>   - apps/api/app/kernel/**
> ```
>
> ## BLAST RADIUS
> ```yaml
> direct:
>   - superficie API en Win10 (:8080)
> indirect:
>   - consumidores futuros en Systutor
> must_not_affect:
>   - app ERP-SYSTUTOR (WinForms)
>   - datos SQL Server
>   - Python/Systutor runtime
> ```

### Por qué esta A.SPEC es buena evidencia

- **El cambio más riesgoso del proyecto** (tocar el legacy que opera la
  empresa) fue el primero en diseñarse, no el último improvisado.
- **Blast radius explícito**: declara qué NO debe romper antes de escribir
  una línea — el ERP WinForms y los datos SQL Server están intocables.
- **Rollback definido antes del código**: revertir es quitar un proyecto
  de la solución, cero efecto en producción.
- **Prohibiciones técnicas**: `prohibited: plugins/**, kernel/**` — la
  superficie de cambio se enforcea, no se promete.
