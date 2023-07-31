import { Icon, Text } from 'core/components'
import { useDailyFood } from 'dailyfood/hooks'
import { Food } from 'dailyfood/interfaces'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { SPACING } from 'theme'

interface FoodItemListProps {
  food: Food
}

const GAP = SPACING.xs / 2

export const FoodItemList: React.FC<FoodItemListProps> = ({ food }) => {
  const [, { removeFood, selectFood }] = useDailyFood()

  const onSelectFood = () => {
    selectFood(food)
  }

  const onDeleteFood = () => {
    removeFood(food.id)
  }

  return (
    <View style={styles.container}>
      <View>
        <Text>{food.name}</Text>
        <Text>{`${food.weight}g`}</Text>
      </View>
      <View style={styles.actionContainer}>
        <Icon onPress={onSelectFood} name="edit" />
        <Icon onPress={onDeleteFood} name="delete" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: GAP,
    paddingHorizontal: SPACING.md,
  },
  actionContainer: {
    flexDirection: 'row',
  },
})
