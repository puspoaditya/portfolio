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
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* purple blob top-left */}
        <div style={{
          position: "absolute", top: -120, left: -120,
          width: 600, height: 600, borderRadius: "50%",
          background: "rgba(124,92,255,0.28)",
          display: "flex",
        }} />
        {/* cyan blob top-right */}
        <div style={{
          position: "absolute", top: -80, right: -100,
          width: 500, height: 500, borderRadius: "50%",
          background: "rgba(34,211,238,0.16)",
          display: "flex",
        }} />
        {/* bottom blob */}
        <div style={{
          position: "absolute", bottom: -100, left: "35%",
          width: 600, height: 300, borderRadius: "50%",
          background: "rgba(124,92,255,0.14)",
          display: "flex",
        }} />

        {/* available badge */}
        <div style={{
          display: "flex", alignItems: "center", gap: 10,
          background: "rgba(124,92,255,0.12)",
          border: "1px solid rgba(124,92,255,0.35)",
          borderRadius: 999, padding: "8px 20px",
          marginBottom: 32, width: "fit-content",
        }}>
          <div style={{
            width: 10, height: 10, borderRadius: "50%",
            background: "#34d399", display: "flex",
          }} />
          <span style={{ color: "#c7bdff", fontSize: 20, fontWeight: 600 }}>
            Available for projects · Remote · Jakarta, Indonesia
          </span>
        </div>

        {/* name */}
        <div style={{
          fontSize: 86, fontWeight: 800, color: "#ededf0",
          letterSpacing: "-3px", lineHeight: 1,
          display: "flex",
        }}>
          Aditya Puspo
        </div>

        {/* role */}
        <div style={{
          fontSize: 36, fontWeight: 600, marginTop: 16,
          color: "#9d7fff", display: "flex",
        }}>
          Full-Stack Developer · Web &amp; Mobile
        </div>

        {/* tagline */}
        <div style={{
          fontSize: 24, color: "#5a5a68", marginTop: 20,
          lineHeight: 1.55, maxWidth: 780, display: "flex",
        }}>
          Building booking sites &amp; apps for barbershops, salons, plumbers,
          electricians, cleaners &amp; landscapers.
        </div>

        {/* chips — no emoji */}
        <div style={{ display: "flex", gap: 10, marginTop: 40 }}>
          {["Barber Shop","Beauty Salon","Cleaning","Electrician","Landscaper","Mechanic","Plumber"].map((t) => (
            <div key={t} style={{
              padding: "8px 18px", borderRadius: 999,
              background: "rgba(124,92,255,0.10)",
              border: "1px solid rgba(124,92,255,0.25)",
              color: "#9d8fff", fontSize: 18, display: "flex",
            }}>
              {t}
            </div>
          ))}
        </div>

        {/* bottom bar */}
        <div style={{
          position: "absolute", bottom: 48, left: 80, right: 80,
          display: "flex", justifyContent: "space-between", alignItems: "center",
        }}>
          <div style={{ color: "#333340", fontSize: 22 }}>adityapuspo.vercel.app</div>
          <div style={{ display: "flex", gap: 36 }}>
            {[["7+","Projects"],["3x","Bookings lift"],["48h","First mockup"]].map(([v,l]) => (
              <div key={l} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ color: "#7c5cff", fontSize: 28, fontWeight: 700 }}>{v}</span>
                <span style={{ color: "#333340", fontSize: 16, marginTop: 2 }}>{l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
