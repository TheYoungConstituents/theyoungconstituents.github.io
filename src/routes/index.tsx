import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Placeholder } from "@/components/Placeholder";
import { MemberCounter } from "@/components/MemberCounter";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Young Constituents, Youth Governance. Real Stakes. One Movement." },
      { name: "description", content: "TYC is building Canada's next generation of civic leaders through parallel governance, real parliaments, real accountability, real impact." },
      { property: "og:title", content: "The Young Constituents" },
      { property: "og:description", content: "Independent to Be Dependent. A national youth governance movement for Canadians aged 13 to 28." },
    ],
  }),
  component: Home,
});

const levels = [
  { n: "01", t: "School Chapter", b: "Where it begins. Civic education, model parliament, and local advocacy inside your school." },
  { n: "02", t: "Municipal Division", b: "A real parliamentary chamber. Governed by the 20/80 model. Your riding, your issues, your accountability." },
  { n: "03", t: "Provincial Chapter", b: "Six provinces. One competitive stage. Model Parliament, provincial summits, and cross-division leadership." },
  { n: "04", t: "National Level", b: "Strategy, partnerships, and constitutional authority. The national parliament where provinces hold the C-Suite accountable." },
];

const provinces = ["Ontario", "Quebec", "Alberta", "Nova Scotia", "New Brunswick", "Saskatchewan"];

const csuite = [
  { name: "Amayas Bhatia", role: "Chief Operating Officer" },
  { name: "Tima Karimi", role: "Chief Communications Officer" },
  { name: "Jaslin Chana", role: "Chief Development Officer" },
  { name: "Samil Karaduman", role: "Chief Information Officer" },
];

