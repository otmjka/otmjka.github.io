import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { LogPage, LogItemPage } from './Log'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LogPage />,
  },
  {
    path: '/logs/:logPath',
    element: <LogItemPage />,
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
