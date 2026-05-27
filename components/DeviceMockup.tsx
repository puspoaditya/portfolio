import type { Project } from "@/lib/portfolio";

/* Renders a browser-frame or phone-frame mockup per project,
   meant to sit ON TOP of a blurred background photo. */

export function DeviceMockup({ project }: { project: Project }) {
  if (project.type === "Mobile App") {
    return <PhoneMockupPair project={project} />;
  }
  return <BrowserMockup project={project} />;
}

/* ─── BROWSER FRAME ─────────────────────────────── */
function BrowserMockup({ project }: { project: Project }) {
  return (
    <div className="w-full rounded-xl overflow-hidden shadow-2xl border border-white/10"
      style={{ background: "#16161e" }}>
      {/* chrome bar */}
      <div className="flex items-center gap-1.5 px-3 py-2.5 border-b border-white/[0.06]"
        style={{ background: "#1e1e2a" }}>
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <div className="ml-2 flex-1 bg-[#12121a] rounded px-2.5 py-0.5 text-[9px] text-[#444454]">
          {urlFor(project.slug)}
        </div>
        <div className="w-3 h-3 rounded-sm border border-[#333] opacity-60" />
      </div>
      {/* UI content */}
      <div style={{ maxHeight: 200, overflow: "hidden" }}>
        <UIContent project={project} />
      </div>
    </div>
  );
}

function urlFor(slug: string) {
  const m: Record<string, string> = {
    "sharp-fade-barbershop": "sharpfade.co.id/book",
    "glow-room-salon": "glowroom.studio/book",
    "freshnest-cleaning": "freshnest.id/quote",
    "greenscape-landscaper": "greenscape.id/estimate",
    "pipepro-plumber": "pipepro.co.id",
  };
  return m[slug] ?? "app.example.com";
}

/* ─── PHONE FRAME PAIR ───────────────────────────── */
function PhoneMockupPair({ project }: { project: Project }) {
  return (
    <div className="flex items-end justify-center gap-3 w-full">
      {/* main phone */}
      <div className="relative flex-shrink-0" style={{ width: "42%" }}>
        <PhoneShell>
          <PhoneUIContent project={project} />
        </PhoneShell>
      </div>
      {/* secondary phone slightly behind */}
      <div className="relative flex-shrink-0 mb-4 opacity-70 blur-[1px]" style={{ width: "36%" }}>
        <PhoneShell>
          <PhoneUIContent project={project} secondary />
        </PhoneShell>
      </div>
    </div>
  );
}

function PhoneShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-[22px] overflow-hidden shadow-2xl border-[1.5px] border-white/15"
      style={{ background: "#13131a" }}>
      {/* status bar */}
      <div className="flex items-center justify-between px-4 pt-2 pb-1"
        style={{ background: "#0d0d12" }}>
        <span className="text-[7px] text-white/40">9:41</span>
        <div className="w-10 h-2 rounded-full bg-[#1a1a22]" />
        <div className="flex gap-1">
          <span className="w-3 h-1.5 rounded-sm bg-white/30" />
          <span className="w-1 h-1.5 rounded-sm bg-white/30" />
        </div>
      </div>
      {children}
      {/* home indicator */}
      <div className="flex justify-center pb-2 pt-1" style={{ background: "#0d0d12" }}>
        <div className="w-10 h-1 rounded-full bg-white/20" />
      </div>
    </div>
  );
}

/* ─── WEB UI SCREENS ─────────────────────────────── */
function UIContent({ project }: { project: Project }) {
  const slug = project.slug;
  if (slug === "sharp-fade-barbershop") return <BarberWebUI />;
  if (slug === "glow-room-salon") return <SalonWebUI />;
  if (slug === "freshnest-cleaning") return <CleaningWebUI />;
  if (slug === "greenscape-landscaper") return <LandscaperWebUI />;
  if (slug === "pipepro-plumber") return <PlumberWebUI />;
  return <GenericWebUI />;
}

