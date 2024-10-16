import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
    
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        custom_beige:"#FFF3E3",
        default_text:"#333333",
        text_beige:"#B88E2F",
        text_sub:"#666666",
        light_grey:"#F4F5F7",
        light_beige:"#FCF8F3",
        light_sm_grey:"#616161",
        background_gold:"#F9F1E7",
        grey:"#9F9F9F"
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // Set Poppins as the default sans-serif font
        logo:["Montserrat", "sans-serif"]
      },
    },
  },
  plugins: [],
};
export default config;
