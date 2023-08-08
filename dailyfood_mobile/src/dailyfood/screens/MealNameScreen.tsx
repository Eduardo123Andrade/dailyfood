import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationOptions } from '@react-navigation/native-stack'
import { Button, Screen, Separator, TextInput } from 'core/components'
import { useTheme } from 'core/hooks'
import { RenderItem } from 'core/interfaces'
import { StackNavigationProps } from 'core/types'
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

type RootStackParamList = {
  IncludeFoodSCreen: undefined
}

type MealNameScreenNavigationProp = StackNavigationProps<RootStackParamList>

const PLACEHOLDER = 'Ex.: Café da manhã, almoço, jantar'

export const MealNameScreen = () => {
  const [{ description }, { setDescription }] = useDailyFood()
  const navigation = useNavigation<MealNameScreenNavigationProp>()

  const onPress = () => navigation.navigate('IncludeFoodSCreen')

  return (
    <Screen contentContainerStyles={styles.container}>
      <TextInput
        onChangeText={setDescription}
        placeholder={PLACEHOLDER}
        value={description}
      />
      <Button disabled={!description} onPress={onPress}>
        Avançar
      </Button>
    </Screen>
  )
}

const navigationOptions: NativeStackNavigationOptions = {
  header: () => <NavigationHeader title="Inserir alimentos" />,
}

MealNameScreen.NavigationOptions = navigationOptions

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: SPACING.MD,
    // paddingTop: 0,
  },
  itemContainer: {
    paddingVertical: SPACING.SM,
  },
  footerContainer: {
    paddingVertical: SPACING.XS,
  },
})
