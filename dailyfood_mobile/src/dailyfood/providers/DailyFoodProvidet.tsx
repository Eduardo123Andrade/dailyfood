import { Food } from 'dailyfood/interfaces'
import { MOCKED_LIST_FOOD } from 'dailyfood/mock/foods'
import React, { createContext, useState } from 'react'

interface DailyFoodProviderState {
  foods: Food[]
}

interface DailyFoodProviderActions {
  addFood: (food: Food) => void
}

type DailyFoodProviderData = [
  state: DailyFoodProviderState,
  actions: DailyFoodProviderActions,
]

export const DailyFoodContext = createContext<DailyFoodProviderData>(
  {} as DailyFoodProviderData,
)

interface DailyFoodProviderProps {
  children: React.ReactNode
}

export const DailyFoodProvider: React.FC<DailyFoodProviderProps> = ({
  children,
}) => {
  const [foods, setFoods] = useState<Food[]>(MOCKED_LIST_FOOD)

  const addFood = (food: Food) => {
    setFoods(prevState => [...prevState, food])
  }

  return (
    <DailyFoodContext.Provider
      children={children}
      value={[{ foods }, { addFood }]}
    />
  )
}
