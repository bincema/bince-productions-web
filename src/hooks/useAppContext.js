import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export const useAppContext = () => {
  const appContext = useContext(AppContext)
  return appContext
}