const CARD = { fill: "hsl(var(--card))", stroke: "hsl(var(--border))" };
const MUTED = { fill: "hsl(var(--muted-foreground))" };
const FG = { fill: "hsl(var(--foreground))" };
const PRIMARY = "hsl(var(--primary))";

export default function CoreDiagram() {
  return (
    <svg
      viewBox="0 0 400 168"
      className="mt-3 w-full"
      role="img"
      aria-label="Arquitectura systutor-core: apps sobre kernel, plugins debajo"
    >
      {/* apps layer */}
      <rect x="80" y="4" width="240" height="26" strokeWidth="1" style={CARD} />
      <text x="200" y="21" textAnchor="middle" fontSize="11" style={MUTED}>
        apps/api · FastAPI host
      </text>

      <line x1="200" y1="30" x2="200" y2="46" stroke={PRIMARY} strokeWidth="1.5" />
      <polygon points="196,44 204,44 200,52" fill={PRIMARY} />

      {/* kernel */}
      <rect x="24" y="54" width="352" height="58" strokeWidth="1.5" style={CARD} />
      <text x="40" y="72" fontSize="11" fontWeight="700" fill={PRIMARY}>
        systutor-core
      </text>
      {["auth", "rbac", "tenants", "audit", "events", "plugins"].map(
        (m, i) => (
          <g key={m}>
            <rect
              x={36 + i * 56}
              y="82"
              width="50"
              height="20"
              strokeWidth="1"
              style={CARD}
            />
            <text
              x={61 + i * 56}
              y="95"
              textAnchor="middle"
              fontSize="9"
              style={MUTED}
            >
              {m}
            </text>
          </g>
        ),
      )}

      {/* three arrows down */}
      {[70, 200, 330].map((x) => (
        <g key={x}>
          <line x1={x} y1="112" x2={x} y2="126" stroke={PRIMARY} strokeWidth="1.5" />
          <polygon points={`${x - 4},124 ${x + 4},124 ${x},132`} fill={PRIMARY} />
        </g>
      ))}

      {/* plugins */}
      {[
        { x: 16, name: "logistics", sub: "42 permisos" },
        { x: 148, name: "crm", sub: "requires []" },
        { x: 280, name: "stock", sub: "ledger" },
      ].map((p) => (
        <g key={p.name}>
          <rect x={p.x} y="134" width="104" height="28" strokeWidth="1" style={CARD} />
          <text x={p.x + 52} y="146" textAnchor="middle" fontSize="10" style={FG}>
            {p.name}
          </text>
          <text x={p.x + 52} y="157" textAnchor="middle" fontSize="8" style={MUTED}>
            {p.sub}
          </text>
        </g>
      ))}
    </svg>
  );
}
