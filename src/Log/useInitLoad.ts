import { useEffect, useState } from 'react'

type UseInitLoadParams<ResponseType, MappedReturnType> = {
  initFn: () => Promise<ResponseType>
  mapperFn: (response: ResponseType) => MappedReturnType
}

type UseInitLoadReturn<ReturnMappedData> = {
  data?: ReturnMappedData
  isLoading: boolean
  isLoaded: boolean
}

// TODO: return Promise.all like vakue
// TODO: types dependOn params
const useInitLoad = <ResponseType = unknown, ReturnMappedData = unknown>({
  initFn,
  mapperFn,
}: UseInitLoadParams<
  ResponseType,
  ReturnMappedData
>): UseInitLoadReturn<ReturnMappedData> => {
  const [result, setResult] = useState<ReturnMappedData | undefined>()
  // const { initFn, mapperFn } = params;
  // loading sources after first render
  useEffect(() => {
    const init = async () => {
      const response = await initFn()
      const mappedResult = mapperFn(response)
      console.log(response, mappedResult)
      setResult(mappedResult)
    }

    init()
    // loading sources after first render
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    data: result,
    isLoading: false,
    isLoaded: false,
  }
}

export default useInitLoad
