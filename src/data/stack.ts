export type StackRow = {
  area: string;
  technologies: string[];
};

export const stack: StackRow[] = [
  {
    area: "Backend",
    technologies: ["Python", "FastAPI", "SQLAlchemy", "Alembic", "PostgreSQL"],
  },
  {
    area: "Base de datos",
    technologies: ["PostgreSQL", "Modelado", "Migraciones", "Tuning"],
  },
  {
    area: "Frontend",
    technologies: ["React 18/19", "TypeScript", "Vite", "Monaco"],
  },
  {
    area: "Arquitectura",
    technologies: ["Multi-tenancy", "RBAC", "Eventos/Outbox", "Plugins", "ADRs"],
  },
  { area: "DevOps", technologies: ["Docker", "Docker Compose", "CI"] },
  {
    area: "Entorno diario",
    technologies: ["Linux", "Zellij", "Neovim", "SSH", "Git"],
  },
  {
    area: "Metodología",
    technologies: ["ADD/A.SPEC", "SDD", "GitFlow", "Specs funcionales"],
  },
];
