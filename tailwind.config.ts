import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "home-sm":"url('/images/home-425-731.png')",
        "home-lg":"url('/images/home-744-1133.png')",
        "home-xl":"url('/images/home-1440-900.png')",
        "radial-gray":"radial-gradient(42.67% 31.83% at 55.68% 37.31%, #ffffff 0%, #efefef 100%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "special-background1":"conic-gradient(from 196deg at 22.12% 0%, rgba(248,5,5,0.04) 0%, rgba(255,123,54,0) 100%), linear-gradient(180deg, #ffffff 61%, #ffdedc 100%)",
        "special-background2":"linear-gradient(180deg, #ffffff 61%, #ffdedc 100%)",
      },
      colors:{
        "primary" : "rgb(244, 67, 54)",
        "darck-primary" : "rgb(211, 47, 47)",
        "light-primary" : "rgb(255, 205, 210)",
        "accent": "rgb(68, 138, 255)",
        "secondary-text" : "rgb(177, 177, 177)",
        "divider" : "rgb(189, 189, 189)",
      },
      boxShadow:{
        "cardPartenaire":"2px 32px 50px rgba(0,0,0,0.2)",
      },
    },
  },
  plugins: [],
};
export default config