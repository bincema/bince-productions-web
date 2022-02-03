import React, { useEffect, useState } from 'react'
import Animated from 'react-mount-animation'
import { isBrowser } from '../../utils/helpers'

import './Loader.css'

const Loader = ({ isLoading }) => {
  const [dots, setDots] = useState(0)

  const addDots = () => {
    if (dots < 3) {
      setDots(prev => prev + 1)
    } else {
      setDots(0)
    }
  }

  useEffect(() => {
    if (!isBrowser && !isLoading) return
    const interval = window.setTimeout(() => {
      addDots()
    }, 500)

    return () => window.clearTimeout(interval)
  })

  return (
    <Animated.div
      show={!isLoading}
      className={`loader-text`}
      unmountAnim={`
        0 % { opacity: 1 }
        100 % { opacity: 0 }
      `}
    >
      Loading Video{Array(dots).fill('.').map(dot => (
        <span className="loader-dot">.</span>
      ))}
    </Animated.div>
  )
}

export default Loader