import React from 'react'
import {
  TextProps as NativeTextProps,
  StyleSheet,
  Text as TextNative,
} from 'react-native'
import { colors } from 'theme/colors'

interface TextProps extends NativeTextProps {
  bold?: boolean
  color?: string
  fontSize?: number
}

export const Text: React.FC<TextProps> = ({
  bold = false,
  color,
  fontSize = 14,
  style,
  ...rest
}) => {
  const fontWeight = bold ? 'bold' : 'normal'
  const defaultColor = color ?? colors.gray[500]

  const flattenStyle = StyleSheet.flatten([
    style,
    { color: defaultColor, fontSize },
  ])

  return <TextNative style={[flattenStyle, { fontWeight }]} {...rest} />
}
