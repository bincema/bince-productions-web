import React from 'react'
import { Link, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { PrismicRichText } from '@prismicio/react'

export const CallToAction = ({ slice }) => {

  return (
    <div className="slice slice__call-to-action slice-container">
      <section className="content-wrapper">
        <h2 className="title">{slice.primary.title.text}</h2>
        <GatsbyImage
          className="image full-width"
          image={slice.primary.icon_image.gatsbyImageData}
          alt={slice.primary.icon_image.alt}
          objectFit={"CONTAIN"}
        />
        <PrismicRichText field={slice.primary.paragraph.richText} />
        <Link to={slice.primary.button_link.slug} className="btn btn-cta">{slice.primary.button_label}</Link>
      </section>
    </div>
  )
}

export const query = graphql`
  fragment HomepageDataBody1CallToAction on PrismicHomepageDataBody1CallToAction {
    primary {
      button_label
      button_link {
        url
        slug
      }
      icon_image {
        gatsbyImageData
        alt
      }
      paragraph {
        richText
      }
      title {
        text
      }
    }
  }
`