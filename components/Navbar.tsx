"use client";
import Link from "next/link";
import Image from "next/image";
import { profile } from "@/lib/config";
import { useLanguage } from "@/context/LanguageContext";
import { getT } from "@/lib/translations";

export function Navbar() {
  const { lang, setLang } = useLanguage();
  const t = getT(lang);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-bg/70 border-b border-border/60">
      <div className="container-x flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <Image src="/nav-logo.png" alt="Logo" width={28} height={28} className="w-7 h-7 object-contain" />
          <span className="text-lg">{profile.name}</span>
        </Link>

        <nav className="hidden sm:flex items-center gap-6 text-sm text-muted">
          <a href="#services" className="hover:text-text">{t.nav.services}</a>
          <a href="#portfolio" className="hover:text-text">{t.nav.portfolio}</a>
          <a href="#process" className="hover:text-text">{t.nav.process}</a>
          <a href="#contact" className="hover:text-text">{t.nav.contact}</a>
        </nav>

        <div className="flex items-center gap-3">
          {/* language toggle */}
          <div className="flex items-center rounded-lg border border-[#26262c] overflow-hidden text-xs font-semibold">
            <button
              onClick={() => setLang("en")}
              className={`px-3 py-1.5 transition-colors ${lang === "en" ? "bg-[#7c5cff] text-white" : "text-[#666676] hover:text-white"}`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("id")}
              className={`px-3 py-1.5 transition-colors ${lang === "id" ? "bg-[#7c5cff] text-white" : "text-[#666676] hover:text-white"}`}
            >
              ID
            </button>
          </div>

          <a href={profile.whatsappLink} target="_blank" rel="noreferrer" className="btn btn-primary text-sm">
            {t.nav.hire}
          </a>
        </div>
      </div>
    </header>
  );
}
