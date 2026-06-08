import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Instagram, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer style={{ background: "#080028", color: "#FFFFFF" }} className="relative">
      {/* Thin orange divider */}
      <div style={{ height: 3, background: "#FFA300" }} />

      <div className="container-tyc py-20 grid md:grid-cols-3 gap-14">
        <div>
          <Logo light />
          <p className="mt-7 font-display text-[12px] uppercase tracking-[0.22em]" style={{ color: "#FFA300" }}>
            Independent to Be Dependent
          </p>
          <p className="mt-6 text-[14px] opacity-70 max-w-xs leading-relaxed">
            A national youth governance movement building Canada's next generation of
            civic leaders.
          </p>
          <p className="mt-8 text-[12px] opacity-50">
            © 2026 The Young Constituents
          </p>
        </div>

        <div>
          <h3 className="text-white text-[12px] uppercase tracking-[0.22em] font-display mb-6" style={{ color: "#FFA300" }}>
            Explore
          </h3>
          <ul className="space-y-3 text-[15px]">
            {[
              { to: "/", l: "Home" },
              { to: "/about", l: "About" },
              { to: "/team", l: "Our Team" },
              { to: "/events", l: "Events & News" },
              { to: "/join", l: "Get Involved" },
              { to: "/contact", l: "Contact" },
            ].map((x) => (
              <li key={x.to}>
                <Link to={x.to} className="opacity-85 hover:text-[#FFA300] transition">
                  {x.l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white text-[12px] uppercase tracking-[0.22em] font-display mb-6" style={{ color: "#FFA300" }}>
            Connect
          </h3>
          <ul className="space-y-4 text-[14px]">
            <li>
              <a href="#" aria-label="Instagram" className="flex items-center gap-3 opacity-85 hover:text-[#FFA300] transition">
                <Instagram size={16} /> @theyoungconstituents
              </a>
            </li>
            <li>
              <a href="#" aria-label="LinkedIn" className="flex items-center gap-3 opacity-85 hover:text-[#FFA300] transition">
                <Linkedin size={16} /> The Young Constituents
              </a>
            </li>
            <li>
              <a href="mailto:contact@theyoungconstituents.ca" aria-label="Email" className="flex items-center gap-3 opacity-85 hover:text-[#FFA300] transition">
                <Mail size={16} /> contact@theyoungconstituents.ca
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
