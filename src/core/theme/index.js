import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: 'Rubik',
    body: 'Rubik',
  },
  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
  },
  fontSizes: {
    xxs: '12px',
    xs: '14px',
    sm: '16px',
    md: '18px',
    lg: '20px',
    xl: '26px',
    xxl: '30px',
  },
  textStyles: {
    h1: {
      color: 'brand.boldBlack',
      fontSize: 'xxl',
      fontStyle: 'normal',
      fontWeight: 'medium',
      lineHeight: '36px',
      textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    },
    h2: {
      color: 'brand.primBlack',
      fontSize: 'xl',
      fontStyle: 'normal',
      fontWeight: 'medium',
      lineHeight: '31px',
    },
    h3: {
      color: 'brand.primBlack',
      fontSize: 'lg',
      fontStyle: 'normal',
      fontWeight: 'normal',
      lineHeight: '24px',
    },
    h4: {
      color: 'brand.primBlack',
      fontSize: 'md',
      fontStyle: 'normal',
      fontWeight: 'normal',
      lineHeight: '21px',
    },
    h5: {
      color: 'brand.primBlack',
      fontSize: 'sm',
      fontStyle: 'normal',
      fontWeight: 'normal',
      lineHeight: '24px',
    },
    caption: {
      color: 'brand.boldBlack',
      fontSize: 'xs',
      fontStyle: 'normal',
      fontWeight: 'medium',
      lineHeight: '17px',
    },
    buttonLable: {
      color: 'brand.primBlack',
      fontSize: 'xxs',
      fontStyle: 'normal',
      fontWeight: 'medium',
      lineHeight: '14px',
      textTransform: 'uppercase',
    },
    textFaded: {
      color: 'brand.secGray',
      fontSize: 'xs',
      fontStyle: 'normal',
      fontWeight: 'normal',
      lineHeight: '21px',
    },
    textLight: {
      color: 'brand.primBlack',
      fontSize: 'xs',
      fontStyle: 'normal',
      fontWeight: 'light',
      lineHeight: '21px',
    },
    textLink: {
      color: 'brand.primBlue',
      fontSize: 'xs',
      fontStyle: 'normal',
      fontWeight: 'normal',
      lineHeight: '21px',
    },
  },
  colors: {
    brand: {
      primBlue: '#4D7CFE',
      primBlack: '#252632',
      secGray: '#778CA2',
      secGray: '#98A9BC',
      secOrange: '#FFAB2B',
      secGreen: '#6DD230',
      secPink: '#FE4D97',
      secBlue: '#2CE5F6',
      boldBlack: '#1B1E24',
      outline: '#E8ECEF',
      bgDark: '#F2F4F6',
      gbLight: '#F8FAFB',
    },
  },
})

export default theme
