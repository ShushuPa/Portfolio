tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {        
        bgmove: {
           "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "0 100%" }
        },
      },
      animation: {
        bgmove: 'bgmove 40s infinite',
      }
    }
  }
}