function BarberWebUI() {
  const slots = ["09:00","10:00","11:00","13:00","14:00","15:00","16:00","17:00"];
  return (
    <div style={{ background:"#0d0d14", padding:"12px", fontFamily:"ui-sans-serif,system-ui,sans-serif" }}>
      {/* nav */}
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:10 }}>
        <div style={{ fontSize:10, fontWeight:700, color:"#ededf0" }}>💈 Sharp Fade</div>
        <div style={{ fontSize:8, color:"#7c5cff", border:"1px solid rgba(124,92,255,.35)", borderRadius:20, padding:"2px 8px" }}>Book now</div>
      </div>
      {/* barber row */}
      <div style={{ fontSize:8, color:"#555566", marginBottom:6, textTransform:"uppercase", letterSpacing:".1em" }}>Choose barber</div>
      <div style={{ display:"flex", gap:6, marginBottom:10 }}>
        {[["Rian","⭐4.9","#7c5cff"],["Deni","⭐4.8",""],["Fajar","⭐4.7",""]].map(([n,r,ac])=>(
          <div key={n as string} style={{ flex:1, borderRadius:8, padding:"6px 4px", textAlign:"center", border:`1px solid ${ac ? "rgba(124,92,255,.5)" : "#222"}`, background: ac ? "rgba(124,92,255,.12)" : "#131318" }}>
            <div style={{ width:20, height:20, borderRadius:"50%", background:`hsl(${(n as string).charCodeAt(0)*30},50%,25%)`, margin:"0 auto 4px", display:"flex", alignItems:"center", justifyContent:"center", fontSize:10 }}>✂</div>
            <div style={{ fontSize:8.5, fontWeight:600, color: ac ? "#c7bdff" : "#888" }}>{n as string}</div>
            <div style={{ fontSize:7.5, color:"#444454" }}>{r as string}</div>
          </div>
        ))}
      </div>
      {/* date */}
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:6 }}>
        <div style={{ fontSize:8, color:"#555566", textTransform:"uppercase", letterSpacing:".08em" }}>Tue, 27 May</div>
        <div style={{ display:"flex", gap:4 }}>
          {["<",">"].map(a=><div key={a} style={{ width:14, height:14, borderRadius:4, background:"#1a1a23", display:"flex", alignItems:"center", justifyContent:"center", fontSize:8, color:"#555" }}>{a}</div>)}
        </div>
      </div>
      {/* slots */}
      <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:4, marginBottom:10 }}>
        {slots.map((t,i)=>(
          <div key={t} style={{ borderRadius:6, padding:"5px 0", textAlign:"center", fontSize:8.5, fontWeight:500,
            background: i===4 ? "linear-gradient(135deg,#7c5cff,#5b8cff)" : i===1||i===5 ? "#0f0f14" : "#1a1a23",
            color: i===4 ? "#fff" : i===1||i===5 ? "#333" : "#aaa",
            textDecoration: i===1||i===5 ? "line-through" : "none" }}>
            {t}
          </div>
        ))}
      </div>
      {/* CTA */}
      <div style={{ borderRadius:8, padding:"8px 0", textAlign:"center", fontSize:9, fontWeight:700, color:"#fff", background:"linear-gradient(135deg,#7c5cff,#5b8cff)" }}>
        Confirm booking · 14:00
      </div>
      {/* loyalty */}
      <div style={{ display:"flex", gap:3, marginTop:8, justifyContent:"center" }}>
        {Array.from({length:10}).map((_,i)=>(
          <div key={i} style={{ width:9, height:9, borderRadius:"50%", background: i<7 ? "#7c5cff" : "#1a1a23", border:"1px solid rgba(124,92,255,.3)" }} />
        ))}
      </div>
      <div style={{ fontSize:7, color:"#555566", textAlign:"center", marginTop:3 }}>7/10 stamps · 3 more for a free cut</div>
    </div>
  );
}

