import React from 'react';
import './CollectionNav.css';
import { useGalleryContext } from '../../hooks/useGalleryContext'

const GalleryNav = ({ portfolio, services }) => {
  const { categories, switchCategory, resetGallery, showPortfolio } = useGalleryContext()

  return (

    <nav className="gallery-nav">
      <ul className="gallery-nav__list">

        <li className="gallery-nav__list-item">
          <button className="gallery-nav__list-item-btn" onClick={() => resetGallery()}>All</button>
        </li>

        {portfolio && (
          <li className="gallery-nav__list-item">
            <button className="gallery-nav__list-item-btn" onClick={() => showPortfolio()}>Portfolio</button>
          </li>)}

        {categories.map((item, i) => (
          <li className="gallery-nav__list-item" key={i}>
            <button className="gallery-nav__list-item-btn" onClick={() => switchCategory(item)}>
              {item}
            </button>
          </li>
        ))}

        {services && (
          <li className="gallery-nav__list-item">
            <button className="gallery-nav__list-item-btn">Services</button>
          </li>
        )}

      </ul>
    </nav>
  );
};

export default GalleryNav;