function Home() {
  return (
    <>
      {/* HERO, pulled up under the transparent sticky header */}
      <section
        style={{ background: "#080028", color: "#fff", marginTop: "-78px", paddingTop: "78px" }}
        className="relative overflow-hidden"
      >
        <div className="container-tyc relative pt-20 pb-0 lg:pt-28">
          <p className="eyebrow" style={{ color: "#FFA300" }}>
            <span style={{ color: "#FFA300" }}>National · Est. 2026</span>
          </p>

          <h1
            className="text-white mt-8 display-hero max-w-5xl"
          >
            Youth Governance.<br />
            Real Stakes.<br />
            <span style={{ color: "#FFA300" }}>One Movement.</span>
          </h1>

          <p className="mt-10 text-[17px] lg:text-[19px] max-w-2xl opacity-80 leading-relaxed">
            The Young Constituents is building Canada's next generation of civic leaders
            through parallel governance, real parliaments, real accountability, real
            impact.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 sm:items-start">
            <Link to="/join" className="btn btn-primary">
              Become a Member <ArrowRight size={16} />
            </Link>
            <Link to="/about" className="btn btn-secondary">
              Learn About TYC
            </Link>
          </div>

          {/* Stat bar */}
          <div className="mt-24 pb-16 grid grid-cols-3 max-w-2xl" style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}>
            {[
              { n: "100+", l: "Members" },
              { n: "6", l: "Provincial Chapters" },
              { n: "1", l: "Movement" },
            ].map((s, i) => (
              <div
                key={s.l}
                className="pt-7"
                style={{
                  borderRight: i < 2 ? "1px solid #FFA300" : undefined,
                  paddingLeft: i > 0 ? "1.5rem" : 0,
                }}
              >
                <div className="font-display text-[36px] sm:text-[44px] font-bold" style={{ color: "#FFA300" }}>
                  {s.n}
                </div>
                <div className="text-[11px] uppercase tracking-[0.18em] opacity-75 mt-2">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION STATEMENT, oversized */}
      <section className="section" style={{ background: "#E0E5F4" }}>
        <div className="container-tyc text-center">
          <p className="eyebrow justify-center">Our Statement</p>
          <h2
            className="mt-10 mx-auto max-w-5xl"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "clamp(48px, 8.5vw, 124px)",
              lineHeight: 0.95,
              letterSpacing: "-0.035em",
              color: "#080028",
            }}
          >
            Independent to Be Dependent.
          </h2>
          <p className="mt-12 mx-auto max-w-2xl text-[16px] sm:text-[18px] text-[#4a5078] leading-relaxed">
            We govern ourselves so we can govern together. TYC gives young Canadians
            aged 13 to 28 the authority, the structure, and the responsibility to lead
, not someday, but now.
          </p>
        </div>
      </section>

      {/* 4 LEVELS */}
      <section className="section relative overflow-hidden" style={{ background: "#080028", color: "#fff" }}>
        <div className="container-tyc relative">
          <div className="max-w-2xl">
            <p className="eyebrow" style={{ color: "#FFA300" }}>
              <span style={{ color: "#FFA300" }}>The Structure</span>
            </p>
            <h2 className="text-white mt-5 display-mega">4 Levels. One Ambition.</h2>
            <p className="mt-6 text-[16px] opacity-75 max-w-xl leading-relaxed">
              One structure. Built to scale from your school to the nation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-16">
            {levels.map((l) => (
              <article
                key={l.n}
                className="group p-7 transition-all"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  borderLeft: "3px solid transparent",
                  minHeight: 280,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderLeftColor = "#FFA300";
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderLeftColor = "transparent";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                }}
              >
                <div className="font-display font-bold text-[42px]" style={{ color: "#FFA300" }}>
                  {l.n}
                </div>
                <h3 className="text-white mt-5 text-[22px] leading-snug">{l.t}</h3>
                <p className="mt-4 text-[14px] opacity-75 leading-relaxed">{l.b}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MEMBER COUNTER */}
      <section className="section" style={{ background: "#E0E5F4" }}>
        <div className="container-tyc grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <p className="eyebrow">Live · Across Canada</p>
            <div className="mt-6">
              <MemberCounter />
            </div>
            <p className="mt-2 font-display font-semibold text-[22px] sm:text-[28px] text-[#080028]">
              Members and Growing
            </p>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[16px] text-[#4a5078] leading-relaxed max-w-md">
              Across 6 provinces. Ages 13 to 28. Building a parallel democracy from the
              ground up.
            </p>
            <Link to="/join" className="btn btn-primary mt-8">
              Become a Member <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* PROVINCIAL CHAPTERS */}
      <section className="section">
        <div className="container-tyc">
          <div className="max-w-2xl">
            <p className="eyebrow">Coast to Coast</p>
            <h2 className="mt-4 display-mega">Active Across Canada.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
            {provinces.map((p) => (
              <article
                key={p}
                className="card-tyc p-7 flex items-center justify-between"
              >
                <h3 className="text-[22px] leading-tight">{p}</h3>
                <span
                  className="font-display text-[10px] uppercase tracking-[0.18em] py-1.5 px-3"
                  style={{ background: "#E0E5F4", color: "#249EBF" }}
                >
                  Chapter Active
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM SPOTLIGHT */}
      <section className="section relative overflow-hidden" style={{ background: "#080028", color: "#fff" }}>
        <div className="container-tyc relative">
          <div className="max-w-2xl">
            <p className="eyebrow" style={{ color: "#FFA300" }}>
              <span style={{ color: "#FFA300" }}>Leadership</span>
            </p>
            <h2 className="text-white mt-4 display-mega">Led By Young Canadians.</h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 mt-16 items-start">
            {/* CEO spotlight */}
            <div className="lg:col-span-5">
              <Placeholder label="Xavier Davis · 400 × 600" ratio="2/3" />
              <div className="mt-6">
                <p className="font-display text-[11px] uppercase tracking-[0.18em]" style={{ color: "#FFA300" }}>
                  Founding Director & CEO
                </p>
                <h3 className="text-white mt-3 text-[30px] leading-tight">Xavier Davis</h3>
                <span className="block mt-4" style={{ height: 2, width: 48, background: "#FFA300" }} />
                <p className="mt-5 text-[15px] opacity-75 leading-relaxed max-w-md">
                  Founder of The Young Constituents. Architect of the parallel governance
                  model and constitutional framework adopted May 2026.
                </p>
              </div>
            </div>

            {/* C-suite grid */}
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
              {csuite.map((m) => (
                <article key={m.name}>
                  <Placeholder label={`${m.name} · 400 × 500`} ratio="4/5" />
                  <div className="mt-4">
                    <h4 className="text-white text-[18px] leading-tight">{m.name}</h4>
                    <span className="block mt-3" style={{ height: 2, width: 32, background: "#FFA300" }} />
                    <p className="mt-3 font-display text-[11px] uppercase tracking-[0.15em] opacity-70">
                      {m.role}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <Link
              to="/team"
              className="font-display text-[13px] uppercase tracking-[0.18em] inline-flex items-center gap-2 pb-1"
              style={{ color: "#FFA300", borderBottom: "2px solid #FFA300" }}
            >
              Meet the Full Team <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
