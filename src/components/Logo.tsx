import { Link } from "@tanstack/react-router";
import logo from "@/assets/tyc-logo.png.asset.json";

export function Logo({ light = false, size = 44 }: { light?: boolean; size?: number }) {
  const color = light ? "#FFFFFF" : "#080028";
  return (
    <Link to="/" className="flex items-center gap-3" aria-label="The Young Constituents, home">
      <img
        src={logo.url}
        alt=""
        width={size}
        height={size}
        className="shrink-0"
        style={{ width: size, height: size, objectFit: "contain" }}
      />
      <div className="leading-tight hidden sm:block">
        <div
          className="font-display font-bold text-[14px] tracking-tight uppercase"
          style={{ color, letterSpacing: "0.02em" }}
        >
          The Young Constituents
        </div>
        <div
          className="font-display text-[9px] uppercase tracking-[0.22em] mt-0.5"
          style={{ color: light ? "#FFA300" : "#249EBF" }}
        >
          Independent to Be Dependent
        </div>
      </div>
    </Link>
  );
}
