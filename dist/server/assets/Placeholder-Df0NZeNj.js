import { jsx, jsxs } from "react/jsx-runtime";
import { ImageIcon } from "lucide-react";
function Placeholder({ label, ratio = "16/9", className = "" }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: `relative w-full overflow-hidden ${className}`,
      style: {
        aspectRatio: ratio,
        background: "repeating-linear-gradient(135deg, #E0E5F4 0 14px, #d4d9ec 14px 28px)",
        border: "1px solid var(--border)"
      },
      role: "img",
      "aria-label": label,
      children: /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-center text-center px-6", children: [
        /* @__PURE__ */ jsx(ImageIcon, { size: 32, color: "#080028", strokeWidth: 1.4 }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 font-display text-[11px] uppercase tracking-[0.18em] text-[#080028]", children: label })
      ] })
    }
  );
}
export {
  Placeholder as P
};
