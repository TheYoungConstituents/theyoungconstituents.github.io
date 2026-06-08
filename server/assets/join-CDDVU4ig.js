import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { c as createSsrRpc, u as useServerFn } from "./createSsrRpc-BuONn9Wz.js";
import { useQuery } from "@tanstack/react-query";
import { UserPlus, Building2, GraduationCap, ArrowRight, Briefcase } from "lucide-react";
import { a as createServerFn } from "./server-ewLjdESx.js";
import "react";
import "@tanstack/react-router";
import "node:async_hooks";
import "h3-v2";
import "@tanstack/router-core";
import "seroval";
import "@tanstack/history";
import "@tanstack/router-core/ssr/client";
import "@tanstack/router-core/ssr/server";
import "@tanstack/react-router/ssr/server";
createServerFn({
  method: "GET"
}).handler(createSsrRpc("30d2350e0df9d919655af347cafe053ff918155eb2e342568650fb604a87c9bb"));
const getOpenPostings = createServerFn({
  method: "GET"
}).handler(createSsrRpc("3fa5995c45489ea962662f2091da1a1d9068871a0f56af77c3a8080cf6cd40df"));
const APPLY_LINKS = {
  member: "https://forms.gle/PLACEHOLDER-member",
  municipal: "https://forms.gle/PLACEHOLDER-municipal",
  school: "https://forms.gle/PLACEHOLDER-school"
};
const paths = [{
  Icon: UserPlus,
  title: "Become a Member",
  body: "Join a Municipal Division or School Chapter in your province. Ages 13 to 28. Earn an active seat, participate in parliamentary proceedings, and help shape your community.",
  cta: "Apply to Be a Member",
  url: APPLY_LINKS.member,
  primary: true
}, {
  Icon: Building2,
  title: "Start a Municipal Division",
  body: "Want to bring the parliamentary model to your city or riding? Apply to establish a Municipal Division and become a Local Director.",
  cta: "Apply to Start a Municipal Chapter",
  url: APPLY_LINKS.municipal,
  primary: false
}, {
  Icon: GraduationCap,
  title: "Start a School Chapter",
  body: "Bring TYC to your school. Lead civic education, model parliament, and advocacy from the ground up as Chapter President.",
  cta: "Apply to Start a School Chapter",
  url: APPLY_LINKS.school,
  primary: false
}];
function Join() {
  const fetchPostings = useServerFn(getOpenPostings);
  const {
    data
  } = useQuery({
    queryKey: ["postings"],
    queryFn: () => fetchPostings()
  });
  const postings = data?.postings ?? [];
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
      }, children: "Get Involved" }) }),
      /* @__PURE__ */ jsxs("h1", { className: "text-white mt-8 display-hero max-w-4xl", children: [
        "Your Seat",
        /* @__PURE__ */ jsx("br", {}),
        "Is ",
        /* @__PURE__ */ jsx("span", { style: {
          color: "#FFA300"
        }, children: "Waiting." })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-10 text-[17px] lg:text-[19px] max-w-2xl opacity-80 leading-relaxed", children: "Whether you're 13 or 28, in a school or a city, there is a place for you in TYC." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section", children: /* @__PURE__ */ jsxs("div", { className: "container-tyc", children: [
      /* @__PURE__ */ jsx("p", { className: "eyebrow mb-8", children: "Three Paths" }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6", children: paths.map(({
        Icon,
        title,
        body,
        cta,
        url,
        primary
      }) => /* @__PURE__ */ jsxs("article", { "data-drop-card": true, className: "card-tyc p-8 flex flex-col", style: {
        minHeight: 420
      }, children: [
        /* @__PURE__ */ jsx("div", { className: "w-14 h-14 inline-flex items-center justify-center", style: {
          background: "#E0E5F4",
          color: "#080028"
        }, children: /* @__PURE__ */ jsx(Icon, { size: 26, strokeWidth: 1.6 }) }),
        /* @__PURE__ */ jsx("h3", { className: "mt-7 text-[24px] leading-tight", children: title }),
        /* @__PURE__ */ jsx("span", { className: "rule mt-5" }),
        /* @__PURE__ */ jsx("p", { className: "mt-5 text-[14px] text-[#4a5078] leading-relaxed flex-1", children: body }),
        /* @__PURE__ */ jsxs("a", { href: url, target: "_blank", rel: "noreferrer noopener", className: `btn mt-7 ${primary ? "btn-primary" : "btn-ghost"}`, "aria-label": cta, children: [
          cta,
          " ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
        ] })
      ] }, title)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { id: "positions", className: "section", style: {
      background: "#E0E5F4"
    }, children: /* @__PURE__ */ jsxs("div", { className: "container-tyc", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "max-w-xl", children: [
          /* @__PURE__ */ jsx("p", { className: "eyebrow", children: "Open Positions" }),
          /* @__PURE__ */ jsx("h2", { className: "mt-4 display-mega", children: "We're Growing." }),
          /* @__PURE__ */ jsx("p", { className: "mt-6 text-[15px] text-[#4a5078] max-w-md", children: "Join the national team. New postings are added regularly." })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "font-display text-[12px] uppercase tracking-[0.18em] text-[#249EBF]", children: [
          postings.length,
          " ",
          postings.length === 1 ? "Position" : "Positions",
          " Open"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-5", children: [
        postings.length === 0 && /* @__PURE__ */ jsx("p", { className: "text-[15px] text-[#4a5078]", children: "No positions are currently open. Check back soon." }),
        postings.map((p) => /* @__PURE__ */ jsxs("article", { className: "bg-white card-tyc p-6 md:p-8 grid md:grid-cols-12 gap-6 items-start", children: [
          /* @__PURE__ */ jsx("div", { className: "md:col-span-1 hidden md:block", children: /* @__PURE__ */ jsx("div", { className: "w-12 h-12 inline-flex items-center justify-center", style: {
            background: "#E0E5F4",
            color: "#249EBF"
          }, children: /* @__PURE__ */ jsx(Briefcase, { size: 20, strokeWidth: 1.6 }) }) }),
          /* @__PURE__ */ jsxs("div", { className: "md:col-span-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-3", children: [
              /* @__PURE__ */ jsx("span", { className: "font-display text-[10px] uppercase tracking-[0.18em] py-1 px-2.5", style: {
                background: "#080028",
                color: "#fff"
              }, children: p.level }),
              /* @__PURE__ */ jsx("span", { className: "font-display text-[10px] uppercase tracking-[0.18em] text-[#249EBF]", children: p.type })
            ] }),
            /* @__PURE__ */ jsx("h3", { className: "mt-4 text-[22px] leading-tight", children: p.title }),
            /* @__PURE__ */ jsx("p", { className: "mt-3 text-[14px] text-[#4a5078] leading-relaxed", children: p.description })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "md:col-span-3 md:text-right", children: /* @__PURE__ */ jsx("a", { href: p.apply_url || "#", target: "_blank", rel: "noreferrer noopener", className: "btn btn-primary", "aria-label": `Apply for ${p.title}`, children: "Apply Now" }) })
        ] }, p.id))
      ] })
    ] }) })
  ] });
}
export {
  Join as component
};
