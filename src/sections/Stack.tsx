import { stack } from "../data/stack";
import { SectionTitle } from "./Projects";

export default function Stack() {
  return (
    <section className="mt-14">
      <SectionTitle>Stack</SectionTitle>
      <table className="w-full border-collapse border border-border bg-card text-sm">
        <thead>
          <tr>
            <th className="bg-primary px-3.5 py-2.5 text-left text-xs uppercase tracking-wider text-primary-foreground">
              Área
            </th>
            <th className="bg-primary px-3.5 py-2.5 text-left text-xs uppercase tracking-wider text-primary-foreground">
              Tecnologías
            </th>
          </tr>
        </thead>
        <tbody>
          {stack.map((row) => (
            <tr key={row.area} className="border-b border-border last:border-b-0">
              <td className="whitespace-nowrap px-3.5 py-2.5 font-semibold">
                {row.area}
              </td>
              <td className="px-3.5 py-2.5 text-muted-foreground">
                {row.technologies}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
