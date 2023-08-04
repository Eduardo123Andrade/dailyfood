import { NavigationContainer } from '@react-navigation/native'
import { StorageProvider, ThemeProvider } from 'core/providers'

import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack'
import { DailyFoodNavigator } from 'dailyfood'
import { AuthenticationNavigator } from 'authentication'

const Stack = createNativeStackNavigator()

const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
}

export default function App() {
  return (
    <StorageProvider>
      <ThemeProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Authentication"
            screenOptions={screenOptions}
          >
            <Stack.Screen
              name="DailyFood"
              component={DailyFoodNavigator}
              options={screenOptions}
            />

            <Stack.Screen
              name="Authentication"
              component={AuthenticationNavigator}
              options={screenOptions}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </StorageProvider>
  )
}
