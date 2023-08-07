import { BaseNavigationHeader } from 'core/components'
import { useMessageModal, useTheme } from 'core/hooks'
import { SimpleModal } from 'core/modals'
import { useRequestSaveFood } from 'dailyfood/hooks'
import React from 'react'

interface NavigationHeaderProps {
  title: string
}

export const NavigationHeader: React.FC<NavigationHeaderProps> = ({
  title,
}) => {
  const [{ colors }] = useTheme()
  const [{ message, show }, { resetState, startMessageModal }] =
    useMessageModal()

  const { foods, onPress } = useRequestSaveFood(startMessageModal)

  return (
    <>
      <BaseNavigationHeader
        onPress={onPress}
        iconName={!!foods.length && 'save'}
        iconColor={colors.lightIcon}
        title={title}
      />
      <SimpleModal
        visible={show}
        message={message}
        onRequestClose={resetState}
      />
    </>
  )
}
