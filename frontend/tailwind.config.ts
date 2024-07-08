import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,tsx,mdx}",
    "./src/components/**/*.{js,ts,tsx,mdx}",
    "./src/pages/**/*.{js,ts,tsx,mdx}",
    "./src/**/*.{js,ts,tsx,mdx}",
  ],
  theme: {},
  plugins: [],
};
export default config;
