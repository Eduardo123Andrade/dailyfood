import { colors } from './colors'

export interface Theme {
  backgroundColor: string
  buttonBackground: string
  buttonLabel: string
  disabled: string
  error: string
  lightIconColor: string
  placeholderColor: string
  surfaceColor: string
  textColor: string
}

const dark: Theme = {
  backgroundColor: colors.gray[900],
  buttonBackground: colors.blue[900],
  buttonLabel: colors.gray[100],
  disabled: colors.blue[300],
  error: colors.red[600],
  lightIconColor: colors.gray[400],
  placeholderColor: colors.gray[800],
  surfaceColor: colors.gray[800],
  textColor: colors.gray[500],
}

export const THEMES = {
  dark,
  light: dark,
}
