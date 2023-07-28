import { generateUUID } from 'core/utils'
import { Food } from 'dailyfood/interfaces'
import { MOCKED_LIST_FOOD } from 'dailyfood/mock/foods'
import React, { createContext, useState } from 'react'

interface PartiallyFood {
  id?: string
  name: string
  weight: number
}

interface DailyFoodProviderState {
  currentFood: Food
  foods: Food[]
}

interface DailyFoodProviderActions {
  addFood: (food: PartiallyFood) => void
  removeFood: (id: string) => void
  selectFood: (food: Food) => void
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

const LIST_FOOD: Food[] = [...MOCKED_LIST_FOOD, ...MOCKED_LIST_FOOD].map(
  (item, index) => ({
    ...item,
    id: `${index + 1}`,
  }),
)

export const DailyFoodProvider: React.FC<DailyFoodProviderProps> = ({
  children,
}) => {
  const [foods, setFoods] = useState<Food[]>(LIST_FOOD)
  const [currentFood, setCurrentFood] = useState<Food>()

  const updateFood = (food: PartiallyFood) => {
    setFoods((prevState) => {
      const index = prevState.findIndex((item) => item.id === food.id)
      prevState[index] = { ...food, date: new Date() }

      return [...prevState]
    })
    setCurrentFood(undefined)
  }

  const addFood = (food: PartiallyFood) => {
    if (!food.id) {
      const foodData: Food = {
        ...food,
        id: generateUUID(),
        date: new Date(),
      }
      return setFoods((prevState) => [...prevState, foodData])
    }

    return updateFood(food)
  }

  const selectFood = (food: Food) => setCurrentFood(food)

  const removeFood = (id: string) => {
    setFoods((prevSate) => {
      return prevSate.filter((item) => item.id !== id)
    })
  }

  return (
    <DailyFoodContext.Provider
      children={children}
      value={[
        {
          currentFood,
          foods,
        },
        {
          addFood,
          removeFood,
          selectFood,
        },
      ]}
    />
  )
}
