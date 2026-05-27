import { profile } from "@/lib/config";

export function Contact() {
  return (
    <section id="contact" className="container-x py-20">
      <div className="card p-8 sm:p-12 relative overflow-hidden">
        <div
          className="absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl opacity-40"
          style={{ background: "radial-gradient(circle, #7c5cff, transparent 60%)" }}
        />
        <div className="relative">
          <div className="eyebrow">Let’s talk</div>
          <h2 className="section-title mt-2 max-w-2xl">
            Tell me about your business. I’ll reply within a few hours.
          </h2>
          <p className="text-muted mt-3 max-w-xl">
            The fastest way to start is a quick WhatsApp message. If you prefer, email works too — I read every one.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a href={profile.whatsappLink} target="_blank" rel="noreferrer" className="btn btn-primary">
              WhatsApp · {profile.phone}
            </a>
            <a href={profile.emailLink} className="btn btn-ghost">
              Email · {profile.email}
            </a>
          </div>

          <div className="mt-8 grid sm:grid-cols-3 gap-4 text-sm">
            <Info label="Location" value={profile.location} />
            <Info label="Response time" value="Within a few hours, Mon–Sat" />
            <Info label="Availability" value="2 project slots open this month" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-widest text-muted">{label}</div>
      <div className="mt-1 text-text">{value}</div>
    </div>
  );
}
