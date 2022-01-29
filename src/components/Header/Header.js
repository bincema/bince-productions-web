import React from "react"
import Nav from './Nav'
import BinceEmblem from '../../assets/svg/bince-emblem.svg'
import Animated from 'react-mount-animation'
import { useAppContext } from '../../hooks/useAppContext'
import './Header.css'

const Header = () => {
  const { headerVisible } = useAppContext()

  return (
    <Animated.header
      className="top-header"
      show={headerVisible}
      mountAnim={` 
          0% {opacity: 0}
          100% {opacity: 1}
      `}
      time={0.3}
    >
      <div className="content-box">
        <div className="header-layout">

          <div className="header-logo-wrapper">
            <div className="header-logo-image">
              <BinceEmblem />
            </div>
            <div className="header-logo-text">
              <div className="header-logo-title">
                Bince&nbsp;Productions
              </div>
              <div className="header-logo-tagline">
                video<span className="tagline-slash">/</span>photography<span className="tagline-slash">/</span>passion
              </div>
            </div>
          </div>
          <Nav />
        </div>
      </div>
    </Animated.header>
  )
}

export default Header
