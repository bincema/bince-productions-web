import React from 'react'
import './Pagination.css'
import { Link } from 'gatsby'
import { RiArrowLeftLine, RiArrowRightLine } from 'react-icons/ri'

const Pagination = ({ prev, next }) => {
  return (
    <div className="pagination">
      <nav className="content-wrapper">
        <ul className="pagination-list">

          <li className="list-item">
            <Link to={'/'} rel="next" className="link">
              <div className="pagination-layout -left">
                <div className="pagination-nav">
                  <RiArrowLeftLine />
                  <div>Next</div>
                </div>
                <div className="pagination-title">Another video to watch</div>
                <div className="pagination-date">01.03.2021</div>
              </div>
            </Link>
          </li>

          <li className="list-item">
            <Link to={'/'} rel="prev" className="link">
              <div className="pagination-layout -right">
                <div className="pagination-nav">
                  <div>Previous</div>
                  <RiArrowRightLine />
                </div>
                <div className="pagination-title">Some other video</div>
                <div className="pagination-date">01.03.2021</div>
              </div>
            </Link>
          </li>

        </ul>

      </nav>
    </div>
  )
}

export default Pagination
