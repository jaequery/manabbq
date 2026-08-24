import { useId } from "react";

/* Every mark on this page is drawn here — geometric CSS/SVG ornament in the gold
   accent against dark ground. No photography, no icon font, no remote asset. */

const TAU = Math.PI * 2;

function polar(cx: number, cy: number, r: number, turn: number) {
  const a = turn * TAU - Math.PI / 2;
  return [cx + r * Math.cos(a), cy + r * Math.sin(a)] as const;
}

function wedge(cx: number, cy: number, rInner: number, rOuter: number, t0: number, t1: number) {
  const [ax, ay] = polar(cx, cy, rOuter, t0);
  const [bx, by] = polar(cx, cy, rOuter, t1);
  const [cx2, cy2] = polar(cx, cy, rInner, t1);
  const [dx, dy] = polar(cx, cy, rInner, t0);
  const f = (n: number) => n.toFixed(2);
  return [
    `M ${f(ax)} ${f(ay)}`,
    `A ${rOuter} ${rOuter} 0 0 1 ${f(bx)} ${f(by)}`,
    `L ${f(cx2)} ${f(cy2)}`,
    `A ${rInner} ${rInner} 0 0 0 ${f(dx)} ${f(dy)}`,
    "Z",
  ].join(" ");
}

type MarkProps = { className?: string };

/** The house mark: a radiating sunburst, used behind the hero and at small sizes. */
export function Sunburst({
  rays = 36,
  duty = 0.42,
  rInner = 12,
  rOuter = 100,
  className,
}: {
  rays?: number;
  duty?: number;
  rInner?: number;
  rOuter?: number;
  className?: string;
}) {
  const step = 1 / rays;
  const paths: string[] = [];
  for (let i = 0; i < rays; i += 1) {
    const t0 = i * step;
    paths.push(wedge(100, 100, rInner, rOuter, t0, t0 + step * duty));
  }
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true" focusable="false">
      <title>Sunburst</title>
      {paths.map((d) => (
        <path key={d} d={d} fill="currentColor" />
      ))}
    </svg>
  );
}

/** Concentric hairline rings that sit under the hero sunburst. */
export function Rings({ className }: MarkProps) {
  const radii = [58, 74, 92];
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true" focusable="false">
      <title>Rings</title>
      {radii.map((r) => (
        <circle key={r} cx="100" cy="100" r={r} fill="none" stroke="currentColor" strokeWidth="1" />
      ))}
    </svg>
  );
}

/** Navigation monogram — an "O" set inside a small sunburst. */
export function Monogram({ className }: MarkProps) {
  const rays = 20;
  const step = 1 / rays;
  const paths: string[] = [];
  for (let i = 0; i < rays; i += 1) {
    paths.push(wedge(100, 100, 56, 92, i * step, i * step + step * 0.34));
  }
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true" focusable="false">
      <title>The Orpheum Room monogram</title>
      {paths.map((d) => (
        <path key={d} d={d} fill="currentColor" />
      ))}
      <circle cx="100" cy="100" r="46" fill="none" stroke="currentColor" strokeWidth="4" />
      <text
        x="100"
        y="101"
        textAnchor="middle"
        dominantBaseline="central"
        fill="currentColor"
        fontFamily="Playfair Display, Georgia, serif"
        fontSize="46"
        letterSpacing="1"
      >
        OR
      </text>
    </svg>
  );
}

/** Stepped pyramid arch — the deco ziggurat, drawn as an open outline. */
export function SteppedArch({ className }: MarkProps) {
  return (
    <svg viewBox="0 0 120 160" className={className} aria-hidden="true" focusable="false">
      <title>Stepped arch</title>
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 156V64h16V44h16V26h28v18h16v20h16v92" />
        <path d="M22 156V74h14V56h48v18h14v82" />
        <path d="M40 156V86h40v70" />
        <path d="M60 12v14" />
        <path d="M48 156h24" />
      </g>
    </svg>
  );
}

/** Small corner flourish for the menu cards — a quarter sunburst struck from the
    top-right corner and fanning down and left across the card. */
export function CornerFlourish({ className }: MarkProps) {
  const rays = 7;
  const span = 0.25;
  const paths: string[] = [];
  for (let i = 0; i < rays; i += 1) {
    const t = 0.5 + (i / rays) * span;
    paths.push(wedge(40, 0, 9, 38, t, t + span / (rays * 2.6)));
  }
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true" focusable="false">
      <title>Corner flourish</title>
      {paths.map((d) => (
        <path key={d} d={d} fill="currentColor" />
      ))}
    </svg>
  );
}

