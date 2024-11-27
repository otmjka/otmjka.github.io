import { useNavigate } from 'react-router-dom'

const useRedirectGithubPages = () => {
  const navigate = useNavigate()
  const redirect = sessionStorage.getItem('redirect')
  console.log('###', redirect)
  if (redirect) {
    sessionStorage.removeItem('redirect')
    navigate(redirect)
    //     history.replaceState(null, null, redirect)
  }
}

export default useRedirectGithubPages
