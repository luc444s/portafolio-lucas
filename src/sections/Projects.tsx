import { useEffect, useState } from "react";
import { projects, type Project } from "../data/projects";
import CoreDiagram from "../components/CoreDiagram";
import AspecExample from "../components/AspecExample";
import ShellKit from "../components/ShellKit";

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
  const [modalImg, setModalImg] = useState<string | null>(null);

  useEffect(() => {
    if (!modalImg) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setModalImg(null);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [modalImg]);

  return (
    <section className="mt-14">
      <SectionTitle>Proyectos</SectionTitle>
      <div className="grid gap-3.5 sm:grid-cols-2">
        {projects.map((p) => {
          const inner = (
            <>
              <h3 className="flex items-baseline justify-between gap-2 text-base font-semibold">
                {p.name}
                {p.url ? (
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden
                    className="h-3.5 w-3.5 shrink-0 fill-none stroke-current opacity-50"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17 17 7M7 7h10v10" />
                  </svg>
                ) : null}
                <span
                  className={`ml-auto whitespace-nowrap text-[10.5px] font-bold uppercase tracking-wider ${TAG_COLORS[p.tagKind]}`}
                >
                  {p.tag}
                </span>
              </h3>
              {p.name === "systutor-core" || p.name === "atomic-driven-development" ? (
                <span
                  onClick={(e) => e.preventDefault()}
                  className="block cursor-default"
                >
                  {p.name === "systutor-core" ? <CoreDiagram /> : <AspecExample />}
                </span>
              ) : null}
              {p.name !== "systutor-shell" ? (
                <>
                  {p.image ? (
                    <button
                      type="button"
                      onClick={() => setModalImg(p.image!)}
                      className="mb-3 block w-full cursor-zoom-in border border-border"
                    >
                      <img
                        src={p.image}
                        alt={`Captura de ${p.name}`}
                        loading="lazy"
                        className="w-full object-cover"
                      />
                    </button>
                  ) : null}
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
                </>
              ) : null}
            </>
          );

          if (p.name === "systutor-shell") {
            return (
              <div
                key={p.name}
                className="border border-border bg-card transition-colors hover:border-primary"
              >
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 pb-0 text-foreground transition-colors hover:text-primary"
                >
                  {inner}
                </a>
                <ShellKit />
                <div className="px-4 pb-4 text-muted-foreground">
                  <p className="text-sm leading-relaxed">{p.description}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.meta.map((m) => (
                      <span
                        key={m}
                        className="bg-accent px-2 py-0.5 text-[11px]"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          }

          return p.url ? (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-border bg-card p-4 transition-colors hover:border-primary hover:text-primary"
            >
              {inner}
            </a>
          ) : (
            <article
              key={p.name}
              className="border border-border bg-card p-4 transition-colors hover:border-primary"
            >
              {inner}
            </article>
          );
        })}
      </div>

      {modalImg ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 p-4"
          onClick={() => setModalImg(null)}
        >
          <button
            type="button"
            aria-label="Cerrar"
            onClick={() => setModalImg(null)}
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center border border-border bg-card text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 fill-none stroke-current"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
          <img
            src={modalImg}
            alt="Captura ampliada"
            onClick={(e) => e.stopPropagation()}
            className="max-h-full max-w-full object-contain"
          />
        </div>
      ) : null}
    </section>
  );
}

export { SectionTitle };
