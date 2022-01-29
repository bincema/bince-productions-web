import React, { useState, createContext, useEffect } from 'react'
import { isBrowser } from '../utils/helpers'
export const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [enableScroll, setEnableScroll] = useState(true)
  const [headerVisible, setHeaderVisible] = useState(true)

  useEffect(() => {
    if (!isBrowser()) return

    let body = document.getElementsByTagName('body')[0]
    if (enableScroll) {
      body.style.overflow = 'auto'
    } else {
      body.style.overflow = 'hidden'
    }
  }, [enableScroll])

  return (
    <AppContext.Provider value={{
      enableScroll,
      setEnableScroll,
      headerVisible,
      setHeaderVisible
    }}>
      {children}
    </AppContext.Provider>
  )
}

