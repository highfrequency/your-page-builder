/**
 * Pixel-art style inline SVG icons on a 20x20 grid.
 * Filled rects only, no strokes. Max 2 colors: ink + one accent.
 */
type IconProps = { className?: string; size?: number };

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 20 20",
  shapeRendering: "crispEdges" as const,
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": true,
});

const INK = "currentColor";

export function FlameIcon({ className, size = 20 }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <g fill="var(--color-flame)">
        <rect x="9" y="1" width="2" height="3" />
        <rect x="7" y="3" width="2" height="3" />
        <rect x="11" y="4" width="2" height="3" />
        <rect x="5" y="6" width="2" height="6" />
        <rect x="13" y="7" width="2" height="5" />
        <rect x="7" y="6" width="6" height="10" />
        <rect x="5" y="12" width="2" height="4" />
        <rect x="13" y="12" width="2" height="4" />
        <rect x="7" y="16" width="6" height="2" />
      </g>
      <g fill="var(--color-paper)">
        <rect x="9" y="10" width="2" height="5" />
        <rect x="8" y="12" width="4" height="3" />
      </g>
    </svg>
  );
}

export function LightningIcon({ className, size = 20 }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <g fill="var(--color-yellow)">
        <rect x="10" y="1" width="5" height="2" />
        <rect x="8" y="3" width="6" height="2" />
        <rect x="7" y="5" width="6" height="2" />
        <rect x="6" y="7" width="9" height="2" />
        <rect x="5" y="9" width="8" height="2" />
        <rect x="6" y="11" width="5" height="2" />
        <rect x="5" y="13" width="5" height="2" />
        <rect x="4" y="15" width="4" height="3" />
      </g>
      <g fill={INK}>
        <rect x="10" y="8" width="5" height="1" />
        <rect x="5" y="10" width="5" height="1" />
      </g>
    </svg>
  );
}

export function SplitMaskIcon({ className, size = 20 }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <g fill={INK}>
        <rect x="2" y="4" width="7" height="12" />
        <rect x="11" y="4" width="7" height="12" />
      </g>
      <g fill="var(--color-paper)">
        <rect x="4" y="7" width="2" height="2" />
        <rect x="13" y="7" width="2" height="2" />
        <rect x="4" y="12" width="3" height="1" />
        <rect x="13" y="12" width="3" height="1" />
      </g>
      <rect x="9" y="2" width="2" height="16" fill="var(--color-flame)" />
    </svg>
  );
}

export function CrystalBallIcon({ className, size = 20 }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <g fill={INK}>
        <rect x="7" y="2" width="6" height="2" />
        <rect x="5" y="4" width="10" height="2" />
        <rect x="4" y="6" width="12" height="6" />
        <rect x="5" y="12" width="10" height="2" />
        <rect x="4" y="15" width="12" height="3" />
      </g>
      <g fill="var(--color-blue)">
        <rect x="6" y="7" width="2" height="2" />
        <rect x="9" y="9" width="2" height="2" />
        <rect x="11" y="6" width="1" height="1" />
      </g>
    </svg>
  );
}

export function MagnifierIcon({ className, size = 20 }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <g fill={INK}>
        <rect x="5" y="2" width="8" height="2" />
        <rect x="3" y="4" width="2" height="8" />
        <rect x="13" y="4" width="2" height="8" />
        <rect x="5" y="12" width="8" height="2" />
        <rect x="12" y="13" width="2" height="2" />
        <rect x="14" y="15" width="3" height="3" />
      </g>
      <rect x="6" y="5" width="3" height="3" fill="var(--color-yellow)" />
    </svg>
  );
}

export function CircuitBrainIcon({ className, size = 20 }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <g fill={INK}>
        <rect x="4" y="3" width="12" height="2" />
        <rect x="2" y="5" width="2" height="9" />
        <rect x="16" y="5" width="2" height="9" />
        <rect x="4" y="14" width="12" height="2" />
      </g>
      <g fill="var(--color-flame)">
        <rect x="6" y="7" width="3" height="2" />
        <rect x="11" y="7" width="3" height="2" />
        <rect x="9" y="9" width="2" height="2" />
        <rect x="6" y="11" width="8" height="2" />
      </g>
    </svg>
  );
}

export function MapIcon({ className, size = 20 }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <g fill={INK}>
        <rect x="2" y="4" width="16" height="12" />
      </g>
      <g fill="var(--color-paper)">
        <rect x="4" y="6" width="4" height="8" />
        <rect x="12" y="6" width="4" height="8" />
      </g>
      <g fill="var(--color-blue)">
        <rect x="9" y="7" width="2" height="4" />
        <rect x="8" y="11" width="4" height="2" />
      </g>
    </svg>
  );
}

export function HandshakeIcon({ className, size = 20 }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <g fill={INK}>
        <rect x="1" y="8" width="6" height="4" />
        <rect x="13" y="8" width="6" height="4" />
        <rect x="6" y="6" width="8" height="8" />
      </g>
      <g fill="var(--color-green)">
        <rect x="8" y="8" width="4" height="2" />
        <rect x="7" y="10" width="6" height="2" />
      </g>
    </svg>
  );
}

