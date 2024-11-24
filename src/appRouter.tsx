import { createBrowserRouter } from 'react-router-dom'
import { LogPage, LogItemPage } from './Log'
import { getGithubRawcontent } from './Log/getGithubRawcontent'
import { RootLayout } from './RootLayout'

const appRouter = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: '/', element: <LogPage /> },
      {
        path: '/logs/:logPath',
        loader: async ({ params: { logPath } }) => {
          if (!logPath) {
            return
          }
          return getGithubRawcontent({ fileName: logPath })
        },
        element: <LogItemPage />,
      },
    ],
  },
])
export default appRouter
