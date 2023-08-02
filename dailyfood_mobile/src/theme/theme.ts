import { colors } from './colors'

export interface Theme {
  backgroundColor: string
  buttonLabel: string
  disabled: string
  error: string
  lightIconColor: string
  placeholderColor: string
  primary: string
  secondary: string
  secondaryLight: string
  surfaceColor: string
  textColor: string
}

const dark: Theme = {
  backgroundColor: colors.gray[900],
  buttonLabel: colors.gray[100],
  disabled: colors.blue[300],
  error: colors.red[600],
  lightIconColor: colors.gray[400],
  placeholderColor: colors.gray[700],
  primary: colors.gray[900],
  secondary: colors.blue[900],
  secondaryLight: colors.blue[400],
  surfaceColor: colors.gray[800],
  textColor: colors.gray[500],
  // textLight: colors.gray[]
}

export const THEMES = {
  dark,
  light: dark,
}
