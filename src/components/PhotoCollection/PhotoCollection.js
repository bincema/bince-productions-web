import React, { useState, useEffect } from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import './PhotoCollection.css'

import Animated from "react-mount-animation"

import { useGalleryContext } from '../../hooks/useGalleryContext'
import { useAppContext } from '../../hooks/useAppContext'

import GallerySlider from '../GallerySlider/GallerySlider'

const PhotoCollection = () => {
  const { setEnableScroll, setHeaderVisible } = useAppContext()
  const {
    filteredItems: galleryItems,
    columns,
    currentIndex, setCurrentIndex,
    isSliderMounted, setIsSliderMounted
  } = useGalleryContext()


  const handleOpenImage = imageIndex => {
    setCurrentIndex(imageIndex)
    showSlider()
  }

  const showSlider = () => {
    setIsSliderMounted(true)
    setEnableScroll(false)
    setHeaderVisible(false)
  }

  // TODO: move to GallerySlider to avoid props drilling
  const handleClose = () => {
    // TODO: on close clear URL params
    setIsSliderMounted(false)
    setCurrentIndex(0)
    setEnableScroll(true)
    setHeaderVisible(true)
  }

  return (
    <div className="collection">
      <ul className={`collection__list columns-${columns}`}>
        {galleryItems && galleryItems.map((item, i) => {
          const image = getImage(item.gallery_image)
          const title = item.image_title.text
          return (
            <li className="collection__list-item" key={i}>
              <GatsbyImage image={image} alt={title} />
              <div onClick={() => handleOpenImage(i)} className="collection__list-item-overlay"></div>
              <span className="collection__list-item-title">{title}</span>
            </li>
          )
        })}
      </ul>

      <Animated.div
        className={`full-image-container`}
        show={isSliderMounted}
        mountAnim={` 
            0% {opacity: 0}
            100% {opacity: 1}
        `}
        time={0.3}
      >
        <GallerySlider
          className="full-image"
          sliderData={galleryItems}
          currentIndex={currentIndex}
          handleClose={handleClose} />
      </Animated.div>
    </div>
  )
}

export default PhotoCollection