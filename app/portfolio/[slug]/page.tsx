import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/lib/portfolio";
import { projectsId } from "@/lib/portfolio-id";
import { getProjectFromAll, getAllSlugs } from "@/lib/portfolio-all";
import { profile } from "@/lib/config";

export function generateStaticParams() {
  return getAllSlugs();
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const p = getProjectFromAll(params.slug);
  if (!p) return {};
  return { title: `${p.title} · ${profile.name}`, description: p.summary };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const p = getProjectFromAll(params.slug);
  if (!p) notFound();

  const allProjects = [...projects, ...projectsId];
  const related = allProjects.filter((x) => x.slug !== p.slug).slice(0, 3);

  return (
    <article className="container-x py-12">
      <Link href="/#portfolio" className="text-sm text-[#666676] hover:text-white">← Back to all work</Link>

      <header className="mt-6">
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="chip">{p.category}</span>
          <span className="chip">{p.type}</span>
          <span className="chip">{p.year}</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight max-w-3xl leading-tight">
          {p.title}
        </h1>
        <p className="mt-4 text-[#8a8a98] text-lg max-w-2xl">{p.summary}</p>
      </header>

      {/* Hero photo */}
      <div className="relative rounded-2xl aspect-[16/7] mt-10 overflow-hidden border border-[#22222c]">
        <Image
          src={p.photos[0]}
          alt={p.title}
          fill
          priority
          className="object-cover"
          sizes="(max-width:1180px) 100vw, 1180px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b]/70 via-transparent to-transparent" />
        <div className="absolute inset-0 opacity-20 mix-blend-color"
          style={{ background: `linear-gradient(135deg, ${p.hero.from}, ${p.hero.to})` }} />
      </div>

      {/* Photo gallery row */}
      {p.photos.length > 1 && (
        <div className="grid grid-cols-3 gap-3 mt-3">
          {p.photos.map((src, i) => (
            <div key={i} className="relative aspect-[4/3] rounded-xl overflow-hidden border border-[#22222c]">
              <Image src={src} alt={`${p.title} photo ${i + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="33vw" />
            </div>
          ))}
        </div>
      )}

      <div className="grid lg:grid-cols-3 gap-8 mt-12">
        <aside className="card p-5 h-fit lg:sticky lg:top-20">
          <Row label="Client" value={p.client} />
          <Row label="Industry" value={p.industry} />
          <Row label="Location" value={p.location} />
          <Row label="Duration" value={p.duration} />
          <Row label="Type" value={p.type} />
          <div className="mt-4">
            <div className="text-xs uppercase tracking-widest text-[#555566]">Stack</div>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {p.stack.map((s) => (
                <span key={s} className="text-[11px] px-2 py-0.5 rounded-md bg-[#0f0f13] border border-[#22222c] text-[#555566]">
                  {s}
                </span>
              ))}
            </div>
          </div>
          <a href={profile.whatsappLink} target="_blank" rel="noreferrer" className="btn btn-primary mt-6 w-full justify-center">
            Build something like this
          </a>
        </aside>

        <div className="lg:col-span-2 space-y-10">
          <section>
            <h2 className="text-xl font-semibold">Results</h2>
            <div className="grid sm:grid-cols-3 gap-3 mt-4">
              {p.results.map((r) => (
                <div key={r.label} className="card p-4">
                  <div className="text-2xl font-bold bg-gradient-to-r from-[#9d7fff] to-[#22d3ee] bg-clip-text text-transparent">
                    {r.value}
                  </div>
                  <div className="text-xs text-[#555566] mt-1">{r.label}</div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold">What was built</h2>
            <ul className="mt-4 space-y-2.5">
              {p.features.map((f) => (
                <li key={f} className="flex gap-3 text-[#8a8a98]">
                  <span className="mt-0.5 text-[#7c5cff] shrink-0">✓</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      {/* Related work */}
      <section className="mt-20">
        <h2 className="text-xl font-semibold mb-6">More work</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {related.map((r) => (
            <Link key={r.slug} href={`/portfolio/${r.slug}`} className="card overflow-hidden group shine block">
              <div className="aspect-[16/10] relative overflow-hidden">
                <Image
                  src={r.photo}
                  alt={r.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b]/70 via-transparent to-transparent" />
                <div className="absolute inset-0 opacity-25 mix-blend-color"
                  style={{ background: `linear-gradient(135deg, ${r.hero.from}, ${r.hero.to})` }} />
                <div className="absolute bottom-2.5 left-3 right-3">
                  <div className="text-[10px] text-[#a89dff] font-semibold uppercase tracking-wider">{r.category}</div>
                  <div className="text-xs font-medium text-white mt-0.5 line-clamp-1">{r.title}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between py-2 border-b border-[#1e1e26] last:border-0">
      <span className="text-xs uppercase tracking-widest text-[#555566]">{label}</span>
      <span className="text-sm text-right">{value}</span>
    </div>
  );
}
