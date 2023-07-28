import { useStorage } from 'core/hooks'
import { Food } from 'dailyfood/interfaces'

export const useSaveFood = () => {
  const { setData, getData } = useStorage()

  const saveFoods = (foods: Food[]) => {
    const savedFoods = getData<Food[]>('foods', [])

    const newFoods = [...savedFoods, ...foods]
    setData<Food[]>('foods', newFoods)
  }

  return saveFoods
}
