import { createTheme } from '@mantine/core';

export const theme = createTheme({
  colors: {
    brand: [
      '#AD1374',
      '#F0BBDD',
      '#ED9BCF',
      '#EC7CC3',
      '#E00890',
      '#ED5DB8',
      '#C50E82',
      '#F13EAF',
      '#F71FA7',
      '#FF00A1',
    ],

    // // Add your color
    deepBlue: [
      '#FF7D29',
      '#FFBF78',
      '#FFEEA9',
      '#99EBF0',
      '#FF7D29',
      '#FFBF78',
      '#FFEEA9',
      '#99EBF0',
      '#FFEEA9',
      '#99EBF0',
    ],
    // or replace default theme color
    blue: [
      '#FF7D29',
      '#FFBF78',
      '#FF9F66',
      '#FFEEA9',
      '#99EBF0',
      '#FFA62F',
      '#FFC96F',
      '#ECB176',
      '#ECB176',
      '#A67B5B',
    ],
  },

  shadows: {
    md: '1px 1px 3px rgba(0, 0, 0, .25)',
    xl: '5px 5px 3px rgba(0, 0, 0, .25)',
  },
  fontFamily: 'Helvatica, sans-serif',
  fontFamilyMonospace: 'Monaco, Courier, monospace',

  headings: {
    fontFamily: 'Noto Sans, sans-serif',
    sizes: {
      h1: { fontSize: '2rem' },
    },
  },
  fontSizes: {
    xs: '0.6rem',
    sm: '0.75rem',
    md: '0.9rem',
    lg: '1rem',
    xl: '1.2rem',
  },
});
