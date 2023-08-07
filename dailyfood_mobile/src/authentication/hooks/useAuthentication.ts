import { Login, SingUp } from 'authentication/interfaces'
import { usePostRequest, useUser } from 'core/hooks'
import { User } from 'core/interfaces'

interface AuthResponse {
  token: string
  user: User
}

const getUser = (data: AuthResponse): User => {
  const { user: userResponse, token } = data
  return {
    token,
    ...userResponse,
  }
}

type MessageErrorFunction = (message: string) => void

export const useAuthentication = (setMessageError: MessageErrorFunction) => {
  const [, { setUser }] = useUser()

  const { mutate: loginMutate } = usePostRequest<AuthResponse, Login>(
    '/auth/login',
    {
      onSuccess: ({ data }) => {
        const user = getUser(data)
        setUser(user)
      },
      onError: ({ response }) => {
        setMessageError(response.data.message)
      },
    },
  )

  const { mutate: singUpMutate } = usePostRequest<AuthResponse, Login>(
    '/auth/sing_up',
    {
      onSuccess: ({ data }) => {
        const user = getUser(data)
        setUser(user)
      },
      onError: ({ response }) => {
        setMessageError(response.data.message)
      },
    },
  )

  const login = (data: Login) => {
    loginMutate(data)
  }

  const singUp = (data: SingUp) => {
    singUpMutate(data)
  }

  return {
    login,
    singUp,
  }
}
