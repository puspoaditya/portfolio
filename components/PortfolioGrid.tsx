"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import { projects, categories } from "@/lib/portfolio";

export function PortfolioGrid() {
  const [filter, setFilter] = useState<string>("All");
  const filtered = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <section id="portfolio" className="container-x py-20">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <div className="eyebrow">Selected work</div>
          <h2 className="section-title mt-2">Real projects, real results.</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {(["All", ...categories] as const).map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`text-xs px-3 py-1.5 rounded-full border transition ${
                filter === c
                  ? "bg-[#7c5cff]/15 text-white border-[#7c5cff]/40"
                  : "border-[#26262c] text-[#666676] hover:text-white hover:border-[#3a3a48]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {filtered.map((p) => (
          <Link key={p.slug} href={`/portfolio/${p.slug}`} className="card overflow-hidden group shine block">
            {/* photo hero */}
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={p.photo}
                alt={p.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
              />
              {/* dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-[#0a0a0b]/30 to-transparent" />
              {/* color tint layer */}
              <div className="absolute inset-0 opacity-30 mix-blend-color"
                style={{ background: `linear-gradient(135deg, ${p.hero.from}, ${p.hero.to})` }} />

              {/* top badges */}
              <div className="absolute top-3 left-3 chip !bg-black/60 !border-white/15 !text-white/90 backdrop-blur-sm">
                {p.type}
              </div>
              <div className="absolute top-3 right-3 chip !bg-black/60 !border-white/15 !text-white/90 backdrop-blur-sm">
                {p.year}
              </div>

              {/* bottom-left: category + title */}
              <div className="absolute bottom-3 left-3 right-3">
                <div className="text-[11px] font-semibold text-[#a89dff] uppercase tracking-wider">{p.category}</div>
                <div className="text-sm font-semibold text-white leading-snug mt-0.5 line-clamp-2">{p.title}</div>
              </div>
            </div>

            {/* card body */}
            <div className="p-5">
              <p className="text-sm text-[#6a6a78] line-clamp-2 leading-relaxed">{p.summary}</p>

              {/* results */}
              <div className="flex flex-wrap gap-2 mt-4">
                {p.results.map((r) => (
                  <span key={r.label} className="text-[11px] px-2 py-0.5 rounded-full bg-[#7c5cff]/10 text-[#c7bdff] border border-[#7c5cff]/20">
                    <span className="font-semibold">{r.value}</span> {r.label}
                  </span>
                ))}
              </div>

              {/* stack */}
              <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-[#1e1e26]">
                {p.stack.slice(0, 4).map((s) => (
                  <span key={s} className="text-[10px] px-2 py-0.5 rounded-md bg-[#0f0f13] border border-[#22222c] text-[#555566]">
                    {s}
                  </span>
                ))}
                {p.stack.length > 4 && (
                  <span className="text-[10px] px-2 py-0.5 rounded-md bg-[#0f0f13] border border-[#22222c] text-[#555566]">
                    +{p.stack.length - 4}
                  </span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
