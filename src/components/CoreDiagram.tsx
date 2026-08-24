const CARD = { fill: "hsl(var(--card))", stroke: "hsl(var(--border))" };
const MUTED = { fill: "hsl(var(--muted-foreground))" };
const FG = { fill: "hsl(var(--foreground))" };
const PRIMARY = "hsl(var(--primary))";

const KERNEL_MODULES = [
  ["auth", "permissions", "tenants"],
  ["audit", "events", "tasks"],
  ["documents", "signatures", "plugins"],
];

export default function CoreDiagram() {
  return (
    <svg
      viewBox="0 0 400 200"
      className="mt-3 w-full"
      role="img"
      aria-label="systutor-core como base: kernel del que dependen la app y la api de gestión"
    >
      {/* consumers on top */}
      <rect x="24" y="4" width="170" height="24" strokeWidth="1" style={CARD} />
      <text x="109" y="20" textAnchor="middle" fontSize="9" style={MUTED}>
        app/ · FastAPI referencia
      </text>
      <rect x="206" y="4" width="170" height="24" strokeWidth="1" style={CARD} />
      <text x="291" y="20" textAnchor="middle" fontSize="9" style={MUTED}>
        api/v1 · gestión REST
      </text>

      {/* arrows outward from kernel */}
      {[109, 291].map((x) => (
        <g key={x}>
          <line x1={x} y1="44" x2={x} y2="32" stroke={PRIMARY} strokeWidth="1.5" />
          <polygon points={`${x - 4},33 ${x + 4},33 ${x},27`} fill={PRIMARY} />
        </g>
      ))}

      {/* kernel base */}
      <rect x="24" y="46" width="352" height="96" strokeWidth="1.5" style={CARD} />
      <text x="40" y="62" fontSize="11" fontWeight="700" fill={PRIMARY}>
        systutor.kernel
      </text>
      {KERNEL_MODULES.map((row, r) =>
        row.map((m, i) => (
          <g key={m}>
            <rect
              x={36 + i * 112}
              y={68 + r * 23}
              width="104"
              height="17"
              strokeWidth="1"
              style={CARD}
            />
            <text
              x={88 + i * 112}
              y={80 + r * 23}
              textAnchor="middle"
              fontSize="9"
              style={MUTED}
            >
              {m}
            </text>
          </g>
        )),
      )}

      {/* core foundation */}
      <rect x="24" y="142" width="352" height="16" strokeWidth="1" style={CARD} />
      <text x="200" y="153" textAnchor="middle" fontSize="8" style={MUTED}>
        core/ · config · database · cache · errors · lifecycle · pagination
      </text>

      {/* exported interfaces */}
      <rect x="24" y="164" width="170" height="30" strokeWidth="1" style={CARD} />
      <text x="109" y="176" textAnchor="middle" fontSize="9" style={FG}>
        sdk/
      </text>
      <text x="109" y="188" textAnchor="middle" fontSize="7.5" style={MUTED}>
        contexto para plugins externos
      </text>
      <rect x="206" y="164" width="170" height="30" strokeWidth="1" style={CARD} />
      <text x="291" y="176" textAnchor="middle" fontSize="9" style={FG}>
        contracts/
      </text>
      <text x="291" y="188" textAnchor="middle" fontSize="7.5" style={MUTED}>
        eventos · audit · plugins
      </text>
    </svg>
  );
}
