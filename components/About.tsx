"use client";
import { profile } from "@/lib/config";
import { useLanguage } from "@/context/LanguageContext";
import { getT } from "@/lib/translations";

export function About() {
  const { lang } = useLanguage();
  const t = getT(lang);

  return (
    <section id="about" className="container-x py-20">
      <div className="grid lg:grid-cols-[1.1fr,1fr] gap-10 items-start">
        <div>
          <div className="eyebrow">{t.about.eyebrow}</div>
          <h2 className="section-title mt-2">{t.about.title}</h2>
          <p className="text-muted mt-4 leading-relaxed">{t.about.p1}</p>
          <p className="text-muted mt-3 leading-relaxed">{t.about.p2}</p>
        </div>
        <div className="card p-6">
          <div className="font-semibold">{t.about.valueTitle}</div>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            {t.about.values.map((x) => (
              <li key={x} className="flex gap-3">
                <span className="mt-1 text-accent">✓</span>
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
