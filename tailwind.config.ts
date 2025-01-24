import { transform } from "next/dist/build/swc/generated-native";
import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	extend: {
		animation: {
			moveCapUp: 'moveCapUp 7s 2s forwards',
			moveBottleDown: 'moveBottleDown 7s 2s forwards',
			enlargeCircle: 'enlargeCircle 6s 2s forwards',
			enlarge: 'enlarge 6s 2s forwards',
			scroll: 'scroll 4s 5s forwards',
			scroll2: 'scroll2 4s 5s forwards',
			fadein: 'fadein 5.5s 2s forwards',
		},
		colors: {
			background: 'hsl(var(--background))',
			foreground: 'hsl(var(--foreground))',
			card: {
				DEFAULT: 'hsl(var(--card))',
				foreground: 'hsl(var(--card-foreground))'
			},
			popover: {
				DEFAULT: 'hsl(var(--popover))',
				foreground: 'hsl(var(--popover-foreground))'
			},
			primary: {
				DEFAULT: 'hsl(var(--primary))',
				foreground: 'hsl(var(--primary-foreground))'
			},
			secondary: {
				DEFAULT: 'hsl(var(--secondary))',
				foreground: 'hsl(var(--secondary-foreground))'
			},
			muted: {
				DEFAULT: 'hsl(var(--muted))',
				foreground: 'hsl(var(--muted-foreground))'
			},
			accent: {
				DEFAULT: 'hsl(var(--accent))',
				foreground: 'hsl(var(--accent-foreground))'
			},
			destructive: {
				DEFAULT: 'hsl(var(--destructive))',
				foreground: 'hsl(var(--destructive-foreground))'
			},
			border: 'hsl(var(--border))',
			input: 'hsl(var(--input))',
			ring: 'hsl(var(--ring))',
			chart: {
				'1': 'hsl(var(--chart-1))',
				'2': 'hsl(var(--chart-2))',
				'3': 'hsl(var(--chart-3))',
				'4': 'hsl(var(--chart-4))',
				'5': 'hsl(var(--chart-5))'
			}
		},
		borderRadius: {
			lg: 'var(--radius)',
			md: 'calc(var(--radius) - 2px)',
			sm: 'calc(var(--radius) - 4px)'
		},
		keyframes: {
			moveCapUp: {
				'0%': {
					transform: 'translateY(0)',
				},
				'50%': {
					transform: 'translateY(-300px)',
				},
				'62.5%': {
					transform: 'translateY(-300px)',
				},
				'100%': {
					transform: 'translateY(-150px)',
				}
			},
			moveBottleDown: {
				'0%': {
					transform: 'translateY(0)',
				},
				'50%': {
					transform: 'translateY(170px)'
				},
				'62.5%': {
					transform: 'translateY(170px)'
				},
				'100%': {
					transform: 'translateY(-150px)',
				}
			},
			enlargeCircle: {
				'0%': {
					transform: 'scale(1)',
				},
				'50%': {
					transform: 'scale(1.6)',
				},
				'100%': {
					transform: 'scale(1.6)',
				}
			},
			fadein: {
				'0%': {
					transform: 'scale(0)',
				},
				'100%': {
					transform: 'scale(1)',
				}
			},
			enlarge: {
				'0%': {
					transform: 'scale(0)',
				},
				'75%': {
					transform: 'scale(1) translateY(0)',
				},
				'100%': {
					transform: 'scale(1) translateY(-650px)',
				}
			},
			scroll: {
				'0%': {
					transform: 'translateY(0)',
				},
				'40%': {
					transform: 'translateY(-0px)',
				},
				'100%': {
					transform: 'translateY(-865px)',
				}
			},
			scroll2: {
				'0%': {
					overflow: 'hidden',
				},
				'100%': {
					overflow: 'visible',
				}
			}
		},
	},
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
