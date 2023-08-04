import { NativeStackNavigationOptions } from '@react-navigation/native-stack'
import { Screen, Text } from 'core/components'
import React from 'react'
import { StyleSheet } from 'react-native'

export const HomeScreen = () => {
  return (
    <Screen contentContainerStyles={styles.container}>
      <Text>Olá mundo!</Text>
    </Screen>
  )
}

const navigationOptions: NativeStackNavigationOptions = {
  headerShown: false,
}

HomeScreen.NavigationOptions = navigationOptions

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
