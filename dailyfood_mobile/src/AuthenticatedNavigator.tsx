import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack'
import { DailyFoodNavigator } from 'dailyfood'
import { HomeScreen } from 'home/screens/HomeScreen'

const Stack = createNativeStackNavigator()

const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
}

export const AuthenticatedNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={screenOptions}
      />
      <Stack.Screen
        name="DailyFood"
        component={DailyFoodNavigator}
        options={screenOptions}
      />
    </Stack.Navigator>
  )
}
