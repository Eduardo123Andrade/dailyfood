import React from 'react'
import {
  ActivityIndicator,
  StyleSheet,
  TouchableHighlightProps,
  View,
} from 'react-native'
import { Text } from './Text'
import { Touchable } from './Touchable'
import { colors } from 'theme/colors'

interface ButtonProps extends TouchableHighlightProps {
  children: string
  isLoading?: boolean
  onPress?: () => void
}

export const Button: React.FC<ButtonProps> = ({
  children,
  style,
  isLoading,
  disabled,
  ...rest
}) => {
  return (
    <Touchable disabled={disabled || isLoading} {...rest}>
      <View
        style={[
          styles.container,
          style,
          { backgroundColor: disabled ? colors.blue[300] : colors.blue[900] },
        ]}
      >
        {isLoading ? (
          <ActivityIndicator size="small" color={'#F11'} />
        ) : (
          <View style={styles.textContainer}>
            <Text color={colors.gray[100]}>{children}</Text>
          </View>
        )}
      </View>
    </Touchable>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    borderRadius: 10,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})