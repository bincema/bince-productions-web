import React, { useState, createContext, useEffect } from 'react'
import { isBrowser, getURLParams } from '../utils/helpers'
export const URLParamsContext = createContext()

export const URLParamsProvider = ({ children }) => {
  const [params, setParams] = useState({ category: '', index: 0 })

  useEffect(() => {
    if (!isBrowser()) return
    let paramsValue = getURLParams()
    setParams(paramsValue)
  }, [])

  return (
    <URLParamsContext.Provider value={{
      params
    }}>
      {children}
    </URLParamsContext.Provider>
  )
}

