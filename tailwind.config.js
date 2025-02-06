module.exports = {
  // ...resto da configuração
  plugins: [
    require('tailwindcss-animate')
  ],
  extend: {
    animation: {
      blob: "blob 7s infinite",
      fadeIn: "fadeIn 0.5s ease-in-out",
      slideRight: "slideRight 0.5s ease-out forwards",
    },
    keyframes: {
      blob: {
        "0%": {
          transform: "translate(0px, 0px) scale(1)",
        },
        "33%": {
          transform: "translate(30px, -50px) scale(1.1)",
        },
        "66%": {
          transform: "translate(-20px, 20px) scale(0.9)",
        },
        "100%": {
          transform: "translate(0px, 0px) scale(1)",
        },
      },
      fadeIn: {
        "0%": {
          opacity: "0",
          transform: "translateY(10px)",
        },
        "100%": {
          opacity: "1",
          transform: "translateY(0)",
        },
      },
      slideRight: {
        "0%": {
          opacity: "0",
          transform: "translateX(-20px)",
        },
        "100%": {
          opacity: "1",
          transform: "translateX(0)",
        },
      },
    },
    transitionDelay: {
      ...Array.from({ length: 10 }, (_, i) => ({ [`${(i + 1) * 150}`]: `${(i + 1) * 150}ms` })).reduce((acc, curr) => ({ ...acc, ...curr }), {}),
    },
  },
  variants: {
    extend: {
      scale: ['group-hover'],
      translate: ['group-hover'],
      rotate: ['group-hover'],
    },
  },
} 