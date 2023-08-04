import { NativeStackNavigationOptions } from '@react-navigation/native-stack'
import {
  BaseNavigationHeader,
  Button,
  Screen,
  TextInput,
} from 'core/components'
import { useForm } from 'core/hooks'
import { FieldValidation } from 'core/validations'
import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { SPACING } from 'theme'

const { string } = FieldValidation

interface LoginForm {
  email: string
  password: string
}

const SING_UP_VALIDATION_SCHEMA = FieldValidation.object({
  email: string().label('email').required('Email é obrigatorio'),
  password: string()
    .min(8)
    .required('A senha deve ter no minimo 6 digitos')
    .label('Senha'),
})

const INITIAL_VALUES: LoginForm = {
  email: '',
  password: '',
}

export const LoginScreen = () => {
  const onSubmit = (data: LoginForm) => {
    console.log(data)
  }

  const { handleSubmit, isValid, getFieldProps } = useForm<LoginForm>({
    onSubmit,
    initialValues: INITIAL_VALUES,
    validationSchema: SING_UP_VALIDATION_SCHEMA,
  })

  useEffect(() => {
    console.log({ isValid })
  }, [isValid])
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
