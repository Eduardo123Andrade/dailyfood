import React from 'react'
// import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { StyleSheet } from 'react-native'

interface IconProps {
  color?: string
  size?: number
  name: any
  onPress: () => void
}

// TODO - ajustar essa cor
export const Icon: React.FC<IconProps> = ({
  color = '#000',
  size = 20,
  ...rest
}) => {
  const style = styles.container
  const props = { color, size, style, ...rest }

  return <MaterialIcons {...props} />
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
})
