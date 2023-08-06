import {
  useQuery,
  UseQueryResult,
  UseQueryOptions,
  MutationStatus,
  QueryObserverOptions,
} from 'react-query'
import { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
import { useAPI } from './useApi'

export type UseGetRequestStatus = MutationStatus

export type UseGetRequest<TData = any, TError = any> = UseQueryResult<
  AxiosResponse<TData>,
  AxiosError<TError>
>

interface TError {
  message: string
}

export interface UseGetRequestConfigs extends AxiosRequestConfig {}

export interface UseGetRequestOptions<TData = any>
  extends UseQueryOptions<AxiosResponse<TData>, AxiosError<TError>> {}

export const useGetRequest = <TData = any, TError = any>(
  url: string,
  options?: QueryObserverOptions<
    AxiosResponse<TData, TError>,
    TError,
    AxiosResponse<TData, TError>
  >,
  configs?: UseGetRequestConfigs,
): UseGetRequest<TData, TError> => {
  const { API } = useAPI()

  const queryArgs = useQuery<AxiosResponse<TData, TError>, any>({
    ...options,
    queryKey: [url, configs],
    queryFn: () => API.get(url, configs),
  })

  return queryArgs
}
