import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const INDIGO = "#080028";
const LIGHT = "#E0E5F4";

export function ScrollAnimations() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const isMobile = window.matchMedia("(max-width: 767px)").matches;

    const ctx = gsap.context(() => {
      requestAnimationFrame(() => {
        // ───────────────────────────────────────────────────────────────
        // EFFECT 1 — Sticky section storytelling (Levels)
        // ───────────────────────────────────────────────────────────────
        document.querySelectorAll<HTMLElement>("[data-sticky-levels]").forEach((section) => {
          if (isMobile) return;
          const slides = section.querySelectorAll<HTMLElement>("[data-level-slide]");
          const dots = section.querySelectorAll<HTMLElement>("[data-level-dot]");
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
              invalidateOnRefresh: true,
            },
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
                dots.forEach((d, j) =>
                  gsap.to(d, {
                    backgroundColor: j === i ? "#FFA300" : "rgba(255,255,255,0.25)",
                    duration: 0.3,
                  })
                );
              },
              [],
              i - 0.5
            );
            tl.call(
              () => {
                dots.forEach((d, j) =>
                  gsap.to(d, {
                    backgroundColor: j === i - 1 ? "#FFA300" : "rgba(255,255,255,0.25)",
                    duration: 0.3,
                  })
                );
              },
              [],
              i - 0.51
            );
          });
        });

        // ───────────────────────────────────────────────────────────────
        // EFFECT 2 — Large text scrub (word-by-word opacity reveal)
        // ───────────────────────────────────────────────────────────────
        document.querySelectorAll<HTMLElement>("[data-scrub-text]").forEach((el) => {
          if (el.dataset.scrubReady === "1") return;
          const text = el.textContent || "";
          el.innerHTML = text
            .split(/(\s+)/)
            .map((w) =>
              /\s+/.test(w)
                ? w
                : `<span class="scrub-word" style="display:inline-block;opacity:0.15;will-change:opacity;">${w}</span>`
            )
            .join("");
          el.dataset.scrubReady = "1";
          const words = el.querySelectorAll<HTMLElement>(".scrub-word");
          gsap.to(words, {
            opacity: 1,
            ease: "none",
            stagger: { each: 1, from: "start" },
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              end: "bottom 50%",
              scrub: isMobile ? 0.6 : 1,
            },
          });
        });

        // ───────────────────────────────────────────────────────────────
        // EFFECT 3 — Hero shrink + dim + watermark counter-scale
        // ───────────────────────────────────────────────────────────────
        if (!isMobile) {
          document.querySelectorAll<HTMLElement>("[data-hero-shrink]").forEach((hero) => {
            const inner = hero.querySelector<HTMLElement>("[data-hero-inner]") || hero;
            const content = hero.querySelector<HTMLElement>("[data-hero-content]");
            const watermark = hero.querySelector<HTMLElement>("[data-hero-watermark]");

            gsap.to(inner, {
              scale: 0.88,
              borderRadius: "24px",
              ease: "none",
              scrollTrigger: {
                trigger: hero,
                start: "top top",
                end: "bottom top",
                scrub: true,
              },
            });
            gsap.to(inner, {
              opacity: 0.6,
              ease: "none",
              scrollTrigger: {
                trigger: hero,
                start: "top top",
                end: "bottom top",
                scrub: true,
              },
            });
            if (content) {
              gsap.to(content, {
                yPercent: -10,
                ease: "none",
                scrollTrigger: {
                  trigger: hero,
                  start: "top top",
                  end: "bottom top",
                  scrub: true,
                },
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
                    scrub: true,
                  },
                }
              );
            }
          });
        }

        // ───────────────────────────────────────────────────────────────
        // EFFECT 4 — Horizontal pinned province cards (desktop only)
        // ───────────────────────────────────────────────────────────────
        if (!isMobile) {
          document.querySelectorAll<HTMLElement>("[data-horizontal-pin]").forEach((section) => {
            const track = section.querySelector<HTMLElement>("[data-horizontal-track]");
            const progress = section.querySelector<HTMLElement>("[data-horizontal-progress]");
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
                invalidateOnRefresh: true,
              },
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
                    scrub: true,
                  },
                }
              );
            }
          });
        }

        // ───────────────────────────────────────────────────────────────
        // EFFECT 5 — Scrubbed number counters
        // ───────────────────────────────────────────────────────────────
        document.querySelectorAll<HTMLElement>("[data-counter-scrub]").forEach((el) => {
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
              scrub: true,
            },
            onUpdate: () => {
              el.textContent = Math.round(obj.val).toLocaleString() + suffix;
            },
          });
        });

        // One-shot countup variant
        document.querySelectorAll<HTMLElement>("[data-counter]").forEach((el) => {
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
                },
              });
            },
          });
        });

        // ───────────────────────────────────────────────────────────────
        // EFFECT 6 — Staggered card entry with depth
        // ───────────────────────────────────────────────────────────────
        const depthGroups = new Map<Element, HTMLElement[]>();
        document
          .querySelectorAll<HTMLElement>("[data-card-depth], .card-tyc:not([data-drop-card]), [data-card]")
          .forEach((el) => {
            if (el.dataset.revealed === "1") return;
            const parent = el.parentElement;
            if (!parent) return;
            if (!depthGroups.has(parent)) depthGroups.set(parent, []);
            depthGroups.get(parent)!.push(el);
          });
        depthGroups.forEach((cards) => {
          cards.forEach((c) => (c.dataset.revealed = "1"));
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
              toggleActions: "play none none none",
            },
          });
        });

        // Drop cards (Get Involved) — preserved
        const dropCards = document.querySelectorAll<HTMLElement>("[data-drop-card]");
        if (dropCards.length) {
          dropCards.forEach((c) => (c.dataset.revealed = "1"));
          gsap.from(dropCards, {
            y: -20,
            opacity: 0,
            duration: 0.7,
            ease: "power2.out",
            stagger: 0.2,
            scrollTrigger: {
              trigger: dropCards[0],
              start: "top 85%",
              toggleActions: "play none none none",
            },
          });
        }

        // Headings + eyebrows reveal
        document.querySelectorAll<HTMLElement>("h2, .reveal-up").forEach((el) => {
          if (el.dataset.revealed === "1") return;
          if (el.hasAttribute("data-scrub-text")) return;
          el.dataset.revealed = "1";
          gsap.from(el, {
            y: 40,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" },
          });
        });
        document.querySelectorAll<HTMLElement>(".eyebrow").forEach((el) => {
          if (el.dataset.revealed === "1") return;
          el.dataset.revealed = "1";
          gsap.from(el, {
            y: 20,
            opacity: 0,
            duration: 0.7,
            delay: 0.15,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" },
          });
        });

        // Hero word stagger (kept from before)
        document.querySelectorAll<HTMLElement>("[data-stagger-words]").forEach((el) => {
          if (el.dataset.staggerSplit === "done") return;
          const lines = el.innerHTML.split(/<br\s*\/?>/i);
          el.innerHTML = lines
            .map((line) =>
              line.replace(
                /(<[^>]+>[^<]*<\/[^>]+>|[^\s<]+)/g,
                (m) => `<span class="word-inner" style="display:inline-block;will-change:transform,opacity;">${m}</span>`
              )
            )
            .join("<br/>");
          el.dataset.staggerSplit = "done";
          gsap.from(el.querySelectorAll(".word-inner"), {
            yPercent: 110,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.08,
            delay: 0.1,
          });
        });

        // Portrait subtle zoom
        document.querySelectorAll<HTMLElement>("[data-portrait-zoom]").forEach((el) => {
          gsap.fromTo(
            el,
            { scale: 0.95, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" },
            }
          );
        });

        // Quote draw-line
        document.querySelectorAll<HTMLElement>("[data-draw-line]").forEach((el) => {
          gsap.fromTo(
            el,
            { height: "0%" },
            {
              height: "100%",
              duration: 1.2,
              ease: "power2.out",
              scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" },
            }
          );
        });

        // ───────────────────────────────────────────────────────────────
        // EFFECT 7 — Page background color transition between sections
        // ───────────────────────────────────────────────────────────────
        const bgSections = document.querySelectorAll<HTMLElement>("[data-bg]");
        if (bgSections.length) {
          // Make sections transparent so body bg shows through
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
              onEnterBack: () => gsap.to(document.body, { backgroundColor: target, duration: 0.6, ease: "power2.out" }),
            });
          });
        }

        ScrollTrigger.refresh();
      });
    });

    return () => {
      ctx.revert();
      // Restore section backgrounds on unmount
      document.querySelectorAll<HTMLElement>("[data-bg]").forEach((s) => {
        if (s.dataset.origBg !== undefined) s.style.background = s.dataset.origBg;
      });
      document.body.style.backgroundColor = "";
    };
  }, [pathname]);

  return null;
}
