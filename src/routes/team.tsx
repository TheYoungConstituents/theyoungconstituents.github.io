import { createFileRoute, Link } from "@tanstack/react-router";
import { Placeholder } from "@/components/Placeholder";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Our Team, The Young Constituents" },
      { name: "description", content: "Meet the national executive and provincial leadership of The Young Constituents." },
    ],
  }),
  component: Team,
});

const executive = [
  { name: "Xavier Davis", role: "Founding Director & CEO" },
  { name: "Amayas Bhatia", role: "Chief Operating Officer" },
  { name: "Tima Karimi", role: "Chief Communications Officer" },
  { name: "Jaslin Chana", role: "Chief Development Officer" },
  { name: "Samil Karaduman", role: "Chief Information Officer" },
];

const provinces = [
  "Ontario",
  "Quebec",
  "Alberta",
  "Nova Scotia",
  "New Brunswick",
  "Saskatchewan",
];

function Team() {
  return (
    <>
      {/* HERO */}
      <section style={{ background: "#080028", color: "#fff", marginTop: "-78px", paddingTop: "78px" }}>
        <div className="container-tyc pt-20 pb-28 lg:pt-28 lg:pb-36">
          <p className="eyebrow" style={{ color: "#FFA300" }}>
            <span style={{ color: "#FFA300" }}>The Team</span>
          </p>
          <h1 className="text-white mt-8 display-hero max-w-4xl">
            The People<br /><span style={{ color: "#FFA300" }}>Building This.</span>
          </h1>
        </div>
      </section>

      {/* NATIONAL EXECUTIVE */}
      <section className="section">
        <div className="container-tyc">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div className="max-w-xl">
              <p className="eyebrow">National Executive</p>
              <h2 className="mt-4 display-mega">The C-Suite.</h2>
            </div>
            <p className="text-[14px] text-[#4a5078] max-w-sm">
              Five executives accountable to the National Parliament under the
              constitution adopted May 2, 2026.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {executive.map((m) => (
              <article key={m.name} className="group">
                <Placeholder label={`${m.name} · 400 × 600`} ratio="2/3" />
                <div className="mt-5">
                  <h3 className="text-[20px] leading-tight">{m.name}</h3>
                  <p className="mt-3 font-display text-[11px] uppercase tracking-[0.15em] text-[#249EBF]">
                    {m.role}
                  </p>
                  <span
                    className="block mt-4 transition-all"
                    style={{ height: 2, width: 32, background: "#FFA300" }}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROVINCIAL PRESIDENTS */}
      <section className="section" style={{ background: "#E0E5F4" }}>
        <div className="container-tyc">
          <div className="max-w-2xl">
            <p className="eyebrow">Provincial Leadership</p>
            <h2 className="mt-4 display-mega">Six Presidents. Six Provinces.</h2>
            <p className="mt-6 text-[15px] text-[#4a5078] max-w-xl leading-relaxed">
              Provincial Presidents lead their chapter's Model Parliament, summits, and
              cross-division coordination. Appointments in progress.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {provinces.map((p) => (
              <article key={p} className="bg-white card-tyc">
                <Placeholder label={`${p} President · 400 × 500`} ratio="4/5" />
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <span
                      className="font-display text-[10px] uppercase tracking-[0.18em] py-1.5 px-3"
                      style={{ background: "#249EBF", color: "#fff" }}
                    >
                      {p}
                    </span>
                  </div>
                  <h3 className="mt-5 text-[20px] leading-tight">TBD, Coming Soon</h3>
                  <p className="mt-3 font-display text-[11px] uppercase tracking-[0.15em] text-[#249EBF]">
                    Provincial President
                  </p>
                  <span className="block mt-4" style={{ height: 2, width: 32, background: "#FFA300" }} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* JOIN THE TEAM CTA */}
      <section className="section" style={{ background: "#080028", color: "#fff" }}>
        <div className="container-tyc grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8">
            <p className="eyebrow" style={{ color: "#FFA300" }}>
              <span style={{ color: "#FFA300" }}>Open Positions</span>
            </p>
            <h2 className="text-white mt-4 display-mega max-w-3xl">
              Want to Be Part of This?
            </h2>
            <p className="mt-6 text-[16px] opacity-80 max-w-xl leading-relaxed">
              We are building the next generation of civic leaders. See our open
              positions on the national team.
            </p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <Link to="/join" hash="positions" className="btn btn-primary">
              View Open Positions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
