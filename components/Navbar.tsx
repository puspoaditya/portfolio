import Link from "next/link";
import { profile } from "@/lib/config";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-bg/70 border-b border-border/60">
      <div className="container-x flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="inline-block w-7 h-7 rounded-lg bg-gradient-to-br from-accent to-accent2" />
          <span>{profile.name}</span>
        </Link>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-muted">
          <a href="#services" className="hover:text-text">Services</a>
          <a href="#portfolio" className="hover:text-text">Portfolio</a>
          <a href="#process" className="hover:text-text">Process</a>
          <a href="#contact" className="hover:text-text">Contact</a>
        </nav>
        <a href={profile.whatsappLink} target="_blank" rel="noreferrer" className="btn btn-primary text-sm">
          Hire me
        </a>
      </div>
    </header>
  );
}
