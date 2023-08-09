import { Food } from './Food.interface'

export interface Meal {
  id: string
  measurementDate: Date
  description: string
  foods: Food[]
}
