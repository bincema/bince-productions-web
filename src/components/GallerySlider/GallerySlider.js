import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { GrFormNext, GrFormPrevious, GrFormClose } from 'react-icons/gr'
import { RiShareFill } from 'react-icons/ri'
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonNext, ButtonBack
} from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import './GallerySlider.scss'


const GallerySlider = ({ sliderData, handleClose, currentIndex }) => {

  let totalSlides = sliderData.length

  return (
    <CarouselProvider
      totalSlides={totalSlides}
      interval={3000}
      isIntrinsicHeight
      // isPlaying
      currentSlide={currentIndex}
      infinite
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
      {/* <div className="image-control-group"> */}
      {/* <span className="image-control-btn-label">Close</span> */}
      <button
        className="image-control-btn close"
        onClick={() => handleClose()}
      ><GrFormClose className="icon" /></button>
      {/* </div> */}

      {/* TODO: style share button & add copy link fn */}
      {/* <div className="image-control-group share">
        <span className="image-control-btn-label">Share</span>
        <button
          className="image-control-btn"
        ><RiShareFill className="icon" /></button>
      </div> */}

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