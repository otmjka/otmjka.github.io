import { FC, ReactNode } from 'react'
import useRedirectGithubPages from './useRedirectGithubPages'

type AppContainerProps = { children: ReactNode }

const App: FC<AppContainerProps> = ({ children }) => {
  useRedirectGithubPages()
  return <>{children}</>
}

export default App
