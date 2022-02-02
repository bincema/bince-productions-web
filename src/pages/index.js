import * as React from "react"
import { graphql } from 'gatsby'
import { ParallaxProvider } from "react-scroll-parallax"
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'

import Layout from "../components/Layout/Layout"
import Seo from "../components/Seo/Seo"
import HeroSlider from '../components/HeroSlider/HeroSlider'
import AccentHeader from '../components/AccentHeader/AccentHeader'

const IndexPage = ({ data }) => {

  return (
    <Layout>
      <Seo title={data.prismicHomepage.data.page_title.text} />
      <ParallaxProvider>
        <HeroSlider sliderData={data.prismicHomepage.data.hero_slider} />
      </ParallaxProvider>
      <div className="page">
        <section className="page-section content-wrapper">

          <AccentHeader>
            {data.prismicHomepage.data.primary_heading.text}
          </AccentHeader>
          <div className="rich-text-content" dangerouslySetInnerHTML={{ __html: data.prismicHomepage.data.text_content.html }}></div>
        </section>
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
      }
    }
  }
`