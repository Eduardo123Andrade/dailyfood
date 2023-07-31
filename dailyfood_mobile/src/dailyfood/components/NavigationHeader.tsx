import { BaseNavigationHeader } from 'core/components'
import { useTheme } from 'core/hooks/useTheme'
import { useDailyFood, useSaveFood } from 'dailyfood/hooks'
import React from 'react'

export const NavigationHeader = () => {
  const saveFoods = useSaveFood()
  const [{ foods }] = useDailyFood()
  const [{ colors }] = useTheme()

  const onSave = () => {
    saveFoods(foods)
  }

  return (
    <BaseNavigationHeader
      iconColor={colors.lightIconColor}
      title="DailyFood"
      iconName="save"
      onPress={onSave}
    />
  )
}
