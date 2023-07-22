import React from 'react'
import { StyleSheet, View, ViewProps } from 'react-native'
import { colors } from 'theme/colors'

interface SeparatorProps extends ViewProps {}

export const Separator: React.FC<SeparatorProps> = ({ style, ...rest }) => {
  return <View style={[styles.container, style]} {...rest} />
}

const styles = StyleSheet.create({
  container: {
    height: 0.65,
    backgroundColor: colors.gray[800],
    width: '100%',
  },
})
