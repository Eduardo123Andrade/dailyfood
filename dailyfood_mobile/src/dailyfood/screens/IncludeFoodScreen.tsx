import { Button, Screen, Separator, TextInput } from 'core/components'
import { RenderItem } from 'core/interface'
import { FoodItemList } from 'dailyfood/components'
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
  const [name, setName] = useState<string>()
  const [weight, setWeight] = useState<string>()

  const [{ foods }, { addFood }] = useDailyFood()

  const saveFood = useSaveFood()

  const onSubmit = () => {
    addFood({
      id: Math.random() + '',
      name,
      weight: Number(weight),
    })
    setName('')
    setWeight('')
  }

  const saveData = () => {
    saveFood(foods)
  }

  return (
    <Screen contentContainerStyles={styles.container}>
      <FlatList
        data={foods}
        renderItem={renderItem}
        ItemSeparatorComponent={Separator}
      />

      <View style={styles.footerContainer}>
        <TextInput
          autoCapitalize="sentences"
          onChangeText={setName}
          placeholder="Nome"
          value={name}
        />

        <View style={styles.lastFooterRow}>
          <TextInput
            autoCapitalize="sentences"
            keyboardType="number-pad"
            onChangeText={setWeight}
            placeholder="Peso"
            value={weight}
          />
          <View style={styles.buttonContainer}>
            <Button disabled={false} onPress={onSubmit}>
              Avançar
            </Button>
          </View>
        </View>
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
  lastFooterRow: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: SPACING.sm,
  },
  buttonContainer: {
    width: '60%',
  },
})
