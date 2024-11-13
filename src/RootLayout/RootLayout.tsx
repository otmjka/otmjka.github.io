import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import packageJson from '../../package.json'

const RootLayout: FC = () => {
  return (
    <>
      <>
        <Link to="/">rndmsd0</Link> [{packageJson.version}]
      </>

      <Outlet />
    </>
  )
}

export default RootLayout
