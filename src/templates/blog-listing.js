import * as React from 'react'
import { graphql } from 'gatsby'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'

import Layout from '../components/Layout/Layout'
import Listing from '../components/Blog/Listing/Listing'

export const query = graphql`
  query MyQuery($limit: Int!, $skip: Int!) {
    prismicBlogListing {
      _previewable
        data {
          page_title {
          text
        }
        page_description {
          html
        }
      }
    }
    allPrismicBlogPost(
      limit: $limit
      skip: $skip
    ) {
      nodes {
        _previewable
        id
        url
        tags
        data {
          featured_image {
            gatsbyImageData
            alt
          }
          page_title {
            text
          }
          text {
            html
          }
        }
      }
      pageInfo {
        currentPage
        pageCount
      }
    }
  }
`

const BlogListingTemplate = ({ data }) => {
  if (!data) return null

  const posts = data.allPrismicBlogPost

  return (
    <Layout>
      <div className="page no-hero">
        <section className="content-wrapper">
          <h1>Blog posts list</h1>
          <Listing posts={posts} />
        </section>
      </div>
    </Layout>
  )
}

export default withPrismicPreview(BlogListingTemplate)