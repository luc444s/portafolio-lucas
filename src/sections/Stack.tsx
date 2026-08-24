import { stack } from "../data/stack";
import { SectionTitle } from "./Projects";

export default function Stack() {
  return (
    <section className="mt-14">
      <SectionTitle>Stack</SectionTitle>
      <div className="flex flex-col gap-4">
        {stack.map((row) => (
          <div key={row.area} className="sm:flex sm:items-baseline sm:gap-6">
            <h3 className="mb-1.5 shrink-0 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground sm:mb-0 sm:w-36">
              {row.area}
            </h3>
            <div className="flex flex-wrap gap-2">
              {row.technologies.map((tech) => (
                <span
                  key={tech}
                  className="border border-border bg-accent px-2.5 py-1 text-[12.5px] text-foreground/80"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
