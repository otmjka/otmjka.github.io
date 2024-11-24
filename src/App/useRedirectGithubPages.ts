const useRedirectGithubPages = () => {
  const redirect = sessionStorage.getItem('redirect')
  console.log('###', redirect)
  //   if (redirect) {
  //     sessionStorage.removeItem('redirect')
  //     history.replaceState(null, null, redirect)
  //   }
}

export default useRedirectGithubPages
