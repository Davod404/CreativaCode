/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
	
    extend: {
        maxWidth:{
            '60ch': '60ch',
        },

        height:{
            '60vh': '60vh',
        },

        colors : {
            text: '#0b1202',
            background: '#ededed',
            primary: '#a3d728',
            secondary: '#9858fd',
            accent: '#352e38',
        },	

        textColor: {
            day: '#0b1202',
        }
    },
  },
  plugins: [],
}


