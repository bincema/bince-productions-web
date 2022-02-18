import React, { useEffect, useState, useRef } from "react"
import { graphql, useStaticQuery } from 'gatsby'
import { PrismicLink } from '@prismicio/react'

import { RiCameraLensFill } from 'react-icons/ri'

import './Nav.scss'

const Nav = () => {
  const queryData = useStaticQuery(graphql`
    {
      prismicPrimaryNavigation {
        data {
          primary_navigation {
            link {
              url
              uid
              link_type
            }
            link_label {
              text
            }
            display
            render_as
          }
        }
      }
    }
  `)

  const { primary_navigation: navItems } = queryData.prismicPrimaryNavigation.data

  const [openDrawer, toggleDrawer] = useState(false);
  const drawerRef = useRef(null);

  useEffect(() => {
    /* Close the drawer when the user clicks outside of it */
    const closeDrawer = event => {
      if (drawerRef.current && drawerRef.current.contains(event.target)) {
        return
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
          <RiCameraLensFill className="icon" />
        </button>

        <ul ref={drawerRef} className={`nav-list ${openDrawer ? 'open-drawer' : ''}`}>
          {
            // eslint-disable-next-line array-callback-return
            navItems.map((item, i) => {
              if (!item.display) return
              return (
                // TODO return button if render_as === true
                <li key={i} className={`nav-item ${item.render_as ? 'btn btn-nav btn__call-to-action' : ''}`}>
                  <PrismicLink
                    field={item.link}
                    onClick={() => toggleDrawer(false)}
                    activeClassName="active"
                    className="nav-link"
                  >
                    {item.link_label.text}
                  </PrismicLink>
                </li>
              )
            })}
        </ul>
      </nav>
    </div>
  )
}
export default Nav