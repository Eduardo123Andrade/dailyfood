import { usePostRequest } from 'core/hooks'
import { useDailyFood } from './useDailyFood'
import { useNavigation } from '@react-navigation/native'

interface Food {
  description: string
  weight: number
}
interface Meal {
  measurement_date: Date
  description: string
  foods: Food[]
}

type SetMessageFunction = (message: string) => void

export const useRequestSaveFood = (setMessage: SetMessageFunction) => {
  const [{ foods }, { clearList }] = useDailyFood()
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
      description: 'Almoço',
      foods: mappedFoods,
      measurement_date: new Date(),
    })
  }

  return {
    onPress,
    foods,
  }
}
