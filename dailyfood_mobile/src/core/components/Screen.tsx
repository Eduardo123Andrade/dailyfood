import { useTheme } from 'core/hooks/useTheme'
import React from 'react'
import { StyleProp, StyleSheet, View, ViewProps, ViewStyle } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

interface ScreenProps extends ViewProps {
  contentContainerStyles?: StyleProp<ViewStyle>
}

export const Screen: React.FC<ScreenProps> = (
  { children, contentContainerStyles },
  ...rest
) => {
  const [{ colors }] = useTheme()
  const flattenedStyles = StyleSheet.flatten([
    styles.container,
    { backgroundColor: colors.backgroundColor },
    contentContainerStyles,
  ])

  return (
    <SafeAreaView style={styles.container} {...rest}>
      <View style={flattenedStyles}>{children}</View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
