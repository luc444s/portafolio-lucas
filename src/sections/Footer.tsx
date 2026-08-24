export default function Footer() {
  return (
    <footer className="mt-20 border-t border-border">
      <div className="flex flex-col items-start gap-4 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            ¿Trabajamos juntos?
          </h2>
        </div>
        <a
          href="mailto:sihuen8@gmail.com"
          className="border border-primary px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          Enviar correo
        </a>
      </div>

      <div className="flex flex-wrap justify-between gap-2 border-t border-border py-5 text-xs text-muted-foreground">
        <span>© 2026 Sihuen Lucas — github.com/luc444s</span>
        <span>Construido con React + Vite + @systutor/shell</span>
      </div>
    </footer>
  );
}
