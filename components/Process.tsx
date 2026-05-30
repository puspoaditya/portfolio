"use client";
import { useLanguage } from "@/context/LanguageContext";
import { getT } from "@/lib/translations";

export function Process() {
  const { lang } = useLanguage();
  const t = getT(lang);

  return (
    <section id="process" className="container-x py-20">
      <div className="eyebrow">{t.process.eyebrow}</div>
      <h2 className="section-title mt-2">{t.process.title}</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
        {t.process.steps.map((s) => (
          <div key={s.n} className="card p-5">
            <div className="text-accent font-mono text-sm">{s.n}</div>
            <div className="font-semibold mt-2">{s.t}</div>
            <p className="text-sm text-muted mt-1.5 leading-relaxed">{s.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
