import { hightVerticalScale } from '../utils/metrics'

export const colors = {
  primary: {
    base: '#002A59',
    900: '#282929',
    800: '#282929',
    700: '#282929',
    600: '#282929',
    500: '#3f9ced',
    400: '#f0f0f0',
    300: '#f0f0f0',
    200: '#f0f0f0',
    100: '#f0f0f0',
    50: '#f1f7fc',
  },
  gray: {
    900: '#282929',
    800: '#4880bf',
    700: '#5f9ec7',
    600: '#76accf',
    500: '#8dbad7',
    400: '#a4c8df',
    300: '#bbd6e7',
    200: '#d2e3ef',
    100: '#e9f1f7',
    50: '#f1f7fc',
  },
  grayRgba: {
    900: 'rgba(40, 41, 41,0.2)',
    800: 'rgba(72, 128, 191)',
    700: 'rgba(95, 158, 199)',
    600: 'rgba(118, 172, 207,0.3)',
    500: 'rgba(141, 186, 215,0.3)',
    400: 'rgba(164, 200, 223)',
    300: 'rgba(187, 214, 231)',
    200: 'rgba(210, 227, 239)',
    100: 'rgba(233, 241, 247)',
    50: 'rgba(241, 247, 252)',
  },
  blue:'#2206D4',
  blueBorder:'#338CE6',
  blueBackground:'#36B8F6',
  white: '#fff',
  black: '#000',
  transparent: 'transparent',
  blue_bg_chatMessage:'#1D4B73',
  blue_bg_rgba_chatMessage:'rgba(29, 75, 115)',
  blue_bg_chatMessageRobot:'#05203F',
  blue_bg_rgba_chatMessageRobot:'rgba(5, 32, 63)',
  blue_Rgba_010:'rgba(0,255,247,0.1)',
  blue_Rgba_025:'rgba(0,255,247,0.25)',
  blue_Rgba_035:'rgba(0,255,247,0.35)',
  blue_Rgba_050:'rgba(0,255,247,0.5)',
  blue_Rgba_button:'rgba(82,250,230,0.7)',
  blue_Rgba_input:'rgba(235,255,253,1)',
  yellow_border_alert:'#ffb703'
  
}

export const button = {
  primary: {
    backgroundColor: colors.primary.base,
    fontColor: colors.white,
  },
  secondary: {
    backgroundColor: colors.gray[300],
    fontColor: colors.gray[900],
  },
}

export const tab = {
  background: {
    active: colors.blue_Rgba_050,
    deactive: colors.primary.base,
  },
  fontColor: {
    active: colors.white,
    deactive: colors.white,
  },
  borderColor: {
    deactive: colors.gray[500],
  },
  borderWidth: {
    active: 1,
    deactive: 1,
  },
  borderRadius: { 
    active: 10,
    deactive: 10,
  },
  width: {
    active: '45%',
    deactive: '45%',
  },
  height:{ 
    active: hightVerticalScale(50),
    deactive:hightVerticalScale(50)
  }
}

export const card = {
  background: {
    primary: '',
    secondary: '',
  },
  padding: {
    lg: '',
    sm: '',
  },
  borderRadius: {
    lg: '',
    sm: '',
  },
}

export const input = {
  backgroundColor: '',
  borderRadious: '',
  padding: '',
}
