import React from 'react'
import { graphql } from 'gatsby'
import { PrismicRichText } from '@prismicio/react'
import Video from '../components/Video/Video'


export const VideoHighlights = ({ slice }) => {
  console.log(slice)

  return (
    <div className="slice slice-container slice__video-highlights">
      <section className='content-wrapper'>

        <div className="headline">
          <PrismicRichText field={slice.primary.headline.richText} />
        </div>
        <h2 className="title">{slice.primary.title.text}</h2>

        <div className="rich-text-content description">
          <PrismicRichText field={slice.primary.description.richText} />
        </div>

        {slice.items.map((item, i) => (
          <div className="video-wrapper">
            <h3 className="title-secondary">{item.video_title.text}</h3>
            <Video
              key={i}
              className="video"
              id={item.vimeo_id}
              isThumbnail={false}
            />
          </div>
        ))}
      </section>
    </div>
  )
}

export const query = graphql`
  fragment HomepageDataBody1VideoHighlights on PrismicHomepageDataBody1VideoHighlights {
    primary {
      description {
        richText
      }
      headline {
        richText
      }
      title {
        text
      }
    }
    items {
      vimeo_id
      video_title {
        text
      }
    }
  }
`