export function BookIcon({ className, size = 20 }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <g fill={INK}>
        <rect x="2" y="3" width="16" height="14" />
      </g>
      <g fill="var(--color-paper)">
        <rect x="4" y="5" width="5" height="10" />
        <rect x="11" y="5" width="5" height="10" />
      </g>
      <g fill="var(--color-blue)">
        <rect x="5" y="7" width="3" height="1" />
        <rect x="5" y="10" width="3" height="1" />
        <rect x="12" y="7" width="3" height="1" />
        <rect x="12" y="10" width="3" height="1" />
      </g>
    </svg>
  );
}

export function SpeechIcon({ className, size = 20 }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <g fill={INK}>
        <rect x="2" y="3" width="16" height="10" />
        <rect x="5" y="13" width="4" height="4" />
      </g>
      <g fill="var(--color-yellow)">
        <rect x="5" y="7" width="2" height="2" />
        <rect x="9" y="7" width="2" height="2" />
        <rect x="13" y="7" width="2" height="2" />
      </g>
    </svg>
  );
}

export function BatteryIcon({ className, size = 20 }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <g fill={INK}>
        <rect x="1" y="6" width="15" height="8" />
        <rect x="17" y="8" width="2" height="4" />
      </g>
      <g fill="var(--color-green)">
        <rect x="3" y="8" width="3" height="4" />
        <rect x="7" y="8" width="3" height="4" />
      </g>
    </svg>
  );
}

export function DiceIcon({ className, size = 20 }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <rect x="2" y="2" width="16" height="16" fill={INK} />
      <g fill="var(--color-paper)">
        <rect x="5" y="5" width="3" height="3" />
        <rect x="12" y="5" width="3" height="3" />
        <rect x="5" y="12" width="3" height="3" />
        <rect x="12" y="12" width="3" height="3" />
      </g>
      <rect x="8" y="8" width="4" height="4" fill="var(--color-flame)" />
    </svg>
  );
}

export function RadarIcon({ className, size = 20 }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <g fill={INK}>
        <rect x="8" y="2" width="4" height="2" />
        <rect x="4" y="4" width="4" height="2" />
        <rect x="12" y="4" width="4" height="2" />
        <rect x="2" y="6" width="2" height="6" />
        <rect x="16" y="6" width="2" height="6" />
        <rect x="4" y="12" width="12" height="2" />
        <rect x="8" y="14" width="4" height="4" />
      </g>
      <g fill="var(--color-flame)">
        <rect x="9" y="6" width="2" height="4" />
        <rect x="11" y="8" width="2" height="2" />
      </g>
    </svg>
  );
}

export function ChestIcon({ className, size = 20 }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <g fill={INK}>
        <rect x="2" y="5" width="16" height="4" />
        <rect x="2" y="10" width="16" height="7" />
      </g>
      <g fill="var(--color-yellow)">
        <rect x="8" y="5" width="4" height="4" />
        <rect x="8" y="10" width="4" height="4" />
      </g>
    </svg>
  );
}

export function HeartsIcon({ className, size = 20 }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <g fill="var(--color-flame)">
        <rect x="3" y="5" width="3" height="2" />
        <rect x="8" y="5" width="3" height="2" />
        <rect x="2" y="7" width="10" height="3" />
        <rect x="3" y="10" width="8" height="2" />
        <rect x="5" y="12" width="4" height="2" />
        <rect x="6" y="14" width="2" height="1" />
      </g>
      <g fill={INK}>
        <rect x="12" y="9" width="2" height="2" />
        <rect x="16" y="9" width="2" height="2" />
        <rect x="11" y="11" width="8" height="2" />
        <rect x="13" y="13" width="4" height="2" />
        <rect x="14" y="15" width="2" height="1" />
      </g>
    </svg>
  );
}

export function ScrollIcon({ className, size = 20 }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <g fill={INK}>
        <rect x="3" y="2" width="14" height="3" />
        <rect x="4" y="5" width="12" height="10" />
        <rect x="3" y="15" width="14" height="3" />
      </g>
      <g fill="var(--color-paper)">
        <rect x="6" y="7" width="8" height="1" />
        <rect x="6" y="10" width="8" height="1" />
        <rect x="6" y="12" width="5" height="1" />
      </g>
    </svg>
  );
}

export function StarIcon({ className, size = 20 }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <g fill="var(--color-yellow)">
        <rect x="9" y="2" width="2" height="4" />
        <rect x="7" y="6" width="6" height="2" />
        <rect x="2" y="8" width="16" height="3" />
        <rect x="5" y="11" width="10" height="2" />
        <rect x="3" y="13" width="4" height="4" />
        <rect x="13" y="13" width="4" height="4" />
      </g>
    </svg>
  );
}

export function CheckIcon({ className, size = 20 }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <g fill="var(--color-green)">
        <rect x="2" y="10" width="3" height="3" />
        <rect x="5" y="13" width="3" height="3" />
        <rect x="8" y="10" width="3" height="3" />
        <rect x="11" y="7" width="3" height="3" />
        <rect x="14" y="4" width="3" height="3" />
      </g>
    </svg>
  );
}

export function AvatarIcon({ className, size = 20 }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <g fill={INK}>
        <rect x="6" y="3" width="8" height="2" />
        <rect x="5" y="5" width="10" height="6" />
        <rect x="6" y="11" width="8" height="2" />
        <rect x="3" y="14" width="14" height="4" />
      </g>
      <g fill="var(--color-paper)">
        <rect x="7" y="7" width="2" height="2" />
        <rect x="11" y="7" width="2" height="2" />
      </g>
    </svg>
  );
}
