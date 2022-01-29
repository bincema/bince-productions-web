export const isBrowser = () => window !== typeof "undefined"

export const getURLParams = () => {
  if (!isBrowser()) return

  const queryString = window.location.search
  const urlParams = new URLSearchParams(queryString)
  const category = urlParams.get('category')
  const index = urlParams.get('index')

  return { category, index }
}

export const sleep = delay => new Promise(resolve => setTimeout(() => resolve(true), delay))