function SalonWebUI() {
  return (
    <div style={{ background:"#0d0d14", padding:"12px", fontFamily:"ui-sans-serif,system-ui,sans-serif" }}>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:10 }}>
        <div style={{ fontSize:10, fontWeight:700, color:"#ededf0" }}>✨ Glow Room</div>
        <div style={{ fontSize:8, color:"#ec4899", border:"1px solid rgba(236,72,153,.35)", borderRadius:20, padding:"2px 8px" }}>Book</div>
      </div>
      {/* stylists */}
      <div style={{ display:"flex", gap:6, marginBottom:10 }}>
        {[["Rina","Hair","#f472b6",true],["Sari","Nails","#a78bfa",false],["Dewi","Skin","#34d399",false]].map(([n,s,c,sel])=>(
          <div key={n as string} style={{ flex:1, borderRadius:10, padding:"8px 4px", textAlign:"center", border:`1px solid ${sel?"rgba(244,114,182,.5)":"#222"}`, background: sel ? "rgba(244,114,182,.1)" : "#131318" }}>
            <div style={{ width:22, height:22, borderRadius:"50%", background:c as string, opacity:.7, margin:"0 auto 4px" }} />
            <div style={{ fontSize:8.5, fontWeight:600, color: sel ? "#f9a8d4" : "#888" }}>{n as string}</div>
            <div style={{ fontSize:7, color:"#444" }}>{s as string}</div>
          </div>
        ))}
      </div>
      {/* services */}
      {[["Colour & Cut","Rp 250k","55 min","#f472b6"],["Nail Art Full Set","Rp 150k","45 min","#a78bfa"],["Facial + Mask","Rp 120k","40 min","#34d399"]].map(([s,p,d,c])=>(
        <div key={s as string} style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"7px 8px", borderRadius:8, marginBottom:4, background:"#13131a", border:"1px solid #1e1e28" }}>
          <div>
            <div style={{ fontSize:8.5, fontWeight:500, color:"#ddd" }}>{s as string}</div>
            <div style={{ fontSize:7.5, color:"#444", marginTop:1 }}>{d as string}</div>
          </div>
          <div style={{ textAlign:"right" }}>
            <div style={{ fontSize:8.5, fontWeight:600, color:c as string }}>{p as string}</div>
            <div style={{ fontSize:7, color:"#333", marginTop:1 }}>+ add-ons</div>
          </div>
        </div>
      ))}
      <div style={{ borderRadius:8, padding:"8px 0", textAlign:"center", fontSize:9, fontWeight:700, color:"#fff", background:"linear-gradient(135deg,#ec4899,#a855f7)", marginTop:6 }}>
        Book + pay deposit →
      </div>
    </div>
  );
}

function CleaningWebUI() {
  return (
    <div style={{ background:"#0d0d14", padding:"12px", fontFamily:"ui-sans-serif,system-ui,sans-serif" }}>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:10 }}>
        <div style={{ fontSize:10, fontWeight:700, color:"#ededf0" }}>🧽 FreshNest</div>
        <div style={{ fontSize:8, color:"#22d3ee", border:"1px solid rgba(34,211,238,.35)", borderRadius:20, padding:"2px 8px" }}>Instant quote</div>
      </div>
      {/* progress */}
      <div style={{ display:"flex", gap:3, marginBottom:10 }}>
        {["Details","Schedule","Pay"].map((s,i)=>(
          <div key={s} style={{ flex:1, textAlign:"center" }}>
            <div style={{ height:3, borderRadius:2, background: i===0?"#22d3ee":i===1?"rgba(34,211,238,.3)":"#1a1a23", marginBottom:3 }} />
            <div style={{ fontSize:7.5, color: i===0?"#22d3ee":"#444" }}>{s}</div>
          </div>
        ))}
      </div>
      {/* counters */}
      {[["Bedrooms","3"],["Bathrooms","2"],["Living areas","1"]].map(([l,v])=>(
        <div key={l as string} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"6px 0", borderBottom:"1px solid #1a1a22" }}>
          <div style={{ fontSize:8.5, color:"#aaa" }}>{l as string}</div>
          <div style={{ display:"flex", alignItems:"center", gap:6 }}>
            <div style={{ width:16, height:16, borderRadius:4, background:"#1a1a23", display:"flex", alignItems:"center", justifyContent:"center", fontSize:9, color:"#555" }}>-</div>
            <div style={{ fontSize:9, fontWeight:600, color:"#fff", width:12, textAlign:"center" }}>{v as string}</div>
            <div style={{ width:16, height:16, borderRadius:4, background:"rgba(34,211,238,.15)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:9, color:"#22d3ee" }}>+</div>
          </div>
        </div>
      ))}
      {/* add-on */}
      <div style={{ display:"flex", justifyContent:"space-between", padding:"7px 8px", borderRadius:8, margin:"8px 0", background:"rgba(34,211,238,.06)", border:"1px solid rgba(34,211,238,.2)" }}>
        <div style={{ fontSize:8.5, color:"#22d3ee" }}>Deep clean add-on</div>
        <div style={{ fontSize:8.5, fontWeight:600, color:"#22d3ee" }}>+Rp 80k</div>
      </div>
      {/* total */}
      <div style={{ display:"flex", justifyContent:"space-between", padding:"8px 10px", borderRadius:8, background:"#0a2a2a", border:"1px solid rgba(34,211,238,.25)" }}>
        <div style={{ fontSize:8.5, color:"#22d3ee" }}>Your estimate</div>
        <div style={{ fontSize:12, fontWeight:700, color:"#22d3ee" }}>Rp 420k</div>
      </div>
      <div style={{ borderRadius:8, padding:"8px 0", textAlign:"center", fontSize:9, fontWeight:700, color:"#fff", background:"linear-gradient(135deg,#0891b2,#22d3ee)", marginTop:8 }}>
        Book same-day →
      </div>
    </div>
  );
}

