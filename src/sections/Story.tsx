export default function Story() {
  return (
    <>
      <section className="mt-14">
        <h2 className="mb-5 flex items-center gap-3 text-xl font-semibold tracking-tight">
          Historia
          <span className="h-px flex-1 bg-border" />
        </h2>
        <div className="border border-border border-l-[3px] border-l-primary bg-card px-5 py-4 text-sm leading-relaxed text-muted-foreground">
          De un ERP legacy en Visual Basic que operaba una empresa real, a un
          kernel open-source y un producto con clientes migrados y creciendo.{" "}
          <b className="text-foreground">
            Los archivos no mienten ni subestiman
          </b>{" "}
          — cada módulo del kernel lleva el nombre de una cicatriz: el auth
          existe porque un día escribí <b className="text-foreground">"token_simulado"</b>.
        </div>
      </section>

      <footer className="mt-16 flex flex-wrap justify-between gap-2 border-t border-border pt-5 text-xs text-muted-foreground">
        <span>© 2026 Lucas — github.com/luc444s</span>
        <span>Construido con React + Vite + @systutor/shell</span>
      </footer>
    </>
  );
}
