/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage:{
        "hero-image1":"url(https://images.unsplash.com/photo-1520869578617-557561d7b114?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGZvb2QlMjB0YWJsZXxlbnwwfDB8MHx8fDA%3D)",
        "hero-image2":"url(https://images.unsplash.com/photo-1565895405140-6b9830a88c19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODh8fGZvb2QlMjB0YWJsZXxlbnwwfDB8MHx8fDA%3D)",
        "food-image1":"url(https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGZvb2R8ZW58MHx8MHx8fDA%3D)",
        "food-image2":"url(https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHx8MHx8fDA%3D)",
        "food-image3":"url(https://images.unsplash.com/photo-1574484284002-952d92456975?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGZvb2R8ZW58MHx8MHx8fDA%3D)",
        "food-image4":"url(https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGZvb2R8ZW58MHx8MHx8fDA%3D)"
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

