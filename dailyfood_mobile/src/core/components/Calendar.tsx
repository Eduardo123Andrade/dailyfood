import { useTheme } from 'core/hooks/useTheme'
import { getDatesBetween } from 'core/utils'
import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import {
  DateData,
  LocaleConfig,
  Calendar as NativeCalendar,
} from 'react-native-calendars'
import { MarkingProps } from 'react-native-calendars/src/calendar/day/marking'
import { Theme as CalendarTheme } from 'react-native-calendars/src/types'

interface CalendarProps {}

LocaleConfig.locales['br'] = {
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julio',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Decembro',
  ],
  monthNamesShort: [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dec',
  ],
  dayNames: [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sabado',
  ],
  dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
  today: 'Hoje',
}

LocaleConfig.defaultLocale = 'br'

export const Calendar: React.FC<CalendarProps> = (props) => {
  const [initialDates, setInitialDates] = useState([])
  const [selectedDates, setSelectedDates] = useState<any>()
  const [{ colors }] = useTheme()

  const markedData: MarkingProps = {
    selected: true,
    disableTouchEvent: true,
    color: colors.secondary,
    selectedColor: colors.secondary,
  }

  const formatDates = (dates: string[]) => {
    return dates.reduce((accumulator, current, index, array) => {
      const newDate = {
        [current]: {
          ...markedData,
          ...(index === 0 && {
            startingDay: true,
          }),
          ...(index === array.length - 1 && {
            endingDay: true,
          }),
        },
      }

      return { ...accumulator, ...newDate }
    }, {})
  }

  const onSelectDate = (date: DateData) => {
    setInitialDates((prev) => [...prev, date])
    setSelectedDates({ [date.dateString]: markedData })
  }

  useEffect(() => {
    if (initialDates.length == 2) {
      const [initial, final] = initialDates
      const result = getDatesBetween(initial.dateString, final.dateString)

      const grouped = formatDates(result)

      setSelectedDates(grouped)
      setInitialDates([])
    }
  }, [initialDates])

  const theme: CalendarTheme = {
    textDayFontSize: 14,
    dayTextColor: colors.textColor,
    textDisabledColor: colors.placeholderColor,

    textSectionTitleColor: colors.textColor,

    backgroundColor: colors.surfaceColor,
    calendarBackground: colors.surfaceColor,

    textMonthFontWeight: 'bold',
    textMonthFontSize: 22,
    monthTextColor: colors.textColor,

    arrowColor: colors.secondaryLight,

    arrowHeight: 18,
  }

  return (
    <View>
      <NativeCalendar
        theme={theme}
        onDayPress={onSelectDate}
        markedDates={selectedDates}
        markingType={`${initialDates.length === 1 ? 'dot' : 'period'}`}
      />
    </View>
  )
}
