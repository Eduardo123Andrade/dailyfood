import React from 'react'
import {
  StyleSheet,
  Text as TextNative,
  TextProps as NativeTextProps,
} from 'react-native'
import { colors } from 'theme/colors'

interface TextProps extends NativeTextProps {
  fontSize?: number
  color?: string
}

export const Text: React.FC<TextProps> = ({
  color,
  fontSize = 14,
  style,
  ...rest
}) => {
  const defaultColor = color ?? colors.gray[500]
  const flattenStyle = StyleSheet.flatten([
    { fontSize, color: defaultColor },
    style,
  ])

  return <TextNative style={flattenStyle} {...rest} />
}

const styles = StyleSheet.create({
  container: {},
})
