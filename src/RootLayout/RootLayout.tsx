import { FC } from 'react'
import { Outlet } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import { Box, Container, GlobalStyles } from '@mui/material'

import {
  DosTheme,
  DosAppBar,
  DosToolbar,
  DosAppBarMenu,
  DosAppBarMenuItem,
  DosRedLetter,
  DosRGBox,
} from 'otmjka-ui-components'

import { appBarMenuItems } from './appBarMenuItems'
// import packageJson from '../../package.json'

const RootLayout: FC = () => {
  return (
    <DosTheme>
      <GlobalStyles
        styles={{
          body: { margin: 0 },
        }}
      />
      <DosAppBar>
        <DosToolbar>
          <DosAppBarMenu>
            {appBarMenuItems.map((menuItem) => (
              <DosAppBarMenuItem key={menuItem.label}>
                <DosRedLetter letterIndex={menuItem.letterIndex}>
                  {menuItem.label}
                </DosRedLetter>
              </DosAppBarMenuItem>
            ))}
          </DosAppBarMenu>
        </DosToolbar>
      </DosAppBar>
      {/* <>
        <Link to="/">rndmsd0</Link> [{packageJson.version}]
      </> */}
      <Box pt={7}>
        <Container fixed>
          <DosRGBox />
          <Box sx={{ position: 'relative' }}>
            <Outlet />
          </Box>
        </Container>
      </Box>
    </DosTheme>
  )
}

export default RootLayout
