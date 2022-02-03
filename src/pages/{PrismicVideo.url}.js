import React from "react"
import { graphql } from 'gatsby'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'

import Layout from "../components/Layout/Layout"
import Seo from "../components/Seo/Seo"
import AccentHeader from '../components/AccentHeader/AccentHeader'
import Video from '../components/Video/Video'

const { log, error } = console

const VideoPage = ({ data }) => {
  const { title, description, vimeo_video_id } = data.prismicVideo.data

  return (
    <Layout>
      <Seo title="Single Video Page" />
      <div className="page no-hero">

        <section className="content-wrapper">
          <AccentHeader>
            {title.text}
          </AccentHeader>
        </section>

        {/* Video */}
        <section>
          <Video className="vimeo-embed-player" id={vimeo_video_id} />
        </section>

      </div>
    </Layout>
  )
}

export default withPrismicPreview(VideoPage)

export const query = graphql`
  query VideoQuery($id: String) {
    prismicVideo(id: { eq: $id }) {
      _previewable
      id
      data {
        title {
          text
        }
        description {
          html
        }
        vimeo_video_id
      }      
      url
      tags
      prismicId
    }
  }
`