import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { LogPage, LogItemPage } from './Log'
import { getGithubRawcontent } from './Log/getGithubRawcontent'
import { RootLayout } from './RootLayout'

const router = createBrowserRouter([
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

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
