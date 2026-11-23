/**
 * A row of fir trees on rolling hills, echoing the crest. Used as the edge
 * between sections. Purely decorative.
 */
export function TreeLine({ className = "" }: { className?: string }) {
  const trees = [
    [40, 70, 0.8],
    [95, 40, 1.15],
    [150, 62, 0.9],
    [210, 30, 1.3],
    [265, 55, 1],
    [330, 72, 0.75],
    [395, 45, 1.1],
    [470, 66, 0.85],
    [540, 36, 1.25],
    [610, 60, 0.95],
    [690, 74, 0.7],
    [760, 42, 1.15],
    [835, 64, 0.9],
    [905, 34, 1.3],
    [975, 58, 1],
    [1045, 70, 0.8],
    [1110, 46, 1.1],
    [1175, 66, 0.85],
  ] as const;

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1200 160"
      preserveAspectRatio="none"
      className={`block h-auto w-full ${className}`}
    >
      {trees.map(([x, y, s]) => (
        <path
          key={x}
          transform={`translate(${x} ${y}) scale(${s})`}
          d="M0 -40 L9 -24 L5 -24 L14 -8 L8 -8 L18 10 L-18 10 L-8 -8 L-14 -8 L-5 -24 L-9 -24 Z"
        />
      ))}
      <path d="M0 110 C 160 60, 320 60, 470 98 S 760 140, 900 92 S 1120 60, 1200 84 L1200 160 L0 160 Z" />
    </svg>
  );
}
