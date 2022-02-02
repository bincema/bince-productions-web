import React from 'react'
import Icon from '../../assets/svg/accent-header-icon.svg'
import './AccentHeader.css'


const AccentHeader = ({ children }) => {
  return (
    <header className="accent-header-wrapper">
      <h1 className="accent-header-text">
        {children}
      </h1>
      {/* <Icon className="accent-header-icon" /> */}
    </header>
  )
}


export default AccentHeader
