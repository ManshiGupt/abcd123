import type { Config } from "tailwindcss";
// import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    "./src/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        zoomIn: 'zoomIn 10s infinite',
        marquee: 'marquee 25s linear infinite',
        scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        zoomIn: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      screens: {
        '3xl': '1600px',
      },
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
    },
  },
  plugins: [
    addVariablesForColors,
    // Uncomment the following lines if you want to use DaisyUI:
    // require('daisyui'),
  ],
  daisyui: {
    themes: ["light", "dark"],
  },
};

function addVariablesForColors({ addBase, theme }: any) {
  // let allColors = flattenColorPalette(theme("colors"));
  // let newVars = Object.fromEntries(
  //   Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  // );

  // addBase({
  //   ":root": newVars,
  // });
}

export default config;