function LandscaperWebUI() {
  return (
    <div style={{ background:"#0d0d14", padding:"12px", fontFamily:"ui-sans-serif,system-ui,sans-serif" }}>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:10 }}>
        <div style={{ fontSize:10, fontWeight:700, color:"#ededf0" }}>🌿 GreenScape</div>
        <div style={{ fontSize:8, color:"#34d399", border:"1px solid rgba(52,211,153,.35)", borderRadius:20, padding:"2px 8px" }}>Free quote</div>
      </div>
      {/* project grid */}
      <div style={{ fontSize:8, color:"#555566", marginBottom:6, textTransform:"uppercase", letterSpacing:".1em" }}>Recent projects</div>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:5, marginBottom:10 }}>
        {[["Villa Seminyak","Bali"],["Pak Budi Lawn","Bekasi"],["Resto Garden","Bogor"],["BSD Residence","Tangerang"]].map(([t,l],i)=>(
          <div key={t as string} style={{ borderRadius:8, overflow:"hidden", background:"#13131a", border:"1px solid #1e1e26" }}>
            <div style={{ height:28, background:`linear-gradient(135deg,hsl(${140+i*15},60%,${10+i*3}%),hsl(${150+i*10},70%,${22+i*4}%))`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:14 }}>🌿</div>
            <div style={{ padding:"4px 5px" }}>
              <div style={{ fontSize:7.5, fontWeight:600, color:"#ccc" }}>{t as string}</div>
              <div style={{ fontSize:7, color:"#444", marginTop:1 }}>{l as string}</div>
            </div>
          </div>
        ))}
      </div>
      {/* quote calculator */}
      <div style={{ borderRadius:8, padding:"8px", background:"#0a1e0f", border:"1px solid rgba(52,211,153,.2)" }}>
        <div style={{ fontSize:8, color:"#34d399", marginBottom:6 }}>Quick estimate</div>
        {[["Yard size","200 m²"],["Service","Lawn mowing"]].map(([l,v])=>(
          <div key={l as string} style={{ display:"flex", justifyContent:"space-between", marginBottom:4 }}>
            <div style={{ fontSize:8, color:"#555" }}>{l as string}</div>
            <div style={{ fontSize:8, color:"#9ca3af" }}>{v as string}</div>
          </div>
        ))}
        <div style={{ borderTop:"1px solid rgba(52,211,153,.2)", paddingTop:5, display:"flex", justifyContent:"space-between" }}>
          <div style={{ fontSize:8, color:"#34d399" }}>Estimate</div>
          <div style={{ fontSize:11, fontWeight:700, color:"#34d399" }}>Rp 350k</div>
        </div>
      </div>
      <div style={{ borderRadius:8, padding:"8px 0", textAlign:"center", fontSize:9, fontWeight:700, color:"#fff", background:"linear-gradient(135deg,#166534,#22c55e)", marginTop:8 }}>
        Email me a PDF estimate →
      </div>
    </div>
  );
}

