/** @type {import('tailwindcss').Config} */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


export default defineConfig({
  plugins: [
    react(),
    require("daisyui"),
  ],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#B08463", 
          secondary: "#B9937B", 
          accent: "#D0B9A7",
          neutral: "#CA7D94", // check this before presentation
          "base-100": "B5A192",
        },
      },
    ],
  },
});

