import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { CalendarScreen, IncludeFoodSCreen } from './screens'
import { DailyFoodProvider } from './providers'

const Stack = createNativeStackNavigator()

export const DailyFoodNavigator = () => {
  return (
    <DailyFoodProvider>
      <Stack.Navigator>
        <Stack.Screen
          name="IncludeFoodSCreen"
          component={IncludeFoodSCreen}
          options={IncludeFoodSCreen.NavigationOptions}
        />

        <Stack.Screen
          name="CalendarScreen"
          component={CalendarScreen}
          options={CalendarScreen.NavigationOptions}
        />
      </Stack.Navigator>
    </DailyFoodProvider>
  )
}
