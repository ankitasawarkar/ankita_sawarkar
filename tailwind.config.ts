import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        body: "#EDF9FE",
        text: "#001C55",
        expTxtColor: "#000a12",
        highlight: "#A6E1FA",
        dark: "#00072D",
        secondaryText: "#7F8DAA",
        imageHighlight: "#0E6BA8",
        compImgHighlight: "#E6E6E6",
        jacketColor: "#0A2472",
        headerColor: "#0E6BA877",
        splashBg: "#001C55",
      },
    },
  },
  plugins: [],
} satisfies Config;
