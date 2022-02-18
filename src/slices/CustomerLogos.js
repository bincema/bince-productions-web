import React from 'react'
import { Link, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { PrismicRichText } from '@prismicio/react'

export const CustomerLogos = ({ slice }) => {
  console.log(slice)

  const LOGO_PER_ROW = slice.primary.logo_per_row;

  return (
    <div className="slice slice-container slice__customer-logos">
      <section className="content-wrapper">

        <div className="headline">
          <PrismicRichText field={slice.primary.headline.richText} />
        </div>

        <div className="flex">
          {slice.items.map((item, i) => {
            if (item.link.url !== '') return (
              <a
                key={i}
                className="flex-item"
                style={{ width: `${100 / LOGO_PER_ROW}%` }}
              >
                <GatsbyImage
                  className="logo"
                  image={item.logo.gatsbyImageData}
                  objectFit={"CONTAIN"}
                  alt={item.logo.alt}
                />
              </a>
            )

            return (
              <div
                key={i}
                className="flex-item"
                style={{ width: `${100 / LOGO_PER_ROW}%` }}
              >
                <GatsbyImage
                  className="logo"
                  image={item.logo.gatsbyImageData}
                  objectFit={"CONTAIN"}
                  alt={item.logo.alt}
                />
              </div>
            )
          })}
        </div>

        <Link
          to={slice.primary.call_to_action_link.url}
          className="btn btn-cta link">
          {slice.primary.call_to_action_text.text}
        </Link>

      </section>
    </div>
  )
}

export const query = graphql`
  fragment HomepageDataBody1CustomerLogos on PrismicHomepageDataBody1CustomerLogos {
    items {
      link {
        url
      }
      logo {
        alt
        gatsbyImageData
      }
    }
    primary {
      logo_per_row
      call_to_action_link {
        url
      }
      call_to_action_text {
        text
      }
      headline {
        richText
      }
    }
  }
`