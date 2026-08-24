import { useEffect, useRef, useState } from "react";
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
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [open]);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-20 flex justify-end gap-2 px-4 pt-3 sm:px-6">
      <a
        href="https://github.com/luc444s/portafolio-lucas"
        title="Ver el código de este sitio en GitHub"
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto flex h-[34px] w-10 items-center justify-center border border-border bg-card text-muted-foreground transition-colors hover:border-primary hover:text-primary"
      >
        <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] fill-current">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      </a>
      <div ref={ref} className="pointer-events-auto relative">
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="flex items-center gap-2 border border-border bg-card px-3 py-1.5 text-[13px] text-foreground transition-colors hover:border-primary"
        >
          {LABELS[theme]}
          <svg
            viewBox="0 0 24 24"
            className={`h-3.5 w-3.5 fill-none stroke-current transition-transform ${open ? "rotate-180" : ""}`}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>

        {open ? (
          <div className="absolute right-0 top-full z-30 mt-1 min-w-[11rem] border border-border bg-popover">
            {THEME_NAMES.map((name) => (
              <button
                key={name}
                type="button"
                onClick={() => {
                  setTheme(name);
                  setOpen(false);
                }}
                className={`flex w-full items-center justify-between gap-2 px-3 py-2 text-left text-sm transition-colors hover:bg-accent ${
                  theme === name ? "text-primary" : "text-popover-foreground"
                }`}
              >
                {LABELS[name]}
                {theme === name ? (
                  <svg
                    viewBox="0 0 24 24"
                    className="h-3.5 w-3.5 fill-none stroke-current"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                ) : null}
              </button>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
