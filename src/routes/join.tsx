import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useQuery } from "@tanstack/react-query";
import { UserPlus, Building2, GraduationCap, ArrowRight, Briefcase } from "lucide-react";
import { APPLY_LINKS, getOpenPostings } from "@/lib/tyc.functions";

export const Route = createFileRoute("/join")({
  head: () => ({
    meta: [
      { title: "Get Involved, The Young Constituents" },
      { name: "description", content: "Become a member, start a Municipal Division, or launch a School Chapter. Three paths into TYC." },
    ],
  }),
  component: Join,
});

const paths = [
  {
    Icon: UserPlus,
    title: "Become a Member",
    body: "Join a Municipal Division or School Chapter in your province. Ages 13 to 28. Earn an active seat, participate in parliamentary proceedings, and help shape your community.",
    cta: "Apply to Be a Member",
    url: APPLY_LINKS.member,
    primary: true,
  },
  {
    Icon: Building2,
    title: "Start a Municipal Division",
    body: "Want to bring the parliamentary model to your city or riding? Apply to establish a Municipal Division and become a Local Director.",
    cta: "Apply to Start a Municipal Chapter",
    url: APPLY_LINKS.municipal,
    primary: false,
  },
  {
    Icon: GraduationCap,
    title: "Start a School Chapter",
    body: "Bring TYC to your school. Lead civic education, model parliament, and advocacy from the ground up as Chapter President.",
    cta: "Apply to Start a School Chapter",
    url: APPLY_LINKS.school,
    primary: false,
  },
];

function Join() {
  const fetchPostings = useServerFn(getOpenPostings);
  const { data } = useQuery({
    queryKey: ["postings"],
    queryFn: () => fetchPostings(),
  });
  const postings = data?.postings ?? [];

  return (
    <>
      {/* HERO */}
      <section style={{ background: "#080028", color: "#fff", marginTop: "-78px", paddingTop: "78px" }}>
        <div className="container-tyc pt-20 pb-28 lg:pt-28 lg:pb-32">
          <p className="eyebrow" style={{ color: "#FFA300" }}>
            <span style={{ color: "#FFA300" }}>Get Involved</span>
          </p>
          <h1 className="text-white mt-8 display-hero max-w-4xl">
            Your Seat<br />Is <span style={{ color: "#FFA300" }}>Waiting.</span>
          </h1>
          <p className="mt-10 text-[17px] lg:text-[19px] max-w-2xl opacity-80 leading-relaxed">
            Whether you're 13 or 28, in a school or a city, there is a place for you in
            TYC.
          </p>
        </div>
      </section>

      {/* THREE PATHS */}
      <section className="section">
        <div className="container-tyc">
          <p className="eyebrow mb-8">Three Paths</p>
          <div className="grid md:grid-cols-3 gap-6">
            {paths.map(({ Icon, title, body, cta, url, primary }) => (
              <article
                key={title}
                className="card-tyc p-8 flex flex-col"
                style={{ minHeight: 420 }}
              >
                <div
                  className="w-14 h-14 inline-flex items-center justify-center"
                  style={{ background: "#E0E5F4", color: "#080028" }}
                >
                  <Icon size={26} strokeWidth={1.6} />
                </div>
                <h3 className="mt-7 text-[24px] leading-tight">{title}</h3>
                <span className="rule mt-5" />
                <p className="mt-5 text-[14px] text-[#4a5078] leading-relaxed flex-1">{body}</p>
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className={`btn mt-7 ${primary ? "btn-primary" : "btn-ghost"}`}
                  aria-label={cta}
                >
                  {cta} <ArrowRight size={14} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* OPEN POSITIONS */}
      <section id="positions" className="section" style={{ background: "#E0E5F4" }}>
        <div className="container-tyc">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="max-w-xl">
              <p className="eyebrow">Open Positions</p>
              <h2 className="mt-4 display-mega">We're Growing.</h2>
              <p className="mt-6 text-[15px] text-[#4a5078] max-w-md">
                Join the national team. New postings are added regularly.
              </p>
            </div>
            <p className="font-display text-[12px] uppercase tracking-[0.18em] text-[#249EBF]">
              {postings.length} {postings.length === 1 ? "Position" : "Positions"} Open
            </p>
          </div>

          <div className="space-y-5">
            {postings.length === 0 && (
              <p className="text-[15px] text-[#4a5078]">No positions are currently open. Check back soon.</p>
            )}
            {postings.map((p) => (
              <article
                key={p.id}
                className="bg-white card-tyc p-6 md:p-8 grid md:grid-cols-12 gap-6 items-start"
              >
                <div className="md:col-span-1 hidden md:block">
                  <div
                    className="w-12 h-12 inline-flex items-center justify-center"
                    style={{ background: "#E0E5F4", color: "#249EBF" }}
                  >
                    <Briefcase size={20} strokeWidth={1.6} />
                  </div>
                </div>
                <div className="md:col-span-8">
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className="font-display text-[10px] uppercase tracking-[0.18em] py-1 px-2.5"
                      style={{ background: "#080028", color: "#fff" }}
                    >
                      {p.level}
                    </span>
                    <span className="font-display text-[10px] uppercase tracking-[0.18em] text-[#249EBF]">
                      {p.type}
                    </span>
                  </div>
                  <h3 className="mt-4 text-[22px] leading-tight">{p.title}</h3>
                  <p className="mt-3 text-[14px] text-[#4a5078] leading-relaxed">{p.description}</p>
                </div>
                <div className="md:col-span-3 md:text-right">
                  <a
                    href={p.apply_url || "#"}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="btn btn-primary"
                    aria-label={`Apply for ${p.title}`}
                  >
                    Apply Now
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
