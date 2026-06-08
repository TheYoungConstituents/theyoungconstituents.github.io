import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { P as Placeholder } from "./Placeholder-Df0NZeNj.js";
const levels = [{
  n: "01",
  t: "School Chapter",
  b: "Where it begins. Civic education, model parliament, and local advocacy inside your school."
}, {
  n: "02",
  t: "Municipal Division",
  b: "A real parliamentary chamber. Governed by the 20/80 model. Your riding, your issues, your accountability."
}, {
  n: "03",
  t: "Provincial Chapter",
  b: "Six provinces. One competitive stage. Model Parliament, provincial summits, and cross-division leadership."
}, {
  n: "04",
  t: "National Level",
  b: "Strategy, partnerships, and constitutional authority. The national parliament where provinces hold the C-Suite accountable."
}];
const provinces = ["Ontario", "Quebec", "Alberta", "Nova Scotia", "New Brunswick", "Saskatchewan"];
const csuite = [{
  name: "Amayas Bhatia",
  role: "Chief Operating Officer"
}, {
  name: "Tima Karimi",
  role: "Chief Communications Officer"
}, {
  name: "Jaslin Chana",
  role: "Chief Development Officer"
}, {
  name: "Samil Karaduman",
  role: "Chief Information Officer"
}];
function Home() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("section", { "data-hero-shrink": true, "data-bg": "#080028", style: {
      marginTop: "-78px",
      paddingTop: 0
    }, className: "relative", children: /* @__PURE__ */ jsxs("div", { "data-hero-inner": true, style: {
      background: "#080028",
      color: "#fff",
      paddingTop: 78,
      transformOrigin: "center top",
      willChange: "transform, opacity"
    }, className: "relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { "data-hero-watermark": true, "aria-hidden": true, className: "absolute inset-0 pointer-events-none flex items-center justify-center", style: {
        opacity: 0.05,
        fontSize: "60vw",
        color: "#FFA300",
        fontFamily: "var(--font-display)",
        fontWeight: 900,
        lineHeight: 1
      }, children: "∞" }),
      /* @__PURE__ */ jsxs("div", { "data-hero-content": true, className: "container-tyc relative pt-20 pb-0 lg:pt-28", children: [
        /* @__PURE__ */ jsx("p", { className: "eyebrow", style: {
          color: "#FFA300"
        }, children: /* @__PURE__ */ jsx("span", { style: {
          color: "#FFA300"
        }, children: "National · Est. 2026" }) }),
        /* @__PURE__ */ jsxs("h1", { className: "text-white mt-8 display-hero max-w-5xl", "data-stagger-words": true, children: [
          "Youth Governance.",
          /* @__PURE__ */ jsx("br", {}),
          "Real Stakes.",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { style: {
            color: "#FFA300"
          }, children: "One Movement." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-10 text-[17px] lg:text-[19px] max-w-2xl opacity-80 leading-relaxed", children: "The Young Constituents is building Canada's next generation of civic leaders through parallel governance, real parliaments, real accountability, real impact." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-12 flex flex-col sm:flex-row gap-4 sm:items-start", children: [
          /* @__PURE__ */ jsxs(Link, { to: "/join", className: "btn btn-primary", children: [
            "Become a Member ",
            /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
          ] }),
          /* @__PURE__ */ jsx(Link, { to: "/about", className: "btn btn-secondary", children: "Learn About TYC" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-24 pb-16 grid grid-cols-3 max-w-2xl", style: {
          borderTop: "1px solid rgba(255,255,255,0.15)"
        }, children: [{
          n: 100,
          suffix: "+",
          l: "Members"
        }, {
          n: 6,
          suffix: "",
          l: "Provincial Chapters"
        }, {
          n: 1,
          suffix: "",
          l: "Movement"
        }].map((s, i) => /* @__PURE__ */ jsxs("div", { className: "pt-7", style: {
          borderRight: i < 2 ? "1px solid #FFA300" : void 0,
          paddingLeft: i > 0 ? "1.5rem" : 0
        }, children: [
          /* @__PURE__ */ jsxs("div", { className: "font-display text-[36px] sm:text-[44px] font-bold", style: {
            color: "#FFA300"
          }, "data-counter": s.n, "data-counter-suffix": s.suffix, children: [
            "0",
            s.suffix
          ] }),
          /* @__PURE__ */ jsx("div", { className: "text-[11px] uppercase tracking-[0.18em] opacity-75 mt-2", children: s.l })
        ] }, s.l)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section", "data-bg": "#E0E5F4", style: {
      background: "#E0E5F4"
    }, children: /* @__PURE__ */ jsxs("div", { className: "container-tyc text-center", children: [
      /* @__PURE__ */ jsx("p", { className: "eyebrow justify-center", children: "Our Statement" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-10 mx-auto max-w-5xl", "data-scrub-text": true, style: {
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: "clamp(48px, 8.5vw, 124px)",
        lineHeight: 0.95,
        letterSpacing: "-0.035em",
        color: "#080028"
      }, children: "Independent Thought, Interdependent Action." }),
      /* @__PURE__ */ jsx("p", { className: "mt-12 mx-auto max-w-2xl text-[16px] sm:text-[18px] text-[#4a5078] leading-relaxed", children: "We govern ourselves so we can govern together. TYC gives young Canadians aged 13 to 28 the authority, the structure, and the responsibility to lead, not someday, but now." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { "data-sticky-levels": true, "data-bg": "#080028", className: "relative overflow-hidden", style: {
      background: "#080028",
      color: "#fff",
      height: "100vh"
    }, children: /* @__PURE__ */ jsxs("div", { className: "container-tyc relative h-full flex flex-col justify-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-2xl", children: [
        /* @__PURE__ */ jsx("p", { className: "eyebrow", style: {
          color: "#FFA300"
        }, children: /* @__PURE__ */ jsx("span", { style: {
          color: "#FFA300"
        }, children: "The Structure" }) }),
        /* @__PURE__ */ jsx("h2", { className: "text-white mt-5 display-mega", children: "4 Levels. One Ambition." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "relative mt-12", style: {
        minHeight: 340
      }, children: levels.map((l) => /* @__PURE__ */ jsxs("article", { "data-level-slide": true, className: "absolute inset-0 p-8 lg:p-12 max-w-3xl", style: {
        background: "rgba(255,255,255,0.04)",
        borderLeft: "3px solid #FFA300",
        willChange: "transform, opacity"
      }, children: [
        /* @__PURE__ */ jsx("div", { className: "font-display font-bold text-[64px] lg:text-[88px] leading-none", style: {
          color: "#FFA300"
        }, children: l.n }),
        /* @__PURE__ */ jsx("h3", { className: "text-white mt-5 text-[32px] lg:text-[44px] leading-tight", children: l.t }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-[16px] lg:text-[19px] opacity-80 leading-relaxed max-w-xl", children: l.b })
      ] }, l.n)) }),
      /* @__PURE__ */ jsx("div", { className: "absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 flex flex-col gap-4", children: levels.map((l) => /* @__PURE__ */ jsx("span", { "data-level-dot": true, className: "block w-2 h-2 rounded-full", style: {
        background: "rgba(255,255,255,0.25)"
      } }, l.n)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section", "data-bg": "#E0E5F4", style: {
      background: "#E0E5F4"
    }, children: /* @__PURE__ */ jsxs("div", { className: "container-tyc grid lg:grid-cols-12 gap-10 items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7", children: [
        /* @__PURE__ */ jsx("p", { className: "eyebrow", children: "Live · Across Canada" }),
        /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx("span", { className: "font-display font-bold tabular-nums", "data-counter-scrub": "100", "data-counter-suffix": "+", style: {
          color: "#080028",
          fontSize: "clamp(80px, 14vw, 180px)",
          lineHeight: 1,
          letterSpacing: "-0.04em",
          display: "inline-block"
        }, children: "0+" }) }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 font-display font-semibold text-[22px] sm:text-[28px] text-[#080028]", children: "Members and Growing" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5", children: [
        /* @__PURE__ */ jsx("p", { className: "text-[16px] text-[#4a5078] leading-relaxed max-w-md", children: "Across 6 provinces. Ages 13 to 28. Building a parallel democracy from the ground up." }),
        /* @__PURE__ */ jsxs(Link, { to: "/join", className: "btn btn-primary mt-8", children: [
          "Become a Member ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { "data-horizontal-pin": true, "data-bg": "#FFFFFF", className: "relative hidden md:block", style: {
      height: "100vh",
      background: "#FFFFFF"
    }, children: /* @__PURE__ */ jsxs("div", { className: "h-full flex items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "container-tyc-left pl-6 lg:pl-12 pr-0 w-[40vw] flex-shrink-0", children: [
        /* @__PURE__ */ jsx("p", { className: "eyebrow", children: "Coast to Coast" }),
        /* @__PURE__ */ jsxs("h2", { className: "mt-4 display-mega", children: [
          "Active",
          /* @__PURE__ */ jsx("br", {}),
          "Across Canada."
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-[15px] text-[#4a5078] max-w-xs", children: "Six provincial chapters. One unified movement." }),
        /* @__PURE__ */ jsx("div", { className: "mt-10 h-[3px] w-64 bg-[#E0E5F4] relative overflow-hidden", children: /* @__PURE__ */ jsx("span", { "data-horizontal-progress": true, className: "block h-full", style: {
          background: "#FFA300",
          width: "0%"
        } }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "overflow-hidden flex-1", children: /* @__PURE__ */ jsx("div", { "data-horizontal-track": true, className: "flex gap-6 will-change-transform", style: {
        paddingRight: 120
      }, children: provinces.map((p, i) => /* @__PURE__ */ jsxs("article", { className: "flex-shrink-0 p-10 flex flex-col justify-between", style: {
        width: "32vw",
        height: "60vh",
        background: i % 2 === 0 ? "#080028" : "#E0E5F4",
        color: i % 2 === 0 ? "#fff" : "#080028"
      }, children: [
        /* @__PURE__ */ jsxs("div", { className: "font-display text-[10px] uppercase tracking-[0.22em]", style: {
          color: "#FFA300"
        }, children: [
          "Chapter 0",
          i + 1
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: `text-[48px] lg:text-[64px] leading-none ${i % 2 === 0 ? "text-white" : ""}`, children: p }),
          /* @__PURE__ */ jsx("span", { className: "font-display text-[11px] uppercase tracking-[0.18em] mt-6 inline-block opacity-70", children: "Chapter Active" })
        ] })
      ] }, p)) }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section md:hidden", "data-bg": "#FFFFFF", style: {
      background: "#FFFFFF"
    }, children: /* @__PURE__ */ jsxs("div", { className: "container-tyc", children: [
      /* @__PURE__ */ jsx("p", { className: "eyebrow", children: "Coast to Coast" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-4 display-mega", children: "Active Across Canada." }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-4 mt-10", children: provinces.map((p) => /* @__PURE__ */ jsxs("article", { className: "card-tyc p-6 flex items-center justify-between", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-[20px]", children: p }),
        /* @__PURE__ */ jsx("span", { className: "font-display text-[10px] uppercase tracking-[0.18em] py-1.5 px-3", style: {
          background: "#E0E5F4",
          color: "#249EBF"
        }, children: "Active" })
      ] }, p)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section relative overflow-hidden", "data-bg": "#080028", style: {
      background: "#080028",
      color: "#fff"
    }, children: /* @__PURE__ */ jsxs("div", { className: "container-tyc relative", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-2xl", children: [
        /* @__PURE__ */ jsx("p", { className: "eyebrow", style: {
          color: "#FFA300"
        }, children: /* @__PURE__ */ jsx("span", { style: {
          color: "#FFA300"
        }, children: "Leadership" }) }),
        /* @__PURE__ */ jsx("h2", { className: "text-white mt-4 display-mega", children: "Led By Young Canadians." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-12 gap-10 mt-16 items-start", children: [
        /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5", children: [
          /* @__PURE__ */ jsx("div", { "data-portrait-zoom": true, children: /* @__PURE__ */ jsx(Placeholder, { label: "Xavier Davis · 400 × 600", ratio: "2/3" }) }),
          /* @__PURE__ */ jsxs("div", { className: "mt-6", children: [
            /* @__PURE__ */ jsx("p", { className: "font-display text-[11px] uppercase tracking-[0.18em]", style: {
              color: "#FFA300"
            }, children: "Founding Director & CEO" }),
            /* @__PURE__ */ jsx("h3", { className: "text-white mt-3 text-[30px] leading-tight", children: "Xavier Davis" }),
            /* @__PURE__ */ jsx("span", { className: "block mt-4", style: {
              height: 2,
              width: 48,
              background: "#FFA300"
            } }),
            /* @__PURE__ */ jsx("p", { className: "mt-5 text-[15px] opacity-75 leading-relaxed max-w-md", children: "Founder of The Young Constituents. Architect of the parallel governance model and constitutional framework adopted May 2026." })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "lg:col-span-7 grid sm:grid-cols-2 gap-6", children: csuite.map((m) => /* @__PURE__ */ jsxs("article", { "data-card-depth": true, children: [
          /* @__PURE__ */ jsx("div", { "data-portrait-zoom": true, children: /* @__PURE__ */ jsx(Placeholder, { label: `${m.name} · 400 × 500`, ratio: "4/5" }) }),
          /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
            /* @__PURE__ */ jsx("h4", { className: "text-white text-[18px] leading-tight", children: m.name }),
            /* @__PURE__ */ jsx("span", { className: "block mt-3", style: {
              height: 2,
              width: 32,
              background: "#FFA300"
            } }),
            /* @__PURE__ */ jsx("p", { className: "mt-3 font-display text-[11px] uppercase tracking-[0.15em] opacity-70", children: m.role })
          ] })
        ] }, m.name)) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-16", children: /* @__PURE__ */ jsxs(Link, { to: "/team", className: "font-display text-[13px] uppercase tracking-[0.18em] inline-flex items-center gap-2 pb-1", style: {
        color: "#FFA300",
        borderBottom: "2px solid #FFA300"
      }, children: [
        "Meet the Full Team ",
        /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
      ] }) })
    ] }) })
  ] });
}
export {
  Home as component
};
