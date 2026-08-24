export type Project = {
  name: string;
  tag: string;
  tagKind: "production" | "private" | "public";
  description: string;
  meta: string[];
};

export const projects: Project[] = [
  {
    name: "systutor-core",
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
    tag: "público",
    tagKind: "public",
    description:
      "Metodología ADD: cada cambio como unidad mínima, trazable y reversible. En uso por devs externos con feedback activo.",
    meta: ["SDD", "A.SPEC", "Skills"],
  },
  {
    name: "systutor-shell",
    tag: "MIT",
    tagKind: "public",
    description:
      "Frontend core: componentes UI genéricos y consola operativa. Cero dependencias duras — fetch puro tipado.",
    meta: ["TypeScript", "React"],
  },
  {
    name: "systutor-themes",
    tag: "MIT",
    tagKind: "public",
    description:
      "Tokens atómicos por tema + CSS vars en runtime. Los temas de este sitio usan este sistema.",
    meta: ["TypeScript", "Zustand"],
  },
  {
    name: "spanel",
    tag: "público",
    tagKind: "public",
    description:
      "Panel de gestión sobre Docker remoto: hosting WordPress, correo, proxy Traefik, plugins.",
    meta: ["Docker", "Traefik"],
  },
];
