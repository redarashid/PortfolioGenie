import { Sparkles } from "lucide-react";

const links = ["Features", "About", "Privacy", "Terms"];

export default function Footer() {
  return (
    <footer className="bg-[#1A1627] px-6 pb-8 pt-6 md:px-16">
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <a href="/" className="flex items-center gap-2 text-white">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#6B55E0]">
            <Sparkles size={16} />
          </span>
          <span className="text-2xl font-medium">
            Folio<span className="text-[#6B5BDB]">.</span>
          </span>
        </a>

        <p className="text-[13px] text-[#8A869B] md:mr-12 md:mt-5 md:max-w-[360px]">
          Helping developers tell better stories about the work they build.
        </p>
      </div>

      <nav className="mt-8 flex flex-wrap gap-8 text-[13px] text-[#8A869B] md:pl-[270px]">
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="transition hover:text-white"
          >
            {link}
          </a>
        ))}
      </nav>

      <div className="mt-8 border-t border-white/10 pt-5 text-[11px] text-[#8A869B]">
        © 2026 Folio. Built by Group 3.
      </div>
    </footer>
  );
}
