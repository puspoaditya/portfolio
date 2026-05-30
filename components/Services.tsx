"use client";
import { useLanguage } from "@/context/LanguageContext";
import { getT } from "@/lib/translations";

export function Services() {
  const { lang } = useLanguage();
  const t = getT(lang);

  return (
    <section id="services" className="container-x py-20">
      <div className="eyebrow">{t.services.eyebrow}</div>
      <h2 className="section-title mt-2 max-w-2xl">{t.services.title}</h2>
      <p className="text-muted mt-3 max-w-2xl">{t.services.desc}</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {t.services.items.map((s) => (
          <div key={s.title} className="card p-5">
            <div className="text-2xl">{s.icon}</div>
            <div className="mt-3 font-semibold">{s.title}</div>
            <p className="text-sm text-muted mt-1.5 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
