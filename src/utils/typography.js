import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.45,
  scaleRatio: 2,
  googleFonts: [
    {
      name: 'Playfair Display',
      styles: ['800'],
    },
    {
      name: 'Roboto',
      styles: ['400'],
    },
  ],
  headerFontFamily: ['Playfair Display', 'serif'],
  bodyFontFamily: ['Roboto', 'sans-serif'],
});

typography.injectStyles();

export default typography;
