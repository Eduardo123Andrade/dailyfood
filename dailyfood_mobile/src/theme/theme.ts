import { colors } from './colors'

export interface Theme {
  backgroundColor: string
  buttonBackground: string
  disabled: string
  iconColor: string
  placeholderColor: string
  surfaceColor: string
  textColor: string
}

const dark: Theme = {
  backgroundColor: colors.gray[900],
  buttonBackground: colors.gray[500],
  disabled: colors.blue[300],
  iconColor: colors.gray[400],
  placeholderColor: colors.gray[700],
  surfaceColor: colors.gray[800],
  textColor: colors.gray[100],
}

export const THEMES = {
  dark,
  light: dark,
}
