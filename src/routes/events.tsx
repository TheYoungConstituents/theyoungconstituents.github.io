import { createFileRoute, Link } from "@tanstack/react-router";
import { Placeholder } from "@/components/Placeholder";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events & News, The Young Constituents" },
      { name: "description", content: "Announcements, events, and dispatches from The Young Constituents." },
    ],
  }),
  component: Events,
});

const featured = {
  d: "12", m: "Jun", year: "2026",
  title: "First Quarterly National Meeting",
  location: "Virtual · All Provinces",
  desc: "The inaugural quarterly meeting of the National Parliament. Provincial Presidents and the C-Suite convene to report, debate, and set the agenda for Q3 2026.",
};

const posts = [
  { d: "02", m: "May", year: "2026", kind: "Announcement", title: "TYC Launches in Six Provinces", excerpt: "The Young Constituents formally launches with chapters active in Ontario, Quebec, Alberta, Nova Scotia, New Brunswick, and Saskatchewan." },
  { d: "08", m: "May", year: "2026", kind: "Announcement", title: "First Quarterly National Meeting Announced", excerpt: "The National Parliament will hold its first quarterly meeting on June 12, opening the floor to all Provincial Presidents and Local Directors." },
  { d: "20", m: "May", year: "2026", kind: "Framework", title: "Municipal Division Framework Now Active", excerpt: "The 20/80 governance model is now in effect across active Municipal Divisions, formally codifying member responsibilities and chamber procedure." },
];

function DateBadge({ d, m, year, large = false }: { d: string; m: string; year?: string; large?: boolean }) {
  return (
    <div
      className="inline-flex flex-col items-center justify-center leading-none shrink-0 text-center"
      style={{
        border: "2px solid #080028",
        padding: large ? "0.6rem 1rem" : "0.4rem 0.7rem",
        minWidth: large ? 84 : 60,
      }}
    >
      <div className="font-display font-bold text-[#080028]" style={{ fontSize: large ? 32 : 22 }}>
        {d}
      </div>
      <div className="font-display uppercase mt-1" style={{ color: "#FFA300", fontSize: large ? 12 : 10, letterSpacing: "0.18em" }}>
        {m}
      </div>
      {year && (
        <div className="font-display mt-1 opacity-60" style={{ color: "#080028", fontSize: large ? 11 : 9, letterSpacing: "0.12em" }}>
          {year}
        </div>
      )}
    </div>
  );
}

function Events() {
  return (
    <>
      {/* HERO */}
      <section style={{ background: "#080028", color: "#fff", marginTop: "-78px", paddingTop: "78px" }}>
        <div className="container-tyc pt-20 pb-28 lg:pt-28 lg:pb-32">
          <p className="eyebrow" style={{ color: "#FFA300" }}>
            <span style={{ color: "#FFA300" }}>News · Events</span>
          </p>
          <h1 className="text-white mt-8 display-hero max-w-4xl">
            What's Happening<br />at <span style={{ color: "#FFA300" }}>TYC.</span>
          </h1>
        </div>
      </section>

      {/* FEATURED */}
      <section className="section">
        <div className="container-tyc">
          <p className="eyebrow mb-8">Featured</p>
          <article className="card-tyc grid lg:grid-cols-12 overflow-hidden">
            <div className="lg:col-span-7">
              <Placeholder label="Featured event · 1200 × 600" ratio="16/9" />
            </div>
            <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col">
              <div className="flex items-center gap-4">
                <DateBadge d={featured.d} m={featured.m} year={featured.year} large />
                <span className="font-display text-[11px] uppercase tracking-[0.18em] text-[#249EBF]">
                  National Meeting
                </span>
              </div>
              <h2 className="mt-7 text-[28px] sm:text-[36px] leading-tight">{featured.title}</h2>
              <p className="mt-5 text-[14px] text-[#4a5078] leading-relaxed flex-1">{featured.desc}</p>
              <p className="mt-5 font-display text-[12px] uppercase tracking-[0.15em] text-[#080028]">
                {featured.location}
              </p>
              <a href="#" className="btn btn-primary mt-7 self-start">
                Learn More <ArrowRight size={14} />
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* GRID */}
      <section className="section" style={{ background: "#E0E5F4" }}>
        <div className="container-tyc">
          <div className="max-w-2xl">
            <p className="eyebrow">Latest</p>
            <h2 className="mt-4 display-mega">News & Updates.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-14">
            {posts.map((p) => (
              <article key={p.title} className="bg-white card-tyc flex flex-col">
                <Placeholder label={`${p.kind} cover`} ratio="4/3" />
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-3">
                    <DateBadge d={p.d} m={p.m} year={p.year} />
                    <span className="font-display text-[11px] uppercase tracking-[0.18em] text-[#249EBF]">
                      {p.kind}
                    </span>
                  </div>
                  <h3 className="mt-6 text-[20px] leading-snug">{p.title}</h3>
                  <p className="mt-3 text-[14px] text-[#4a5078] leading-relaxed flex-1">{p.excerpt}</p>
                  <a href="#" className="mt-5 font-display text-[12px] uppercase tracking-[0.18em] self-start pb-1" style={{ color: "#249EBF", borderBottom: "2px solid #FFA300" }}>
                    Read More →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SUBMIT */}
      <section className="section">
        <div className="container-tyc text-center max-w-2xl mx-auto">
          <p className="eyebrow justify-center">Submissions</p>
          <h2 className="mt-5 text-[28px] sm:text-[36px]">Have an event to submit?</h2>
          <p className="mt-5 text-[15px] text-[#4a5078]">
            Chapter leaders and Municipal Directors can submit events for inclusion.
          </p>
          <Link to="/contact" className="btn btn-ghost mt-8">Contact Us</Link>
        </div>
      </section>
    </>
  );
}
