import { Food } from 'dailyfood/interfaces'
import { MOCKED_LIST_FOOD } from 'dailyfood/mock/foods'
import React, { createContext, useState } from 'react'

// TODO - Removed comments after

interface DailyFoodProviderState {
  currentFood: Food
  foods: Food[]
}

interface DailyFoodProviderActions {
  addFood: (food: Food) => void
  selectFood: (food: Food) => void
  updateFood: (food: Food) => void
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
  const [currentFood, setCurrentFood] = useState<Food>(LIST_FOOD[0])

  const updateFood = (food: Food) => {
    setFoods((prevState) => {
      const index = prevState.findIndex((item) => item.id === food.id)
      prevState[index] = food

      return [...prevState]
    })
    setCurrentFood(undefined)
  }

  const addFood = (food: Food) => {
    if (!food.id) {
      const foodData = {
        ...food,
        io: Math.random() + '',
      }
      return setFoods((prevState) => [...prevState, foodData])
    }

    return updateFood(food)
  }

  const selectFood = (food: Food) => setCurrentFood(food)

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
          selectFood,
          updateFood,
        },
      ]}
    />
  )
}
