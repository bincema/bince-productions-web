import React, { useState, useEffect, useContext } from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { GrFormNext, GrFormPrevious, GrFormClose } from 'react-icons/gr'
import { useGalleryContext } from '../../hooks/useGalleryContext'
import { RiShareFill } from 'react-icons/ri'
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonNext, ButtonBack,
  CarouselContext
} from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import './GallerySlider.css'


const GallerySlider = ({ sliderData, handleClose, currentIndex }) => {

  let totalSlides = sliderData.length

  return (
    <CarouselProvider
      totalSlides={totalSlides}
      interval={3000}
      isIntrinsicHeight
      // isPlaying
      currentSlide={currentIndex}
    // infinite
    >
      <Slider
        className="carousel--slider slider"
        classNameTray='slider-tray'
        classNameTrayWrap='slider-tray-wrap'
      >
        {sliderData.map((img, i) => {
          const currImg = getImage(img.gallery_image)
          const title = img.image_title.text
          return (
            <SliderItem
              key={i}
              index={i}
              imageData={currImg}
              title={title}
            />
          )
        })}

      </Slider>
      <button
        className="image-control-btn close"
        onClick={() => handleClose()}
      ><GrFormClose className="icon" /></button>

      {/* TODO: style share button & add copy link fn */}
      <button
        className="image-control-btn share"
      ><RiShareFill className="icon" /></button>

      <ButtonBack
        className="image-control-btn prev"
      ><GrFormPrevious className="icon" /></ButtonBack>

      <ButtonNext
        className="image-control-btn next"
      ><GrFormNext className="icon" /></ButtonNext>
    </CarouselProvider>
  )
}

export default GallerySlider

export const SliderItem = ({ title, index, imageData }) => {

  return (
    <Slide classNameVisible='is-active-slide' className={`slide`} index={index}>
      <GatsbyImage className="slide-image" image={imageData} alt={title} />

      <div className="slider-content-wrapper">
        <div className="content-wrapper">
          <h2 className="image-title">{title}</h2>
        </div>
      </div>
    </Slide>
  )
}