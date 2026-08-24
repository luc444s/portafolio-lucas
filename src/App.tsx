import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Stack from "./sections/Stack";
import Experience from "./sections/Experience";
import ThemeBar from "./sections/ThemeBar";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto max-w-5xl px-5 py-12 sm:px-6 sm:py-16">
        <ThemeBar />
        <Hero />
        <Projects />
        <Stack />
        <Experience />

        <footer className="mt-16 flex flex-wrap justify-between gap-2 border-t border-border pt-5 text-xs text-muted-foreground">
          <span>© 2026 Sihuen Lucas — github.com/luc444s</span>
          <span>Construido con React + Vite + @systutor/shell</span>
        </footer>
      </main>
    </div>
  );
}
