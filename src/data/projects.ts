export type Project = {
  name: string;
  url?: string;
  tag: string;
  tagKind: "production" | "private" | "public";
  description: string;
  meta: string[];
};

export const projects: Project[] = [
  {
    name: "systutor-core",
    url: "https://github.com/luc444s/systutor-core",
    tag: "producción · MIT",
    tagKind: "production",
    description:
      "Kernel multi-tenant open-source: auth JWT, RBAC declarativo, auditoría, eventos con outbox, runtime de plugins. Base del ERP en producción.",
    meta: ["Python", "FastAPI", "MIT"],
  },
  {
    name: "SYSTUTOR OSS",
    tag: "privado · producción",
    tagKind: "private",
    description:
      "ERP para empresa de gas envasado: ~150k líneas, 7 plugins, 120 permisos declarados. Clientes migrados desde el legacy, adquisición activa.",
    meta: ["FastAPI", "React", "Plugins"],
  },
  {
    name: "atomic-driven-development",
    url: "https://github.com/luc444s/atomic-driven-development",
    tag: "público",
    tagKind: "public",
    description:
      "Metodología ADD — \"Atomicity Applies to Change, not Ambition\": cada cambio se diseña, implementa y valida como unidad mínima, trazable y reversible (A.SPEC). Especificación normativa + plantilla canónica + 7 skills ejecutables (speccer, verifier, gitflows, CI). En uso por devs externos con feedback activo; 54 A.SPECs registradas solo en SYSTUTOR OSS.",
    meta: ["6 fases", "7 skills", "54 A.SPECs", "comunidad"],
  },
  {
    name: "systutor-shell",
    url: "https://github.com/luc444s/systutor-shell",
    tag: "MIT",
    tagKind: "public",
    description:
      "Frontend core: componentes UI genéricos y consola operativa. Cero dependencias duras — fetch puro tipado.",
    meta: ["TypeScript", "React"],
  },
  {
    name: "systutor-themes",
    url: "https://github.com/luc444s/systutor-themes",
    tag: "MIT",
    tagKind: "public",
    description:
      "Tokens atómicos por tema + CSS vars en runtime. Los temas de este sitio usan este sistema.",
    meta: ["TypeScript", "Zustand"],
  },
  {
    name: "spanel",
    url: "https://github.com/luc444s/spanel",
    tag: "público",
    tagKind: "public",
    description:
      "Panel de gestión sobre Docker remoto: hosting WordPress, correo, proxy Traefik, plugins.",
    meta: ["Docker", "Traefik"],
  },
];
