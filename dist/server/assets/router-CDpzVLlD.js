import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Link, useRouterState, createRootRouteWithContext, useRouter, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Menu, X, Instagram, Linkedin, Mail } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const appCss = "/assets/styles-CWSIyog9.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
const url = "/__l5e/assets-v1/498ad41c-c42f-4a17-943e-aac36d716efa/tyc-logo.png";
const logo = {
  url
};
function Logo({ light = false, size = 44 }) {
  const color = light ? "#FFFFFF" : "#080028";
  return /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-3", "aria-label": "The Young Constituents, home", children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        src: logo.url,
        alt: "",
        width: size,
        height: size,
        className: "shrink-0",
        style: { width: size, height: size, objectFit: "contain" }
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "leading-tight hidden sm:block", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "font-display font-bold text-[14px] tracking-tight uppercase",
          style: { color, letterSpacing: "0.02em" },
          children: "The Young Constituents"
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "font-display text-[9px] uppercase tracking-[0.22em] mt-0.5",
          style: { color: light ? "#FFA300" : "#249EBF" },
          children: "Independent Thought, Interdependent Action"
        }
      )
    ] })
  ] });
}
const links = [
  { to: "/about", label: "About" },
  { to: "/team", label: "Our Team" },
  { to: "/events", label: "Events" },
  { to: "/join", label: "Get Involved" },
  { to: "/contact", label: "Contact" }
];
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  return /* @__PURE__ */ jsxs(
    "header",
    {
      className: "sticky top-0 z-50 transition-all duration-300 relative",
      style: {
        background: scrolled ? "rgba(8,0,63,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 10px 30px -16px rgba(0,0,0,0.6)" : "none"
      },
      children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "container-tyc flex items-center justify-between transition-all duration-300",
            style: { height: scrolled ? 66 : 78 },
            children: [
              /* @__PURE__ */ jsx(Logo, { light: true }),
              /* @__PURE__ */ jsxs("nav", { className: "hidden lg:flex items-center gap-9", "aria-label": "Primary", children: [
                links.map((l) => /* @__PURE__ */ jsx(
                  Link,
                  {
                    to: l.to,
                    className: "nav-link-dark",
                    children: l.label
                  },
                  l.to
                )),
                /* @__PURE__ */ jsx(
                  Link,
                  {
                    to: "/join",
                    className: "btn btn-primary !py-2.5 !px-5",
                    "aria-label": "Become a Member",
                    children: "Become a Member"
                  }
                )
              ] }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  className: "lg:hidden p-2 -mr-2",
                  "aria-label": "Open menu",
                  onClick: () => setOpen(true),
                  children: /* @__PURE__ */ jsx(Menu, { size: 26, color: "#FFFFFF" })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "span",
          {
            "aria-hidden": true,
            className: "block absolute bottom-0 left-0 h-[1px] transition-[width] duration-300 ease-out",
            style: { background: "#FFA300", width: scrolled ? "100%" : "0%" }
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: `fixed inset-0 z-50 lg:hidden transition-opacity ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`,
            style: { background: "rgba(8,0,63,0.7)" },
            onClick: () => setOpen(false),
            "aria-hidden": !open,
            children: /* @__PURE__ */ jsxs(
              "aside",
              {
                className: `absolute top-0 right-0 h-full w-[88%] max-w-sm shadow-2xl transition-transform ${open ? "translate-x-0" : "translate-x-full"}`,
                style: { background: "#080028" },
                onClick: (e) => e.stopPropagation(),
                role: "dialog",
                "aria-label": "Mobile navigation",
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between h-[78px] px-6", style: { borderBottom: "1px solid rgba(255,255,255,0.12)" }, children: [
                    /* @__PURE__ */ jsx(Logo, { light: true }),
                    /* @__PURE__ */ jsx("button", { onClick: () => setOpen(false), "aria-label": "Close menu", className: "p-2 -mr-2", children: /* @__PURE__ */ jsx(X, { size: 24, color: "#FFFFFF" }) })
                  ] }),
                  /* @__PURE__ */ jsxs("nav", { className: "flex flex-col px-6 py-8 gap-1", children: [
                    links.map((l) => /* @__PURE__ */ jsx(
                      Link,
                      {
                        to: l.to,
                        onClick: () => setOpen(false),
                        className: "font-display font-semibold text-[22px] py-4 text-white",
                        style: { borderBottom: "1px solid rgba(255,255,255,0.08)" },
                        activeProps: { style: { color: "#FFA300", borderBottom: "1px solid rgba(255,255,255,0.08)" } },
                        children: l.label
                      },
                      l.to
                    )),
                    /* @__PURE__ */ jsx(Link, { to: "/join", onClick: () => setOpen(false), className: "btn btn-primary mt-8", children: "Become a Member" })
                  ] })
                ]
              }
            )
          }
        )
      ]
    }
  );
}
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { style: { background: "#080028", color: "#FFFFFF" }, className: "relative", children: [
    /* @__PURE__ */ jsx("div", { style: { height: 3, background: "#FFA300" } }),
    /* @__PURE__ */ jsxs("div", { className: "container-tyc py-20 grid md:grid-cols-3 gap-14", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Logo, { light: true }),
        /* @__PURE__ */ jsx("p", { className: "mt-7 font-display text-[12px] uppercase tracking-[0.22em]", style: { color: "#FFA300" }, children: "Independent Thought, Interdependent Action" }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-[14px] opacity-70 max-w-xs leading-relaxed", children: "A national youth governance movement building Canada's next generation of civic leaders." }),
        /* @__PURE__ */ jsx("p", { className: "mt-8 text-[12px] opacity-50", children: "© 2026 The Young Constituents" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-white text-[12px] uppercase tracking-[0.22em] font-display mb-6", style: { color: "#FFA300" }, children: "Explore" }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-3 text-[15px]", children: [
          { to: "/", l: "Home" },
          { to: "/about", l: "About" },
          { to: "/team", l: "Our Team" },
          { to: "/events", l: "Events & News" },
          { to: "/join", l: "Get Involved" },
          { to: "/contact", l: "Contact" }
        ].map((x) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: x.to, className: "opacity-85 hover:text-[#FFA300] transition", children: x.l }) }, x.to)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-white text-[12px] uppercase tracking-[0.22em] font-display mb-6", style: { color: "#FFA300" }, children: "Connect" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-4 text-[14px]", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "#", "aria-label": "Instagram", className: "flex items-center gap-3 opacity-85 hover:text-[#FFA300] transition", children: [
            /* @__PURE__ */ jsx(Instagram, { size: 16 }),
            " @theyoungconstituents"
          ] }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "#", "aria-label": "LinkedIn", className: "flex items-center gap-3 opacity-85 hover:text-[#FFA300] transition", children: [
            /* @__PURE__ */ jsx(Linkedin, { size: 16 }),
            " The Young Constituents"
          ] }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "mailto:contact@theyoungconstituents.ca", "aria-label": "Email", className: "flex items-center gap-3 opacity-85 hover:text-[#FFA300] transition", children: [
            /* @__PURE__ */ jsx(Mail, { size: 16 }),
            " contact@theyoungconstituents.ca"
          ] }) })
        ] })
      ] })
    ] })
  ] });
}
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}
const INDIGO = "#080028";
const LIGHT = "#E0E5F4";
function ScrollAnimations() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const ctx = gsap.context(() => {
      requestAnimationFrame(() => {
        document.querySelectorAll("[data-sticky-levels]").forEach((section) => {
          if (isMobile) return;
          const slides = section.querySelectorAll("[data-level-slide]");
          const dots = section.querySelectorAll("[data-level-dot]");
          if (!slides.length) return;
          gsap.set(slides, { opacity: 0, scale: 0.92, yPercent: 0 });
          gsap.set(slides[0], { opacity: 1, scale: 1 });
          dots.forEach((d, i) => gsap.set(d, { backgroundColor: i === 0 ? "#FFA300" : "rgba(255,255,255,0.25)" }));
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: () => "+=" + window.innerHeight * (slides.length - 1),
              pin: true,
              scrub: 1,
              invalidateOnRefresh: true
            }
          });
          slides.forEach((slide, i) => {
            if (i === 0) return;
            const prev = slides[i - 1];
            tl.to(prev, { opacity: 0, scale: 0.95, yPercent: -8, duration: 1 }, i - 1);
            tl.fromTo(
              slide,
              { opacity: 0, scale: 0.92, yPercent: 8 },
              { opacity: 1, scale: 1, yPercent: 0, duration: 1 },
              i - 1
            );
            tl.call(
              () => {
                dots.forEach(
                  (d, j) => gsap.to(d, {
                    backgroundColor: j === i ? "#FFA300" : "rgba(255,255,255,0.25)",
                    duration: 0.3
                  })
                );
              },
              [],
              i - 0.5
            );
            tl.call(
              () => {
                dots.forEach(
                  (d, j) => gsap.to(d, {
                    backgroundColor: j === i - 1 ? "#FFA300" : "rgba(255,255,255,0.25)",
                    duration: 0.3
                  })
                );
              },
              [],
              i - 0.51
            );
          });
        });
        document.querySelectorAll("[data-scrub-text]").forEach((el) => {
          if (el.dataset.scrubReady === "1") return;
          const text = el.textContent || "";
          el.innerHTML = text.split(/(\s+)/).map(
            (w) => /\s+/.test(w) ? w : `<span class="scrub-word" style="display:inline-block;opacity:0.15;will-change:opacity;">${w}</span>`
          ).join("");
          el.dataset.scrubReady = "1";
          const words = el.querySelectorAll(".scrub-word");
          gsap.to(words, {
            opacity: 1,
            ease: "none",
            stagger: { each: 1, from: "start" },
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              end: "bottom 50%",
              scrub: isMobile ? 0.6 : 1
            }
          });
        });
        if (!isMobile) {
          document.querySelectorAll("[data-hero-shrink]").forEach((hero) => {
            const inner = hero.querySelector("[data-hero-inner]") || hero;
            const content = hero.querySelector("[data-hero-content]");
            const watermark = hero.querySelector("[data-hero-watermark]");
            gsap.to(inner, {
              scale: 0.88,
              borderRadius: "24px",
              ease: "none",
              scrollTrigger: {
                trigger: hero,
                start: "top top",
                end: "bottom top",
                scrub: true
              }
            });
            gsap.to(inner, {
              opacity: 0.6,
              ease: "none",
              scrollTrigger: {
                trigger: hero,
                start: "top top",
                end: "bottom top",
                scrub: true
              }
            });
            if (content) {
              gsap.to(content, {
                yPercent: -10,
                ease: "none",
                scrollTrigger: {
                  trigger: hero,
                  start: "top top",
                  end: "bottom top",
                  scrub: true
                }
              });
            }
            if (watermark) {
              gsap.fromTo(
                watermark,
                { scale: 1 },
                {
                  scale: 1.15,
                  ease: "none",
                  scrollTrigger: {
                    trigger: hero,
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                  }
                }
              );
            }
          });
        }
        if (!isMobile) {
          document.querySelectorAll("[data-horizontal-pin]").forEach((section) => {
            const track = section.querySelector("[data-horizontal-track]");
            const progress = section.querySelector("[data-horizontal-progress]");
            if (!track) return;
            const distance = () => track.scrollWidth - window.innerWidth + 120;
            gsap.to(track, {
              x: () => -distance(),
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "top top",
                end: () => "+=" + distance(),
                pin: true,
                scrub: 1,
                invalidateOnRefresh: true
              }
            });
            if (progress) {
              gsap.fromTo(
                progress,
                { width: "0%" },
                {
                  width: "100%",
                  ease: "none",
                  scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: () => "+=" + distance(),
                    scrub: true
                  }
                }
              );
            }
          });
        }
        document.querySelectorAll("[data-counter-scrub]").forEach((el) => {
          const target = parseFloat(el.dataset.counterScrub || "0");
          const suffix = el.dataset.counterSuffix || "";
          const obj = { val: 0 };
          gsap.to(obj, {
            val: target,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              end: "center center",
              scrub: true
            },
            onUpdate: () => {
              el.textContent = Math.round(obj.val).toLocaleString() + suffix;
            }
          });
        });
        document.querySelectorAll("[data-counter]").forEach((el) => {
          if (el.dataset.counted === "1") return;
          const target = parseFloat(el.dataset.counter || "0");
          const suffix = el.dataset.counterSuffix || "";
          const obj = { val: 0 };
          ScrollTrigger.create({
            trigger: el,
            start: "top 90%",
            once: true,
            onEnter: () => {
              el.dataset.counted = "1";
              gsap.to(obj, {
                val: target,
                duration: 1.6,
                ease: "power2.out",
                onUpdate: () => {
                  el.textContent = Math.round(obj.val).toLocaleString() + suffix;
                }
              });
            }
          });
        });
        const depthGroups = /* @__PURE__ */ new Map();
        document.querySelectorAll("[data-card-depth], .card-tyc:not([data-drop-card]), [data-card]").forEach((el) => {
          if (el.dataset.revealed === "1") return;
          const parent = el.parentElement;
          if (!parent) return;
          if (!depthGroups.has(parent)) depthGroups.set(parent, []);
          depthGroups.get(parent).push(el);
        });
        depthGroups.forEach((cards) => {
          cards.forEach((c) => c.dataset.revealed = "1");
          gsap.from(cards, {
            y: 60,
            scale: 0.94,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.15,
            scrollTrigger: {
              trigger: cards[0],
              start: "top 88%",
              toggleActions: "play none none none"
            }
          });
        });
        const dropCards = document.querySelectorAll("[data-drop-card]");
        if (dropCards.length) {
          dropCards.forEach((c) => c.dataset.revealed = "1");
          gsap.from(dropCards, {
            y: -20,
            opacity: 0,
            duration: 0.7,
            ease: "power2.out",
            stagger: 0.2,
            scrollTrigger: {
              trigger: dropCards[0],
              start: "top 85%",
              toggleActions: "play none none none"
            }
          });
        }
        document.querySelectorAll("h2, .reveal-up").forEach((el) => {
          if (el.dataset.revealed === "1") return;
          if (el.hasAttribute("data-scrub-text")) return;
          el.dataset.revealed = "1";
          gsap.from(el, {
            y: 40,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" }
          });
        });
        document.querySelectorAll(".eyebrow").forEach((el) => {
          if (el.dataset.revealed === "1") return;
          el.dataset.revealed = "1";
          gsap.from(el, {
            y: 20,
            opacity: 0,
            duration: 0.7,
            delay: 0.15,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" }
          });
        });
        document.querySelectorAll("[data-stagger-words]").forEach((el) => {
          if (el.dataset.staggerSplit === "done") return;
          const lines = el.innerHTML.split(/<br\s*\/?>/i);
          el.innerHTML = lines.map(
            (line) => line.replace(
              /(<[^>]+>[^<]*<\/[^>]+>|[^\s<]+)/g,
              (m) => `<span class="word-inner" style="display:inline-block;will-change:transform,opacity;">${m}</span>`
            )
          ).join("<br/>");
          el.dataset.staggerSplit = "done";
          gsap.from(el.querySelectorAll(".word-inner"), {
            yPercent: 110,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.08,
            delay: 0.1
          });
        });
        document.querySelectorAll("[data-portrait-zoom]").forEach((el) => {
          gsap.fromTo(
            el,
            { scale: 0.95, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" }
            }
          );
        });
        document.querySelectorAll("[data-draw-line]").forEach((el) => {
          gsap.fromTo(
            el,
            { height: "0%" },
            {
              height: "100%",
              duration: 1.2,
              ease: "power2.out",
              scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" }
            }
          );
        });
        const bgSections = document.querySelectorAll("[data-bg]");
        if (bgSections.length) {
          bgSections.forEach((s) => {
            s.dataset.origBg = s.style.background || "";
            s.style.background = "transparent";
          });
          document.body.style.transition = "background-color 0.4s ease";
          document.body.style.backgroundColor = bgSections[0].dataset.bg || INDIGO;
          bgSections.forEach((s) => {
            const target = s.dataset.bg || LIGHT;
            ScrollTrigger.create({
              trigger: s,
              start: "top 50%",
              end: "bottom 50%",
              onEnter: () => gsap.to(document.body, { backgroundColor: target, duration: 0.6, ease: "power2.out" }),
              onEnterBack: () => gsap.to(document.body, { backgroundColor: target, duration: 0.6, ease: "power2.out" })
            });
          });
        }
        ScrollTrigger.refresh();
      });
    });
    return () => {
      ctx.revert();
      document.querySelectorAll("[data-bg]").forEach((s) => {
        if (s.dataset.origBg !== void 0) s.style.background = s.dataset.origBg;
      });
      document.body.style.backgroundColor = "";
    };
  }, [pathname]);
  return null;
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-[70vh] items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("p", { className: "eyebrow justify-center", children: "Error 404" }),
    /* @__PURE__ */ jsx("h1", { className: "mt-4 text-[56px] font-display font-semibold", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-3 text-[15px] text-[#4a5078]", children: "That page isn't here. It may have moved, or never existed." }),
    /* @__PURE__ */ jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsx(Link, { to: "/", className: "btn btn-ghost", children: "Return home" }) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-[70vh] items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("p", { className: "eyebrow justify-center", children: "Something broke" }),
    /* @__PURE__ */ jsx("h1", { className: "mt-4 text-[40px] font-display font-semibold", children: "This page didn't load" }),
    /* @__PURE__ */ jsx("p", { className: "mt-3 text-[15px] text-[#4a5078]", children: "Something went wrong on our end. Try refreshing or head home." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-3", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "btn btn-primary",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx("a", { href: "/", className: "btn btn-ghost", children: "Go home" })
    ] })
  ] }) });
}
const Route$7 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "The Young Constituents, Canadian Youth Civic Organization" },
      { name: "description", content: "TYC is a non-partisan Canadian youth organization building political literacy, civic engagement, and constituent empowerment." },
      { name: "author", content: "The Young Constituents" },
      { property: "og:title", content: "The Young Constituents" },
      { property: "og:description", content: "Independent Thought, Interdependent Action, civic engagement for young Canadians." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" }
    ],
    links: [{ rel: "stylesheet", href: appCss }]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$7.useRouteContext();
  return /* @__PURE__ */ jsxs(QueryClientProvider, { client: queryClient, children: [
    /* @__PURE__ */ jsx(ScrollAnimations, {}),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("main", { children: /* @__PURE__ */ jsx(Outlet, {}) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
const $$splitComponentImporter$5 = () => import("./team-BlayedLk.js");
const Route$6 = createFileRoute("/team")({
  head: () => ({
    meta: [{
      title: "Our Team, The Young Constituents"
    }, {
      name: "description",
      content: "Meet the national executive and provincial leadership of The Young Constituents."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const BASE_URL = "";
const Route$5 = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          { path: "/", priority: "1.0" },
          { path: "/about", priority: "0.8" },
          { path: "/team", priority: "0.8" },
          { path: "/events", priority: "0.8" },
          { path: "/join", priority: "0.9" },
          { path: "/contact", priority: "0.7" }
        ];
        const urls = entries.map((e) => `  <url>
    <loc>${BASE_URL}${e.path}</loc>
    <changefreq>weekly</changefreq>
    <priority>${e.priority}</priority>
  </url>`).join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" }
        });
      }
    }
  }
});
const $$splitComponentImporter$4 = () => import("./join-CDDVU4ig.js");
const Route$4 = createFileRoute("/join")({
  head: () => ({
    meta: [{
      title: "Get Involved, The Young Constituents"
    }, {
      name: "description",
      content: "Become a member, start a Municipal Division, or launch a School Chapter. Three paths into TYC."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./events-4t4jI79w.js");
const Route$3 = createFileRoute("/events")({
  head: () => ({
    meta: [{
      title: "Events & News, The Young Constituents"
    }, {
      name: "description",
      content: "Announcements, events, and dispatches from The Young Constituents."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./contact-RmOV9UXo.js");
const Route$2 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact, The Young Constituents"
    }, {
      name: "description",
      content: "Get in touch with The Young Constituents national team."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./about-DOkB_mZn.js");
const Route$1 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About, The Young Constituents"
    }, {
      name: "description",
      content: "The Young Constituents was built on a single belief, that young people don't lack ideas. They lack the governing authority to act on them."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-DPkljmUo.js");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "The Young Constituents, Youth Governance. Real Stakes. One Movement."
    }, {
      name: "description",
      content: "TYC is building Canada's next generation of civic leaders through parallel governance, real parliaments, real accountability, real impact."
    }, {
      property: "og:title",
      content: "The Young Constituents"
    }, {
      property: "og:description",
      content: "Independent Thought, Interdependent Action. A national youth governance movement for Canadians aged 13 to 28."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const TeamRoute = Route$6.update({
  id: "/team",
  path: "/team",
  getParentRoute: () => Route$7
});
const SitemapDotxmlRoute = Route$5.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$7
});
const JoinRoute = Route$4.update({
  id: "/join",
  path: "/join",
  getParentRoute: () => Route$7
});
const EventsRoute = Route$3.update({
  id: "/events",
  path: "/events",
  getParentRoute: () => Route$7
});
const ContactRoute = Route$2.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$7
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$7
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$7
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ContactRoute,
  EventsRoute,
  JoinRoute,
  SitemapDotxmlRoute,
  TeamRoute
};
const routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