function PlumberWebUI() {
  return (
    <div style={{ background:"#0d0d14", padding:"12px", fontFamily:"ui-sans-serif,system-ui,sans-serif" }}>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:10 }}>
        <div style={{ fontSize:10, fontWeight:700, color:"#ededf0" }}>🔧 PipePro</div>
        <div style={{ fontSize:8, padding:"3px 8px", borderRadius:20, background:"#1d4ed8", color:"#93c5fd" }}>Dispatcher</div>
      </div>
      {/* stats row */}
      <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:4, marginBottom:10 }}>
        {[["8","Jobs today","#60a5fa"],["6","Completed","#34d399"],["2","Pending","#fbbf24"]].map(([v,l,c])=>(
          <div key={l as string} style={{ borderRadius:7, padding:"6px 4px", textAlign:"center", background:"#13131a", border:`1px solid ${(c as string).replace("rgb","rgba").replace(")",",0.2)")}` }}>
            <div style={{ fontSize:14, fontWeight:700, color:c as string }}>{v as string}</div>
            <div style={{ fontSize:7, color:"#444", marginTop:1 }}>{l as string}</div>
          </div>
        ))}
      </div>
      {/* job board */}
      <div style={{ fontSize:8, color:"#555566", marginBottom:5, textTransform:"uppercase", letterSpacing:".08em" }}>Live job board</div>
      {[
        { j:"Leaking pipe – kitchen", a:"Bekasi Timur", s:"In progress", t:"Truck 2", c:"#fbbf24" },
        { j:"Hot water install",       a:"Tambun",       s:"Scheduled",   t:"Truck 1", c:"#60a5fa" },
        { j:"Drain blockage",          a:"Pondok Gede",  s:"Done ✓",      t:"Truck 3", c:"#34d399" },
      ].map(({j,a,s,t,c})=>(
        <div key={j} style={{ display:"flex", alignItems:"center", gap:6, padding:"6px 7px", borderRadius:7, marginBottom:3, background:"#13131a", border:"1px solid #1e1e28" }}>
          <div style={{ width:6, height:6, borderRadius:"50%", background:c, flexShrink:0 }} />
          <div style={{ flex:1, minWidth:0 }}>
            <div style={{ fontSize:8.5, fontWeight:500, color:"#ccc", whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis" }}>{j}</div>
            <div style={{ fontSize:7.5, color:"#444" }}>{a} · {t}</div>
          </div>
          <div style={{ fontSize:7.5, color:c, flexShrink:0 }}>{s}</div>
        </div>
      ))}
      <div style={{ borderRadius:8, padding:"8px 0", textAlign:"center", fontSize:9, fontWeight:700, color:"#fff", background:"linear-gradient(135deg,#1d4ed8,#60a5fa)", marginTop:8 }}>
        Book a plumber →
      </div>
    </div>
  );
}

function GenericWebUI() {
  return (
    <div style={{ background:"#0d0d14", padding:12, minHeight:80 }}>
      <div style={{ height:8, width:80, borderRadius:4, background:"#1a1a23", marginBottom:8 }} />
      <div style={{ height:6, width:120, borderRadius:4, background:"#131318" }} />
    </div>
  );
}

/* ─── PHONE UI SCREENS ────────────────────────────── */
function PhoneUIContent({ project, secondary }: { project: Project; secondary?: boolean }) {
  if (project.slug === "voltcraft-electrician") return <ElectricianPhoneUI secondary={secondary} />;
  if (project.slug === "roadhero-mobile-mechanic") return <MechanicPhoneUI secondary={secondary} />;
  return <GenericPhoneUI />;
}

