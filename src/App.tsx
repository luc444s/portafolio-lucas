import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Stack from "./sections/Stack";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto max-w-3xl px-5 py-12 sm:px-6 sm:py-16">
        <Hero />
        <Projects />
        <Stack />
      </main>
    </div>
  );
}
