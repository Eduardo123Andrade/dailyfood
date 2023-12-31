import { ThemeContext } from 'core/providers'
import { useContext } from 'react'

export const useTheme = () => {
  const context = useContext(ThemeContext)

  if (!context) throw new Error('This hook needs be wrapped by ThemeProvider')

  return context
}
