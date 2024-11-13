import { LogListItem, LogListResponse } from './types'
import useInitLoad from './useInitLoad'
import { getArticles } from './getArticles'

export type UseLogStateReturn = {
  logList: Array<LogListItem>
  isLoading: boolean
  isLoaded: boolean
}

const useLogState = (): UseLogStateReturn => {
  const { data, isLoading, isLoaded } = useInitLoad<
    LogListResponse,
    LogListResponse
  >({
    initFn: getArticles({}),
    mapperFn: (value) => value,
  })

  // TODO: data -> logList
  return {
    logList: data ? data.articles : [],
    isLoading,
    isLoaded,
  }
}

export default useLogState
