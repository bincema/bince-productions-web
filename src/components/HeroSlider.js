import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Parallax } from 'react-scroll-parallax'

import {
  CarouselProvider,
  Slider,
  Slide
} from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import '../assets/css/_hero-slider.css'


const HeroSlider = () => {
  const { allFile } = useStaticQuery(
    graphql`
      query galleryImages {
        allFile(filter: {sourceInstanceName: {eq: "gallery"}}) {
          edges {
            node {
              childrenImageSharp {
                gatsbyImageData(transformOptions: {
                  fit: INSIDE
                })
              }
            }
          }
        }
      }
    `)

  let totalSlides = allFile.edges.length

  return (
    <CarouselProvider
      totalSlides={totalSlides}
      interval={3000}
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
          {allFile.edges.map((img, i) => {
            const currImg = getImage(img.node.childrenImageSharp[0])

            return (
              <Slide className="hero-slide" index={i} key={i}>
                <GatsbyImage className="slide-image" image={currImg} alt={`Img-${i}`} />
              </Slide>
            )
          })}
        </Slider>
        <div className="hero-content-wrapper">
          <div className="content-wrapper">
            <h1>Explore The Image</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, magni ipsam. Laboriosam ducimus atque architecto.</p>
            <button className="btn">Portfolio</button>
          </div>
        </div>
      </Parallax>
    </CarouselProvider>
  )
}

export default HeroSlider