import { FC } from 'react'
// import LogContent from './'
import H1 from './H1'

type LogItemContentWidgetProps = {
  state: {
    title: string
  }
}

const LogItemContentWidget: FC<LogItemContentWidgetProps> = (props) => {
  const {
    state: { title },
  } = props

  return (
    <>
      <H1>{title}</H1>
      {/* <LogContent>there is content</LogContent> */}
      there is content
    </>
  )
}

export default LogItemContentWidget
