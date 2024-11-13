import { FC } from 'react'
import { useParams, useLoaderData } from 'react-router-dom'
import Markdown from 'react-markdown'

import useLogState from './useLogState'
import LogWidget from './LogWidget'
import LogItemContentWidget from './LogItemContentWidget'

const LogItemPage: FC = () => {
  const logState = useLogState()
  const { logPath } = useParams()
  const data = useLoaderData()
  return (
    <>
      <Markdown>{data as string}</Markdown>
      <LogWidget state={logState} />
      <LogItemContentWidget state={{ title: logPath || '---' }} />
    </>
  )
}

export default LogItemPage
