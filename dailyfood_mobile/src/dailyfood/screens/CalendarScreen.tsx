import { NativeStackNavigationOptions } from '@react-navigation/native-stack'
import { Button, Calendar, Screen } from 'core/components'
import { useMessageModal } from 'core/hooks'
import { SimpleModal } from 'core/modals'
import { NavigationHeader } from 'dailyfood/components'
import { useRequestPdf } from 'dailyfood/hooks'
import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { SPACING } from 'theme'

export const CalendarScreen = () => {
  const [{ message, show }, { resetState, startMessageModal }] =
    useMessageModal()

  const [selectedDates, setSelectedDates] = useState<string[]>([])
  const { request, response } = useRequestPdf(startMessageModal)

  useEffect(() => {
    console.log({ response })
  }, [response])

  const onPress = () => {
    const [firstDate] = selectedDates
    const lastDate = selectedDates[selectedDates.length - 1]

    if (lastDate < firstDate) return request(lastDate, firstDate)

    request(firstDate, lastDate)
  }

  return (
    <Screen contentContainerStyles={styles.container}>
      <View style={styles.calendarContainer}>
        <Calendar onSelectedDates={setSelectedDates} />
      </View>

      <Button disabled={selectedDates.length < 2} onPress={onPress}>
        Avançar
      </Button>

      <SimpleModal
        visible={show}
        message={message}
        onRequestClose={resetState}
      />
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
