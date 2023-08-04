import { NativeStackNavigationOptions } from '@react-navigation/native-stack'
import { Button, Calendar, Screen } from 'core/components'
import { NavigationHeader } from 'dailyfood/components'
import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { SPACING } from 'theme'

export const CalendarScreen = () => {
  const [selectedDates, setSelectedDates] = useState<string[]>([])

  const onPress = () => {
    console.log(JSON.stringify(selectedDates, null, 2))
  }

  return (
    <Screen contentContainerStyles={styles.container}>
      <View style={styles.calendarContainer}>
        <Calendar onSelectedDates={setSelectedDates} />
      </View>

      <Button onPress={onPress}>Avançar</Button>
    </Screen>
  )
}

const navigationOptions: NativeStackNavigationOptions = {
  header: () => <NavigationHeader title="Selecionar dias" />,
}

CalendarScreen.NavigationOptions = navigationOptions

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: SPACING.LG,
    paddingHorizontal: SPACING.LG,
  },
  calendarContainer: {
    borderRadius: 20,
    overflow: 'hidden',
  },
})
