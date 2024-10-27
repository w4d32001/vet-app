import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
  			primary: '#f4782b',
  			secondary: {
  				'100': '#223030',
  				'500': '#8B79F1'
  			},
  			'gradient-start': '#f7b733',
  			'gradient-end': '#fc4a1a'
  		},
  		backgroundImage: {
  			'custom-gradient': 'linear-gradient(360deg, #223030, #f7b733, #f7b733, #223030)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
