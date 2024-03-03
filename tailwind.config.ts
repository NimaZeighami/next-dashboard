import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "mid-blue-focus": "0px 0px 0px 3px rgba(178, 231, 253, 0.50), 0px 0px 0px 1px #B2E7FD",
        "primary-focus": "0px 0px 0px 3px rgba(27, 38, 59, 0.50)",
        "secondary": "0px 0px 0px 1px #B2E7FD, 0px 1px 1px 0px rgba(0, 0, 0, 0.10)",
        "disable": "0px 0px 0px 1px rgba(70, 79, 96, 0.20)"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'blue-lagoon':'#088395',
        "alice-blue": "#ECEFF1",
        "mid-blue": "#F8F9FA",
        "dark-blue": "#6C757D",
        "light-blue": "#E9ECEF",
        "baltic-sea": "#343A40",
        "mid-white": "#c3c5c7",
        "dark-purple": "#7A01DA",
        "basalt-grey": "#999999",
        "eclipse": "#373737",
        "dark-gray": "#3C3C3C",
        "light-green": "#34B53A",
        "mid-green": "#007105",
        "mid-black": "#1C1C1C",
        "bright-greek": "#4339F2",
        "aqua": "#00F0F0",
        "mid-yellow": "#FFB200",
        "mid-red": "#FF3A29",
        "primary": "#1B263B",
        "primary-opacity-40": "rgba(27, 38, 59, 0.4)",
        "primary-opacity-70": "rgba(27, 38, 59, 0.7)",
        "primary-opacity-90": "rgba(27, 38, 59, 0.9)",
        "secondary": "rgba(178, 231, 253, 1)",
        "secondary-opacity-10": "rgba(178, 231, 253, 0.1)",
        "black-opacity-10": "rgba(0, 0, 0, 0.1)",
        "black-opacity-40": "rgba(0, 0, 0, 0.4)",
        "black-opacity-50": "rgba(0, 0, 0, 0.5)",
        "black-opacity-60": "rgba(0, 0, 0, 0.6)",
        "black-opacity-70": "rgba(0, 0, 0, 0.7)",
        "secondary-opacity-20": "rgba(178, 231, 253, 0.2)",
        "light": "rgba(235, 237, 239, 1)",
        "dark": "#2C3C51"
      }
    },
  },
  plugins: [],
};
export default config;
