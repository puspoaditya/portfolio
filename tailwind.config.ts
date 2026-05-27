import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0a0a0b",
        surface: "#111114",
        card: "#16161a",
        border: "#26262c",
        muted: "#8a8a93",
        text: "#ededf0",
        accent: "#7c5cff",
        accent2: "#22d3ee",
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Inter", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(124,92,255,.25), 0 10px 40px -10px rgba(124,92,255,.45)",
      },
    },
  },
  plugins: [],
};
export default config;
