import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'

import Layout from '../components/Layout/Layout'
import Post from '../components/Blog/Post/Post'

export const query = graphql`
  query BlogPostQuery($id: String) {
    prismicBlogPost(id: { eq: $id }) {
      _previewable
      id
      uid
      type
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
  }
`

const PostTemplate = ({ data }) => {
  if (!data) return null

  const post = data.prismicBlogPost

  return (
    <Layout>
      <div className="page no-hero">
        <div className="back">
          <Link to="/blog">back to list</Link>
        </div>
        <Post post={post} />
      </div>
      {/* next/prev post  */}
    </Layout>
  )
}
export default withPrismicPreview(PostTemplate)