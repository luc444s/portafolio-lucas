import { projects, type Project } from "../data/projects";

function SectionTitle({ children }: { children: string }) {
  return (
    <h2 className="mb-5 flex items-center gap-3 text-xl font-semibold tracking-tight">
      {children}
      <span className="h-px flex-1 bg-border" />
    </h2>
  );
}

const TAG_COLORS: Record<Project["tagKind"], string> = {
  production: "text-success",
  public: "text-success",
  private: "text-muted-foreground",
};

export default function Projects() {
  return (
    <section className="mt-14">
      <SectionTitle>Proyectos</SectionTitle>
      <div className="grid gap-3.5 sm:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.name}
            className="border border-border bg-card p-4 transition-colors hover:border-primary"
          >
            <h3 className="flex items-baseline justify-between gap-2 text-base font-semibold">
              {p.url ? (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-primary"
                >
                  {p.name}
                </a>
              ) : (
                p.name
              )}
              <span
                className={`whitespace-nowrap text-[10.5px] font-bold uppercase tracking-wider ${TAG_COLORS[p.tagKind]}`}
              >
                {p.tag}
              </span>
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {p.description}
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {p.meta.map((m) => (
                <span
                  key={m}
                  className="bg-accent px-2 py-0.5 text-[11px] text-muted-foreground"
                >
                  {m}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export { SectionTitle };
