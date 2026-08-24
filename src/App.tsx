import Hero from "./sections/Hero";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto max-w-3xl px-5 py-12 sm:px-6 sm:py-16">
        <Hero />
      </main>
    </div>
  );
}
