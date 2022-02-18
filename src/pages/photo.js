import React from "react"
import { graphql } from 'gatsby'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'

import Layout from "../components/Layout/Layout"
import Seo from "../components/Seo/Seo"
import AccentHeader from '../components/AccentHeader/AccentHeader'
import CollectionNav from '../components/CollectionNav/CollectionNav'
import PhotoCollection from '../components/PhotoCollection/PhotoCollection'
import { CollectionProvider } from "../context/CollectionContext"
import { PrismicRichText } from "@prismicio/react"

const PhotoGalleryPage = ({ data }) => {
  const { gallery, page_title, page_text, max_columns_count } = data.prismicPhotoGalleryPage.data

  return (
    <Layout>
      <Seo title="Photo" />
      <div className="page no-hero">

        <CollectionProvider items={gallery} maxColumns={max_columns_count}>

          {/* Gallery navigation with categories */}
          <section className="content-wrapper">
            <AccentHeader>
              {page_title.text}
            </AccentHeader>
            <CollectionNav
              portfolio={true}
              services={true}
            />
          </section>

          {/* Main gallery collection */}
          <section>
            <PhotoCollection />
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

export default withPrismicPreview(PhotoGalleryPage)

export const query = graphql`
  query GalleryQuery {
    prismicPhotoGalleryPage {
      _previewable
      id
      data {
        page_title {
          text
        }
        page_text {
          richText
        }
        max_columns_count
        gallery {
          include_in_portfolio
          category
          image_title { 
            text 
          }
          gallery_image {
            gatsbyImageData
            thumbnails {
              thumbnail {
                gatsbyImageData (
                  width: 1000
                  placeholder: BLURRED
                )
              }
            }
          }
        }
      }
      uid
      type
      url
      prismicId
    }
  }
`