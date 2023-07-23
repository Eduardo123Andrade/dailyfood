import { Button, TextInput } from 'core/components'
import { useDailyFood } from 'dailyfood/hooks'
import React, { useEffect, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { SPACING } from 'theme'

interface IncludeFoodDataProps {}

export const IncludeFoodData: React.FC<IncludeFoodDataProps> = (props) => {
  const [name, setName] = useState<string>()
  const [weight, setWeight] = useState<string>()

  const [{ currentFood }, { addFood }] = useDailyFood()

  useEffect(() => {
    if (currentFood) {
      setName(currentFood.name)
      setWeight(String(currentFood.weight ?? 0))
    }
  }, [currentFood])

  const onSubmit = () => {
    addFood({
      id: currentFood?.id,
      name,
      weight: Number(weight),
    })
    setName('')
    setWeight('')
  }

  return (
    <View>
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
          <Button onPress={onSubmit}>Avançar</Button>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
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
