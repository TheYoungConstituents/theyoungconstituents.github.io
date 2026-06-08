import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
const values = ["Independence before influence.", "Authority through accountability.", "Structure as the path to scale.", "Youth-led, youth-governed, no exceptions.", "Non-partisan in posture, decisive in action."];
function About() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("section", { style: {
      background: "#080028",
      color: "#fff",
      marginTop: "-78px",
      paddingTop: "78px"
    }, className: "relative", children: /* @__PURE__ */ jsxs("div", { className: "container-tyc pt-20 pb-28 lg:pt-28 lg:pb-36", children: [
      /* @__PURE__ */ jsx("p", { className: "eyebrow", style: {
        color: "#FFA300"
      }, children: /* @__PURE__ */ jsx("span", { style: {
        color: "#FFA300"
      }, children: "About TYC" }) }),
      /* @__PURE__ */ jsxs("h1", { className: "text-white mt-8 display-hero max-w-4xl", children: [
        "We Don't Wait",
        /* @__PURE__ */ jsx("br", {}),
        "to ",
        /* @__PURE__ */ jsx("span", { style: {
          color: "#FFA300"
        }, children: "Lead." })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-10 text-[17px] lg:text-[19px] max-w-2xl opacity-80 leading-relaxed", children: "The Young Constituents was built on a single belief, that young people don't lack ideas or ambition. They lack the governing authority to act on them. We exist to change that." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section", style: {
      background: "#E0E5F4"
    }, children: /* @__PURE__ */ jsxs("div", { className: "container-tyc grid lg:grid-cols-12 gap-10", children: [
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-2", children: /* @__PURE__ */ jsx("p", { className: "eyebrow", children: "Preamble" }) }),
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-10", children: /* @__PURE__ */ jsxs("div", { className: "relative pl-6 lg:pl-10", children: [
        /* @__PURE__ */ jsx("span", { "aria-hidden": true, "data-draw-line": true, className: "absolute left-0 top-0 w-[4px]", style: {
          background: "#FFA300",
          height: "0%"
        } }),
        /* @__PURE__ */ jsx("blockquote", { className: "font-display font-semibold text-[#080028]", "data-scrub-text": true, style: {
          fontSize: "clamp(28px, 4.2vw, 52px)",
          lineHeight: 1.15,
          letterSpacing: "-0.015em"
        }, children: "We hold that young people do not lack ideas or ambition; they lack the governing authority to act upon them." }),
        /* @__PURE__ */ jsx("p", { className: "mt-10 text-[16px] text-[#4a5078] max-w-2xl leading-relaxed", children: "TYC's founding principle is independent thought, interdependent action, that to govern together we must first learn to think for ourselves. We are independent in posture and decision-making, but interdependent in how we move the movement forward." })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section", children: /* @__PURE__ */ jsxs("div", { className: "container-tyc grid lg:grid-cols-12 gap-14", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-4", children: [
        /* @__PURE__ */ jsx("p", { className: "eyebrow", children: "Mission" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-5 display-mega", children: "Our Mission." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-8", children: /* @__PURE__ */ jsx("p", { className: "text-[17px] sm:text-[19px] text-[#4a5078] leading-[1.6]", children: "The Young Constituents establishes a parallel governance infrastructure in which young people learn by governing, running parliaments, managing organizations, debating policy, and holding one another accountable, so that upon entering public service, they are already leaders, organizers, and operational executives." }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section", style: {
      background: "#080028",
      color: "#fff"
    }, children: /* @__PURE__ */ jsxs("div", { className: "container-tyc", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-2xl", children: [
        /* @__PURE__ */ jsx("p", { className: "eyebrow", style: {
          color: "#FFA300"
        }, children: /* @__PURE__ */ jsx("span", { style: {
          color: "#FFA300"
        }, children: "Values" }) }),
        /* @__PURE__ */ jsx("h2", { className: "text-white mt-4 display-mega", children: "What We Stand For." })
      ] }),
      /* @__PURE__ */ jsx("ul", { className: "mt-16 divide-y", style: {
        borderColor: "rgba(255,255,255,0.12)",
        borderTop: "1px solid rgba(255,255,255,0.12)"
      }, children: values.map((v, i) => /* @__PURE__ */ jsxs("li", { className: "py-7 grid grid-cols-12 gap-6 items-baseline", children: [
        /* @__PURE__ */ jsx("span", { className: "col-span-2 sm:col-span-1 font-display text-[12px]", style: {
          color: "#FFA300"
        }, children: String(i + 1).padStart(2, "0") }),
        /* @__PURE__ */ jsx("p", { className: "col-span-10 sm:col-span-11 text-white font-display font-semibold text-[22px] sm:text-[32px] leading-tight", children: v })
      ] }, v)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section", children: /* @__PURE__ */ jsxs("div", { className: "container-tyc", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-2xl", children: [
        /* @__PURE__ */ jsx("p", { className: "eyebrow", children: "Structure" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-4 display-mega", children: "How TYC Is Built." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid lg:grid-cols-3 gap-6 mt-14", children: [{
        tag: "Level 01",
        t: "National",
        b: "Strategy, partnerships, and constitutional authority. The C-Suite reports to the national parliament."
      }, {
        tag: "Level 02",
        t: "Provincial",
        b: "Six provincial chapters with their own Model Parliament and provincial summit cycles."
      }, {
        tag: "Level 03",
        t: "Local",
        b: "Two streams: Municipal Divisions (real parliamentary chambers, governed 20/80) and School Chapters (civic education and local advocacy)."
      }].map((s) => /* @__PURE__ */ jsxs("article", { className: "card-tyc p-8", children: [
        /* @__PURE__ */ jsx("p", { className: "font-display text-[11px] uppercase tracking-[0.18em] text-[#249EBF]", children: s.tag }),
        /* @__PURE__ */ jsx("h3", { className: "mt-4 text-[28px] leading-tight", children: s.t }),
        /* @__PURE__ */ jsx("span", { className: "rule mt-5" }),
        /* @__PURE__ */ jsx("p", { className: "mt-5 text-[14px] text-[#4a5078] leading-relaxed", children: s.b })
      ] }, s.t)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section", style: {
      background: "#E0E5F4"
    }, children: /* @__PURE__ */ jsxs("div", { className: "container-tyc grid lg:grid-cols-12 gap-10", children: [
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-3", children: /* @__PURE__ */ jsx("p", { className: "eyebrow", children: "Founding" }) }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-9", children: [
        /* @__PURE__ */ jsx("h2", { className: "display-mega", children: "A Constitution Built by Its First Generation." }),
        /* @__PURE__ */ jsx("p", { className: "mt-8 text-[16px] sm:text-[18px] text-[#4a5078] leading-relaxed max-w-3xl", children: "The Young Constituents was founded by Xavier Davis and adopted on May 2, 2026. It was built on the belief that young people govern best when given real stakes and real responsibility, not symbolic seats at adult tables. Six months from inception to a national chapter operating across six provinces." }),
        /* @__PURE__ */ jsx(Link, { to: "/join", className: "btn btn-primary mt-10", children: "Become a Member" })
      ] })
    ] }) })
  ] });
}
export {
  About as component
};
