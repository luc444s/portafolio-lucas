const CARD = { fill: "hsl(var(--card))", stroke: "hsl(var(--border))" };
const MUTED = { fill: "hsl(var(--muted-foreground))" };
const FG = { fill: "hsl(var(--foreground))" };
const PRIMARY = "hsl(var(--primary))";

export default function ShellKit() {
  return (
    <svg
      viewBox="0 0 400 110"
      className="my-3 w-full"
      role="img"
      aria-label="Componentes de la librería systutor-shell"
    >
      <rect
        x="1"
        y="1"
        width="398"
        height="108"
        strokeWidth="1"
        style={{ fill: "transparent", stroke: "hsl(var(--border))" }}
      />

      {/* button */}
      <rect x="16" y="18" width="64" height="22" fill={PRIMARY} />
      <text x="48" y="32" textAnchor="middle" fontSize="9" fontWeight="600" fill="hsl(var(--primary-foreground))">
        Button
      </text>

      {/* badge */}
      <rect x="92" y="21" width="46" height="16" strokeWidth="1" style={{ ...CARD, stroke: PRIMARY }} />
      <text x="115" y="32" textAnchor="middle" fontSize="8.5" fill={PRIMARY}>
        Badge
      </text>

      {/* input */}
      <rect x="150" y="17" width="104" height="24" strokeWidth="1" style={CARD} />
      <text x="160" y="32" fontSize="9" style={MUTED}>
        Input…
      </text>

      {/* switch on */}
      <rect x="266" y="20" width="34" height="16" rx="0" fill={PRIMARY} />
      <rect x="286" y="23" width="10" height="10" fill="hsl(var(--primary-foreground))" />

      {/* checkbox checked */}
      <rect x="314" y="20" width="14" height="14" strokeWidth="1" style={CARD} />
      <path
        d="M317 27l3 4 5-7"
        fill="none"
        stroke={PRIMARY}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text x="334" y="31" fontSize="8.5" style={FG}>
        Check
      </text>

      {/* tabs row */}
      <line x1="16" y1="58" x2="384" y2="58" stroke="hsl(var(--border))" strokeWidth="1" />
      <text x="26" y="52" fontSize="9" fontWeight="600" fill={PRIMARY}>
        Tabs
      </text>
      <rect x="16" y="56" width="30" height="2" fill={PRIMARY} />
      <text x="66" y="52" fontSize="9" style={MUTED}>
        Tab 2
      </text>
      <text x="106" y="52" fontSize="9" style={MUTED}>
        Tab 3
      </text>

      {/* progress */}
      <rect x="16" y="70" width="180" height="8" strokeWidth="1" style={CARD} />
      <rect x="16" y="70" width="112" height="8" fill={PRIMARY} />
      <text x="206" y="78" fontSize="8.5" style={MUTED}>
        Progress
      </text>

      {/* skeleton lines */}
      <rect x="270" y="70" width="50" height="8" style={MUTED} opacity="0.35" />
      <rect x="270" y="82" width="34" height="8" style={MUTED} opacity="0.35" />
      <text x="330" y="82" fontSize="8.5" style={MUTED}>
        Skeleton
      </text>

      {/* footer claim */}
      <line x1="16" y1="94" x2="384" y2="94" stroke="hsl(var(--border))" strokeWidth="1" />
      <text x="200" y="104" textAnchor="middle" fontSize="8" style={MUTED}>
        25 componentes · dependencies: {"{}"} · fetch tipado propio
      </text>
    </svg>
  );
}
