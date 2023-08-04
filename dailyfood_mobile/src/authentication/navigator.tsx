import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { WelcomeScreen } from './screens'

const Stack = createNativeStackNavigator()

export const AuthenticationNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={WelcomeScreen.NavigationOptions}
      />
    </Stack.Navigator>
  )
}