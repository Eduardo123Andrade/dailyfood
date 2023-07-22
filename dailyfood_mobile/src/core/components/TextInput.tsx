import React from 'react'
import {
  StyleSheet,
  TextInput as NativeTextInput,
  TextInputProps as NativeTextInputProps,
  View,
} from 'react-native'
import { colors } from 'theme/colors'
import { SPACING } from 'theme'

interface TextInputProps extends NativeTextInputProps {}

export const TextInput: React.FC<TextInputProps> = props => {
  return (
    <View style={styles.container}>
      <NativeTextInput
        placeholderTextColor={colors.gray[700]}
        style={styles.text}
        {...props}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: SPACING.md,
    borderBottomWidth: 1,
  },
  text: {
    color: colors.gray[400],
    // color: "#F11",
  },
})
