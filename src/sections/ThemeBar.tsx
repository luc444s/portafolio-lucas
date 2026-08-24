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
    <div className="pointer-events-none fixed inset-x-0 top-0 z-20 flex justify-end px-4 pt-3 sm:px-6">
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
