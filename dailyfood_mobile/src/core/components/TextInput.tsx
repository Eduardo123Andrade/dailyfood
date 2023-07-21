import React from 'react'
import {
  StyleSheet,
  TextInput as NativeTextInput,
  TextInputProps as NativeTextInputProps,
  View,
} from 'react-native'
import { colors } from 'theme/colors'

interface TextInputProps extends NativeTextInputProps {}

export const TextInput: React.FC<TextInputProps> = props => {
  return (
    <View style={styles.container}>
      <NativeTextInput style={styles.text} value="AA" {...props} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
    marginHorizontal: 20,
    borderBottomWidth: 1,
  },
  text: {
    color: colors.white,
    // color: "#F11",
  },
})
