import React from "react"
import { graphql } from 'gatsby'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'

import Layout from "../components/Layout/Layout"
import Seo from "../components/Seo/Seo"
import AccentHeader from '../components/AccentHeader/AccentHeader'
import CollectionNav from '../components/CollectionNav/CollectionNav'
import VideoCollection from '../components/VideoCollection/VideoCollection'
import { GalleryProvider } from "../context/GalleryContext"

const GalleryPage = ({ data }) => {
  const { page_title, page_text, max_columns_count } = data.prismicVideoGallery.data
  const galleryItems = data.allPrismicVideo.nodes

  return (
    <Layout>
      <Seo title="Video" />
      <div className="page no-hero">

        <GalleryProvider items={galleryItems} maxColumns={max_columns_count}>

          {/* Gallery navigation with categories */}
          <section className="content-wrapper">
            <AccentHeader>
              {page_title.text}
            </AccentHeader>
            {/* <CollectionNav
              portfolio={true}
              services={true}
            /> */}
          </section>

          {/* Main gallery collection */}
          <section>
            <VideoCollection />
          </section>

          {/* Page text content */}
          <section className="content-wrapper">
            <div className="page-content" dangerouslySetInnerHTML={{ __html: page_text.html }}></div>
          </section>

        </GalleryProvider>
      </div>
    </Layout>
  )
}

export default withPrismicPreview(GalleryPage)

export const query = graphql`
  query VideoGalleryQuery {
    prismicVideoGallery {
      _previewable
      data {
        max_columns_count
        page_title {
          text
        }
        page_text {
          html
        }
      }
    }
    allPrismicVideo {
      nodes {
        tags
        _previewable
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