import React, { useState } from "react"
import { graphql } from 'gatsby'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'

import Layout from "../components/Layout/Layout"
import Seo from "../components/Seo/Seo"
import AccentHeader from '../components/AccentHeader/AccentHeader'
import Video from '../components/Video/Video'
import Tags from '../components/Tags/Tags'
import Loader from '../components/Loader/Loader'
import BinceEmblem from '../assets/svg/bince-emblem.svg'
import Pagination from '../components/Pagination/Pagination'

const { log, error } = console

const VideoPage = ({ data }) => {
  const { title, description, vimeo_video_id, date } = data.prismicVideo.data
  const { tags, id: currentNodeId } = data.prismicVideo

  const currentNode = data.allPrismicVideo.edges.find(item => item.node.id === currentNodeId)
  const { next, previous } = currentNode



  const [isVideoLoaded, setVideoLoaded] = useState(false)

  return (
    <Layout>
      <Seo title={title.text} />
      <article className="page no-hero">

        <section className="content-wrapper">
          <AccentHeader>
            <span className="video-date">{date}</span> {title.text}
          </AccentHeader>

          <Tags className="video-tags" tags={tags} />

        </section>

        {/* Video */}
        <section>
          <div className="video-container">
            <Loader isLoading={isVideoLoaded} />
            <BinceEmblem className="loader-emblem" style={{
              display: isVideoLoaded ? `none` : ``
            }} />
            <Video
              className=""
              id={vimeo_video_id}
              isThumbnail={false}
              setVideoLoaded={setVideoLoaded}
            />
          </div>
        </section>

        <section className="content-wrapper section__video-descritpion">
          <h2>Video description</h2>
          <div dangerouslySetInnerHTML={{ __html: description.html }}></div>
        </section>

        <Pagination next={next} prev={previous} />

      </article>
    </Layout>
  )
}

export default withPrismicPreview(VideoPage)

export const query = graphql`
  query VideoQuery($id: String) {
      allPrismicVideo {
      edges {
        node {
          id
        }
        next {
          url
          data {
            title {
              text
            }
            date
          }
          tags
        }
        previous {
          url
          data {
            title {
              text
            }
          }
          tags
        }
      }
    }
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
        date
      }      
      url
      tags
      prismicId
    }
  }
`