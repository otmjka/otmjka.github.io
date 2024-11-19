import { FC } from 'react'
import { useLoaderData } from 'react-router-dom'
import Markdown from 'react-markdown'
import { Box } from '@mui/material'

const LogItemPage: FC = () => {
  const data = useLoaderData()
  return (
    <Box pt={7}>
      <Markdown>{data as string}</Markdown>
    </Box>
  )
}

export default LogItemPage
