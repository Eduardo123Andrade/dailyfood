import { BaseNavigationHeader } from 'core/components'
import React from 'react'

export const NavigationHeader = () => {
  const onPressBack = () => {
    console.log('oi')
  }

  return (
    <BaseNavigationHeader
      title="DailyFood"
      iconName="save"
      onPress={onPressBack}
    />
  )
}
