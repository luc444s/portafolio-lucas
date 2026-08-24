const CARD = { fill: "hsl(var(--card))", stroke: "hsl(var(--border))" };
const MUTED = { fill: "hsl(var(--muted-foreground))" };
const FG = { fill: "hsl(var(--foreground))" };
const PRIMARY = "hsl(var(--primary))";

const KERNEL_MODULES = [
  ["auth", "permissions", "tenants"],
  ["audit", "events", "tasks"],
  ["documents", "signatures", "plugins"],
];

function Arrow({ x = 200 }: { x?: number }) {
  return (
    <g>
      <line x1={x} y1={0} x2={x} y2={10} stroke={PRIMARY} strokeWidth="1.5" />
      <polygon points={`${x - 4},9 ${x + 4},9 ${x},17`} fill={PRIMARY} />
    </g>
  );
}

export default function CoreDiagram() {
  return (
    <svg
      viewBox="0 0 400 240"
      className="mt-3 w-full"
      role="img"
      aria-label="Estructura del repositorio systutor-core"
    >
      {/* app/ */}
      <rect x="100" y="2" width="200" height="20" strokeWidth="1" style={CARD} />
      <text x="200" y="16" textAnchor="middle" fontSize="9" style={MUTED}>
        app/ · aplicación FastAPI de referencia
      </text>
      <g transform="translate(0,24)">
        <Arrow />
      </g>

      {/* api/v1 */}
      <rect x="50" y="42" width="300" height="22" strokeWidth="1" style={CARD} />
      <text x="200" y="56" textAnchor="middle" fontSize="9" style={MUTED}>
        api/v1 · users · roles · branches · plugins · documents
      </text>
      <g transform="translate(0,66)">
        <Arrow />
      </g>

      {/* kernel */}
      <rect x="24" y="86" width="352" height="98" strokeWidth="1.5" style={CARD} />
      <text x="40" y="102" fontSize="11" fontWeight="700" fill={PRIMARY}>
        systutor.kernel
      </text>
      {KERNEL_MODULES.map((row, r) =>
        row.map((m, i) => (
          <g key={m}>
            <rect
              x={36 + i * 112}
              y={108 + r * 23}
              width="104"
              height="17"
              strokeWidth="1"
              style={CARD}
            />
            <text
              x={88 + i * 112}
              y={120 + r * 23}
              textAnchor="middle"
              fontSize="9"
              style={MUTED}
            >
              {m}
            </text>
          </g>
        )),
      )}

      {/* core/ */}
      <rect x="24" y="190" width="352" height="16" strokeWidth="1" style={CARD} />
      <text x="200" y="201" textAnchor="middle" fontSize="8" style={MUTED}>
        core/ · config · database · cache · errors · lifecycle · pagination
      </text>

      {/* sdk + contracts */}
      <rect x="24" y="212" width="170" height="24" strokeWidth="1" style={CARD} />
      <text x="109" y="222" textAnchor="middle" fontSize="9" style={FG}>
        sdk/
      </text>
      <text x="109" y="232" textAnchor="middle" fontSize="7.5" style={MUTED}>
        contexto y registro para plugins
      </text>
      <rect x="206" y="212" width="170" height="24" strokeWidth="1" style={CARD} />
      <text x="291" y="222" textAnchor="middle" fontSize="9" style={FG}>
        contracts/
      </text>
      <text x="291" y="232" textAnchor="middle" fontSize="7.5" style={MUTED}>
        eventos · audit · plugins
      </text>
    </svg>
  );
}
