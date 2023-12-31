import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { LoginScreen, SingUpScreen, WelcomeScreen } from './screens'

const Stack = createNativeStackNavigator()

export const AuthenticationNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={WelcomeScreen.NavigationOptions}
      />

      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={LoginScreen.NavigationOptions}
      />
      <Stack.Screen
        name="SingUpScreen"
        component={SingUpScreen}
        options={SingUpScreen.NavigationOptions}
      />
    </Stack.Navigator>
  )
}
