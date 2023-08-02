import { NativeStackNavigationOptions } from '@react-navigation/native-stack'
import { Screen, Separator } from 'core/components'
import { useTheme } from 'core/hooks/useTheme'
import { RenderItem } from 'core/interface'
import {
  FoodItemList,
  IncludeFoodData,
  NavigationHeader,
} from 'dailyfood/components'
import { useDailyFood } from 'dailyfood/hooks'
import { Food } from 'dailyfood/interfaces'
import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { SPACING } from 'theme'

export const IncludeFoodSCreen = () => {
  const [{ foods }] = useDailyFood()
  const [{ colors }] = useTheme()

  const renderItem = ({ item }: RenderItem<Food>) => {
    const backgroundColor = colors.surface

    return (
      <View key={item.id} style={[styles.itemContainer, { backgroundColor }]}>
        <FoodItemList food={item} />
      </View>
    )
  }

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

const navigationOptions: NativeStackNavigationOptions = {
  header: () => <NavigationHeader title="Inserir alimentos" />,
}

IncludeFoodSCreen.NavigationOptions = navigationOptions

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SPACING.md,
    paddingTop: 0,
  },
  itemContainer: {
    paddingVertical: SPACING.sm,
  },
  footerContainer: {
    paddingVertical: SPACING.xs,
  },
})
