import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About, The Young Constituents" },
      { name: "description", content: "The Young Constituents was built on a single belief, that young people don't lack ideas. They lack the governing authority to act on them." },
    ],
  }),
  component: About,
});

const values = [
  "Independence before influence.",
  "Authority through accountability.",
  "Structure as the path to scale.",
  "Youth-led, youth-governed, no exceptions.",
  "Non-partisan in posture, decisive in action.",
];

function About() {
  return (
    <>
      {/* HERO */}
      <section style={{ background: "#080028", color: "#fff", marginTop: "-78px", paddingTop: "78px" }} className="relative">
        <div className="container-tyc pt-20 pb-28 lg:pt-28 lg:pb-36">
          <p className="eyebrow" style={{ color: "#FFA300" }}>
            <span style={{ color: "#FFA300" }}>About TYC</span>
          </p>
          <h1 className="text-white mt-8 display-hero max-w-4xl">
            We Don't Wait<br />to <span style={{ color: "#FFA300" }}>Lead.</span>
          </h1>
          <p className="mt-10 text-[17px] lg:text-[19px] max-w-2xl opacity-80 leading-relaxed">
            The Young Constituents was built on a single belief, that young people don't
            lack ideas or ambition. They lack the governing authority to act on them. We
            exist to change that.
          </p>
        </div>
      </section>

      {/* PREAMBLE PULL QUOTE */}
      <section className="section" style={{ background: "#E0E5F4" }}>
        <div className="container-tyc grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-2">
            <p className="eyebrow">Preamble</p>
          </div>
          <div className="lg:col-span-10">
            <div className="relative pl-6 lg:pl-10">
              <span
                aria-hidden
                data-draw-line
                className="absolute left-0 top-0 w-[4px]"
                style={{ background: "#FFA300", height: "0%" }}
              />
              <blockquote
                className="font-display font-semibold text-[#080028]"
                data-scrub-text
                style={{ fontSize: "clamp(28px, 4.2vw, 52px)", lineHeight: 1.15, letterSpacing: "-0.015em" }}
              >
                We hold that young people do not lack ideas or ambition; they lack the governing authority to act upon them.
              </blockquote>
              <p className="mt-10 text-[16px] text-[#4a5078] max-w-2xl leading-relaxed">
                TYC's founding principle is independent thought, interdependent action,
                that to govern together we must first learn to think for ourselves. We
                are independent in posture and decision-making, but interdependent in
                how we move the movement forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="section">
        <div className="container-tyc grid lg:grid-cols-12 gap-14">
          <div className="lg:col-span-4">
            <p className="eyebrow">Mission</p>
            <h2 className="mt-5 display-mega">Our Mission.</h2>
          </div>
          <div className="lg:col-span-8">
            <p className="text-[17px] sm:text-[19px] text-[#4a5078] leading-[1.6]">
              The Young Constituents establishes a parallel governance infrastructure in
              which young people learn by governing, running parliaments, managing
              organizations, debating policy, and holding one another accountable, so
              that upon entering public service, they are already leaders, organizers,
              and operational executives.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section" style={{ background: "#080028", color: "#fff" }}>
        <div className="container-tyc">
          <div className="max-w-2xl">
            <p className="eyebrow" style={{ color: "#FFA300" }}>
              <span style={{ color: "#FFA300" }}>Values</span>
            </p>
            <h2 className="text-white mt-4 display-mega">What We Stand For.</h2>
          </div>
          <ul className="mt-16 divide-y" style={{ borderColor: "rgba(255,255,255,0.12)", borderTop: "1px solid rgba(255,255,255,0.12)" }}>
            {values.map((v, i) => (
              <li key={v} className="py-7 grid grid-cols-12 gap-6 items-baseline">
                <span className="col-span-2 sm:col-span-1 font-display text-[12px]" style={{ color: "#FFA300" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="col-span-10 sm:col-span-11 text-white font-display font-semibold text-[22px] sm:text-[32px] leading-tight">
                  {v}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* STRUCTURE */}
      <section className="section">
        <div className="container-tyc">
          <div className="max-w-2xl">
            <p className="eyebrow">Structure</p>
            <h2 className="mt-4 display-mega">How TYC Is Built.</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mt-14">
            {[
              { tag: "Level 01", t: "National", b: "Strategy, partnerships, and constitutional authority. The C-Suite reports to the national parliament." },
              { tag: "Level 02", t: "Provincial", b: "Six provincial chapters with their own Model Parliament and provincial summit cycles." },
              { tag: "Level 03", t: "Local", b: "Two streams: Municipal Divisions (real parliamentary chambers, governed 20/80) and School Chapters (civic education and local advocacy)." },
            ].map((s) => (
              <article key={s.t} className="card-tyc p-8">
                <p className="font-display text-[11px] uppercase tracking-[0.18em] text-[#249EBF]">
                  {s.tag}
                </p>
                <h3 className="mt-4 text-[28px] leading-tight">{s.t}</h3>
                <span className="rule mt-5" />
                <p className="mt-5 text-[14px] text-[#4a5078] leading-relaxed">{s.b}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDING STORY */}
      <section className="section" style={{ background: "#E0E5F4" }}>
        <div className="container-tyc grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-3">
            <p className="eyebrow">Founding</p>
          </div>
          <div className="lg:col-span-9">
            <h2 className="display-mega">A Constitution Built by Its First Generation.</h2>
            <p className="mt-8 text-[16px] sm:text-[18px] text-[#4a5078] leading-relaxed max-w-3xl">
              The Young Constituents was founded by Xavier Davis and adopted on May 2,
              2026. It was built on the belief that young people govern best when given
              real stakes and real responsibility, not symbolic seats at adult tables.
              Six months from inception to a national chapter operating across six
              provinces.
            </p>
            <Link to="/join" className="btn btn-primary mt-10">Become a Member</Link>
          </div>
        </div>
      </section>
    </>
  );
}
