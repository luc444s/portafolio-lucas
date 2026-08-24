import { useThemeStore, THEME_NAMES, type ThemeName } from "@themes";

const LABELS: Record<ThemeName, string> = {
  light: "Light",
  dark: "Dark",
  retro: "Retro SAP",
  catpuccin_mocha: "Catpuccin Mocha",
  nord: "Nord",
  nord_dark: "Nord Dark",
};

export default function ThemeBar() {
  const theme = useThemeStore((s) => s.theme);
  const setTheme = useThemeStore((s) => s.setTheme);

  return (
    <div className="sticky top-0 z-10 -mx-5 mb-10 flex flex-wrap gap-2 border-b border-border bg-background/85 px-5 py-3 backdrop-blur sm:-mx-6 sm:px-6">
      {THEME_NAMES.map((name) => (
        <button
          key={name}
          onClick={() => setTheme(name)}
          className={`border px-3 py-1 text-[13px] transition-colors ${
            theme === name
              ? "border-primary bg-primary text-primary-foreground"
              : "border-border bg-card text-foreground hover:border-primary"
          }`}
        >
          {LABELS[name]}
        </button>
      ))}
    </div>
  );
}
