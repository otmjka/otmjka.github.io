import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import { App } from '../App'
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
import packageJson from '../../package.json'

const RootLayout: FC = () => {
  return (
    <App>
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
            <>[{packageJson.version}]</>
          </DosToolbar>
        </DosAppBar>
        <Box pt={7}>
          <Container fixed>
            <DosRGBox />
            <Box sx={{ position: 'relative' }}>
              <Outlet />
            </Box>
          </Container>
        </Box>
      </DosTheme>
    </App>
  )
}

export default RootLayout
