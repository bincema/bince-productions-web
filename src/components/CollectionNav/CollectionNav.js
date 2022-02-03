import React from 'react';
import './CollectionNav.css';
import { useCollectionContext } from '../../hooks/useCollectionContext'

const CollectionNav = ({ portfolio, portfolioLabel, services }) => {
  const { categories, switchCategory, resetCollection, showPortfolio } = useCollectionContext()

  return (

    <nav className="collection-nav">
      <ul className="collection-nav__list">

        <li className="collection-nav__list-item">
          <button className="collection-nav__list-item-btn" onClick={() => resetCollection()}>All</button>
        </li>

        {portfolio && (
          <li className="collection-nav__list-item">
            <button className="collection-nav__list-item-btn" onClick={() => showPortfolio()}>{portfolioLabel ? portfolioLabel : 'Portfolio'}</button>
          </li>)}

        {categories.map((item, i) => (
          <li className="collection-nav__list-item" key={i}>
            <button className="collection-nav__list-item-btn" onClick={() => switchCategory(item)}>
              {item}
            </button>
          </li>
        ))}

        {services && (
          <li className="collection-nav__list-item">
            <button className="collection-nav__list-item-btn">Services</button>
          </li>
        )}

      </ul>
    </nav>
  );
};

export default CollectionNav;
