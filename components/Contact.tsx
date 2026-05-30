"use client";
import { profile } from "@/lib/config";
import { useLanguage } from "@/context/LanguageContext";
import { getT } from "@/lib/translations";

export function Contact() {
  const { lang } = useLanguage();
  const t = getT(lang);

  return (
    <section id="contact" className="container-x py-20">
      <div className="card p-8 sm:p-12 relative overflow-hidden">
        <div
          className="absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl opacity-40"
          style={{ background: "radial-gradient(circle, #7c5cff, transparent 60%)" }}
        />
        <div className="relative">
          <div className="eyebrow">{t.contact.eyebrow}</div>
          <h2 className="section-title mt-2 max-w-2xl">{t.contact.title}</h2>
          <p className="text-muted mt-3 max-w-xl">{t.contact.desc}</p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a href={profile.whatsappLink} target="_blank" rel="noreferrer" className="btn btn-primary">
              WhatsApp · {profile.phone}
            </a>
            <a href={profile.emailLink} className="btn btn-ghost">
              Email · {profile.email}
            </a>
          </div>

          <div className="mt-8 grid sm:grid-cols-3 gap-4 text-sm">
            {t.contact.info.map((i) => (
              <div key={i.label}>
                <div className="text-xs uppercase tracking-widest text-muted">{i.label}</div>
                <div className="mt-1 text-text">{i.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
