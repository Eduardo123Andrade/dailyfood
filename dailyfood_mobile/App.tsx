import { NavigationContainer } from '@react-navigation/native'
import { StorageProvider } from 'core/providers'
import { StyleSheet } from 'react-native'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { DailyFoodNavigator } from 'dailyfood'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <StorageProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="DailyFood" component={DailyFoodNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </StorageProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
