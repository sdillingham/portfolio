export default {
  colors: {
    text: '#D8D7E0',
    background: '#161533',
    han: '#3F39C1',
    slates: [
      '#A7A3FF',
      '#8A85FF',
      '#655EFF',
      '#161533',
    ],
    grays: [
      '#FFFFFF',
      '#F3F2F7',
      '#D8D7E0',
      '#9F9EAE',
      '#6F6E87',
      '#4A495D',
      '#131229',
      '#10101E',
      '#09090C',
    ],
  },
  fonts: {
    mono: 'apercu-mono-pro, monospace',
    sans: 'apercu-pro, sans-serif',
    serif: 'canela, serif',
    serifText: 'canela-text, serif',
  },
  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    bold: 700,
  },
  fontSizes: [
    12, 15, 17, 19, 22, 27, 32, 37, 42, 50, 59
  ],
  letterSpacings: {
    compact: '-0.02em',
    standard: '0',
    comfortable: '0.05em',
    wide: '0.10em',
    extrawide: '0.15em',
  },
  lineHeights: {
    tight: 1.2,
    compact: 1.25,
    standard: 1.47,
    comfortable: 1.6,
    generous: 2,
  },
  space: [
  0, 7, 14, 28, 35, 56, 84, 112, 140, 196
  ],
  breakpoints: [
    '768px', '1025px', '1356px'
  ],
  styles: {
    h1: {
      fontFamily: 'sans',
      fontWeight: 'bold',
      lineHeight: 'compact',
      marginTop: 0,
      marginBottom: 3,
    },
    p: {
      fontFamily: 'sans',
      fontWeight: 'normal',
      lineHeight: 'standard',
      marginTop: 0,
      marginBottom: 3,
    },
    a: {
      color: 'grays.2',
      ':hover, :focus': {
        color: 'grays.0',
      },
    },
  },
}
