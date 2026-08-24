export type StackRow = {
  area: string;
  technologies: string;
};

export const stack: StackRow[] = [
  {
    area: "Backend",
    technologies: "Python, FastAPI, SQLAlchemy, Alembic, PostgreSQL",
  },
  {
    area: "Base de datos",
    technologies: "PostgreSQL — modelado, migraciones, tuning básico",
  },
  {
    area: "Frontend",
    technologies:
      "React 18/19, TypeScript, Vite, componentes propios, Monaco",
  },
  {
    area: "Arquitectura",
    technologies:
      "Multi-tenancy, RBAC, eventos/outbox, runtime de plugins, ADRs",
  },
  { area: "DevOps", technologies: "Docker, Docker Compose, CI" },
  {
    area: "Entorno diario",
    technologies: "Linux, Zellij, Neovim, SSH, Git",
  },
  {
    area: "Metodología",
    technologies: "ADD/A.SPEC, SDD, GitFlow, specs funcionales",
  },
];
