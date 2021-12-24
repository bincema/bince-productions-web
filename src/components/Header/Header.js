import React from "react"
import Nav from './Nav'
import BinceEmblem from '../../assets/svg/bince-emblem.svg'
import './Header.css'

const Header = () => {
  return (
    <header className="top-header">
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
    </header>
  )
}

export default Header
