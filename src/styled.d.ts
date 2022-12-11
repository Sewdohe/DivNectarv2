import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string,
      surface: string,
      foreground: string,
      comment: string,
      cyan: string,
      green: string,
      orange: string,
      pink: string, 
      purple: string,
      red: string,
      yellow: string,
      code: string,
      navBG: string,
    },
    fonts: string[],
    fontSizes: {
      small: string,
      medium: string,
      large: string
    }
  }
}