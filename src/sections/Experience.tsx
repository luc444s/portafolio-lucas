import { experience } from "../data/experience";
import { SectionTitle } from "./Projects";

export default function Experience() {
  return (
    <section className="mt-14">
      <SectionTitle>Experiencia</SectionTitle>
      <div className="border-l-[3px] border-l-primary">
        {experience.map((e) => (
          <div key={e.role} className="relative pb-8 pl-6 last:pb-0">
            <span
              aria-hidden
              className="absolute left-[-7px] top-1.5 h-3 w-3 border-[3px] border-primary bg-background"
            />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-base font-semibold text-foreground">
                {e.role}
                <span className="font-normal text-muted-foreground">
                  {" "}
                  — {e.org}
                </span>
              </h3>
              <span className="whitespace-nowrap text-xs uppercase tracking-wider text-muted-foreground">
                {e.period}
              </span>
            </div>
            <p className="mt-2 max-w-[70ch] text-sm leading-relaxed text-muted-foreground">
              {e.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
