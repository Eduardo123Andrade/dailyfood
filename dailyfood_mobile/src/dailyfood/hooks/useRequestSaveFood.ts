import { usePostRequest } from 'core/hooks'
import { useDailyFood } from './useDailyFood'
import { useNavigation } from '@react-navigation/native'
import { SetMessageFunction } from 'core/types/SetMessageFunction'

interface Food {
  description: string
  weight: number
}
interface Meal {
  measurement_date: Date
  description: string
  foods: Food[]
}

export const useRequestSaveFood = (setMessage: SetMessageFunction) => {
  const [{ foods, description }, { clearList }] = useDailyFood()
  const navigation = useNavigation()

  const { mutate } = usePostRequest<any, Meal>('/meals/create', {
    onSuccess: () => {
      clearList()
      navigation.goBack()
    },
    onError: ({ response }) => {
      setMessage(response.data.message)
    },
  })

  const onPress = () => {
    const mappedFoods: Food[] = foods.map(({ name, weight }) => ({
      description: name,
      weight,
    }))

    mutate({
      description,
      foods: mappedFoods,
      measurement_date: new Date(),
    })
  }

  return {
    onPress,
    foods,
  }
}
