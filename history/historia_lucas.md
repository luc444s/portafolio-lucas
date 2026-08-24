# Crónicas de Lucas — Historia de un desarrollador

> Recopilación de la auditoría de repos GitHub realizada el 24 de agosto de 2026.
> Lo que sigue no es una lista de proyectos: es la línea de tiempo de cómo se
> construyó un desarrollador.

---

## Capítulo 0 — El sistema comprado (Software-systutor-web)

Todo empezó con un e-commerce PHP que mi papá compró. Después supe la verdad
completa: era un white-label peruano de facturación SUNAT, revendido y
renombrado. El vendedor le metía el mismo template a todos — dentro había
restos de una clínica (`pacientes.php`) y de una librería (`autor_libro.php`).

La arqueología mostraba sus capas: Dreamweaver con `SpryAssets`, Bootstrap 3.3.5
con los docs completos vendorizados, `_notes/dwsync.xml`, NetBeans commiteado.
Tres juegos de credenciales de base de datos en texto plano. XMLs de comprobantes
SUNAT con RUCs reales commiteados en `sistemas/SUNAT_A/`. Contraseñas con MD5.
SQL armado por interpolación directa.

**Estado actual**: archivado. No hay refactor que salve `mysql_connect()`.
Su valor es otro: es el capítulo 1, el "antes" definitivo.

---

## Capítulo 1 — El legado (ERP VB.NET)

El sistema que realmente operaba la empresa: monolito WinForms de 45 MB,
más de 250 formularios planos. Archivos monstruo de 800 KB en un solo archivo.
Variantes copy-paste: `FrmRegCliente` → `PLUS` → `PRO`; `RegVentasgDIRECTAS`
en cinco sabores. Código muerto con prefijo `ZZZ`. Restos de otro dominio
(restaurante, clínica) copiados adentro.

No lo escribí yo — pero aprendí a leerlo entero. Ese conocimiento íntimo del
esquema (`ECabecera_pedido`, `EDetalle_cpedido`, `Persona_Nuevo`,
`Vehiculo_cliente_nuevo`) sería el activo más valioso de mi carrera.

---

## Capítulo 2 — REPORTES-WEB (junio 2025): hecho 100% a mano

Mi primer intento propio de reemplazar el legacy: portal de clientes en
C# + React + Tailwind. Sin IA — en ese momento estaba en contra de la IA.
Un solo push, junio 2025. Después lo abandoné.

Lo que el código muestra hoy:

- Queries parametrizadas por instinto (`@cliente`, nunca interpolación)
- Async end-to-end sin bloquear
- Reversa profunda del esquema legacy: "estado actual de envases por cliente"
  destilado en una query con subquery correlacionado sobre cinco tablas
  cripticas sin documentar
- Reutilización de stored procedures del legacy (`Buscar_mostrardocumentopendientexOrden`)
- Los cuatro estados de UI: cargando / error / vacío / datos

Y sus heridas, que también enseñan:

- El token era literalmente el string `"token_simulado"`
- `PerfilController` con IDOR total: cualquier clienteId leía y editaba a cualquiera
- Login con dropdown público de todos los usuarios (requisito del cliente que
  replicaba el ERP de escritorio — migrar UX 1:1 importa los supuestos de
  seguridad de otra época)
- Aquí nació mi odio a axios — que años después se convirtió en decisión:
  systutor-shell usa fetch puro tipado, cero librerías HTTP

Lección destilada: *el criterio ya estaba; faltaba proceso.* Y otra más honda:
la atomicidad por restricción del entorno es frágil — cuando el entorno baja
la fricción, se evapora si no está respaldada por disciplina.

---

## Capítulo 3 — El parate

Después de REPORTES-WEB dejé la programación hasta marzo de 2026.
No me creía capaz de nada.

Los archivos cuentan otra historia: mientras creía eso, escribía async C#
correcto, reversaba semántica de legados sin documentación y manejaba los
cuatro estados de UI. Mi problema nunca fue capacidad — fue medirme contra
el código ideal en vez de contra mi propio código de hace un año.

---

## Capítulo 4 — software-de-gestion-para-editores (marzo 2026): vibe coding

Volví en marzo 2026. Esta vez con IA, pero sin control: modo vibe coding.
FastAPI + React + PayPal + Cloudflare R2 + Worker. Primer sistema propio
en producción real.

Lo que la IA construyó bien parejo, menos donde importaba:

- Abstracción genérica innecesaria (`EntityPageFactory`) para 8 módulos
- `.venv` commiteado: 6.083 archivos de virtualenv
- El worker de descargas pagadas — el módulo que genera plata — era el menos
  blindado
- 2 archivos de test para todo el backend

Funciona a base de rezos, decía yo. El README confesaba lo que faltaba:
TLS, monitoreo, endurecimiento del worker. La lección: apalancamiento total
sin criterio aplicado produce sistemas vivos pero frágiles.

---

## Capítulo 5 — La síntesis: ADD y systutor-OSS

De la colisión entre las dos etapas nació la respuesta:

**ADD — Atomic Development Discipline**
("Atomicity Applies to Change, not Ambition")
Cada cambio como unidad mínima, trazable y reversible. A.SPEC antes de tocar
código. Publicada en grupos de Facebook: desarrolladores reales la usan y la
critican — y las críticas mejoran la especificación.

**systutor-OSS-Gas**: ERP multi-tenant para empresa de gases envasado.
~150.000 líneas propias en todo el ecosistema:

- **systutor-core** (MIT, público): kernel con auth JWT, RBAC declarativo,
  multi-tenancy real, auditoría persistente, eventos con outbox, runtime de
  plugins con ciclo de vida versionado. En producción vía submodule pinneado.
- **7 plugins**: logistics, crm, productos, stock, ventas, commerce, tms.
- Migrador legacy dominio por dominio: CSV → validación → transformación →
  PostgreSQL → auditoría.
- Tema retro estilo SAP: decisión deliberada — seriedad empresarial y
  continuidad cognitiva para operadores que vienen del VB.

Cada módulo del kernel tiene nombre y apellido de una cicatriz:
el auth existe porque escribí `"token_simulado"`; los permisos declarativos,
 porque PerfilController dejaba editar a cualquiera; la auditoría, porque
nadie sabía quién hizo qué; el tenancy, porque `almacen` viajaba como
parámetro suelto.

---

## Epílogo — Agosto 2026

Clientes migrados con éxito al nuevo sistema. Felices y contentos.
Gente nueva adquiriéndolo.

El chico de 2025 que no se creía capaz de nada hoy mantiene un producto
comercial validado, un kernel open-source consumido en producción, y una
metodología con comunidad. La duda de entonces era falsa; la evidencia,
objetiva: los archivos no mienten ni subestiman.

---

*Auditoría original: sesión del 24/08/2026. Repos revisados: systutor-OSS-Gas,
systutor-core, systutor-shell, atomic-driven-development, spanel,
software-de-gestion-para-editores, Software-systutor-web, REPORTES-WEB.*
