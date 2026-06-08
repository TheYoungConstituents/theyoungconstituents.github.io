import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { P as Placeholder } from "./Placeholder-Df0NZeNj.js";
import { ArrowRight } from "lucide-react";
const featured = {
  d: "12",
  m: "Jun",
  year: "2026",
  title: "First Quarterly National Meeting",
  location: "Virtual · All Provinces",
  desc: "The inaugural quarterly meeting of the National Parliament. Provincial Presidents and the C-Suite convene to report, debate, and set the agenda for Q3 2026."
};
const posts = [{
  d: "02",
  m: "May",
  year: "2026",
  kind: "Announcement",
  title: "TYC Launches in Six Provinces",
  excerpt: "The Young Constituents formally launches with chapters active in Ontario, Quebec, Alberta, Nova Scotia, New Brunswick, and Saskatchewan."
}, {
  d: "08",
  m: "May",
  year: "2026",
  kind: "Announcement",
  title: "First Quarterly National Meeting Announced",
  excerpt: "The National Parliament will hold its first quarterly meeting on June 12, opening the floor to all Provincial Presidents and Local Directors."
}, {
  d: "20",
  m: "May",
  year: "2026",
  kind: "Framework",
  title: "Municipal Division Framework Now Active",
  excerpt: "The 20/80 governance model is now in effect across active Municipal Divisions, formally codifying member responsibilities and chamber procedure."
}];
function DateBadge({
  d,
  m,
  year,
  large = false
}) {
  return /* @__PURE__ */ jsxs("div", { className: "inline-flex flex-col items-center justify-center leading-none shrink-0 text-center", style: {
    border: "2px solid #080028",
    padding: large ? "0.6rem 1rem" : "0.4rem 0.7rem",
    minWidth: large ? 84 : 60
  }, children: [
    /* @__PURE__ */ jsx("div", { className: "font-display font-bold text-[#080028]", style: {
      fontSize: large ? 32 : 22
    }, children: d }),
    /* @__PURE__ */ jsx("div", { className: "font-display uppercase mt-1", style: {
      color: "#FFA300",
      fontSize: large ? 12 : 10,
      letterSpacing: "0.18em"
    }, children: m }),
    year && /* @__PURE__ */ jsx("div", { className: "font-display mt-1 opacity-60", style: {
      color: "#080028",
      fontSize: large ? 11 : 9,
      letterSpacing: "0.12em"
    }, children: year })
  ] });
}
function Events() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("section", { style: {
      background: "#080028",
      color: "#fff",
      marginTop: "-78px",
      paddingTop: "78px"
    }, children: /* @__PURE__ */ jsxs("div", { className: "container-tyc pt-20 pb-28 lg:pt-28 lg:pb-32", children: [
      /* @__PURE__ */ jsx("p", { className: "eyebrow", style: {
        color: "#FFA300"
      }, children: /* @__PURE__ */ jsx("span", { style: {
        color: "#FFA300"
      }, children: "News · Events" }) }),
      /* @__PURE__ */ jsxs("h1", { className: "text-white mt-8 display-hero max-w-4xl", children: [
        "What's Happening",
        /* @__PURE__ */ jsx("br", {}),
        "at ",
        /* @__PURE__ */ jsx("span", { style: {
          color: "#FFA300"
        }, children: "TYC." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section", children: /* @__PURE__ */ jsxs("div", { className: "container-tyc", children: [
      /* @__PURE__ */ jsx("p", { className: "eyebrow mb-8", children: "Featured" }),
      /* @__PURE__ */ jsxs("article", { className: "card-tyc grid lg:grid-cols-12 overflow-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "lg:col-span-7", children: /* @__PURE__ */ jsx(Placeholder, { label: "Featured event · 1200 × 600", ratio: "16/9" }) }),
        /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 p-8 lg:p-12 flex flex-col", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsx(DateBadge, { d: featured.d, m: featured.m, year: featured.year, large: true }),
            /* @__PURE__ */ jsx("span", { className: "font-display text-[11px] uppercase tracking-[0.18em] text-[#249EBF]", children: "National Meeting" })
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "mt-7 text-[28px] sm:text-[36px] leading-tight", children: featured.title }),
          /* @__PURE__ */ jsx("p", { className: "mt-5 text-[14px] text-[#4a5078] leading-relaxed flex-1", children: featured.desc }),
          /* @__PURE__ */ jsx("p", { className: "mt-5 font-display text-[12px] uppercase tracking-[0.15em] text-[#080028]", children: featured.location }),
          /* @__PURE__ */ jsxs("a", { href: "#", className: "btn btn-primary mt-7 self-start", children: [
            "Learn More ",
            /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section", style: {
      background: "#E0E5F4"
    }, children: /* @__PURE__ */ jsxs("div", { className: "container-tyc", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-2xl", children: [
        /* @__PURE__ */ jsx("p", { className: "eyebrow", children: "Latest" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-4 display-mega", children: "News & Updates." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6 mt-14", children: posts.map((p) => /* @__PURE__ */ jsxs("article", { className: "bg-white card-tyc flex flex-col", children: [
        /* @__PURE__ */ jsx(Placeholder, { label: `${p.kind} cover`, ratio: "4/3" }),
        /* @__PURE__ */ jsxs("div", { className: "p-6 flex-1 flex flex-col", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(DateBadge, { d: p.d, m: p.m, year: p.year }),
            /* @__PURE__ */ jsx("span", { className: "font-display text-[11px] uppercase tracking-[0.18em] text-[#249EBF]", children: p.kind })
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "mt-6 text-[20px] leading-snug", children: p.title }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 text-[14px] text-[#4a5078] leading-relaxed flex-1", children: p.excerpt }),
          /* @__PURE__ */ jsx("a", { href: "#", className: "mt-5 font-display text-[12px] uppercase tracking-[0.18em] self-start pb-1", style: {
            color: "#249EBF",
            borderBottom: "2px solid #FFA300"
          }, children: "Read More →" })
        ] })
      ] }, p.title)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section", children: /* @__PURE__ */ jsxs("div", { className: "container-tyc text-center max-w-2xl mx-auto", children: [
      /* @__PURE__ */ jsx("p", { className: "eyebrow justify-center", children: "Submissions" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-5 text-[28px] sm:text-[36px]", children: "Have an event to submit?" }),
      /* @__PURE__ */ jsx("p", { className: "mt-5 text-[15px] text-[#4a5078]", children: "Chapter leaders and Municipal Directors can submit events for inclusion." }),
      /* @__PURE__ */ jsx(Link, { to: "/contact", className: "btn btn-ghost mt-8", children: "Contact Us" })
    ] }) })
  ] });
}
export {
  Events as component
};
