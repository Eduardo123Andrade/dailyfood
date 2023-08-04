import { NavigationContainer } from '@react-navigation/native'
import {
  ApiProvider,
  HttpQueryProvider,
  StorageProvider,
  ThemeProvider,
} from 'core/providers'

import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack'
import { AuthenticationNavigator } from 'authentication'
import { DailyFoodNavigator } from 'dailyfood'
import { HomeScreen } from 'home/screens/HomeScreen'

const Stack = createNativeStackNavigator()

const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
}

export default function App() {
  return (
    <StorageProvider>
      <ApiProvider>
        <HttpQueryProvider>
          <ThemeProvider>
            <NavigationContainer>
              <Stack.Navigator screenOptions={screenOptions}>
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

                <Stack.Screen
                  name="Home"
                  component={HomeScreen}
                  options={screenOptions}
                />
              </Stack.Navigator>
            </NavigationContainer>
          </ThemeProvider>
        </HttpQueryProvider>
      </ApiProvider>
    </StorageProvider>
  )
}
