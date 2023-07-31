import { NavigationContainer } from '@react-navigation/native'
import { StorageProvider, ThemeProvider } from 'core/providers'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { DailyFoodNavigator } from 'dailyfood'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <StorageProvider>
      <ThemeProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="DailyFood" component={DailyFoodNavigator} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </StorageProvider>
  )
}
