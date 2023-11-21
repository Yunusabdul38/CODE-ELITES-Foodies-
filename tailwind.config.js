/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage:{
        "hero-image1":"url(../src/Assets/adrien-olichon-ZgREXhl8ER0-unsplash.jpg)",
        "hero-image2":"url(../src/Assets/ali-inay-y3aP9oo9Pjc-unsplash (1).jpg)",
        "hero-image3":"url(../src/Assets/louis-hansel-wVoP_Q2Bg_A-unsplash.jpg)",
        "hero-image4":"url(../src/Assets/nick-karvounis-Ciqxn7FE4vE-unsplash.jpg)",
        "hero-image5":"url(../src/Assets/shawnanggg-nmpW_WwwVSc-unsplash.jpg)"
      },
      animation: {
        "animate-l": " animateL 1s linear 1",
        "animate-r": "animateR 1s linear 1",
        "widths": "wid 10s linear infinite",
      },
      keyframes: {
        animateL: {
          "0%": { translateX:0},
          "100%": { translateX: "50%" },
        },
        animateR: {
          "0%": { translateX: "50%" },
          "100%": { translateX: 0 },
        },
        wid: {
          from: { width: 0 },
          to: { width: "100%" },
        },
      },
      fontFamily:{
        "takur":'Tektur,sans-serif',
        'NotoSans':"Noto Sans, sans-seri",
        "Inter":'Inter, sans-serif',
      }
    }
  },
  plugins: [],
}

