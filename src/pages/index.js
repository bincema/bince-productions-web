import * as React from "react"
import { graphql } from 'gatsby'
import { SliceZone } from "@prismicio/react"
import { ParallaxProvider } from "react-scroll-parallax"
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'
import { components } from '../slices'

import Layout from "../components/Layout/Layout"
import Seo from "../components/Seo/Seo"
import HeroSlider from '../components/HeroSlider/HeroSlider'
import AccentHeader from '../components/AccentHeader/AccentHeader'

const IndexPage = ({ data }) => {
  if (!data) return null
  const doc = data.prismicHomepage.data
  console.log(doc)

  return (
    <Layout>
      <Seo title={doc.page_title.text} />
      <ParallaxProvider>
        <HeroSlider sliderData={doc.hero_slider} buttons={doc.hero_buttons} />
      </ParallaxProvider>
      <div className="page">
        <section className="page-section content-wrapper section">

          <AccentHeader>
            {doc.primary_heading.text}
          </AccentHeader>
          <div id="content" className="rich-text-content text-center" dangerouslySetInnerHTML={{ __html: doc.text_content.html }}></div>
        </section>
        <SliceZone slices={doc.body1} components={components} />
      </div>
    </Layout>
  )
}

export default withPrismicPreview(IndexPage)

export const query = graphql`
  query indexQuery {
    prismicHomepage {
      _previewable
      data {
        page_title {
          text
        }
        primary_heading {
          text
        }
        text_content {
          html
        }
        hero_buttons {
          link {
            url
          }
          label
          variant
        }
        hero_slider {
          content_type
          video_link {
            url
          }
          image {
            alt
            gatsbyImageData
            url
          }
          slide_title {
            text
          }
        }
        body1 {
          ... on PrismicSliceType {
            slice_type
          }
          ...HomepageDataBody1AlternateGrid
          ...HomepageDataBody1CallToAction
          ...HomepageDataBody1CustomerLogos
          ...HomepageDataBody1VideoHighlights
        }
      }
    }
  }
`