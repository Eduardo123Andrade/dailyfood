import { Button, Screen, Separator, TextInput } from 'core/components'
import { RenderItem } from 'core/interface'
import { FoodItemList, IncludeFoodData } from 'dailyfood/components'
import { useDailyFood, useSaveFood } from 'dailyfood/hooks'
import { Food } from 'dailyfood/interfaces'
import React, { useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { SPACING } from 'theme'
import { colors } from 'theme/colors'

const renderItem = ({ item }: RenderItem<Food>) => {
  return (
    <View style={styles.itemContainer} key={item.id}>
      <FoodItemList food={item} />
    </View>
  )
}

export const IncludeFoodSCreen: React.FC = () => {
  const [{ foods }] = useDailyFood()

  return (
    <Screen contentContainerStyles={styles.container}>
      <FlatList
        data={foods}
        renderItem={renderItem}
        ItemSeparatorComponent={Separator}
      />

      <View style={styles.footerContainer}>
        <IncludeFoodData />
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SPACING.md,
  },
  itemContainer: {
    paddingVertical: SPACING.sm,
    backgroundColor: colors.gray[800],
  },
  footerContainer: {
    paddingVertical: SPACING.xs,
  },
})
