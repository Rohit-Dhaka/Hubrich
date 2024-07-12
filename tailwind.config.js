/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins, sans-serif",
        inter: "Inter, sans-serif",
        helvetica: "Helvetica Neue",
      },
      boxShadow: {
        clientsbox: "0px 2px 48px 0px #00000014",
        buttonshadow: " 0px 0px 20px 2px #8703C5",
        arrow : " 0px 0px 20px 2px white"
      },
      colors: {
        Orange: "#F77B0B",
        white: "#FFFFFF",
        Barneypurple: "#9800B0",
        blue: "#003E92",
        aliceblue: "#F5FAFF",
        slateblue: "#003E92B2",
        lightgray: "#FFFFFF26",
        steelblue: "#003E9233",
        LightSky: "#0C5FD1",
        Indigo: "#8703C5",
        WhiteSmoke: "#F2F8FF",
        gray: "#FFFFFF1F",
      },      
      backgroundImage: {
        'hero': "url('assets/images/webp/Hero.webp')",
        'taret': "url('assets/images/webp/image5.webp')",
        'overyour': "url('assets/images/webp/sadwoman.webp')",
        'nonbinding': "url('assets/images/webp/Non.webp')",
        'fault': "url('assets/images/webp/Frame59.webp')",
      },

    },
  },
  plugins: [],
}