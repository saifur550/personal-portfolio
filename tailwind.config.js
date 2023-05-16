module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
      primary: '#0a0a0a',
      accent: '#B809C3',
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      purple: '#3f3cbb',
      midnight: '#121063',
      metal: '#565584',
      tahiti: '#3ab7bf',
      silver: '#ecebff',
      bubbleGum: '#ff77e9',
      bermuda: '#78dcca',
      },

      backgroundImage: {
        // site: "url('./assets/site-bg.jpg')",
        site: "url('./assets/site-bg4.png')",
        //about: "url('./assets/about.png')",
        //about: "url('./assets/about1.png')",
        about: "url('./assets/about2.png')",
        services: "url('./assets/services.png')",
      },
    },
  },
  plugins: [],
};
