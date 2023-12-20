import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "#596787",
        "main-blue": "#03A9F1",
        "main-green": "#00AC83",
        "main-purple": "#837DFF",
        "light-gray": "#373E4E",
        "light-black": "#272A35",
      },
    },
  },
  plugins: [],
};
export default config;
