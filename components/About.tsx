import { profile } from "@/lib/config";

export function About() {
  return (
    <section id="about" className="container-x py-20">
      <div className="grid lg:grid-cols-[1.1fr,1fr] gap-10 items-start">
        <div>
          <div className="eyebrow">About</div>
          <h2 className="section-title mt-2">Hi, I’m {profile.name}.</h2>
          <p className="text-muted mt-4 leading-relaxed">
            I’m a solo full-stack developer based in Jakarta, working remotely with service-based businesses
            around the world. For the last few years I’ve focused exclusively on one thing: building websites
            and apps that book more jobs for local service companies — barbershops, salons, plumbers,
            electricians, cleaners, landscapers, and mobile mechanics.
          </p>
          <p className="text-muted mt-3 leading-relaxed">
            Because I’m solo, you talk to the person who actually writes the code. No project managers,
            no hand-offs, no agency markup. I take on a small number of clients at a time so each project
            gets real attention.
          </p>
        </div>
        <div className="card p-6">
          <div className="font-semibold">What you get working with me</div>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            {[
              "Direct line to the developer — reply on WhatsApp same day",
              "Fixed-price scope. No hourly billing surprises.",
              "Code you own. Hosted wherever you want.",
              "Performance budget: <2s load on 4G, 95+ Lighthouse",
              "30 days free fixes after launch",
              "Optional monthly care plan from $49/mo",
            ].map((x) => (
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
