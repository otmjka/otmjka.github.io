import { FC } from 'react'
import { useParams } from 'react-router-dom'

import useLogState from './useLogState'
import LogWidget from './LogWidget'
import LogItemContentWidget from './LogItemContentWidget'

const LogItemPage: FC = () => {
  const logState = useLogState()
  const { logPath } = useParams()

  return (
    <>
      <pre>{logPath}</pre>
      <LogWidget state={logState} />
      <LogItemContentWidget state={{ title: logPath || '---' }} />
    </>
  )
}

export default LogItemPage
