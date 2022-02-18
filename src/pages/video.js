import React from "react"
import { graphql } from 'gatsby'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'
import { PrismicRichText } from "@prismicio/react"

import Layout from "../components/Layout/Layout"
import Seo from "../components/Seo/Seo"
import AccentHeader from '../components/AccentHeader/AccentHeader'
import CollectionNav from '../components/CollectionNav/CollectionNav'
import VideoCollection from '../components/VideoCollection/VideoCollection'

import { CollectionProvider } from "../context/CollectionContext"


const VideoGalleryPage = ({ data }) => {
  const { page_title, page_text, max_columns_count } = data.prismicVideoGalleryPage.data
  const collectionItems = data.allPrismicVideo.nodes

  return (
    <Layout>
      <Seo title="Video" />
      <div className="page no-hero">

        <CollectionProvider items={collectionItems} maxColumns={max_columns_count}>

          {/* Gallery navigation with categories */}
          <section className="content-wrapper">
            <AccentHeader>
              {page_title.text}
            </AccentHeader>
            <CollectionNav
              portfolio={true}
              services={true}
              portfolioLabel="Reels"
            />
          </section>

          {/* Main gallery collection */}
          <section>
            <VideoCollection />
          </section>

          {/* Page text content */}
          <section className="content-wrapper section rich-text-content text-center">
            <PrismicRichText field={page_text.richText} />
          </section>

        </CollectionProvider>
      </div>
    </Layout>
  )
}

export default withPrismicPreview(VideoGalleryPage)

export const query = graphql`
  query VideoGalleryQuery {
    prismicVideoGalleryPage {
      _previewable
      data {
        max_columns_count
        page_title {
          text
        }
        page_text {
          richText
        }
      }
    }
    allPrismicVideo {
      nodes {
        tags
        _previewable
        url
        data {
          category
          description {
            html
          }
          include_in_reels_
          vimeo_video_id
          title {
            text
          }
        }
      }
    }
  }
`