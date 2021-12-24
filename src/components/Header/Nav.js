import React, { useEffect, useState, useRef } from "react"
import { Link } from 'gatsby'
// import AniLink from "gatsby-plugin-transition-link/AniLink"
import classnames from 'classnames'
import { RiCameraLensFill } from 'react-icons/ri'
import navigation from '../../utils/navigation.json'

import '../../assets/css/_nav.css'

const Nav = () => {
  const [openDrawer, toggleDrawer] = useState(false);
  const drawerRef = useRef(null);


  useEffect(() => {
    /* Close the drawer when the user clicks outside of it */
    const closeDrawer = event => {
      if (drawerRef.current && drawerRef.current.contains(event.target)) {
        return;
      }

      toggleDrawer(false);
    };

    document.addEventListener("mousedown", closeDrawer);
    return () => document.removeEventListener("mousedown", closeDrawer);
  }, []);

  return (
    <div className="primary-nav">
      <nav>

        <button className="mobile-toggle" onClick={() => toggleDrawer(true)}>
          <RiCameraLensFill />
        </button>

        <ul ref={drawerRef} className={
          openDrawer ? 'open-drawer' : null
        }>

          {
            // eslint-disable-next-line array-callback-return
            navigation["nav-items"].map((item, i) => {

              // eslint-disable-next-line array-callback-return
              if (!item.includeInNav) return

              if (item.renderAs === 'menu-item') {
                return (
                  <li key={i}>
                    <Link
                      // Bellow for use with ANiLink transition plugin
                      // color="#FFA90C"
                      // paintDrip
                      onClick={() => toggleDrawer(false)}
                      to={item.path}
                      activeClassName="active"
                      className={classnames(item.render === "button" ? "btn btn-small" : null)}>
                      {item.label}
                    </Link>
                  </li>
                )
              }

              if (item.renderAs === 'button') {
                return (
                  <li key={i}>
                    <a
                      onClick={() => toggleDrawer(false)}
                      className="btn btn-small"
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer">
                      {item.label}
                    </a>
                  </li>
                )
              }
            })}
        </ul>
      </nav>
    </div>
  )
}
export default Nav