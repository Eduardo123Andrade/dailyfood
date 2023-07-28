import { BaseNavigationHeader } from 'core/components'
import { useDailyFood, useSaveFood } from 'dailyfood/hooks'
import React from 'react'
import { colors } from 'theme/colors'

export const NavigationHeader = () => {
  const saveFoods = useSaveFood()
  const [{ foods }] = useDailyFood()

  const onSave = () => {
    saveFoods(foods)
  }

  return (
    <BaseNavigationHeader
      iconColor={colors.gray[500]}
      title="DailyFood"
      iconName="save"
      onPress={onSave}
    />
  )
}
