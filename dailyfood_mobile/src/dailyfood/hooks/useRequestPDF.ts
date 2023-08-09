import { usePostRequest } from 'core/hooks'
import { SetMessageFunction } from 'core/types/SetMessageFunction'

interface ResponseData {
  url: string
}

interface Variables {
  initial_date: string
  final_date: string
}

export const useRequestPdf = (setMessage: SetMessageFunction) => {
  const { mutate, data } = usePostRequest<ResponseData, Variables>(
    '/meals/generate-pdf-by-date',
    {
      onError: ({ response }) => {
        setMessage(response.data.message)
      },
    },
  )

  const request = (initialData: string, finalDate: string) => {
    mutate({ initial_date: initialData, final_date: finalDate })
  }

  return {
    request,
    response: data?.data.url,
  }
}
