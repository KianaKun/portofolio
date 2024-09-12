import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        navbar: "#161D6F",
        body: "#0B2F9F",
        card: "#98DED9",
        text: "#C7FFD8"
      },
    },
  },
  plugins: [],
};
export default config;
