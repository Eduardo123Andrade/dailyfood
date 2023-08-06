import { Login } from 'authentication/interfaces'
import { usePostRequest, useUser } from 'core/hooks'
import { User } from 'core/interfaces'

interface LoginResponse {
  token: string
  user: User
}

export const useAuthentication = () => {
  const [, { setUser }] = useUser()
  const { mutate } = usePostRequest<LoginResponse, Login>('/auth/login', {
    onSuccess: ({ data }) => {
      const { user: userResponse, token } = data
      const user: User = {
        token,
        ...userResponse,
      }
      setUser(user)
    },
    onError: (error) => {
      console.log(JSON.stringify(error, null, 2))
    },
  })

  const login = (data: Login) => {
    mutate(data)
  }

  return {
    login,
  }
}
