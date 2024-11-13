import { FC, ReactNode } from 'react'

const H1: FC<{ children?: ReactNode }> = (props) => <h1>{props.children}</h1>

export default H1
