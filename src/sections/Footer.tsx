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
          className="text-sm font-semibold text-primary transition-colors hover:underline"
        >
          sihuen8@gmail.com
        </a>
      </div>

      <div className="flex flex-wrap justify-between gap-2 border-t border-border py-5 text-xs text-muted-foreground">
        <span>© 2026 Sihuen Lucas — github.com/luc444s</span>
        <span>
          Construido con React + Vite + @systutor/shell —{" "}
          <a
            href="https://github.com/luc444s/portafolio-lucas"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary transition-colors hover:underline"
          >
            github.com/luc444s/portafolio-lucas
          </a>
        </span>
      </div>
    </footer>
  );
}
