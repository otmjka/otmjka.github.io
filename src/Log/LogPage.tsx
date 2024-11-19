import { FC } from 'react'
import useLogState from './useLogState'
import LogWidget from './LogWidget'

import { H1 } from 'otmjka-ui-components'

const LogPage: FC = () => {
  const logState = useLogState()
  return (
    <>
      <H1>log</H1>

      <LogWidget state={logState} />
    </>
  )
}

export default LogPage
