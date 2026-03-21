import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Brand colors
        'brand-blue': '#0474c1',
        'brand-navy': '#0D2137',
        'brand-teal': '#3AAEAE',
        'brand-gold': '#FFCB3B',
        'brand-coral': '#E85D4A',
        'brand-sky': '#E8F3FB',
        'brand-slate': '#5A6B7C',
        blue: {
          50: '#E5F1FB', 100: '#B3D5F3', 200: '#6AAEE8',
          400: '#0474c1', 600: '#0558A0', 800: '#033D72', 900: '#012448',
        },
        navy: {
          50: '#E6EBF0', 100: '#B3C2CF', 200: '#6A8499',
          400: '#1A3A55', 600: '#0D2137', 800: '#081526', 900: '#030B14',
        },
        gold: {
          50: '#FFFAED', 100: '#FFECAD', 200: '#FFD96B',
          400: '#FFCB3B', 600: '#C99A1A', 800: '#8A6509',
        },
        coral: {
          50: '#FDECEA', 100: '#F9BAB4', 200: '#F28880',
          400: '#E85D4A', 600: '#B83A29', 800: '#7C2318',
        },
        teal: {
          50: '#E0F5F5', 100: '#A3E1E1', 200: '#68CACA',
          400: '#3AAEAE', 600: '#248888', 800: '#155D5D',
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      fontFamily: {
        display: ['Outfit', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        accent: ['Lora', 'serif'],
      },
      fontSize: {
        'display': ['64px', { lineHeight: '1.05', letterSpacing: '-1.5px', fontWeight: '800' }],
        'h1': ['48px', { lineHeight: '1.10', letterSpacing: '-1px', fontWeight: '800' }],
        'h2': ['36px', { lineHeight: '1.20', letterSpacing: '-0.5px', fontWeight: '700' }],
        'h3': ['24px', { lineHeight: '1.25', letterSpacing: '-0.3px', fontWeight: '700' }],
        'h4': ['18px', { lineHeight: '1.30', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '1.75', fontWeight: '400' }],
        'body': ['16px', { lineHeight: '1.70', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '1.65', fontWeight: '400' }],
        'caption': ['12px', { lineHeight: '1.50', fontWeight: '400' }],
        'label': ['11px', { lineHeight: '1.40', letterSpacing: '0.08em', fontWeight: '600' }],
        'btn': ['14px', { lineHeight: '1', letterSpacing: '0.01em', fontWeight: '700' }],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        'btn': '100px',
        'card': '14px',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(20px)", filter: "blur(4px)" },
          to: { opacity: "1", transform: "translateY(0)", filter: "blur(0px)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fade-in 0.5s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
