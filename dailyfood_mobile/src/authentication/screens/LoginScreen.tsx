import { NativeStackNavigationOptions } from '@react-navigation/native-stack'
import { useAuthentication } from 'authentication/hooks'
import { Login } from 'authentication/interfaces'
import {
  BaseNavigationHeader,
  Button,
  Screen,
  TextInput,
} from 'core/components'
import { useForm } from 'core/hooks'
import { FieldValidation } from 'core/validations'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { SPACING } from 'theme'

const { string } = FieldValidation

const SING_UP_VALIDATION_SCHEMA = FieldValidation.object({
  email: string().label('email').required('Email é obrigatorio'),
  password: string()
    .min(8)
    .required('A senha deve ter no minimo 6 digitos')
    .label('Senha'),
})

const INITIAL_VALUES: Login = {
  email: '',
  password: '',
}

export const LoginScreen = () => {
  const { login } = useAuthentication()

  const onSubmit = (data: Login) => login(data)

  const { handleSubmit, isValid, getFieldProps } = useForm<Login>({
    onSubmit,
    initialValues: INITIAL_VALUES,
    validationSchema: SING_UP_VALIDATION_SCHEMA,
  })

  const emailProps = getFieldProps('email')
  const passwordProps = getFieldProps('password')

  const onPress = () => handleSubmit()

  return (
    <Screen contentContainerStyles={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          autoCapitalize="none"
          autoComplete="email"
          placeholder="Email"
          {...emailProps}
        />
        <TextInput placeholder="Password" secureTextEntry {...passwordProps} />
      </View>

      <Button disabled={!isValid} onPress={onPress}>
        Entrar
      </Button>
    </Screen>
  )
}

const navigationOptions: NativeStackNavigationOptions = {
  header: () => <BaseNavigationHeader title="Login" />,
}

LoginScreen.NavigationOptions = navigationOptions

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    padding: SPACING.MD,
  },
  inputContainer: {
    gap: SPACING.LG,
  },
})
