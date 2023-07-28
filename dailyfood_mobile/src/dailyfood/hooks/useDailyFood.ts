import { DailyFoodContext } from 'dailyfood/providers'
import { useContext } from 'react'

export const useDailyFood = () => {
  const context = useContext(DailyFoodContext)

  if (!context)
    throw new Error('This hook needs be wrapped by DailyFoodProvider')

  return context
}
