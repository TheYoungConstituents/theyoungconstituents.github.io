import { ImageIcon } from "lucide-react";

interface Props {
  label: string;
  ratio?: string; // e.g. "16/9", "2/3"
  className?: string;
}

export function Placeholder({ label, ratio = "16/9", className = "" }: Props) {
  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      style={{
        aspectRatio: ratio,
        background:
          "repeating-linear-gradient(135deg, #E0E5F4 0 14px, #d4d9ec 14px 28px)",
        border: "1px solid var(--border)",
      }}
      role="img"
      aria-label={label}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <ImageIcon size={32} color="#080028" strokeWidth={1.4} />
        <p className="mt-3 font-display text-[11px] uppercase tracking-[0.18em] text-[#080028]">
          {label}
        </p>
      </div>
    </div>
  );
}
