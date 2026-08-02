/* SOCIA Creative Agency — Shared Tailwind CSS Configuration */
tailwind.config = {
  theme: {
    extend: {
      screens: {
        'xs': '400px',
        '2xl': '1440px',
        '3xl': '1920px',
        '4k': '2560px',
      },
      colors: {
        studio: {
          bg: '#F6F4EF',
          surface: '#EFECE6',
          panel: '#FAF8F5',
          border: '#D8D4CA',
          text: '#111215',
          accent: '#1D5A46',
          accentHover: '#144132',
          muted: '#5A5E6B',
          dim: '#8C909C',
        }
      },
      fontFamily: {
        sans: ['Instrument Sans', 'sans-serif'],
      }
    }
  }
};
