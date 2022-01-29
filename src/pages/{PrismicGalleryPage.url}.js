import React, { useEffect, useState } from "react"
import { graphql } from 'gatsby'

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import AccentHeader from '../components/AccentHeader/AccentHeader'
import GalleryNav from '../components/GalleryNav/GalleryNav'
import GalleryCollection from '../components/GalleryCollection/GalleryCollection'
import { GalleryProvider } from "../context/GalleryContext"

const { log, error } = console

const GalleryPage = ({ data }) => {
  const { gallery, page_title, page_text, max_columns_count } = data.prismicGalleryPage.data

  return (
    <Layout>
      <Seo title="Gallery Page" />
      <div className="page no-hero">

        <GalleryProvider items={gallery} maxColumns={max_columns_count}>

          {/* Gallery navigation with categories */}
          <section className="content-wrapper">
            <AccentHeader>
              {page_title.text}
            </AccentHeader>
            <GalleryNav
              portfolio={true}
              services={true}
            />
          </section>

          {/* Main gallery collection */}
          <section>
            <GalleryCollection />
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

export default GalleryPage

export const query = graphql`
  query GalleryQuery($id: String) {
    prismicGalleryPage(id: { eq: $id }) {
      id
      data {
        page_title {
          text
        }
        page_text {
          html
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