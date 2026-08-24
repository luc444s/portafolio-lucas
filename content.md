# Contenido del portafolio — Lucas

Fuente única de verdad para el sitio (React + Vite + TypeScript).
Todo lo que se muestra acá es real, verificable en github.com/luc444s.

---

## Quién soy

Desarrollador autodidacta orientado a sistemas de gestión. Construí y
mantengo un ERP multi-tenant en producción con arquitectura de plugins propia,
un kernel open-source MIT consumido como dependencia de producción, y una
metodología de desarrollo adoptada por otros devs.

Especialidad real: **modernizar sistemas legacy sin romper el negocio** —
reversa de esquemas sin documentar, migración dominio por dominio con
validación y auditoría, y continuidad operativa para usuarios que vienen
de software de escritorio.

---

## Proyectos destacados

### SYSTUTOR OSS — ERP multi-tenant (privado · producción)
Sistema operativo para empresa de gas envasado: envases, planificación,
despacho, CRM, stock, cotizaciones, compras. ~150.000 líneas propias en el
ecosistema. 7 plugins aislados con versionado y migraciones propias.
- Kernel open-source (MIT) consumido vía submodule pinneado
- Migración legacy dominio por dominio con validación y auditoría
- Clientes migrados exitosamente desde el sistema anterior; adquisición activa
- UI retro estilo SAP: decisión deliberada de seriedad empresarial

### systutor-core — Kernel open-source (público · MIT · producción)
github.com/luc444s/systutor-core
Framework de infraestructura para aplicaciones multi-tenant con lógica de
negocio en plugins externos:
- Auth JWT, RBAC declarativo por tenant, aislamiento por tenant_id/branch_id
- Auditoría persistente con actor/correlación, eventos con outbox + worker Dramatiq
- Runtime de plugins: manifest, validación estricta, ciclo de vida, migraciones por plugin
- SDK (`systutor.sdk`) y contratos compartidos (`systutor.contracts`)
- Suite de tests sobre aislamiento multi-tenant y runtime de plugins
Deliberadamente sin lógica de negocio. En producción como base de SYSTUTOR OSS.

### atomic-driven-development — ADD (público)
github.com/luc444s/atomic-driven-development
Metodología de desarrollo: cada cambio se diseña, implementa y valida como
unidad mínima, independiente, trazable y reversible (A.SPEC).
- Manifiesto, especificación normativa y plantilla canónica
- 7 skills ejecutables (speccer, verifier, gitflow, CI wrapper)
- En uso por desarrolladores externos; feedback activo de la comunidad

### spanel — Panel de hosting (público)
github.com/luc444s/spanel
Panel de gestión web sobre Docker remoto: hosting WordPress, correo,
proxy Traefik, plugins.

### systutor-shell — Frontend core (público · MIT)
github.com/luc444s/systutor-shell
Librería de componentes UI genéricos, consola operativa con DSL (Monaco),
clientes de infraestructura. Cero dependencias duras: fetch puro tipado,
peer deps opcionales. Base de este mismo portafolio.

### REPORTES-WEB → lecciones (privado · archivado en la historia)
Primer sistema propio (C# + React) integrando el ERP legacy VB.NET:
ingeniería inversa de esquema, stored procedures reutilizados, login
puenteado al legacy. Ver history/historia_lucas.md.

---

## Stack que domino

| Área | Tecnologías |
|---|---|
| Backend | Python, FastAPI, SQLAlchemy, Alembic, PostgreSQL, Redis |
| Arquitectura | Multi-tenancy, RBAC, eventos/outbox, runtime de plugins, ADRs |
| Frontend | React 18/19, TypeScript, Vite, componentes propios (shadcn-style), Monaco |
| DevOps | Docker, Docker Compose, SSH, Linux (desarrollo primario en Termux/Android), CI |
| Metodología | ADD/A.SPEC, SDD, GitFlow, ADRs, specs funcionales |

## Entorno particular

Desarrollo primario en **Termux sobre Android**: Python 3.12, PostgreSQL,
Redis, pnpm, ruff corriendo nativo en un teléfono. El installer de SYSTUTOR
soporta x86, ARM y Termux.

---

## Este sitio

Construido con React + Vite + TypeScript usando `@systutor/shell`
como librería de UI — el mismo frontend core que corre el ERP.
Repo público: github.com/luc444s/portafolio-lucas
