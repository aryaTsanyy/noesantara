/** @format */

import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fadeInUp: {
        "0%": { opacity: 0, transform: "translateY(50px)" },
        "100%": { opacity: 1, transform: "translateY(0)" },
      },
      animation: {
        fadeInUp: "fadeInUp 0.8s ease-out",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".no-scrollbar": {
          "-ms-overflow-style": "none" /* IE and Edge */,
          "scrollbar-width": "none" /* Firefox */,
        },
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none" /* Chrome, Safari, dan Opera */,
        },
      });
    }),
  ],
} satisfies Config;
