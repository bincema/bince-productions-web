import React from 'react'
import { GatsbyImage, getImage, Placeholder } from "gatsby-plugin-image"
import { Parallax } from 'react-scroll-parallax'
import Video from '../Video/Video'

import {
  CarouselProvider,
  Slider,
  Slide
} from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import './HeroSlider.css'


const HeroSlider = ({ sliderData }) => {
  let totalSlides = sliderData.length

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
            <h1>Explore The Image</h1>
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, magni ipsam. Laboriosam ducimus atque architecto.</p> */}
            {/* <button className="btn">Portfolio</button> */}
          </div>
        </div>
      </Parallax>
    </CarouselProvider>
  )
}

export default HeroSlider