/** Deco quotation mark — two stepped bars rather than a typographic glyph. */
export function DecoQuote({ className }: MarkProps) {
  return (
    <svg viewBox="0 0 48 36" className={className} aria-hidden="true" focusable="false">
      <title>Quotation mark</title>
      <g fill="currentColor">
        <path d="M0 0h8v20H0zM10 0h8v14h-8zM0 22h18v6H0z" />
        <path d="M28 0h8v20h-8zM38 0h8v14h-8zM28 22h18v6H28z" />
      </g>
    </svg>
  );
}

/* ---------------------------------------------------------------------------
   Pattern tiles. Each owns a React-generated id so the same tile can appear
   more than once without colliding in the SVG id namespace.
   --------------------------------------------------------------------------- */

export function ChevronPattern({ className }: MarkProps) {
  const id = useId().replace(/:/g, "");
  return (
    <svg className={className} aria-hidden="true" focusable="false" preserveAspectRatio="none">
      <title>Chevron pattern</title>
      <defs>
        <pattern id={id} width="28" height="24" patternUnits="userSpaceOnUse">
          <path
            d="M-2 18 14 4 30 18M-2 30 14 16 30 30M-2 6 14 -8 30 6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

export function FlutedPattern({ className, gap = 14 }: MarkProps & { gap?: number }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg className={className} aria-hidden="true" focusable="false" preserveAspectRatio="none">
      <title>Fluted lines</title>
      <defs>
        <pattern id={id} width={gap} height="100%" patternUnits="userSpaceOnUse">
          <path d={`M${gap / 2} 0V4000`} fill="none" stroke="currentColor" strokeWidth="1.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

/** Fluted arch tile — an arch on two hairline rings, with flutes rising inside
    it. Each flute stops just short of the inner curve, so the fan reads as one
    piece of joinery rather than a row of loose sticks. */
export function FlutedArch({ className }: MarkProps) {
  const CX = 84;
  const SPRING = 98;
  const R = 54;
  const flutes: { x: number; top: number }[] = [];
  for (let x = 46; x <= 126; x += 16) {
    const dx = x - CX;
    flutes.push({ x, top: +(SPRING - Math.sqrt(R * R - dx * dx) + 9).toFixed(1) });
  }
  return (
    <svg viewBox="0 0 168 200" className={className} aria-hidden="true" focusable="false">
      <title>Fluted arch</title>
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 196V96a72 72 0 0 1 144 0v100" />
        <path d="M30 196v-98a54 54 0 0 1 108 0v98" />
        {flutes.map((f) => (
          <path key={f.x} d={`M${f.x} 196V${f.top}`} />
        ))}
        <path d="M4 196h160" />
      </g>
    </svg>
  );
}

/** Stylised line-art city block with a single gold pin over the venue. */
export function CityBlock({ className }: MarkProps) {
  return (
    <svg viewBox="0 0 400 260" className={className} role="img">
      <title>The block around Marquee Row, with the room marked</title>
      <g fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.55">
        <path d="M0 96h400M0 178h400M118 0v260M282 0v260" />
      </g>
      <g fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.4">
        <path d="M14 14h86v66H14zM136 14h60v66h-60zM212 14h56v66h-56zM300 14h86v66h-86z" />
        <path d="M14 112h86v50H14zM300 112h86v50h-86zM136 112h132v50H136z" />
        <path d="M14 194h86v52H14zM136 194h60v52h-60zM212 194h56v52h-56zM300 194h86v52h-86z" />
      </g>
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M136 112h132v50H136z" />
        <path d="M150 162v-30h18v30M182 162v-30h18v30M214 162v-30h18v30M246 162v-30h8" />
      </g>
      <g transform="translate(202 92)">
        <path
          d="M0 34c0 0 16-16 16-24A16 16 0 1 0-16 10c0 8 16 24 16 24Z"
          fill="currentColor"
          stroke="none"
        />
        <circle cx="0" cy="10" r="5.5" fill="var(--surface)" />
      </g>
    </svg>
  );
}

/** Symmetrical deco bracket flanking the private-events banner: three rules of
    descending length, a stepped pyramid pointing inward, and a single dot. */
export function BannerOrnament({ className }: MarkProps) {
  return (
    <svg viewBox="0 0 60 120" className={className} aria-hidden="true" focusable="false">
      <title>Deco bracket</title>
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M57 4v112M49 16v88M41 28v64" />
        <path d="M33 60H23" />
      </g>
      <path d="M41 44 27 60l14 16z" fill="currentColor" opacity="0.55" />
      <circle cx="14" cy="60" r="3.5" fill="currentColor" />
    </svg>
  );
}
