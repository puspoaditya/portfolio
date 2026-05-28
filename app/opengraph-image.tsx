import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Aditya Puspo — Full-Stack Developer for Local Service Businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0b",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 80px 60px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* purple blob top-left */}
        <div style={{
          position: "absolute", top: -120, left: -120,
          width: 600, height: 600, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(124,92,255,0.35) 0%, transparent 65%)",
          display: "flex",
        }} />
        {/* cyan blob top-right */}
        <div style={{
          position: "absolute", top: -80, right: -80,
          width: 500, height: 500, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(34,211,238,0.22) 0%, transparent 65%)",
          display: "flex",
        }} />
        {/* purple blob bottom */}
        <div style={{
          position: "absolute", bottom: -150, left: "40%",
          width: 700, height: 350, borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(124,92,255,0.18) 0%, transparent 65%)",
          display: "flex",
        }} />

        {/* content */}
        <div style={{ display: "flex", flexDirection: "column", position: "relative" }}>

          {/* available badge */}
          <div style={{
            display: "flex", alignItems: "center", gap: 8,
            background: "rgba(124,92,255,0.12)",
            border: "1px solid rgba(124,92,255,0.3)",
            borderRadius: 999, padding: "6px 18px",
            marginBottom: 28, width: "fit-content",
          }}>
            <div style={{
              width: 8, height: 8, borderRadius: "50%",
              background: "#34d399", display: "flex",
            }} />
            <span style={{ color: "#c7bdff", fontSize: 18, fontWeight: 600 }}>
              Available for projects · Remote · Jakarta
            </span>
          </div>

          {/* name */}
          <div style={{
            fontSize: 82, fontWeight: 800, color: "#ededf0",
            letterSpacing: "-3px", lineHeight: 1.05, display: "flex",
          }}>
            Aditya Puspo
          </div>

          {/* role — plain color, no backgroundClip */}
          <div style={{
            fontSize: 34, fontWeight: 600, marginTop: 14,
            color: "#9d7fff", display: "flex",
          }}>
            Full-Stack Developer · Web &amp; Mobile
          </div>

          {/* tagline */}
          <div style={{
            fontSize: 23, color: "#6a6a78", marginTop: 20,
            lineHeight: 1.55, maxWidth: 730, display: "flex",
          }}>
            Building booking sites &amp; apps for local service businesses —
            barbershops, salons, plumbers, cleaners &amp; more.
          </div>

          {/* industry chips */}
          <div style={{ display: "flex", gap: 10, marginTop: 36 }}>
            {["💈 Barber", "💅 Salon", "🧽 Cleaning", "⚡ Electrician", "🌿 Landscaper", "🔧 Mechanic"].map((t) => (
              <div key={t} style={{
                padding: "7px 16px", borderRadius: 999,
                background: "rgba(124,92,255,0.12)",
                border: "1px solid rgba(124,92,255,0.28)",
                color: "#c7bdff", fontSize: 18, display: "flex",
              }}>
                {t}
              </div>
            ))}
          </div>
        </div>

        {/* bottom bar */}
        <div style={{
          position: "absolute", bottom: 44, left: 80, right: 80,
          display: "flex", justifyContent: "space-between", alignItems: "center",
        }}>
          <div style={{ color: "#3a3a48", fontSize: 20 }}>adityapuspo.vercel.app</div>
          <div style={{ display: "flex", gap: 32 }}>
            {[["7+", "Projects"], ["3×", "Booking lift"], ["48h", "First mockup"]].map(([v, l]) => (
              <div key={l} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ color: "#7c5cff", fontSize: 26, fontWeight: 700 }}>{v}</span>
                <span style={{ color: "#3a3a48", fontSize: 15, marginTop: 2 }}>{l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
