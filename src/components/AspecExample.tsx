const FG = { fill: "hsl(var(--foreground))" };
const PRIMARY = "hsl(var(--primary))";

const ROWS = [
  ["WHY", "leer el legacy sin tocar SQL Server"],
  ["SCOPE", "solo scaffold + GET /api/health"],
  ["OUT OF SCOPE", "datos · auth · endpoints (0002+)"],
  ["VERIFY", "curl /api/health → 200 ok"],
];

export default function AspecExample() {
  return (
    <svg
      viewBox="0 0 400 92"
      className="mt-3 w-full"
      role="img"
      aria-label="Ejemplo de una A.SPEC real del proyecto"
    >
      <rect
        x="1"
        y="1"
        width="398"
        height="90"
        strokeWidth="1"
        style={{ fill: "transparent", stroke: "hsl(var(--border))" }}
      />
      <rect x="1" y="1" width="3" height="90" fill={PRIMARY} />

      <text x="14" y="20" fontSize="10" fontWeight="700" fill={PRIMARY}>
        A.SPEC API-REST-CON-0001 · puente al legacy VB
      </text>

      {ROWS.map(([k, v], i) => (
        <g key={k}>
          <text x="14" y={38 + i * 15} fontSize="8.5" fontWeight="600" fill={PRIMARY}>
            {k}
          </text>
          <text x="98" y={38 + i * 15} fontSize="8.5" style={FG}>
            {v}
          </text>
        </g>
      ))}
    </svg>
  );
}
