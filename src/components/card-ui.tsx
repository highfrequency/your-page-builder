import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { FlameIcon } from "./pixel-icons";

export function Panel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("panel p-5 sm:p-6", className)}>{children}</div>;
}

export function BlockHeader({
  icon,
  title,
  badge,
}: {
  icon: ReactNode;
  title: string;
  badge?: string;
}) {
  return (
    <div className="mb-4 flex items-start justify-between gap-3">
      <div className="flex items-center gap-2.5">
        <span className="text-ink">{icon}</span>
        <h3 className="font-display text-base font-extrabold tracking-tight uppercase">
          {title}
        </h3>
      </div>
      {badge ? (
        <span className="font-mono text-[10px] font-semibold tracking-[0.12em] uppercase rounded-md border-2 border-ink px-2 py-0.5">
          {badge}
        </span>
      ) : null}
    </div>
  );
}

export function SectionTitle({
  index,
  title,
  id,
}: {
  index: string;
  title: string;
  id: string;
}) {
  return (
    <div id={id} className="scroll-mt-20 pt-2">
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs font-bold text-flame">{index}</span>
        <span className="h-0.5 flex-1 bg-ink/15" />
      </div>
      <h2 className="font-display mt-2 text-2xl font-black tracking-tight uppercase sm:text-3xl">
        {title}
      </h2>
    </div>
  );
}

/** 10-segment pixel-step bar. */
export function SegmentedBar({
  value,
  tone = "flame",
}: {
  value: number;
  tone?: "flame" | "ink" | "blue";
}) {
  const filled = Math.round((value / 100) * 10);
  const fill =
    tone === "flame" ? "bg-flame" : tone === "blue" ? "bg-blue" : "bg-ink";
  return (
    <div className="flex gap-[3px]" aria-hidden>
      {Array.from({ length: 10 }).map((_, i) => (
        <span
          key={i}
          className={cn(
            "h-3 flex-1 border-2 border-ink",
            i < filled ? fill : "bg-transparent",
          )}
        />
      ))}
    </div>
  );
}

export function StatRow({
  label,
  value,
  note,
  icon,
  tone = "flame",
}: {
  label: string;
  value: number;
  note?: string;
  icon?: ReactNode;
  tone?: "flame" | "ink" | "blue";
}) {
  return (
    <div className="py-2.5">
      <div className="mb-1.5 flex items-baseline gap-2">
        {icon ? <span className="translate-y-0.5">{icon}</span> : null}
        <span className="text-sm font-semibold">{label}</span>
        <span className="font-mono ml-auto text-sm font-bold">{value}</span>
      </div>
      <SegmentedBar value={value} tone={tone} />
      {note ? (
        <p className="mt-1.5 text-sm leading-snug text-ink/65">{note}</p>
      ) : null}
    </div>
  );
}

export function FlameBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-ink bg-paper px-2.5 py-1">
      <FlameIcon size={16} />
      <span className="font-mono text-xs font-bold text-ink">{children}</span>
    </span>
  );
}

export function Marker({ children }: { children: ReactNode }) {
  return <span className="marker-hl">{children}</span>;
}

export function Tag({
  children,
  tone = "ink",
}: {
  children: ReactNode;
  tone?: "ink" | "blue";
}) {
  return (
    <span
      className={cn(
        "font-mono inline-flex items-center rounded-md border-2 px-2 py-1 text-[11px] font-medium",
        tone === "blue" ? "border-blue text-blue" : "border-ink/25 text-ink/80",
      )}
    >
      {children}
    </span>
  );
}

export function Quote({ children }: { children: ReactNode }) {
  return (
    <p className="border-l-4 border-flame pl-3.5 text-[17px] leading-relaxed font-medium">
      {children}
    </p>
  );
}

export function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1.5">
      {items.map((it) => (
        <li key={it} className="flex gap-2 text-sm leading-snug">
          <span className="mt-[7px] h-1.5 w-1.5 shrink-0 bg-ink" />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

export function ColumnPair({
  left,
  right,
}: {
  left: { title: string; items: string[] };
  right: { title: string; items: string[] };
}) {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {[left, right].map((col) => (
        <div key={col.title}>
          <p className="font-mono mb-2 text-[11px] font-bold tracking-[0.14em] uppercase text-ink/55">
            {col.title}
          </p>
          <List items={col.items} />
        </div>
      ))}
    </div>
  );
}
