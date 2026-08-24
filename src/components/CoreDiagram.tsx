export default function CoreDiagram() {
  const box = "fill-[var(--card)] stroke-[var(--border)]";
  const label = "fill-[var(--muted-foreground)] font-mono";
  return (
    <svg
      viewBox="0 0 400 168"
      className="mt-3 w-full"
      role="img"
      aria-label="Arquitectura systutor-core: apps sobre kernel, plugins debajo"
    >
      {/* apps layer */}
      <rect x="80" y="4" width="240" height="26" strokeWidth="1" className={box} />
      <text x="200" y="21" textAnchor="middle" fontSize="11" className={label}>
        apps/api · FastAPI host
      </text>

      <line x1="200" y1="30" x2="200" y2="46" stroke="var(--primary)" strokeWidth="1.5" />
      <polygon points="196,44 204,44 200,52" fill="var(--primary)" />

      {/* kernel */}
      <rect x="24" y="54" width="352" height="58" strokeWidth="1.5" className={box} />
      <text x="40" y="72" fontSize="11" fontWeight="700" className="fill-[var(--primary)]">
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
              className={box}
            />
            <text x={61 + i * 56} y="95" textAnchor="middle" fontSize="9" className={label}>
              {m}
            </text>
          </g>
        ),
      )}

      {/* three arrows down */}
      {[70, 200, 330].map((x) => (
        <g key={x}>
          <line x1={x} y1="112" x2={x} y2="126" stroke="var(--primary)" strokeWidth="1.5" />
          <polygon points={`${x - 4},124 ${x + 4},124 ${x},132`} fill="var(--primary)" />
        </g>
      ))}

      {/* plugins */}
      {[
        { x: 16, name: "logistics", sub: "42 permisos" },
        { x: 148, name: "crm", sub: "requires []" },
        { x: 280, name: "stock", sub: "ledger" },
      ].map((p) => (
        <g key={p.name}>
          <rect x={p.x} y="134" width="104" height="28" strokeWidth="1" className={box} />
          <text x={p.x + 52} y="146" textAnchor="middle" fontSize="10" className="fill-[var(--foreground)]">
            {p.name}
          </text>
          <text x={p.x + 52} y="157" textAnchor="middle" fontSize="8" className={label}>
            {p.sub}
          </text>
        </g>
      ))}
    </svg>
  );
}
