import React from "react"
import PropTypes from "prop-types"
import { ParallaxProvider } from 'react-scroll-parallax'

import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import '../../assets/css/normalize.css'
import '../../assets/css/global.css'
import '../../assets/css/button.css'

import './Layout.css'
import { useAppContext } from "../../hooks/useAppContext"

const Layout = ({ children }) => {
  const { enableScroll } = useAppContext()

  return (
    <>
      <Header />
      <main className={enableScroll ? '' : 'disable-scroll'}>
        <ParallaxProvider>
          {children}
        </ParallaxProvider>
        <Footer />
      </main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
