import { FC } from 'react'
import useLogState from './useLogState'
import LogWidget from './LogWidget'

const LogPage: FC = () => {
  const logState = useLogState()
  return (
    <>
      <LogWidget state={logState} />
    </>
  )
}

export default LogPage
