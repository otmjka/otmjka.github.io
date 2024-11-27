import { FC } from 'react'

import { Typography } from '@mui/material'
import { LogListItem } from './types'

import styled from 'styled-components'

import {
  DosPaper,
  DosBorderVariant,
  DosButton,
  DosFieldset,
  Menu,
} from 'otmjka-ui-components'
import { Link } from 'react-router-dom'

type LogWidgetProps = {
  state: {
    logList: Array<LogListItem>
  }
}

type ItemShape = {
  children: string
  to: string
}

const LinkComponent = styled<typeof Link, ItemShape>(Link)(() => ({
  color: '#fff',
  textDecoration: 'none',

  '&:hover': {
    color: '#000',
  },
}))

const LogWidget: FC<LogWidgetProps> = (props) => {
  const {
    state: { logList },
  } = props
  const menuItems = logList.map(({ path }) => ({
    children: path,
    to: `/logs/${path}`,
  }))

  return (
    <DosPaper dosBorderVariant={DosBorderVariant.none}>
      <DosFieldset>
        <Typography component={'legend'}> [log] </Typography>
        <Menu<ItemShape>
          menuItems={menuItems}
          MenuItemComponent={LinkComponent}
        />
        <hr />
        <DosButton>more...</DosButton>
      </DosFieldset>
    </DosPaper>
  )
}

export default LogWidget
