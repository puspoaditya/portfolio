import type { Project } from "@/lib/portfolio";

export function ProjectMockup({ project }: { project: Project }) {
  const slug = project.slug;

  if (project.type === "Mobile App") {
    return (
      <div className="absolute inset-0 flex items-center justify-center p-4"
        style={{ background: `linear-gradient(160deg, ${project.hero.from}cc, ${project.hero.to}aa)` }}>
        <div className="phone-frame w-[44%] max-w-[130px] shadow-2xl">
          <div className="phone-notch" />
          <PhoneContent slug={slug} />
        </div>
        {/* second blurred phone behind */}
        <div className="phone-frame w-[38%] max-w-[112px] shadow-2xl ml-[-12px] mt-6 opacity-60 blur-[1px]">
          <div className="phone-notch" />
          <PhoneContent slug={slug} secondary />
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0"
      style={{ background: `linear-gradient(160deg, ${project.hero.from}ee, ${project.hero.to}cc)` }}>
      {/* subtle noise */}
      <div className="absolute inset-0 opacity-[.07]"
        style={{ backgroundImage:"radial-gradient(#fff 1px,transparent 1px)", backgroundSize:"18px 18px" }} />
      <div className="absolute inset-0 flex items-end p-3">
        <div className="browser-frame w-full shadow-2xl" style={{ maxHeight: "86%" }}>
          <div className="browser-bar">
            <div className="browser-dot bg-[#ff5f57]" />
            <div className="browser-dot bg-[#febc2e]" />
            <div className="browser-dot bg-[#28c840]" />
            <div className="browser-url" style={{ fontSize: ".62rem" }}>
              {urlFor(slug)}
            </div>
          </div>
          <WebContent slug={slug} />
        </div>
      </div>
    </div>
  );
}

function urlFor(slug: string) {
  const map: Record<string, string> = {
    "sharp-fade-barbershop": "sharpfade.co.id/book",
    "glow-room-salon": "glowroom.studio",
    "freshnest-cleaning": "freshnest.id/quote",
    "greenscape-landscaper": "greenscape.id/quote",
    "pipepro-plumber": "pipepro.co.id/book",
  };
  return map[slug] ?? "app.local";
}

/* ─── Web UIs ──────────────────────────────────────────────── */

function WebContent({ slug }: { slug: string }) {
  if (slug === "sharp-fade-barbershop") return <BarberUI />;
  if (slug === "glow-room-salon") return <SalonUI />;
  if (slug === "freshnest-cleaning") return <CleaningUI />;
  if (slug === "greenscape-landscaper") return <LandscaperUI />;
  if (slug === "pipepro-plumber") return <PlumberUI />;
  return <GenericUI />;
}

function BarberUI() {
  return (
    <div className="bg-[#0d0d12] p-3 space-y-2.5">
      <div className="flex justify-between items-center">
        <div className="text-[10px] font-bold">Book your cut</div>
        <div className="text-[9px] text-[#555] px-2 py-0.5 rounded-full border border-[#333]">May 2025</div>
      </div>
      <div className="flex gap-1.5">
        {["Rian","Deni","Fajar"].map((n,i) => (
          <div key={n} className={`flex-1 rounded-md py-1.5 text-center text-[9px] border ${i===0?"border-[#7c5cff]/60 bg-[#7c5cff]/15 text-[#c7bdff]":"border-[#222] text-[#555]"}`}>
            {n}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-1">
        {["09:00","10:00","11:00","13:00","14:00","15:00","16:00","17:00"].map((t,i)=>(
          <div key={t} className={`rounded text-center text-[8.5px] py-1 ${i===4?"bg-[#7c5cff] text-white":i===1?"bg-[#111] text-[#333] line-through":"bg-[#1a1a23] text-[#888]"}`}>{t}</div>
        ))}
      </div>
      <div className="h-5 rounded-md text-center text-[9px] font-semibold text-white flex items-center justify-center"
        style={{ background:"linear-gradient(135deg,#7c5cff,#5b8cff)" }}>
        Confirm 14:00
      </div>
    </div>
  );
}

function SalonUI() {
  return (
    <div className="bg-[#0d0d12] p-3 space-y-2">
      <div className="text-[10px] font-bold">Choose your stylist</div>
      <div className="flex gap-2">
        {[["Rina","Colour·Cut","#ff7ac6"],["Sari","Nail Art","#a78bfa"],["Dewi","Skincare","#22d3ee"]].map(([n,s,c],i)=>(
          <div key={n} className={`flex-1 rounded-lg p-2 border ${i===0?"border-[#ff7ac6]/40":"border-[#222]"}`}>
            <div className="w-6 h-6 rounded-full mx-auto mb-1" style={{ background: c as string, opacity:.7 }} />
            <div className="text-[9px] font-medium text-center">{n}</div>
            <div className="text-[8px] text-center text-[#555]">{s}</div>
          </div>
        ))}
      </div>
      <div className="text-[9px] text-[#555] uppercase tracking-wider">Services</div>
      {[["Colour & Cut","Rp 250k","55 min"],["Nail Art","Rp 150k","45 min"]].map(([s,p,d])=>(
        <div key={s} className="flex justify-between items-center px-2 py-1.5 rounded-md bg-[#13131a] border border-[#222]">
          <div>
            <div className="text-[9px] font-medium">{s}</div>
            <div className="text-[8px] text-[#555]">{d}</div>
          </div>
          <div className="text-[9px] text-[#ff7ac6]">{p}</div>
        </div>
      ))}
      <div className="h-5 rounded-md text-[9px] font-semibold flex items-center justify-center"
        style={{ background:"linear-gradient(135deg,#ec4899,#a855f7)", color:"#fff" }}>
        Book + pay deposit
      </div>
    </div>
  );
}

function CleaningUI() {
  return (
    <div className="bg-[#0d0d12] p-3 space-y-2">
      <div className="text-[10px] font-bold">Get instant quote</div>
      {[["Bedrooms","3"],["Bathrooms","2"],["Extras","Deep clean"]].map(([l,v])=>(
        <div key={l} className="flex justify-between items-center">
          <div className="text-[9px] text-[#666]">{l}</div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded bg-[#1a1a23] flex items-center justify-center text-[8px] text-[#555]">-</div>
            <div className="text-[9px] w-8 text-center bg-[#1a1a23] rounded py-0.5">{v}</div>
            <div className="w-3 h-3 rounded bg-[#22d3ee]/20 flex items-center justify-center text-[8px] text-[#22d3ee]">+</div>
          </div>
        </div>
      ))}
      <div className="rounded-lg p-2 bg-[#0a2a2a] border border-[#22d3ee]/25 flex justify-between items-center">
        <div className="text-[9px] text-[#22d3ee]">Your estimate</div>
        <div className="text-[11px] font-bold text-[#22d3ee]">Rp 420k</div>
      </div>
      <div className="h-5 rounded-md text-[9px] font-semibold flex items-center justify-center"
        style={{ background:"linear-gradient(135deg,#0891b2,#22d3ee)", color:"#fff" }}>
        Book same-day cleaning
      </div>
    </div>
  );
}

function LandscaperUI() {
  return (
    <div className="bg-[#0d0d12] p-3 space-y-2">
      <div className="text-[10px] font-bold">Our Work</div>
      <div className="grid grid-cols-2 gap-1.5">
        {[["#134e1a","#22c55e"],["#0f3a0a","#4ade80"],["#1a4a10","#86efac"],["#0a2e0a","#34d399"]].map(([from,to],i)=>(
          <div key={i} className="aspect-square rounded-md relative overflow-hidden">
            <div className="absolute inset-0" style={{ background:`linear-gradient(160deg,${from},${to})` }} />
            <div className="absolute inset-0 flex items-center justify-center text-xl opacity-80">🌿</div>
            <div className="absolute bottom-1 right-1 text-[7px] text-white/70 bg-black/40 px-1 rounded">After</div>
          </div>
        ))}
      </div>
      <div className="h-5 rounded-md text-[9px] font-semibold flex items-center justify-center"
        style={{ background:"linear-gradient(135deg,#166534,#22c55e)", color:"#fff" }}>
        Get free estimate PDF
      </div>
    </div>
  );
}

function PlumberUI() {
  return (
    <div className="bg-[#0d0d12] p-3 space-y-2">
      <div className="text-[10px] font-bold">Job board · today</div>
      {[
        { job:"Leaking pipe – kitchen", area:"Bekasi Timur", status:"In progress", color:"#fbbf24" },
        { job:"Hot water install",       area:"Tambun",       status:"Scheduled",   color:"#60a5fa" },
        { job:"Drain blockage",          area:"Pondok Gede",  status:"Done",        color:"#34d399" },
      ].map(({job,area,status,color})=>(
        <div key={job} className="flex items-start gap-2 rounded-md p-2 bg-[#13131a] border border-[#222]">
          <div className="w-1.5 h-1.5 rounded-full mt-1 shrink-0" style={{ background: color }} />
          <div className="min-w-0">
            <div className="text-[9px] font-medium truncate">{job}</div>
            <div className="text-[8px] text-[#555]">{area}</div>
          </div>
          <div className="ml-auto text-[8px] shrink-0" style={{ color }}>{status}</div>
        </div>
      ))}
      <div className="h-5 rounded-md text-[9px] font-semibold flex items-center justify-center"
        style={{ background:"linear-gradient(135deg,#1d4ed8,#60a5fa)", color:"#fff" }}>
        Book a plumber →
      </div>
    </div>
  );
}

function GenericUI() {
  return (
    <div className="bg-[#0d0d12] p-3">
      <div className="h-2 w-24 rounded bg-[#222] mb-2" />
      <div className="h-2 w-32 rounded bg-[#1a1a23]" />
    </div>
  );
}

/* ─── Phone UIs ────────────────────────────────────────────── */

function PhoneContent({ slug, secondary }: { slug: string; secondary?: boolean }) {
  if (slug === "voltcraft-electrician") return <ElectricianPhone secondary={secondary} />;
  if (slug === "roadhero-mobile-mechanic") return <MechanicPhone secondary={secondary} />;
  return <GenericPhone />;
}

function ElectricianPhone({ secondary }: { secondary?: boolean }) {
  return (
    <div className="bg-[#0d0d10] p-2 space-y-2 min-h-[160px]">
      {!secondary ? (
        <>
          <div className="text-[9px] font-bold">VoltCraft</div>
          <div className="rounded-md p-2 bg-[#fbbf24]/10 border border-[#fbbf24]/30 text-[8px] text-[#fbbf24]">
            ⚡ Emergency callout
          </div>
          {/* fake map */}
          <div className="rounded-md h-12 bg-[#111] relative overflow-hidden border border-[#222]">
            <div className="absolute inset-0 opacity-30"
              style={{ backgroundImage:"linear-gradient(#fbbf24 1px,transparent 1px),linear-gradient(90deg,#fbbf24 1px,transparent 1px)", backgroundSize:"14px 14px" }} />
            <div className="absolute top-3 left-6 w-3 h-3 rounded-full bg-[#fbbf24] shadow-lg shadow-yellow-500/60" />
            <div className="absolute bottom-2 right-5 w-2 h-2 rounded-full bg-[#f87171]" />
            <div className="absolute bottom-1.5 right-4 text-[6px] text-[#888]">You</div>
          </div>
          <div className="text-[8.5px] text-[#aaa]">ETA: <span className="text-[#fbbf24] font-bold">18 min</span></div>
          <div className="h-4 rounded text-[7px] font-semibold text-white flex items-center justify-center"
            style={{ background:"linear-gradient(135deg,#b45309,#fbbf24)" }}>
            Track technician
          </div>
        </>
      ) : (
        <>
          <div className="text-[8px] text-[#555]">Today's jobs</div>
          {["Done","Active","Queue"].map((s,i)=>(
            <div key={s} className={`rounded px-2 py-1 text-[7px] border ${i===1?"border-[#fbbf24]/40 text-[#fbbf24]":"border-[#222] text-[#444]"}`}>{s}</div>
          ))}
        </>
      )}
    </div>
  );
}

function MechanicPhone({ secondary }: { secondary?: boolean }) {
  return (
    <div className="bg-[#0d0d10] p-2 space-y-2 min-h-[160px]">
      {!secondary ? (
        <>
          <div className="text-[9px] font-bold">RoadHero</div>
          <div className="rounded-md h-14 bg-[#111] relative overflow-hidden border border-[#222]">
            <div className="absolute inset-0 opacity-20"
              style={{ backgroundImage:"linear-gradient(#f87171 1px,transparent 1px),linear-gradient(90deg,#f87171 1px,transparent 1px)", backgroundSize:"12px 12px" }} />
            <div className="absolute top-4 left-5 w-2.5 h-2.5 rounded-full bg-[#f87171] shadow-lg shadow-red-500/60" />
            <div className="absolute bottom-3 right-6 text-[8px]">🔧</div>
          </div>
          <div className="text-[8.5px] text-[#aaa]">Nearest: <span className="text-[#f87171] font-bold">Arif · 4 km</span></div>
          <div className="h-4 rounded text-[7px] font-semibold text-white flex items-center justify-center"
            style={{ background:"linear-gradient(135deg,#991b1b,#f87171)" }}>
            Dispatch mechanic
          </div>
        </>
      ) : (
        <>
          <div className="text-[8px] text-[#555]">Job queue</div>
          {["Engine","Flat tyre","Battery"].map((s,i)=>(
            <div key={s} className={`rounded px-2 py-1 text-[7px] border ${i===0?"border-[#f87171]/40 text-[#f87171]":"border-[#222] text-[#444]"}`}>{s}</div>
          ))}
        </>
      )}
    </div>
  );
}

function GenericPhone() {
  return <div className="bg-[#0d0d10] p-2 min-h-[120px]" />;
}
