# Contenido del portafolio — Lucas

Fuente única de verdad para el sitio (React + Vite + TypeScript).
Todo lo que se muestra acá es real, verificable en github.com/luc444s.

---

## Quién soy

Ingeniero full-stack especializado en sistemas de gestión y modernización
de legados. 5 años de experiencia construyendo y sosteniendo software en
producción con clientes reales. Construí y mantengo un ERP multi-tenant
con arquitectura de plugins propia, un kernel open-source MIT consumido
como dependencia de producción, y una metodología de desarrollo adoptada
por otros devs.

Especialidad real: **modernizar sistemas legacy sin romper el negocio** —
reversa de esquemas sin documentar, migración dominio por dominio con
validación y auditoría, y continuidad operativa para usuarios que vienen
de software de escritorio.

---

## Experiencia

**Desarrollador — Tutora Business / Independiente** (5 años)
Llevando hacia adelante el proyecto SYSTUTOR: desde el mantenimiento y
reversa del sistema legacy hasta el diseño y construcción del ecosistema
actual (kernel open-source, ERP multi-tenant con plugins, metodología ADD),
con clientes migrados y en producción. Trabajo repartido entre el negocio
familiar y proyectos independientes para clientes directos.

**Soporte técnico e infraestructura — Tutora Business / Independiente**
(en paralelo)
Donde aprendí que todo software corre sobre hardware que alguien tiene
que mantener vivo. Diagnóstico y reparación de equipos a nivel componente,
rescate de datos, redes y puesta a punto de máquinas de producción.
Ningún sistema falla solo: cada bug que llegaba con el equipo apagado me
enseñó a escribir software pensando en el día en que algo se rompe —
por eso la auditoría, los backups y la trazabilidad no son features acá:
son religión.

**Desarrollo WordPress y PHP a medida — Independiente** (1 año)
Un año de sitios y sistemas sobre WordPress con plugins personalizados
antes de volver de lleno a la programación:

- **ardiffx.com** — tienda WooCommerce con sistema propio de tokens únicos
  para links de descarga segura (mismo problema que después resolví a nivel
  kernel en systutor: entregas digitales con acceso controlado y trazable)
- **gestiongasesindustriales.com** — presencia web y gestión para el negocio
  de gases industriales
- **systutor.com** — sitio del proyecto SYSTUTOR

Plugins PHP hechos a medida integrados con WooCommerce, pasarelas y flujos
de negocio propios de cada cliente.

## Proyectos destacados

### SYSTUTOR Gases Industriales — ERP multi-tenant (privado · producción)
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
| Backend | Python, FastAPI, SQLAlchemy, Alembic, PostgreSQL |
| Base de datos | PostgreSQL (modelado, migraciones, tuning básico) |
| Frontend | React 18/19, TypeScript, Vite, componentes propios (shadcn-style), Monaco |
| Arquitectura | Multi-tenancy, RBAC, eventos/outbox, runtime de plugins, ADRs |
| DevOps | Docker, Docker Compose, CI |
| Entorno diario | Linux, Zellij, Neovim, SSH, Git |
| Metodología | ADD/A.SPEC, SDD, GitFlow, ADRs, specs funcionales |

---

## Este sitio

Construido con React + Vite + TypeScript usando `@systutor/shell`
como librería de UI — el mismo frontend core que corre el ERP.
Repo público: github.com/luc444s/portafolio-lucas
