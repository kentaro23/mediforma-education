import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#13223D",
          800: "#1C3254",
          700: "#2A4060"
        },
        teal: {
          500: "#1F9993",
          400: "#2ABFBF",
          100: "#E0F5F4"
        },
        eduBlue: {
          500: "#3B6ECC",
          100: "#EBF1FB"
        },
        neutralGray: {
          50: "#F8F9FB",
          100: "#F0F2F5",
          400: "#8A9DB5",
          600: "#3D4F63"
        },
        amber: {
          500: "#D4940A",
          100: "#FDF6E3"
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(19, 34, 61, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
