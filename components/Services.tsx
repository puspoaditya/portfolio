const services = [
  {
    title: "Booking Websites",
    desc: "Mobile-first sites with real online booking, deposits, and SMS/WhatsApp reminders. Built to rank on Google.",
    icon: "🗓️",
  },
  {
    title: "Mobile Apps (iOS + Android)",
    desc: "One codebase with React Native — customer apps, dispatch apps, technician apps. Published to both stores.",
    icon: "📱",
  },
  {
    title: "Custom Web Apps",
    desc: "Quote calculators, dispatch boards, CRMs, inventory, and dashboards tailored to how your business actually runs.",
    icon: "⚙️",
  },
  {
    title: "Integrations & Automation",
    desc: "Stripe/Midtrans payments, Twilio SMS, WhatsApp Business, Google Calendar, Maps routing — wired into one workflow.",
    icon: "🔗",
  },
  {
    title: "SEO & Google Business",
    desc: "Local SEO, schema markup, and a review-funnel system so happy customers actually post 5-star reviews.",
    icon: "📈",
  },
  {
    title: "Care Plans",
    desc: "Monthly hosting, security updates, backups, and small change requests — so your site never goes stale.",
    icon: "🛡️",
  },
];

export function Services() {
  return (
    <section id="services" className="container-x py-20">
      <div className="eyebrow">What I do</div>
      <h2 className="section-title mt-2 max-w-2xl">Built specifically for service businesses.</h2>
      <p className="text-muted mt-3 max-w-2xl">
        Not generic websites. Each project is shaped around bookings, dispatch, payments, and follow-up — the four levers that actually grow a local service business.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {services.map((s) => (
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
