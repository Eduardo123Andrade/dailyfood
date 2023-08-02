import { BaseNavigationHeader } from 'core/components'
import { useTheme } from 'core/hooks/useTheme'
import { useDailyFood, useSaveFood } from 'dailyfood/hooks'
import React from 'react'

interface NavigationHeaderProps {
  title: string
}

export const NavigationHeader: React.FC<NavigationHeaderProps> = ({
  title,
}) => {
  const [{ colors }] = useTheme()

  return <BaseNavigationHeader iconColor={colors.lightIcon} title={title} />
}
