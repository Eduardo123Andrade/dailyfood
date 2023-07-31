import { useTheme } from 'core/hooks/useTheme'
import React from 'react'
import { StyleSheet, View, ViewProps } from 'react-native'

interface SeparatorProps extends ViewProps {}

export const Separator: React.FC<SeparatorProps> = ({ style, ...rest }) => {
  const [{ colors }] = useTheme()
  const flattenedStyles = StyleSheet.flatten([
    styles.container,
    { backgroundColor: colors.placeholderColor },
    style,
  ])

  return <View style={flattenedStyles} {...rest} />
}

const styles = StyleSheet.create({
  container: {
    height: 0.65,
    width: '100%',
  },
})
