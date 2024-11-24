import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Box, Container } from '@mui/material'

import {
  AppTheme,
  // AppAppBar
} from 'otmjka-ui-components'

import packageJson from '../../package.json'

const RootLayout: FC = () => {
  return (
    <AppTheme>
      {/* <AppAppBar logoLink={Link} /> */}
      <>
        <Link to="/">rndmsd0</Link> [{packageJson.version}]
      </>
      <Box pt={7}>
        <Container fixed>
          <Outlet />
        </Container>
      </Box>
    </AppTheme>
  )
}

export default RootLayout
