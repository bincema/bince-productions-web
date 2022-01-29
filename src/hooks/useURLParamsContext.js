import React, { useContext } from 'react'
import { URLParamsContext } from '../context/URLParamsContext'

export const useURLParamsContext = () => {
  const paramsContext = useContext(URLParamsContext)
  return paramsContext
}