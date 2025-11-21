const themes = {
  neonNoir: {
    "--color-bg": "#05030A",
    "--color-surface": "#0F172A",
    "--color-primary": "#FF005C",
    "--color-secondary": "#5B2BE0",
    "--color-accent": "#00F0FF",
    "--color-muted": "rgba(255,255,255,0.08)",
    "--color-text": "#F5F5FF",
    "--color-text-muted": "rgba(245,245,255,0.6)",
  },
  auroraPulse: {
    "--color-bg": "#08021C",
    "--color-surface": "#1C0F3F",
    "--color-primary": "#A259FF",
    "--color-secondary": "#5EFCE8",
    "--color-accent": "#FF8C42",
    "--color-muted": "rgba(255,255,255,0.1)",
    "--color-text": "#F6ECFF",
    "--color-text-muted": "rgba(246,236,255,0.65)",
  },
  cinemaSunset: {
    "--color-bg": "#120B07",
    "--color-surface": "#1E130D",
    "--color-primary": "#FF9F1C",
    "--color-secondary": "#FF5F6D",
    "--color-accent": "#FFD369",
    "--color-muted": "rgba(255,255,255,0.12)",
    "--color-text": "#FFF4E6",
    "--color-text-muted": "rgba(255,244,230,0.65)",
  },
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        sans: ["PlusJakartaSans_400Regular", "System"],
        "jakarta-regular": ["PlusJakartaSans_400Regular", "System"],
        "jakarta-medium": ["PlusJakartaSans_500Medium", "System"],
        "jakarta-semibold": ["PlusJakartaSans_600SemiBold", "System"],
      },
      colors: {
        background: "var(--color-bg)",
        surface: "var(--color-surface)",
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        muted: "var(--color-muted)",
        text: "var(--color-text)",
        "text-muted": "var(--color-text-muted)",
      },
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        ":root": themes.neonNoir,
        ".theme-aurora": themes.auroraPulse,
        ".theme-cinema": themes.cinemaSunset,
      });
    },
  ],
};