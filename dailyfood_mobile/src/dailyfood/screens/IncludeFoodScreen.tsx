import { Button, Screen, Separator, TextInput } from 'core/components'
import { RenderItem } from 'core/interface'
import { FoodItemList } from 'dailyfood/components'
import { useDailyFood, useSaveFood } from 'dailyfood/hooks'
import { Food } from 'dailyfood/interfaces'
import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { SPACING } from 'theme'

const renderItem = ({ item }: RenderItem<Food>) => {
  return (
    <View style={styles.itemContainer} key={item.id}>
      <FoodItemList food={item} />
    </View>
  )
}

export const IncludeFoodSCreen: React.FC = () => {
  const [name, setName] = useState<string>()
  const [{ foods }, { addFood }] = useDailyFood()

  const saveFood = useSaveFood()

  const onSubmit = () => {
    addFood({
      id: Math.random() + '',
      name,
      weight: 100,
    })
    setName('')
  }

  const saveData = () => {
    saveFood(foods)
  }

  useEffect(() => {})

  return (
    <Screen contentContainerStyles={styles.container}>
      <TextInput
        autoCapitalize="sentences"
        placeholder="Nome"
        value={name}
        onChangeText={setName}
        onSubmitEditing={onSubmit}
      />

      <FlatList
        data={foods}
        renderItem={renderItem}
        ItemSeparatorComponent={Separator}
      />
      <Button disabled={false} onPress={saveData}>
        Avançar
      </Button>
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
  },
})
