import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Parallax } from 'react-scroll-parallax'
import Video from '../Video/Video'
import { FiChevronDown } from 'react-icons/fi'
import kebabCase from 'lodash.kebabcase'

import {
  CarouselProvider,
  Slider,
  Slide
} from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import './HeroSlider.scss'


const HeroSlider = ({ sliderData, buttons }) => {
  let totalSlides = sliderData.length

  console.log(buttons)
  return (
    <CarouselProvider
      totalSlides={totalSlides}
      interval={4000}
      isIntrinsicHeight
      isPlaying
      infinite
    >
      <Parallax className="parallax-container" y={[-38, 35]} tagOuter="div">
        <Slider
          className="carousel--slider hero-slider"
          classNameTray='hero-slider-tray'
          classNameTrayWrap='hero-slider-tray-wrap'
        >
          {sliderData.map((item, i) => {
            const { video_link, slide_title, image, content_type } = item

            // contentType (true: video || false: image)
            if (content_type === false) {
              const currImg = getImage(image)
              return (
                <Slide className="hero-slide" index={i} key={i}>
                  <GatsbyImage className="slide-image" image={currImg} alt={image.alt} />
                </Slide>
              )
            } else if (content_type === true) {
              if (!video_link.url) return null

              const posterStyles = {
                backgroundImage: image.url ? `url(${image.url})` : '',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
              }

              return (
                <Slide className="hero-slide" index={i} key={i} style={posterStyles}>
                  <Video
                    className="vimeo-embed-player"
                    embedLink={video_link.url}
                    autoplay
                  />
                </Slide>
              )
            }
          })}
        </Slider>
        <div className="hero-content-wrapper">
          <div className="content-wrapper">
            <div className="btn-group">
              {buttons.map((item, i) => (
                <Link
                  key={i}
                  className={`btn btn-hero btn__${kebabCase(item.variant)}`}
                  to={item.link.url}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="btn-scroll-down">
              <FiChevronDown className="icon" />
            </div>
          </div>
        </div>
      </Parallax>
    </CarouselProvider>
  )
}

export default HeroSlider