import { Card, Button, Badge } from "@shell";
import { useThemeStore, THEME_NAMES, type ThemeName } from "@themes";

const THEME_LABELS: Record<ThemeName, string> = {
  light: "Light",
  dark: "Dark",
  retro: "Retro SAP",
  catpuccin_mocha: "Catpuccin Mocha",
  nord: "Nord",
  nord_dark: "Nord Dark",
};

export default function App() {
  const theme = useThemeStore((s) => s.theme);
  const setTheme = useThemeStore((s) => s.setTheme);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto max-w-3xl px-6 py-16">
        <header className="mb-10">
          <Badge>Portafolio</Badge>
          <h1 className="mt-4 text-4xl font-bold">Lucas</h1>
          <p className="mt-2 text-muted-foreground">
            Desarrollador · ERP multi-tenant en producción · kernel open-source
          </p>
        </header>

        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Tema</h2>
          <div className="flex flex-wrap gap-2">
            {THEME_NAMES.map((name) => (
              <Button
                key={name}
                variant={theme === name ? "primary" : "secondary"}
                onClick={() => setTheme(name)}
              >
                {THEME_LABELS[name]}
              </Button>
            ))}
          </div>
        </Card>
      </main>
    </div>
  );
}
