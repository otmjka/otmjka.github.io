import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { App } from './App'
import appRouter from './appRouter'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App>
      <RouterProvider router={appRouter} />
    </App>
  </StrictMode>
)
