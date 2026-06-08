import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { to: "/about", label: "About" },
  { to: "/team", label: "Our Team" },
  { to: "/events", label: "Events" },
  { to: "/join", label: "Get Involved" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(8,0,63,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 6px 24px -16px rgba(0,0,0,0.5)" : "none",
      }}
    >
      <div className="container-tyc flex items-center justify-between h-[78px]">
        <Logo light />

        <nav className="hidden lg:flex items-center gap-9" aria-label="Primary">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="nav-link-dark"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/join"
            className="btn btn-primary !py-2.5 !px-5"
            aria-label="Become a Member"
          >
            Become a Member
          </Link>
        </nav>

        <button
          className="lg:hidden p-2 -mr-2"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
        >
          <Menu size={26} color="#FFFFFF" />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        style={{ background: "rgba(8,0,63,0.7)" }}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      >
        <aside
          className={`absolute top-0 right-0 h-full w-[88%] max-w-sm shadow-2xl transition-transform ${open ? "translate-x-0" : "translate-x-full"}`}
          style={{ background: "#080028" }}
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-label="Mobile navigation"
        >
          <div className="flex items-center justify-between h-[78px] px-6" style={{ borderBottom: "1px solid rgba(255,255,255,0.12)" }}>
            <Logo light />
            <button onClick={() => setOpen(false)} aria-label="Close menu" className="p-2 -mr-2">
              <X size={24} color="#FFFFFF" />
            </button>
          </div>
          <nav className="flex flex-col px-6 py-8 gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="font-display font-semibold text-[22px] py-4 text-white"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
                activeProps={{ style: { color: "#FFA300", borderBottom: "1px solid rgba(255,255,255,0.08)" } }}
              >
                {l.label}
              </Link>
            ))}
            <Link to="/join" onClick={() => setOpen(false)} className="btn btn-primary mt-8">
              Become a Member
            </Link>
          </nav>
        </aside>
      </div>
    </header>
  );
}
