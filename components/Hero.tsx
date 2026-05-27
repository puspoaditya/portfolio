import Image from "next/image";
import { profile } from "@/lib/config";

export function Hero() {
  return (
    <section className="relative dot-grid overflow-hidden">
      {/* subtle bottom divider */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7c5cff]/30 to-transparent" aria-hidden />

      <div className="container-x relative py-16 sm:py-24 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left: copy ── */}
          <div>
            <div className="chip mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available for 2 projects this month
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.07]">
              I build{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#9d7fff] via-[#7c5cff] to-[#5b8cff] bg-clip-text text-transparent">
                  websites & apps
                </span>
                <span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-[#7c5cff]/0 via-[#7c5cff]/60 to-[#7c5cff]/0" />
              </span>{" "}
              that grow local service businesses.
            </h1>
            <p className="mt-5 text-[1.05rem] text-[#8a8a98] leading-relaxed max-w-xl">
              Solo full-stack developer helping barbershops, salons, plumbers, electricians,
              cleaners, landscapers, and mobile mechanics turn visitors into booked jobs — fast
              sites, real bookings, real revenue.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={profile.whatsappLink} target="_blank" rel="noreferrer" className="btn btn-primary">
                <WAIcon /> Message me on WhatsApp
              </a>
              <a href={profile.emailLink} className="btn btn-ghost">
                <MailIcon /> Email me
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                ["7+", "Projects shipped"],
                ["3×", "Avg. booking lift"],
                ["48h", "First mockup"],
                ["Solo", "No agency markup"],
              ].map(([k, v]) => (
                <div key={v} className="card p-3.5 shine">
                  <div className="text-xl font-bold text-white">{k}</div>
                  <div className="text-[11px] text-[#666676] mt-0.5 leading-tight">{v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: profile photo with duotone + offset-border hover ── */}
          <div className="hidden lg:flex justify-center items-center">
            <ProfilePhoto />
          </div>

        </div>

        {/* industry chips row */}
        <div className="mt-14 flex flex-wrap gap-2 items-center">
          <span className="text-xs text-[#555566] mr-1">Industries I serve:</span>
          {["💈 Barber Shop","💅 Beauty Salon","🧽 Cleaning","⚡ Electrician","🌿 Landscaper","🔧 Mechanic","🔧 Plumber"].map(x => (
            <span key={x} className="text-xs px-3 py-1 rounded-full border border-[#26262c] text-[#888896] hover:border-[#3a3a48] hover:text-[#ededf0] transition-colors cursor-default">
              {x}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProfilePhoto() {
  return (
    /*
     * Duotone hover effect (Brittany Chiang style):
     * - Default: accent-color overlay via mix-blend-mode multiply on a ::before-like div
     * - Hover: overlay fades to 0, natural photo colors reveal
     * - Offset border animates from bottom-right corner to top-left on hover
     */
    <div className="relative w-[500px] h-[500px] group">

      {/* offset border — starts bottom-right, moves top-left on hover */}
      <div className="absolute inset-0 rounded-lg border-2 border-[#22d3ee]/60
        translate-x-4 translate-y-4
        group-hover:translate-x-2 group-hover:translate-y-2
        transition-transform duration-300 ease-in-out z-0" />

      {/* photo wrapper */}
      <div className="relative w-full h-full rounded-lg overflow-hidden z-10">

        {/* the photo */}
        <Image
          src="/profile.jpg"
          alt={profile.name}
          fill
          className="object-cover"
          sizes="500px"
          priority
        />

        {/* duotone overlay: accent color tint, fades on hover */}
        <div className="absolute inset-0 bg-[#22d3ee]/60 mix-blend-multiply
          opacity-100 group-hover:opacity-0
          transition-opacity duration-300 ease-in-out" />
      </div>
    </div>
  );
}

function WAIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.5 3.5A11 11 0 0 0 3.6 17.4L2 22l4.7-1.5A11 11 0 1 0 20.5 3.5Zm-8.5 18a9 9 0 0 1-4.6-1.3l-.3-.2-2.8.9.9-2.7-.2-.3A9 9 0 1 1 12 21.5Zm5.2-6.6c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.2-.7.2s-.8 1-1 1.2c-.2.2-.4.2-.7 0-.3-.2-1.2-.5-2.3-1.5-.9-.8-1.5-1.7-1.7-2-.2-.3 0-.5.1-.7.1-.1.3-.4.4-.6.1-.2.2-.3.3-.5.1-.2 0-.4 0-.6 0-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1.1 1.1-1.1 2.6 0 1.6 1.1 3 1.3 3.2.2.3 2.2 3.4 5.4 4.8.8.3 1.4.5 1.8.6.8.3 1.5.2 2 .1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4 0-.1-.3-.2-.6-.4Z"/>
    </svg>
  );
}
function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}
