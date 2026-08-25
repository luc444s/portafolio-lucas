const MUTED = { fill: "hsl(var(--muted-foreground))" };
const FG = { fill: "hsl(var(--foreground))" };
const PRIMARY = "hsl(var(--primary))";

const ROWS = [
  ["WHY", "leer el legacy sin tocar SQL Server"],
  ["SCOPE", "solo scaffold + GET /api/health"],
  ["OUT OF SCOPE", "datos · auth · endpoints (0002+)"],
  ["CONTRACT", "listener en :8080 · health responde 200 json"],
  ["INVARIANTS", "ERP WinForms y datos SQL Server intactos"],
  ["ROLLBACK", "quitar el proyecto del .sln · cero efecto en BD"],
  ["VERIFY", "build limpio + curl /api/health → 200 ok"],
];

export default function AspecExample() {
  return (
    <svg
      viewBox="0 0 400 96"
      className="my-3 w-full"
      role="img"
      aria-label="Ejemplo de una A.SPEC real del proyecto"
    >
      <rect
        x="1"
        y="1"
        width="398"
        height="158"
        strokeWidth="1"
        style={{ fill: "transparent", stroke: "hsl(var(--border))" }}
      />
      <rect x="1" y="1" width="3" height="158" fill={PRIMARY} />

      <text x="14" y="20" fontSize="10" fontWeight="700" fill={PRIMARY}>
        A.SPEC API-REST-CON-0001 · puente al legacy VB
      </text>

      {ROWS.map(([k, v], i) => (
        <g key={k}>
          <text x="14" y={38 + i * 16} fontSize="8.5" fontWeight="600" fill={PRIMARY}>
            {k}
          </text>
          <text x="98" y={38 + i * 16} fontSize="8.5" style={FG}>
            {v}
          </text>
        </g>
      ))}

      <line x1="1" y1="142" x2="399" y2="142" stroke="hsl(var(--border))" strokeWidth="1" />
      {["DEFINE", "BOUND", "CONTRACT", "IMPLEMENT", "VERIFY", "INTEGRATE"].map(
        (step, i) => (
          <g key={step}>
            <text
              x={45 + i * 62}
              y={152}
              fontSize="7"
              fontWeight="600"
              textAnchor="middle"
              style={i === 4 ? { fill: PRIMARY } : MUTED}
            >
              {step}
            </text>
            {i < 5 ? (
              <text x={76 + i * 62} y={152} fontSize="7" style={MUTED}>
                →
              </text>
            ) : null}
          </g>
        ),
      )}
    </svg>
  );
}
