import React from 'react'
import './Pagination.scss'
import { Link } from 'gatsby'
import { RiArrowLeftLine, RiArrowRightLine } from 'react-icons/ri'

const Pagination = ({ prev, next }) => {
  return (
    <div className="pagination">
      <nav className="content-wrapper">
        <ul className="pagination-list">

          <li className="list-item">
            {prev && (
              <Link to={prev ? prev.url : ''} rel="prev" className="link">
                <div className="pagination-layout -left">
                  <div className="pagination-nav">
                    <RiArrowLeftLine />
                    <div>Previous</div>
                  </div>
                  <div className="pagination-title">{prev ? prev.data.title.text : '-'}</div>
                  <div className="pagination-date">{prev ? prev.data.date : '-'}</div>
                </div>
              </Link>
            )}
          </li>

          <li className="list-item">
            {next && (
              <Link to={next ? next.url : ''} rel="next" className="link">
                <div className="pagination-layout -right">
                  <div className="pagination-nav">
                    <div>Next</div>
                    <RiArrowRightLine />
                  </div>
                  <div className="pagination-title">{next ? next.data.title.text : '-'}</div>
                  <div className="pagination-date">{next ? next.data.date : '-'}</div>
                </div>
              </Link>
            )}
          </li>
        </ul>

      </nav>
    </div>
  )
}

export default Pagination
