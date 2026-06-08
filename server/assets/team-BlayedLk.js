import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { P as Placeholder } from "./Placeholder-Df0NZeNj.js";
import "lucide-react";
const executive = [{
  name: "Xavier Davis",
  role: "Founding Director & CEO"
}, {
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
const provinces = ["Ontario", "Quebec", "Alberta", "Nova Scotia", "New Brunswick", "Saskatchewan"];
function Team() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("section", { style: {
      background: "#080028",
      color: "#fff",
      marginTop: "-78px",
      paddingTop: "78px"
    }, children: /* @__PURE__ */ jsxs("div", { className: "container-tyc pt-20 pb-28 lg:pt-28 lg:pb-36", children: [
      /* @__PURE__ */ jsx("p", { className: "eyebrow", style: {
        color: "#FFA300"
      }, children: /* @__PURE__ */ jsx("span", { style: {
        color: "#FFA300"
      }, children: "The Team" }) }),
      /* @__PURE__ */ jsxs("h1", { className: "text-white mt-8 display-hero max-w-4xl", children: [
        "The People",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("span", { style: {
          color: "#FFA300"
        }, children: "Building This." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section", children: /* @__PURE__ */ jsxs("div", { className: "container-tyc", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14", children: [
        /* @__PURE__ */ jsxs("div", { className: "max-w-xl", children: [
          /* @__PURE__ */ jsx("p", { className: "eyebrow", children: "National Executive" }),
          /* @__PURE__ */ jsx("h2", { className: "mt-4 display-mega", children: "The C-Suite." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-[14px] text-[#4a5078] max-w-sm", children: "Five executives accountable to the National Parliament under the constitution adopted May 2, 2026." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-5 gap-6", children: executive.map((m) => /* @__PURE__ */ jsxs("article", { className: "group", children: [
        /* @__PURE__ */ jsx(Placeholder, { label: `${m.name} · 400 × 600`, ratio: "2/3" }),
        /* @__PURE__ */ jsxs("div", { className: "mt-5", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-[20px] leading-tight", children: m.name }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 font-display text-[11px] uppercase tracking-[0.15em] text-[#249EBF]", children: m.role }),
          /* @__PURE__ */ jsx("span", { className: "block mt-4 transition-all", style: {
            height: 2,
            width: 32,
            background: "#FFA300"
          } })
        ] })
      ] }, m.name)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section", style: {
      background: "#E0E5F4"
    }, children: /* @__PURE__ */ jsxs("div", { className: "container-tyc", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-2xl", children: [
        /* @__PURE__ */ jsx("p", { className: "eyebrow", children: "Provincial Leadership" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-4 display-mega", children: "Six Presidents. Six Provinces." }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-[15px] text-[#4a5078] max-w-xl leading-relaxed", children: "Provincial Presidents lead their chapter's Model Parliament, summits, and cross-division coordination. Appointments in progress." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14", children: provinces.map((p) => /* @__PURE__ */ jsxs("article", { className: "bg-white card-tyc", children: [
        /* @__PURE__ */ jsx(Placeholder, { label: `${p} President · 400 × 500`, ratio: "4/5" }),
        /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsx("span", { className: "font-display text-[10px] uppercase tracking-[0.18em] py-1.5 px-3", style: {
            background: "#249EBF",
            color: "#fff"
          }, children: p }) }),
          /* @__PURE__ */ jsx("h3", { className: "mt-5 text-[20px] leading-tight", children: "TBD, Coming Soon" }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 font-display text-[11px] uppercase tracking-[0.15em] text-[#249EBF]", children: "Provincial President" }),
          /* @__PURE__ */ jsx("span", { className: "block mt-4", style: {
            height: 2,
            width: 32,
            background: "#FFA300"
          } })
        ] })
      ] }, p)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section", style: {
      background: "#080028",
      color: "#fff"
    }, children: /* @__PURE__ */ jsxs("div", { className: "container-tyc grid lg:grid-cols-12 gap-10 items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-8", children: [
        /* @__PURE__ */ jsx("p", { className: "eyebrow", style: {
          color: "#FFA300"
        }, children: /* @__PURE__ */ jsx("span", { style: {
          color: "#FFA300"
        }, children: "Open Positions" }) }),
        /* @__PURE__ */ jsx("h2", { className: "text-white mt-4 display-mega max-w-3xl", children: "Want to Be Part of This?" }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-[16px] opacity-80 max-w-xl leading-relaxed", children: "We are building the next generation of civic leaders. See our open positions on the national team." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-4 lg:text-right", children: /* @__PURE__ */ jsx(Link, { to: "/join", hash: "positions", className: "btn btn-primary", children: "View Open Positions" }) })
    ] }) })
  ] });
}
export {
  Team as component
};
