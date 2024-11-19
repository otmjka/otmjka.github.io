import { FC } from 'react'
import { Link } from 'react-router-dom'
import LogContent from './LogContent'
import { LogListItem } from './types'

import { AssignmentRoundedIcon, Menu } from 'otmjka-ui-components'

type LogWidgetProps = {
  state: {
    logList: Array<LogListItem>
  }
}

const LogWidget: FC<LogWidgetProps> = (props) => {
  const {
    state: { logList },
  } = props
  const menuItems = logList.map(({ path }) => ({
    text: path,
    url: `/logs/${path}`,
    icon: <AssignmentRoundedIcon />,
  }))
  return (
    <LogContent>
      {/* @ts-expect-error todo: */}
      <Menu menuItems={menuItems} MenuItem={Link} />
    </LogContent>
  )
}

export default LogWidget
