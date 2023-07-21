import React from 'react'
import {
  StyleSheet,
  Text as TextNative,
  TextProps as NativeTextProps,
} from 'react-native'

interface TextProps extends NativeTextProps {
  fontSize: number
}

export const Text: React.FC<TextProps> = ({ fontSize, style, ...rest }) => {
  const flattenStyle = StyleSheet.flatten([{ fontSize }, style])

  return <TextNative {...rest} style={flattenStyle} />
}

const styles = StyleSheet.create({
  container: {},
})
