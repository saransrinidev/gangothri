/**
 * Hand-built SVG illustrations in a Kerala temple-art style.
 * `tone="dark"` draws maroon/gold lines for cream backgrounds;
 * `tone="light"` draws gold/ivory lines for maroon backgrounds.
 */
import type { ArtKey } from "@/lib/services";

const C = {
  maroon: "#521618",
  maroonDeep: "#3b1012",
  gold: "#b8893b",
  goldLight: "#e3c98d",
  ivory: "#fbf6ea",
  cream: "#f2e6cc",
  flame: "#e0892f",
  flameCore: "#f6d27a",
};

type Tone = "dark" | "light";
type ArtProps = { className?: string; tone?: Tone; title?: string };

function palette(tone: Tone = "dark") {
  return tone === "light"
    ? { ink: C.goldLight, accent: C.gold, soft: "rgba(227,201,141,0.14)", paper: C.maroonDeep }
    : { ink: C.maroon, accent: C.gold, soft: "rgba(184,137,59,0.16)", paper: C.ivory };
}

const r2 = (n: number) => Math.round(n * 100) / 100;
const polar = (cx: number, cy: number, r: number, deg: number) => {
  const a = ((deg - 90) * Math.PI) / 180;
  return [r2(cx + r * Math.cos(a)), r2(cy + r * Math.sin(a))] as const;
};

