/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        customtheme: {
          primary: "#570DF8",
          secondary: "#F000B8",
          accent: "#37CDBE",
          neutral: "#171717",
          "base-100": "#ffffff", // Matches your light mode background
          "base-200": "#0a0a0a", // Matches your dark mode background
        },
      },
    ],
  },
  
  plugins: [
    require('daisyui'),
  ],
};
