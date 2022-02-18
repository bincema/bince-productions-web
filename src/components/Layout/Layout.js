import React from "react"
import PropTypes from "prop-types"
import { ParallaxProvider } from 'react-scroll-parallax'

import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import '../../assets/css/normalize.css'
import '../../assets/css/index.scss'
import '../../assets/css/global.scss'
import '../../assets/css/button.scss'
import '../../assets/css/contact.scss'

import './Layout.scss'
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
