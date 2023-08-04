import { NativeStackNavigationOptions } from '@react-navigation/native-stack'
import {
  BaseNavigationHeader,
  Button,
  Screen,
  TextInput,
} from 'core/components'
import { useForm } from 'core/hooks'
import { FieldValidation, validateName } from 'core/validations'
import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { SPACING } from 'theme'

const { string } = FieldValidation

interface SingUpForm {
  email: string
  name: string
  password: string
}

const SING_UP_VALIDATION_SCHEMA = FieldValidation.object({
  name: string()
    .label('nome')
    .required()
    .test('name', 'Nome inválido', validateName),
  email: string().label('email').required('Email é obrigatorio'),
  password: string()
    .min(8)
    .required('A senha deve ter no minimo 6 digitos')
    .label('Senha'),
})

const INITIAL_VALUES: SingUpForm = {
  email: '',
  name: '',
  password: '',
}

export const SingUpScreen = () => {
  const onSubmit = (data: SingUpForm) => {
    console.log(data)
  }

  const { handleSubmit, isValid, getFieldProps } = useForm<SingUpForm>({
    onSubmit,
    initialValues: INITIAL_VALUES,
    validationSchema: SING_UP_VALIDATION_SCHEMA,
  })

  useEffect(() => {
    console.log({ isValid })
  }, [isValid])
  const nameProps = getFieldProps('name')
  const emailProps = getFieldProps('email')
  const passwordProps = getFieldProps('password')

  // const onPress = () => {
  //   console.log('salvar')
  // }

  const onPress = () => handleSubmit()

  return (
    <Screen contentContainerStyles={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          autoComplete="name"
          autoCapitalize="words"
          placeholder="Nome"
          {...nameProps}
        />
        <TextInput
          autoCapitalize="none"
          autoComplete="email"
          placeholder="Email"
          {...emailProps}
        />
        <TextInput placeholder="Password" secureTextEntry {...passwordProps} />
      </View>

      <Button disabled={!isValid} onPress={onPress}>
        Cadastrar
      </Button>
    </Screen>
  )
}

const navigationOptions: NativeStackNavigationOptions = {
  header: () => <BaseNavigationHeader title="Cadastro" />,
}

SingUpScreen.NavigationOptions = navigationOptions

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    padding: SPACING.MD,
  },
  inputContainer: {
    gap: SPACING.LG,
  },
})
