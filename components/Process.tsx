const steps = [
  {
    n: "01",
    t: "Discovery call (free)",
    d: "30-minute call. You explain how your business runs. I sketch what software could remove the biggest bottleneck.",
  },
  {
    n: "02",
    t: "Fixed-price proposal",
    d: "Within 48 hours you get a scope, timeline, and fixed price. No hourly surprises.",
  },
  {
    n: "03",
    t: "Design + build",
    d: "I send a clickable mockup in week 1, then ship in weekly increments so you see progress, not promises.",
  },
  {
    n: "04",
    t: "Launch + 30 days support",
    d: "Go-live, Google indexing, staff training, plus 30 days of free fixes. Then an optional monthly care plan.",
  },
];

export function Process() {
  return (
    <section id="process" className="container-x py-20">
      <div className="eyebrow">How we work</div>
      <h2 className="section-title mt-2">A simple, predictable process.</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
        {steps.map((s) => (
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
