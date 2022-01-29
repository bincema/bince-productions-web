import React from 'react'
import { Link } from 'gatsby'
import Layout from './Layout'
import Seo from './Seo'

const ContentPage = ({ children, title }) => {
  return (
    <Layout>
      <Seo title={title} />
      <div className="content-page">
        <header>
          <nav className="secondary-nav">
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/photo/portfolio" className="nav-link">Portfolio</Link>
              </li>
              <li className="nav-item">
                <Link to="/photo/liquids" className="nav-link">Liquids</Link>
              </li>
              <li className="nav-item">
                <Link to="/photo/jewelery" className="nav-link">Jewelery</Link>
              </li>

              <li className="nav-divider"></li>

              <li className="nav-item">
                <Link to="/photo" className="nav-link">Services</Link>
              </li>
            </ul>
          </nav>
        </header>
        {children}
      </div>
    </Layout >
  )
}

export default ContentPage
