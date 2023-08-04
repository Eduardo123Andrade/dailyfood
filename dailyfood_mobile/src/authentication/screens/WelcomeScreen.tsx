import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationOptions } from '@react-navigation/native-stack'
import { Button, Screen, Separator, Text } from 'core/components'
import { StackNavigationProps } from 'core/types'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { SPACING } from 'theme'

type RootStackParamList = {
  LoginScreen: undefined
  SingUpScreen: undefined
}

type LoginScreenNavigationProp = StackNavigationProps<RootStackParamList>

export const WelcomeScreen = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>()

  const onPressGoToLogin = () => navigation.navigate('LoginScreen')
  const onPressGoToSingIn = () => navigation.navigate('SingUpScreen')

  return (
    <Screen contentContainerStyles={styles.container}>
      <View>
        <Text>Bem vindo ao Dailyfood</Text>
      </View>
      <Separator />
      <View style={styles.buttonContainer}>
        <Button onPress={onPressGoToLogin}>Login</Button>

        <Button onPress={onPressGoToSingIn}>Cadastro</Button>
      </View>
    </Screen>
  )
}

const navigationOptions: NativeStackNavigationOptions = {
  headerShown: false,
}

WelcomeScreen.NavigationOptions = navigationOptions

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: SPACING.MD,
    paddingHorizontal: SPACING.MD,
  },
  buttonContainer: {
    gap: SPACING.MD,
  },
})