function ElectricianPhoneUI({ secondary }: { secondary?: boolean }) {
  return (
    <div style={{ background:"#0d0d10", padding:"8px 8px 6px", fontFamily:"ui-sans-serif,system-ui,sans-serif" }}>
      {!secondary ? (
        <>
          <div style={{ fontSize:9, fontWeight:700, color:"#fff", marginBottom:6 }}>⚡ VoltCraft</div>
          {/* emergency button */}
          <div style={{ borderRadius:8, padding:"7px", textAlign:"center", marginBottom:8, background:"rgba(251,191,36,.12)", border:"1px solid rgba(251,191,36,.35)" }}>
            <div style={{ fontSize:11 }}>⚡</div>
            <div style={{ fontSize:8, fontWeight:700, color:"#fbbf24", marginTop:2 }}>Emergency callout</div>
          </div>
          {/* fake map */}
          <div style={{ borderRadius:8, height:50, position:"relative", overflow:"hidden", border:"1px solid #222", marginBottom:6 }}>
            <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(251,191,36,.15) 1px,transparent 1px),linear-gradient(90deg,rgba(251,191,36,.15) 1px,transparent 1px)", backgroundSize:"10px 10px" }} />
            <div style={{ position:"absolute", top:8, left:12, width:10, height:10, borderRadius:"50%", background:"#fbbf24", boxShadow:"0 0 8px 2px rgba(251,191,36,.5)" }} />
            <div style={{ position:"absolute", bottom:10, right:12, fontSize:10 }}>🔧</div>
            <div style={{ position:"absolute", bottom:10, left:10, fontSize:7, color:"#fbbf24" }}>You</div>
          </div>
          <div style={{ fontSize:8, color:"#aaa", marginBottom:6 }}>Nearest tech: <span style={{ color:"#fbbf24", fontWeight:700 }}>Agus · 2.4 km</span></div>
          <div style={{ fontSize:8, color:"#aaa", marginBottom:8 }}>ETA: <span style={{ color:"#fbbf24", fontWeight:700 }}>~18 min</span></div>
          <div style={{ borderRadius:8, padding:"7px 0", textAlign:"center", fontSize:8.5, fontWeight:700, color:"#fff", background:"linear-gradient(135deg,#b45309,#fbbf24)" }}>
            Confirm dispatch
          </div>
        </>
      ) : (
        <>
          <div style={{ fontSize:9, fontWeight:700, color:"#fff", marginBottom:6 }}>Today's jobs</div>
          {[["Engine fault","Done","#34d399"],["AC wiring","Active","#fbbf24"],["Panel install","Queued","#60a5fa"]].map(([j,s,c])=>(
            <div key={j as string} style={{ display:"flex", justifyContent:"space-between", padding:"5px 0", borderBottom:"1px solid #1a1a22" }}>
              <div style={{ fontSize:7.5, color:"#aaa" }}>{j as string}</div>
              <div style={{ fontSize:7, color:c as string }}>{s as string}</div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

function MechanicPhoneUI({ secondary }: { secondary?: boolean }) {
  return (
    <div style={{ background:"#0d0d10", padding:"8px 8px 6px", fontFamily:"ui-sans-serif,system-ui,sans-serif" }}>
      {!secondary ? (
        <>
          <div style={{ fontSize:9, fontWeight:700, color:"#fff", marginBottom:6 }}>🔧 RoadHero</div>
          {/* issue selector */}
          <div style={{ fontSize:7.5, color:"#555", marginBottom:5 }}>What's the problem?</div>
          {[["Won't start","selected"],["Flat tyre",""],["Overheating",""]].map(([p,sel])=>(
            <div key={p as string} style={{ padding:"5px 7px", borderRadius:7, marginBottom:3, background: sel?"rgba(248,113,113,.12)":"#131318", border:`1px solid ${sel?"rgba(248,113,113,.4)":"#1e1e24"}` }}>
              <div style={{ fontSize:8, color: sel?"#f87171":"#666" }}>{p as string}</div>
            </div>
          ))}
          {/* map */}
          <div style={{ borderRadius:8, height:40, position:"relative", overflow:"hidden", border:"1px solid #222", margin:"6px 0" }}>
            <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(248,113,113,.1) 1px,transparent 1px),linear-gradient(90deg,rgba(248,113,113,.1) 1px,transparent 1px)", backgroundSize:"10px 10px" }} />
            <div style={{ position:"absolute", top:8, left:14, width:9, height:9, borderRadius:"50%", background:"#f87171", boxShadow:"0 0 7px 2px rgba(248,113,113,.5)" }} />
            <div style={{ position:"absolute", bottom:8, right:14, fontSize:9 }}>🔧</div>
          </div>
          <div style={{ fontSize:8, color:"#aaa", marginBottom:6 }}>Mechanic: <span style={{ color:"#f87171", fontWeight:700 }}>Arif · 4 km · 22 min</span></div>
          <div style={{ borderRadius:8, padding:"7px 0", textAlign:"center", fontSize:8.5, fontWeight:700, color:"#fff", background:"linear-gradient(135deg,#991b1b,#f87171)" }}>
            Confirm Rp 150k estimate
          </div>
        </>
      ) : (
        <>
          <div style={{ fontSize:9, fontWeight:700, color:"#fff", marginBottom:6 }}>Service history</div>
          {[["Toyota Avanza","2024-12-15","Battery"],["Mitsubishi","2025-03-02","Oil change"]].map(([c,d,s])=>(
            <div key={c as string} style={{ padding:"5px 0", borderBottom:"1px solid #1a1a22" }}>
              <div style={{ fontSize:8, color:"#aaa" }}>{c as string}</div>
              <div style={{ fontSize:7, color:"#444" }}>{d as string} · {s as string}</div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

function GenericPhoneUI() {
  return <div style={{ background:"#0d0d10", padding:10, minHeight:120 }} />;
}
