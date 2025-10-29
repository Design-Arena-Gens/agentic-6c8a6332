import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: "#0B1A2E",
        sapphire: "#12395B",
        dusk: "#1F2C3D",
        champagne: "#E4D5B7",
        ivory: "#F6F1E7",
        gold: "#C9A646",
      },
      backgroundImage: {
        "gradient-overlay":
          "linear-gradient(180deg, rgba(11, 26, 46, 0.65) 0%, rgba(11, 26, 46, 0.85) 100%)",
      },
      boxShadow: {
        luxe: "0 20px 45px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
