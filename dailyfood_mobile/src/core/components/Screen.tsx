import React from 'react'
import {
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from 'theme/colors'

interface ScreenProps extends ViewProps {
  contentContainerStyles?: StyleProp<ViewStyle>
}

export const Screen: React.FC<ScreenProps> = (
  { children, contentContainerStyles },
  ...rest
) => {
  return (
    <SafeAreaView style={styles.container} {...rest}>
      <View style={[styles.container, contentContainerStyles]}>{children}</View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[900],
  },
})
