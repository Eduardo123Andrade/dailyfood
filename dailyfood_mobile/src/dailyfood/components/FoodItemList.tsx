import { Text } from 'core/components'
import { Food } from 'dailyfood/interfaces'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { SPACING } from 'theme'

interface FoodItemListProps {
  food: Food
}

const GAP = SPACING.xs / 2

export const FoodItemList: React.FC<FoodItemListProps> = ({ food }) => {
  return (
    <View style={styles.container}>
      <Text>{food.name}</Text>
      <Text>{`${food.weight}g`}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: GAP,
    paddingHorizontal: SPACING.md,
  },
})
