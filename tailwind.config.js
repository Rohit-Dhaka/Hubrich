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
        btnShadow: " 0px 0px 48px 5px #0C5FD1"
      },
      colors:{
        Orange:"#F77B0B",
        white: "#FFFFFF",
        Barneypurple:"#9800B0",

      }
    },
  },
  plugins: [],
}


// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       screens: {
//         xs: "500px",
//         mobile: "375px",
//         "custom-xl": "1366px",
//       },
//       fontFamily: {
//         poppins: "Poppins, sans-serif",
//         inter: "inter, sans-serif",
//         hebrew: "hebrew, sans-serif",
//         "hebrew-bold": "hebrew-bold, sans-serif",
//       },
//       colors: {
//         lightSmoke: "#F7F7F7",
//         lightWhite: "#ffffff20",
//         smokeWhite: "#CFD0D0",
//         offWhite: "#FEFEFE",
//         offBlack: "#010101",
//         carmine: "#96151D",
//         lightGray: "#DFDEDE",
//         grey: "#FEFEFE2B",
//         lightGrey: "#ffffff99",
//         blackGrey: "#333333",
//         "dark-red": "#FF9FA5",
//         red: "#94151D",
//         layer: "#c9c7c6",
//         backdrop: "#d0d0d096",
//       },
//       backgroundSize: {
//         full: "100% 100%",
//       },
//       fontSize: {
//         "custom-3xl": "32px",
//         "custom-4xl": "40px",
//         "custom-5xl": "56px",
//         "custom-7xl": "70px",
//         "custom-9xl": "90px",
//       },
//       backgroundImage: {
//         "core-value": "url('/assets/images/webp/core-value.webp')",
//         "core-value-cards": "url('/assets/images/png/core-card.png')",
//         "nano-space": "url('/assets/images/png/nano-space.png')",
//         "future-gaming":
//           "url('/assets/images/svg/future-gaming-clip-path.svg')",
//         hero: "url('/assets/images/webp/hero-bg.webp')",
//         culture: "url('/assets/images/webp/culture.webp')",
//         curve: "url('/assets/images/webp/curve-small.webp')",
//         "ai-platform": "url('/assets/images/png/bg-lines.png')",
//         nav: "url('/assets/images/svg/nav-logo-bg.svg')",
//       },
//       scale: {
//         103: "1.03",
//       },
//       boxShadow: {
//         nav: "0px 7px 10.9px 0px #0000002E",
//         "nav-transparent": "0px 7px 10.9px 0px rgb(219 197 197 / 18%)",
//       },
//       container: {
//         center: true,
//         screens: {
//           sm: "640px",
//           md: "768px",
//           lg: "1024px",
//           xl: "1180px",
//         },
//         padding: {
//           DEFAULT: "20px",
//         },
//       },
//     },
//   },
//   plugins: [],
// };