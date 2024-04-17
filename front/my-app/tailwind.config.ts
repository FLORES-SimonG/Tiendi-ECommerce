import type { Config } from "tailwindcss";


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        customColorPrimary: 'rgb(173, 172, 217)',
        customColorSecondary: 'rgb(199, 199, 199)',
        customColorTertiary: 'rgb(204, 108, 228)',
        customColorQuaternary: 'rgb(226, 92, 85)',
        errorColor: "#ff000026",
        passColor: "#00e10026",

      },
     
      
    },
  },
  plugins: [],
};
export default config;
