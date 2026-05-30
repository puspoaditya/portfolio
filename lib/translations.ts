import type { Lang } from "@/context/LanguageContext";

const translations = {
  en: {
    nav: {
      services: "Services", portfolio: "Portfolio",
      process: "Process", contact: "Contact", hire: "Hire me",
    },
    hero: {
      badge: "Available for 2 projects this month",
      h1_pre: "I build", h1_accent: "websites & apps",
      h1_post: "that grow local service businesses.",
      desc: "Solo full-stack developer helping barbershops, salons, plumbers, electricians, cleaners, landscapers, and mobile mechanics turn visitors into booked jobs — fast sites, real bookings, real revenue.",
      cta_wa: "Message me on WhatsApp", cta_email: "Email me",
      stats: [["7+","Projects shipped"],["3×","Avg. booking lift"],["48h","First mockup"],["Solo","No agency markup"]] as [string,string][],
      industriesLabel: "Industries I serve:",
      industries: ["💈 Barber Shop","💅 Beauty Salon","🧽 Cleaning","⚡ Electrician","🌿 Landscaper","🔧 Mechanic","🔧 Plumber"],
    },
    services: {
      eyebrow: "What I do",
      title: "Built specifically for service businesses.",
      desc: "Not generic websites. Each project is shaped around bookings, dispatch, payments, and follow-up — the four levers that actually grow a local service business.",
      items: [
        { icon:"🗓️", title:"Booking Websites", desc:"Mobile-first sites with real online booking, deposits, and SMS/WhatsApp reminders. Built to rank on Google." },
        { icon:"📱", title:"Mobile Apps (iOS + Android)", desc:"One codebase with React Native — customer apps, dispatch apps, technician apps. Published to both stores." },
        { icon:"⚙️", title:"Custom Web Apps", desc:"Quote calculators, dispatch boards, CRMs, inventory, and dashboards tailored to how your business actually runs." },
        { icon:"🔗", title:"Integrations & Automation", desc:"Stripe/Midtrans payments, Twilio SMS, WhatsApp Business, Google Calendar, Maps routing — wired into one workflow." },
        { icon:"📈", title:"SEO & Google Business", desc:"Local SEO, schema markup, and a review-funnel system so happy customers actually post 5-star reviews." },
        { icon:"🛡️", title:"Care Plans", desc:"Monthly hosting, security updates, backups, and small change requests — so your site never goes stale." },
      ],
    },
    portfolio: { eyebrow:"Selected work", title:"Real projects, real results." },
    process: {
      eyebrow: "How we work",
      title: "A simple, predictable process.",
      steps: [
        { n:"01", t:"Discovery call (free)", d:"30-minute call. You explain how your business runs. I sketch what software could remove the biggest bottleneck." },
        { n:"02", t:"Fixed-price proposal", d:"Within 48 hours you get a scope, timeline, and fixed price. No hourly surprises." },
        { n:"03", t:"Design + build", d:"I send a clickable mockup in week 1, then ship in weekly increments so you see progress, not promises." },
        { n:"04", t:"Launch + 30 days support", d:"Go-live, Google indexing, staff training, plus 30 days of free fixes. Then an optional monthly care plan." },
      ],
    },
    about: {
      eyebrow: "About", title: "Hi, I'm Aditya Puspo.",
      p1: "I'm a solo full-stack developer based in Jakarta, working remotely with service-based businesses around the world. For the last few years I've focused exclusively on one thing: building websites and apps that book more jobs for local service companies — barbershops, salons, plumbers, electricians, cleaners, landscapers, and mobile mechanics.",
      p2: "Because I'm solo, you talk to the person who actually writes the code. No project managers, no hand-offs, no agency markup. I take on a small number of clients at a time so each project gets real attention.",
      valueTitle: "What you get working with me",
      values: [
        "Direct line to the developer — reply on WhatsApp same day",
        "Fixed-price scope. No hourly billing surprises.",
        "Code you own. Hosted wherever you want.",
        "Performance budget: <2s load on 4G, 95+ Lighthouse",
        "30 days free fixes after launch",
        "Optional monthly care plan from $49/mo",
      ],
    },
    contact: {
      eyebrow: "Let's talk",
      title: "Tell me about your business. I'll reply within a few hours.",
      desc: "The fastest way to start is a quick WhatsApp message. If you prefer, email works too — I read every one.",
      info: [
        { label:"Location", value:"Remote · Jakarta, Indonesia" },
        { label:"Response time", value:"Within a few hours, Mon–Sat" },
        { label:"Availability", value:"2 project slots open this month" },
      ],
    },
    footer: { tagline: "I build websites & apps that grow local service businesses." },
  },
  id: {
    nav: {
      services: "Layanan", portfolio: "Portofolio",
      process: "Proses", contact: "Kontak", hire: "Hubungi Saya",
    },
    hero: {
      badge: "Tersedia untuk 2 proyek bulan ini",
      h1_pre: "Saya membangun", h1_accent: "website & aplikasi",
      h1_post: "yang mengembangkan bisnis jasa lokal.",
      desc: "Developer full-stack solo yang membantu laundry, salon, barbershop, bengkel motor, service AC, catering, dan jasa pindahan mengubah pengunjung menjadi pelanggan — website cepat, booking nyata, pendapatan nyata.",
      cta_wa: "Chat via WhatsApp", cta_email: "Kirim Email",
      stats: [["7+","Proyek selesai"],["3×","Rata-rata peningkatan booking"],["48j","Mockup pertama"],["Solo","Tanpa markup agensi"]] as [string,string][],
      industriesLabel: "Industri yang saya layani:",
      industries: ["💈 Barbershop","💅 Salon","🧺 Laundry","❄️ Service AC","🏍️ Bengkel","🍱 Catering","📦 Jasa Pindahan"],
    },
    services: {
      eyebrow: "Apa yang saya lakukan",
      title: "Dibangun khusus untuk bisnis jasa.",
      desc: "Bukan website generik. Setiap proyek dirancang untuk booking, dispatch, pembayaran, dan follow-up — empat hal yang benar-benar mengembangkan bisnis jasa lokal.",
      items: [
        { icon:"🗓️", title:"Website Booking", desc:"Website mobile-first dengan booking online, deposit, dan pengingat SMS/WhatsApp. Dibuat untuk ranking di Google." },
        { icon:"📱", title:"Aplikasi Mobile (iOS + Android)", desc:"Satu codebase dengan React Native — aplikasi pelanggan, dispatch, teknisi. Diterbitkan ke App Store dan Play Store." },
        { icon:"⚙️", title:"Aplikasi Web Kustom", desc:"Kalkulator harga, papan dispatch, CRM, inventaris, dan dashboard sesuai cara bisnis Anda berjalan." },
        { icon:"🔗", title:"Integrasi & Otomasi", desc:"Midtrans/Stripe, Twilio SMS, WhatsApp Business, Google Calendar, routing Maps — semua dalam satu alur kerja." },
        { icon:"📈", title:"SEO & Google Bisnisku", desc:"SEO lokal, schema markup, dan sistem review-funnel agar pelanggan puas benar-benar posting ulasan bintang 5." },
        { icon:"🛡️", title:"Paket Perawatan", desc:"Hosting bulanan, update keamanan, backup, dan perubahan kecil — agar website Anda tidak pernah ketinggalan." },
      ],
    },
    portfolio: { eyebrow:"Proyek pilihan", title:"Proyek nyata, hasil nyata." },
    process: {
      eyebrow: "Cara kerja kami",
      title: "Proses yang sederhana dan bisa diprediksi.",
      steps: [
        { n:"01", t:"Konsultasi (gratis)", d:"30 menit call. Anda jelaskan cara bisnis berjalan. Saya sketsa software yang bisa hilangkan hambatan terbesar." },
        { n:"02", t:"Proposal harga tetap", d:"Dalam 48 jam Anda dapat scope, timeline, dan harga tetap. Tidak ada kejutan biaya per jam." },
        { n:"03", t:"Desain + bangun", d:"Saya kirim mockup yang bisa diklik di minggu pertama, lalu kirim update mingguan supaya Anda lihat progres, bukan janji." },
        { n:"04", t:"Launch + 30 hari support", d:"Go-live, indexing Google, pelatihan staf, plus 30 hari perbaikan gratis. Lalu paket perawatan bulanan opsional." },
      ],
    },
    about: {
      eyebrow: "Tentang", title: "Hai, saya Aditya Puspo.",
      p1: "Saya developer full-stack solo berbasis di Jakarta, bekerja remote dengan bisnis berbasis jasa di seluruh Indonesia. Beberapa tahun terakhir saya fokus pada satu hal: membangun website dan aplikasi yang memesan lebih banyak pekerjaan untuk bisnis jasa lokal — barbershop, salon, laundry, bengkel motor, service AC, catering, dan jasa pindahan.",
      p2: "Karena saya solo, Anda berbicara langsung dengan orang yang menulis kodenya. Tidak ada project manager, tidak ada hand-off, tidak ada markup agensi. Saya mengambil sedikit klien sekaligus agar setiap proyek mendapat perhatian penuh.",
      valueTitle: "Yang Anda dapat bekerja dengan saya",
      values: [
        "Jalur langsung ke developer — balas di WhatsApp hari yang sama",
        "Harga tetap. Tidak ada tagihan per jam yang mengejutkan.",
        "Kode milik Anda. Di-host di mana saja.",
        "Budget performa: <2 detik load di 4G, 95+ Lighthouse",
        "30 hari perbaikan gratis setelah launch",
        "Paket perawatan bulanan opsional mulai Rp 750rb/bln",
      ],
    },
    contact: {
      eyebrow: "Ayo ngobrol",
      title: "Ceritakan bisnis Anda. Saya akan balas dalam beberapa jam.",
      desc: "Cara tercepat adalah pesan WhatsApp singkat. Kalau lebih suka email, saya baca semuanya.",
      info: [
        { label:"Lokasi", value:"Remote · Jakarta, Indonesia" },
        { label:"Waktu respon", value:"Beberapa jam, Senin–Sabtu" },
        { label:"Ketersediaan", value:"2 slot proyek terbuka bulan ini" },
      ],
    },
    footer: { tagline: "Saya membangun website & aplikasi yang mengembangkan bisnis jasa lokal." },
  },
};

export type T = typeof translations.en;
export const getT = (lang: Lang): T => translations[lang];
