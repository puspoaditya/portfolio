import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  metadataBase: new URL("https://adityapuspo.vercel.app"),
  title: "Aditya Puspo · Full-Stack Dev for Service Businesses",
  description:
    "Solo full-stack developer building booking sites & apps for barbershops, salons, plumbers, electricians, cleaners & landscapers. Fast load, real results.",
  openGraph: {
    title: "Aditya Puspo · Full-Stack Dev for Service Businesses",
    description:
      "Solo full-stack developer building booking sites & apps for barbershops, salons, plumbers, electricians, cleaners & landscapers. Fast load, real results.",
    type: "website",
    url: "https://adityapuspo.vercel.app",
    siteName: "Aditya Puspo",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Aditya Puspo — Full-Stack Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditya Puspo · Full-Stack Dev for Service Businesses",
    description: "Solo full-stack developer building booking sites & apps for local service businesses.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased site-bg">
        {/* full-page decorative layer — sits behind everything */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden>
          {/* dot grid */}
          <div className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(rgba(255,255,255,.045) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
              maskImage: "radial-gradient(ellipse 100% 100% at 50% 0%, black 30%, transparent 80%)",
              WebkitMaskImage: "radial-gradient(ellipse 100% 100% at 50% 0%, black 30%, transparent 80%)",
            }}
          />
          {/* top-left blob */}
          <div className="blob1 absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full opacity-[.18]"
            style={{ background: "radial-gradient(circle at 40% 40%, #7c5cff, transparent 65%)" }} />
          {/* top-right blob */}
          <div className="blob2 absolute -top-20 -right-40 w-[600px] h-[600px] rounded-full opacity-[.13]"
            style={{ background: "radial-gradient(circle at 60% 40%, #22d3ee, transparent 65%)" }} />
          {/* mid-page blob */}
          <div className="blob1 absolute top-[55%] -left-60 w-[700px] h-[700px] rounded-full opacity-[.10]"
            style={{ background: "radial-gradient(circle at 50% 50%, #7c5cff, transparent 65%)" }} />
          {/* lower-right blob */}
          <div className="blob2 absolute top-[70%] -right-40 w-[500px] h-[500px] rounded-full opacity-[.10]"
            style={{ background: "radial-gradient(circle at 50% 50%, #22d3ee, transparent 65%)" }} />
          {/* bottom blob */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-[.10]"
            style={{ background: "radial-gradient(ellipse at 50% 100%, #7c5cff, transparent 65%)" }} />
        </div>

        <LanguageProvider>
          <div className="relative z-10">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
