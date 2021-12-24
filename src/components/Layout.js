import React from "react"
import PropTypes from "prop-types"
// import { useInView } from "react-intersection-observer"
import { ParallaxProvider } from 'react-scroll-parallax'

import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import '../assets/css/normalize.css'
import '../assets/css/global.css'
import '../assets/css/_button.css'

const Layout = ({ children }) => {
  // const { ref, inView } = useInView({
  //   threshold: 0,
  //   initialInView: true
  // });

  return (
    <>
      <Header />
      <main>
        {/* <span
          // ref={ref} 
          id="page-top"
          className="top-intersection"></span> */}
        <ParallaxProvider>
          {children}
        </ParallaxProvider>
        <Footer />
        {/* <BackToTop /> */}
      </main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
