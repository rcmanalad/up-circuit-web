import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        skyice: "#c5f3ff",
        skysea: "#6dcae9",
        azure: "#1f9ade",
        upblue: "#1174b5",
        upindigo: "#37398c",
        mist: "#e7ebee",
        fog: "#D8DDE2",
        steel: "#95ACBF",
        ink: "#2A3343",
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px -8px rgba(31,154,222,0.45)",
        card: "0 18px 45px -18px rgba(42,51,67,0.25)",
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(197,243,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(197,243,255,0.06) 1px, transparent 1px)",
        "circuit-fade":
          "radial-gradient(ellipse at 20% 0%, rgba(31,154,222,0.28) 0%, transparent 55%), radial-gradient(ellipse at 85% 100%, rgba(55,57,140,0.55) 0%, transparent 60%)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.45" },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        float: "float 7s ease-in-out infinite",
        pulseSoft: "pulseSoft 3.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
