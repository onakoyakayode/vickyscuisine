/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        gold: {
          50: "#fdf9ec",
          100: "#faf0cc",
          200: "#f4df9a",
          300: "#ecc960",
          400: "#e4b030",
          500: "#c9a84c",
          600: "#b8892e",
          700: "#956826",
          800: "#7a5225",
          900: "#664522",
        },
        dark: {
          50: "#f5f0e8",
          100: "#e8ddc8",
          200: "#c9b88a",
          300: "#a8904e",
          400: "#3d2b10",
          500: "#2a1e0a",
          600: "#1a1208",
          700: "#130d06",
          800: "#0d0904",
          900: "#070402",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "Courier New", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.3s ease-out",
        "slide-up": "slideUp 0.3s ease-out",
        "slide-in": "slideIn 0.25s ease-out",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(12px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideIn: {
          "0%": { transform: "translateX(-8px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
