import { FC } from 'react'
import { Link } from 'react-router-dom'
import LogContent from './LogContent'
import { LogListItem } from './types'
import H1 from './H1'

type LogWidgetProps = {
  state: {
    logList: Array<LogListItem>
  }
}

const LogWidget: FC<LogWidgetProps> = (props) => {
  const {
    state: { logList },
  } = props

  return (
    <>
      <H1>log</H1>
      <LogContent>
        <ul>
          {logList.map(({ path }, index) => (
            <li key={'' + path + index}>
              <Link to={`/logs/${path}`}>{path}</Link>
            </li>
          ))}
        </ul>
      </LogContent>
    </>
  )
}

export default LogWidget