function Svg({ viewBox, className, title, children }: { viewBox: string; className?: string; title?: string; children: React.ReactNode }) {
  return (
    <svg viewBox={viewBox} className={className} role={title ? "img" : undefined} aria-hidden={title ? undefined : true} fill="none">
      {title && <title>{title}</title>}
      {children}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Kerala (South Indian) square Rashi Chakra                           */
/* ------------------------------------------------------------------ */
export function KeralaChart({ className, tone = "dark", title }: ArtProps) {
  const p = palette(tone);
  // Malayalam graha abbreviations placed decoratively
  const marks: [number, number, string][] = [
    [32, 38, "ഗു"],
    [122, 38, "ല"],
    [167, 83, "ച"],
    [167, 128, "ര ബു"],
    [77, 172, "ശു"],
    [32, 128, "മ"],
    [122, 172, "കു"],
    [32, 83, "രാ"],
    [167, 172, "കേ"],
  ];
  return (
    <Svg viewBox="0 0 200 200" className={className} title={title}>
      <rect x="10" y="10" width="180" height="180" fill={p.soft} stroke={p.ink} strokeWidth="2" />
      <g stroke={p.ink} strokeWidth="1.4">
        <path d="M10 55H190M10 145H190M55 10V190M145 10V190" />
        <path d="M100 10V55M100 145V190M10 100H55M145 100H190" />
      </g>
      <rect x="55" y="55" width="90" height="90" fill={p.paper} fillOpacity={tone === "light" ? 0.35 : 0.7} />
      <g stroke={p.accent} strokeWidth="1.1">
        <path d="M100 66L134 100L100 134L66 100Z" />
        <path d="M100 78L122 100L100 122L78 100Z" fill={p.soft} />
      </g>
      <circle cx="100" cy="100" r="5" fill={p.accent} />
      <g fill={p.ink} fontSize="11" fontFamily="var(--font-manjari), sans-serif" textAnchor="middle">
        {marks.map(([x, y, t]) => (
          <text key={`${x}-${y}`} x={x} y={y}>{t}</text>
        ))}
      </g>
      <path d="M122 44l-6 6" stroke={p.accent} strokeWidth="1.4" />
    </Svg>
  );
}

/* ------------------------------------------------------------------ */
/* Zodiac / Nakshatra wheel                                             */
/* ------------------------------------------------------------------ */
export function ZodiacWheel({ className, tone = "dark", title }: ArtProps) {
  const p = palette(tone);
  const signs = Array.from({ length: 12 }, (_, i) => i * 30);
  const stars = Array.from({ length: 27 }, (_, i) => (i * 360) / 27);
  return (
    <Svg viewBox="0 0 200 200" className={className} title={title}>
      <circle cx="100" cy="100" r="92" stroke={p.ink} strokeWidth="1.6" />
      <circle cx="100" cy="100" r="84" stroke={p.ink} strokeWidth="0.8" strokeDasharray="1.5 3.5" />
      <circle cx="100" cy="100" r="74" stroke={p.ink} strokeWidth="1.2" fill={p.soft} />
      <circle cx="100" cy="100" r="46" stroke={p.ink} strokeWidth="1.2" />
      {stars.map((d) => {
        const [x1, y1] = polar(100, 100, 86, d);
        const [x2, y2] = polar(100, 100, 92, d);
        return <line key={d} x1={x1} y1={y1} x2={x2} y2={y2} stroke={p.accent} strokeWidth="1.4" />;
      })}
      {signs.map((d) => {
        const [x1, y1] = polar(100, 100, 46, d);
        const [x2, y2] = polar(100, 100, 74, d);
        const [cx, cy] = polar(100, 100, 60, d + 15);
        return (
          <g key={d}>
            <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={p.ink} strokeWidth="1" />
            <circle cx={cx} cy={cy} r={d % 60 === 0 ? 3.2 : 2} fill={d % 60 === 0 ? p.accent : p.ink} />
          </g>
        );
      })}
      {Array.from({ length: 8 }, (_, i) => {
        const [x1, y1] = polar(100, 100, 22, i * 45);
        const [x2, y2] = polar(100, 100, 36, i * 45);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={p.accent} strokeWidth="2" strokeLinecap="round" />;
      })}
      <circle cx="100" cy="100" r="15" fill={p.accent} />
      <circle cx="100" cy="100" r="9" fill={tone === "light" ? C.maroonDeep : C.ivory} />
    </Svg>
  );
}

/* ------------------------------------------------------------------ */
/* Kerala temple (Sreekovil) with palms, Kodimaram and Deepasthambham    */
/* ------------------------------------------------------------------ */
export function TempleScene({ className, tone = "light", title }: ArtProps) {
  const p = palette(tone);
  const ink = p.ink;
  const tiers = [0, 1, 2, 3, 4, 5, 6, 7];
  return (
    <Svg viewBox="0 0 600 320" className={className} title={title}>
      {/* ground */}
      <path d="M0 290H600" stroke={ink} strokeWidth="1.5" strokeOpacity=".5" />

      {/* palms */}
      <Palm x={46} h={210} ink={ink} lean={-1} />
      <Palm x={560} h={230} ink={ink} lean={1} />
      <Palm x={520} h={170} ink={ink} lean={-1} />

      {/* Deepasthambham — tiered lamp tower */}
      <g fill={ink}>
        <rect x="128" y="150" width="6" height="140" />
        {tiers.map((t) => (
          <ellipse key={t} cx="131" cy={278 - t * 16} rx={20 - t * 1.8} ry="3" />
        ))}
        <path d="M131 128c-5 6-5 14 0 18 5-4 5-12 0-18z" />
        {tiers.map((t) => (
          <circle key={`f${t}`} cx={131 - (20 - t * 1.8)} cy={274 - t * 16} r="1.6" fill={C.flameCore} />
        ))}
        {tiers.map((t) => (
          <circle key={`g${t}`} cx={131 + (20 - t * 1.8)} cy={274 - t * 16} r="1.6" fill={C.flameCore} />
        ))}
      </g>

      {/* Sreekovil */}
      <g>
        {/* platform */}
        <path d="M170 290h260v-14H170z" fill={ink} />
        <path d="M184 276h232v-12H184z" fill={ink} fillOpacity=".8" />
        {/* walls with pillars */}
        <rect x="204" y="200" width="192" height="64" fill={ink} fillOpacity=".35" />
        {[214, 244, 274, 326, 356, 386].map((x) => (
          <rect key={x} x={x - 3} y="200" width="6" height="64" fill={ink} />
        ))}
        <path d="M284 264v-42a16 16 0 0132 0v42z" fill={ink} />
        <path d="M296 264v-32h8v32z" fill={C.flameCore} fillOpacity=".9" />
        {/* lower sloping roof with upturned eaves */}
        <path d="M150 206 Q160 196 176 194 L232 150 H368 L424 194 Q440 196 450 206 Q300 196 150 206Z" fill={ink} />
        {/* roof ridges */}
        <g stroke={tone === "light" ? C.maroonDeep : C.ivory} strokeOpacity=".35" strokeWidth="1">
          {[200, 230, 260, 290, 320, 350, 380, 400].map((x, i) => (
            <path key={x} d={`M${x} 200 L${252 + i * 14} 152`} />
          ))}
        </g>
        {/* upper roof */}
        <rect x="244" y="138" width="112" height="14" fill={ink} fillOpacity=".55" />
        <path d="M218 142 Q226 136 236 134 L270 104 H330 L364 134 Q374 136 382 142 Q300 134 218 142Z" fill={ink} />
        {/* top roof & Thazhikakkudam (finial) */}
        <path d="M252 104 L286 80 H314 L348 104Z" fill={ink} />
        <path d="M300 80v-12" stroke={ink} strokeWidth="3" />
        <path d="M290 68h20l-4-6h-12z" fill={p.accent} />
        <circle cx="300" cy="56" r="6" fill={p.accent} />
        <path d="M300 50v-10" stroke={p.accent} strokeWidth="2" />
      </g>

      {/* Kodimaram — flag staff */}
      <g fill={ink}>
        <rect x="466" y="70" width="6" height="210" />
        {Array.from({ length: 12 }, (_, i) => (
          <rect key={i} x="461" y={90 + i * 15} width="16" height="3" rx="1.5" />
        ))}
        <path d="M455 290h28l-4-10h-20z" />
        <path d="M469 70l-12-10h24z" fill={p.accent} />
        <path d="M469 60v-14" stroke={p.accent} strokeWidth="2" />
        <path d="M462 70c-8 2-14 8-16 14M476 70c8 2 14 8 16 14" stroke={ink} strokeWidth="2" fill="none" />
      </g>
    </Svg>
  );
}

function Palm({ x, h, ink, lean }: { x: number; h: number; ink: string; lean: 1 | -1 }) {
  const top = 290 - h;
  const tx = x + lean * 18;
  const fronds = [-70, -40, -12, 14, 42, 72, 105, -105];
  return (
    <g>
      <path d={`M${x} 290 Q${x + lean * 4} ${top + h / 2} ${tx} ${top}`} stroke={ink} strokeWidth="6" strokeLinecap="round" />
      {fronds.map((a) => {
        const [ex, ey] = polar(tx, top, 52, a);
        const [mx, my] = polar(tx, top - 14, 30, a);
        return <path key={a} d={`M${tx} ${top} Q${mx} ${my} ${ex} ${ey + 14}`} stroke={ink} strokeWidth="3.2" strokeLinecap="round" />;
      })}
      <circle cx={tx - 3} cy={top + 6} r="4" fill={ink} />
      <circle cx={tx + 4} cy={top + 7} r="4" fill={ink} />
    </g>
  );
}

/* ------------------------------------------------------------------ */
/* Nilavilakku — traditional brass lamp                                 */
/* ------------------------------------------------------------------ */
export function Nilavilakku({ className, tone = "dark", title }: ArtProps) {
  const p = palette(tone);
  const brass = p.accent;
  const line = p.ink;
  return (
    <Svg viewBox="0 0 200 240" className={className} title={title}>
      <ellipse cx="100" cy="226" rx="62" ry="7" fill={p.soft} />
      <path d="M42 224 Q100 176 158 224Z" fill={brass} stroke={line} strokeWidth="1.4" />
      <path d="M62 210 Q100 186 138 210" stroke={line} strokeWidth="1" strokeOpacity=".5" />
      <rect x="94" y="96" width="12" height="96" fill={brass} stroke={line} strokeWidth="1.2" />
      {[120, 148, 176].map((y) => (
        <ellipse key={y} cx="100" cy={y} rx="13" ry="5" fill={brass} stroke={line} strokeWidth="1.2" />
      ))}
      <path d="M48 86 Q100 128 152 86Z" fill={brass} stroke={line} strokeWidth="1.4" />
      <ellipse cx="100" cy="86" rx="52" ry="7" fill={brass} stroke={line} strokeWidth="1.4" />
      <path d="M100 79V50" stroke={line} strokeWidth="3" />
      <path d="M100 30c-9 6-11 16-6 24h12c5-8 3-18-6-24z" fill={brass} stroke={line} strokeWidth="1.2" />
      <circle cx="100" cy="24" r="4" fill={brass} stroke={line} strokeWidth="1" />
      {[56, 76, 124, 144].map((x) => (
        <g key={x} className="animate-flicker" style={{ transformBox: "fill-box", transformOrigin: "50% 100%" }}>
          <path d={`M${x} 82 q-8 -10 0 -26 q8 16 0 26z`} fill={C.flame} />
          <path d={`M${x} 82 q-4 -6 0 -14 q4 8 0 14z`} fill={C.flameCore} />
        </g>
      ))}
    </Svg>
  );
}

/* ------------------------------------------------------------------ */
/* Thamboola — betel leaves and areca nut                               */
/* ------------------------------------------------------------------ */
export function BetelLeaves({ className, tone = "dark", title }: ArtProps) {
  const p = palette(tone);
  const leafFill = tone === "light" ? "rgba(227,201,141,0.22)" : "rgba(184,137,59,0.22)";
  const leaf = (
    <g>
      <path d="M0 0 C-34 -10 -46 -58 0 -110 C46 -58 34 -10 0 0Z" fill={leafFill} stroke={p.ink} strokeWidth="1.6" />
      <path d="M0 4 V-106" stroke={p.ink} strokeWidth="1.2" />
      {[-20, -40, -60, -80].map((y, i) => (
        <g key={y} stroke={p.ink} strokeWidth="0.9" strokeOpacity=".7">
          <path d={`M0 ${y + 8} Q${-14 + i * 2} ${y} ${-24 + i * 4} ${y - 14}`} />
          <path d={`M0 ${y + 8} Q${14 - i * 2} ${y} ${24 - i * 4} ${y - 14}`} />
        </g>
      ))}
    </g>
  );
  return (
    <Svg viewBox="0 0 200 200" className={className} title={title}>
      <ellipse cx="100" cy="178" rx="70" ry="8" fill={p.soft} />
      {[-34, 34, 0].map((a) => (
        <g key={a} transform={`translate(100 168) rotate(${a})`}>{leaf}</g>
      ))}
      {[
        [62, 172],
        [140, 172],
        [150, 160],
      ].map(([x, y]) => (
        <g key={x}>
          <circle cx={x} cy={y} r="9" fill={p.accent} stroke={p.ink} strokeWidth="1.2" />
          <path d={`M${x - 5} ${y - 2} q5 -5 10 0`} stroke={p.ink} strokeWidth=".8" />
        </g>
      ))}
    </Svg>
  );
}

/* ------------------------------------------------------------------ */
/* Cowrie shells on a Prasna chakra                                      */
/* ------------------------------------------------------------------ */
function Cowrie({ x, y, rot, p }: { x: number; y: number; rot: number; p: ReturnType<typeof palette> }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot})`}>
      <ellipse rx="10" ry="14" fill={p.paper === C.ivory ? C.ivory : C.cream} stroke={p.ink} strokeWidth="1.3" />
      <path d="M0 -10 Q3 0 0 10" stroke={p.ink} strokeWidth="1.2" />
      {[-6, -2, 2, 6].map((t) => (
        <path key={t} d={`M-1 ${t}h-3M1 ${t}h3`} stroke={p.ink} strokeWidth=".8" />
      ))}
    </g>
  );
}

export function CowrieChakra({ className, tone = "dark", title }: ArtProps) {
  const p = palette(tone);
  const shells: [number, number, number][] = [
    [100, 60, 10], [138, 82, -30], [142, 124, 40], [104, 146, -12], [62, 126, 25], [58, 84, -40], [100, 103, 70],
  ];
  return (
    <Svg viewBox="0 0 200 200" className={className} title={title}>
      <circle cx="100" cy="100" r="90" stroke={p.ink} strokeWidth="1.4" fill={p.soft} />
      <circle cx="100" cy="100" r="78" stroke={p.accent} strokeWidth="1" strokeDasharray="2 4" />
      {Array.from({ length: 12 }, (_, i) => {
        const [x1, y1] = polar(100, 100, 78, i * 30);
        const [x2, y2] = polar(100, 100, 90, i * 30);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={p.ink} strokeWidth="1.2" />;
      })}
      {shells.map(([x, y, r]) => (
        <Cowrie key={`${x}${y}`} x={x} y={y} rot={r} p={p} />
      ))}
    </Svg>
  );
}

/* ------------------------------------------------------------------ */
/* Ashtamangalyam — Valkannadi mirror, Kindi, lamp, rice and flowers     */
/* ------------------------------------------------------------------ */
export function Ashtamangalyam({ className, tone = "dark", title }: ArtProps) {
  const p = palette(tone);
  const brass = p.accent;
  const line = p.ink;
  return (
    <Svg viewBox="0 0 240 200" className={className} title={title}>
      {/* plank (peetam) */}
      <rect x="14" y="170" width="212" height="14" rx="3" fill={p.soft} stroke={line} strokeWidth="1.3" />
      {/* Valkannadi */}
      <path d="M120 22c-8 0-12 6-12 10 0-6-8-8-12-4 6 0 8 6 8 10" stroke={line} strokeWidth="1.2" fill="none" />
      <path d="M120 14c-6 6-6 12 0 18 6-6 6-12 0-18z" fill={brass} stroke={line} strokeWidth="1.2" />
      <ellipse cx="120" cy="76" rx="36" ry="42" fill={brass} stroke={line} strokeWidth="1.5" />
      <ellipse cx="120" cy="76" rx="28" ry="34" fill={tone === "light" ? "#f4e7c4" : C.ivory} stroke={line} strokeWidth="1" />
      <path d="M104 60c4-8 12-12 20-12" stroke={brass} strokeWidth="2" strokeLinecap="round" />
      <path d="M114 118h12v28h-12z" fill={brass} stroke={line} strokeWidth="1.2" />
      <path d="M98 170c0-14 10-24 22-24s22 10 22 24z" fill={brass} stroke={line} strokeWidth="1.3" />
      {/* Kindi */}
      <g>
        <path d="M44 118h20l-3 10h-14z" fill={brass} stroke={line} strokeWidth="1.2" />
        <circle cx="54" cy="146" r="22" fill={brass} stroke={line} strokeWidth="1.3" />
        <path d="M74 140 L92 124 L94 128 L78 148" fill={brass} stroke={line} strokeWidth="1.2" />
        <path d="M42 168h24" stroke={line} strokeWidth="2" />
      </g>
      {/* small lamp */}
      <g>
        <path d="M168 168 Q186 150 204 168Z" fill={brass} stroke={line} strokeWidth="1.2" />
        <rect x="183" y="128" width="6" height="30" fill={brass} stroke={line} strokeWidth="1" />
        <path d="M168 126 Q186 140 204 126Z" fill={brass} stroke={line} strokeWidth="1.2" />
        <g className="animate-flicker" style={{ transformBox: "fill-box", transformOrigin: "50% 100%" }}>
          <path d="M176 124q-5-7 0-16q5 9 0 16z" fill={C.flame} />
          <path d="M196 124q-5-7 0-16q5 9 0 16z" fill={C.flame} />
        </g>
      </g>
      {/* rice and flowers */}
      <path d="M150 170c0-8 6-12 10-12s8 4 8 12z" fill={tone === "light" ? C.ivory : C.cream} stroke={line} strokeWidth="1" />
      {[26, 36, 86, 150].map((x, i) => (
        <g key={x} transform={`translate(${x} ${i === 3 ? 154 : 162})`}>
          {[0, 72, 144, 216, 288].map((a) => {
            const [cx, cy] = polar(0, 0, 3.5, a);
            return <circle key={a} cx={cx} cy={cy} r="2.6" fill={i % 2 ? brass : C.flame} />;
          })}
          <circle r="1.6" fill={C.flameCore} />
        </g>
      ))}
    </Svg>
  );
}

/* ------------------------------------------------------------------ */
/* Porutham — two interlinked charts with a jasmine garland              */
/* ------------------------------------------------------------------ */
export function PoruthamArt({ className, tone = "dark", title }: ArtProps) {
  const p = palette(tone);
  const grid = (cx: number) => (
    <g stroke={p.ink} strokeWidth=".9" strokeOpacity=".7">
      <rect x={cx - 26} y={84} width="52" height="52" />
      <path d={`M${cx - 26} 97h52M${cx - 26} 123h52M${cx - 13} 84v52M${cx + 13} 84v52`} />
    </g>
  );
  return (
    <Svg viewBox="0 0 220 200" className={className} title={title}>
      <circle cx="80" cy="110" r="52" stroke={p.ink} strokeWidth="1.6" fill={p.soft} />
      <circle cx="140" cy="110" r="52" stroke={p.ink} strokeWidth="1.6" fill={p.soft} />
      {grid(72)}
      {grid(148)}
      <path d="M110 66 Q120 110 110 154 Q100 110 110 66z" fill={p.accent} fillOpacity=".55" />
      {/* garland */}
      <path d="M28 70 Q110 0 192 70" stroke={p.ink} strokeWidth="1" />
      {Array.from({ length: 15 }, (_, i) => {
        const t = i / 14;
        const x = (1 - t) * (1 - t) * 28 + 2 * (1 - t) * t * 110 + t * t * 192;
        const y = (1 - t) * (1 - t) * 70 + 2 * (1 - t) * t * 0 + t * t * 70;
        return <circle key={i} cx={r2(x)} cy={r2(y)} r={i % 3 === 0 ? 4 : 3} fill={i % 3 === 0 ? C.flame : tone === "light" ? C.ivory : "#fffaf0"} stroke={p.ink} strokeWidth=".6" />;
      })}
      {/* thali pendant */}
      <path d="M110 166c-7 6-7 14 0 20 7-6 7-14 0-20z" fill={p.accent} stroke={p.ink} strokeWidth="1" />
      <path d="M110 162v4" stroke={p.ink} strokeWidth="1.2" />
    </Svg>
  );
}

/* ------------------------------------------------------------------ */
/* Muhurtham — Nazhika dial with sun and moon                            */
/* ------------------------------------------------------------------ */
export function MuhurthamDial({ className, tone = "dark", title }: ArtProps) {
  const p = palette(tone);
  return (
    <Svg viewBox="0 0 200 200" className={className} title={title}>
      {/* sun */}
      <circle cx="160" cy="42" r="16" fill={p.accent} />
      {Array.from({ length: 12 }, (_, i) => {
        const [x1, y1] = polar(160, 42, 21, i * 30);
        const [x2, y2] = polar(160, 42, 28, i * 30);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={p.accent} strokeWidth="2" strokeLinecap="round" />;
      })}
      {/* moon */}
      <path d="M44 22a18 18 0 100 36 14 14 0 110-36z" fill={p.ink} fillOpacity=".85" />
      {/* dial */}
      <circle cx="100" cy="116" r="72" fill={p.soft} stroke={p.ink} strokeWidth="1.6" />
      <circle cx="100" cy="116" r="60" stroke={p.ink} strokeWidth=".8" />
      {Array.from({ length: 60 }, (_, i) => {
        const big = i % 5 === 0;
        const [x1, y1] = polar(100, 116, big ? 50 : 55, i * 6);
        const [x2, y2] = polar(100, 116, 60, i * 6);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={big ? p.accent : p.ink} strokeWidth={big ? 2 : 0.8} />;
      })}
      {(() => {
        const [hx, hy] = polar(100, 116, 30, 300);
        const [mx, my] = polar(100, 116, 44, 40);
        return (
          <g strokeLinecap="round">
            <line x1="100" y1="116" x2={hx} y2={hy} stroke={p.ink} strokeWidth="3.5" />
            <line x1="100" y1="116" x2={mx} y2={my} stroke={p.accent} strokeWidth="2.5" />
          </g>
        );
      })()}
      <circle cx="100" cy="116" r="6" fill={p.accent} stroke={p.ink} strokeWidth="1" />
    </Svg>
  );
}

/* ------------------------------------------------------------------ */
/* Palm-leaf (Thaliyola) horoscope with Narayam stylus                    */
/* ------------------------------------------------------------------ */
export function PalmLeafManuscript({ className, tone = "dark", title }: ArtProps) {
  const p = palette(tone);
  const leafFill = tone === "light" ? "#e9d6a6" : "#ead8ac";
  const leaves = [
    { y: 150, r: -2 },
    { y: 120, r: 1.5 },
    { y: 90, r: -1 },
    { y: 60, r: 2 },
  ];
  return (
    <Svg viewBox="0 0 220 200" className={className} title={title}>
      <ellipse cx="110" cy="182" rx="90" ry="7" fill={p.soft} />
      {leaves.map(({ y, r }, i) => (
        <g key={y} transform={`rotate(${r} 110 ${y})`}>
          <rect x="18" y={y} width="184" height="24" rx="12" fill={leafFill} stroke={p.ink} strokeWidth="1.3" />
          <circle cx="58" cy={y + 12} r="2.6" fill={p.ink} />
          <circle cx="162" cy={y + 12} r="2.6" fill={p.ink} />
          {[0, 1].map((row) => (
            <path
              key={row}
              d={`M${70 + (i % 2) * 4} ${y + 8 + row * 8} ${Array.from({ length: 9 }, (_, k) => `h${6 + ((k + i + row) % 3) * 2} m3 0`).join(" ")}`}
              stroke={p.ink}
              strokeOpacity=".55"
              strokeWidth="1.1"
            />
          ))}
        </g>
      ))}
      {/* thread */}
      <path d="M58 72 V172 M162 72 V172" stroke={C.flame} strokeWidth="1.4" strokeDasharray="0" strokeOpacity=".8" />
      <path d="M58 172 q-12 14 -26 10 M58 172 q-6 16 4 22" stroke={C.flame} strokeWidth="1.4" />
      {/* Narayam stylus */}
      <g transform="rotate(-28 170 40)">
        <rect x="120" y="36" width="92" height="7" rx="3.5" fill={p.accent} stroke={p.ink} strokeWidth="1" />
        <path d="M120 36 L100 39.5 L120 43z" fill={p.ink} />
        <circle cx="206" cy="39.5" r="5" fill={p.accent} stroke={p.ink} strokeWidth="1" />
      </g>
    </Svg>
  );
}

/* ------------------------------------------------------------------ */
/* Portrait — real photo if provided, otherwise an arched placeholder     */
/* ------------------------------------------------------------------ */
export function PortraitPlaceholder({ className, tone = "dark" }: ArtProps) {
  const p = palette(tone);
  return (
    <Svg viewBox="0 0 200 250" className={className} title="Astrologer portrait placeholder">
      <path d="M10 250V100a90 90 0 01180 0v150z" fill={tone === "light" ? "#6a1d1f" : C.cream} />
      <path d="M22 250V102a78 78 0 01156 0v148" stroke={p.accent} strokeWidth="1.2" strokeDasharray="3 4" />
      {/* silhouette */}
      <circle cx="100" cy="118" r="32" fill={p.ink} fillOpacity=".85" />
      <path d="M36 250c4-48 30-80 64-80s60 32 64 80z" fill={p.ink} fillOpacity=".85" />
      {/* melmundu / shawl */}
      <path d="M58 190 L132 250 H112 L50 202z" fill={p.accent} fillOpacity=".85" />
      {/* sandal mark */}
      <path d="M94 100h12" stroke={p.accent} strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="100" cy="104" r="2" fill={C.flame} />
    </Svg>
  );
}

/* ------------------------------------------------------------------ */
const map: Record<ArtKey, (p: ArtProps) => React.ReactElement> = {
  chart: KeralaChart,
  wheel: ZodiacWheel,
  temple: TempleScene,
  lamp: Nilavilakku,
  betel: BetelLeaves,
  cowrie: CowrieChakra,
  ashtamangala: Ashtamangalyam,
  porutham: PoruthamArt,
  muhurtham: MuhurthamDial,
  palmleaf: PalmLeafManuscript,
};

export function Art({ name, ...rest }: ArtProps & { name: ArtKey }) {
  const Comp = map[name];
  return <Comp {...rest} />;
}
