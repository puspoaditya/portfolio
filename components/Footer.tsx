import { profile } from "@/lib/config";

export function Footer() {
  return (
    <footer className="border-t border-border/60 mt-24">
      <div className="container-x py-10 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between text-sm text-muted">
        <div>
          <div className="text-text font-semibold">{profile.name}</div>
          <div>{profile.tagline}</div>
        </div>
        <div className="flex flex-col sm:items-end gap-1">
          <a className="hover:text-text" href={profile.emailLink}>{profile.email}</a>
          <a className="hover:text-text" href={profile.whatsappLink} target="_blank" rel="noreferrer">
            WhatsApp · {profile.phone}
          </a>
          <div>{profile.location}</div>
        </div>
      </div>
      <div className="container-x pb-8 text-xs text-muted/70">
        © {new Date().getFullYear()} {profile.name}. Built with Next.js.
      </div>
    </footer>
  );
}
