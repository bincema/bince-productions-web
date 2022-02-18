import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { PrismicRichText } from '@prismicio/react'

export const AlternateGrid = ({ slice }) => {
  console.log(slice)

  const { primary, items } = slice

  return (
    <div className="slice slice-container slice__alternate-grid">
      <section className="content-wrapper">
        <div className="headline">
          <PrismicRichText field={primary.headline.richText} />
        </div>
        <h2 className="title">{primary.title.text}</h2>

        <div className="rich-text-content description">
          <PrismicRichText field={primary.description.richText} />
        </div>

        <div className={`grid-section image-${primary.image_side}`}>
          {primary.optional_image.gatsbyImageData &&
            <GatsbyImage
              className="image full-width"
              image={primary.optional_image.gatsbyImageData}
              alt={primary.optional_image.alt || ''}
              objectFit={"CONTAIN"}
              objectPosition={"0% 50%"}
            />
          }
          <div className="grid">
            {items.map((item, i) => (
              <div key={i} className="grid-item">
                {item.optional_icon.gatsbyImageData &&
                  <GatsbyImage
                    className="grid-icon"
                    image={item.optional_icon.gatsbyImageData}
                    alt={item.optional_icon.alt || ''}
                    objectFit={"CONTAIN"}
                  />
                }
                <div className='rich-text-content'>
                  <PrismicRichText field={item.description.richText} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export const query = graphql`
  fragment HomepageDataBody1AlternateGrid on PrismicHomepageDataBody1AlternateGrid {
    items {
      description {
        richText
      }
      optional_icon {
        gatsbyImageData
        alt
      }
    }
    primary {
      headline {
        richText
      }
      description {
        richText
      }
      image_side
      optional_image {
        alt
        gatsbyImageData
      }
      title {
        text
      }
    }
  }
`