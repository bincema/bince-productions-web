import React, { useState } from 'react'
import { Link } from 'gatsby'
import { useCollectionContext } from '../../hooks/useCollectionContext'

import Video from '../Video/Video'
import BinceEmblem from '../../assets/svg/bince-emblem.svg'
import Loader from '../Loader/Loader'

import '../PhotoCollection/PhotoCollection.css'
import './VideoCollection.css'

const PhotoCollection = () => {
  const { filteredItems: collectionItems, columns } = useCollectionContext()
  const [isVideoLoaded, setVideoLoaded] = useState(false)

  if (!collectionItems) return

  return (
    <div className="collection">
      <ul className={`collection__list columns-${columns}`}>
        {collectionItems && collectionItems.map((item, i) => (
          <li className="collection__list-item video-container" key={i}>
            <Link
              className="collection__list-item-link"
              to={item.url}
            >
              <Video
                className="collection__video"
                id={item.data.vimeo_video_id}
                setVideoLoaded={setVideoLoaded}
                isThumbnail={true}
                autoplay
              />
              <Loader isLoading={isVideoLoaded} />
              <BinceEmblem className="loader-emblem" style={{
                animationDelay: `${i * 250}ms`,
                display: isVideoLoaded ? `none` : ``
              }} />
              {isVideoLoaded && (
                <>
                  <div className="collection__list-item-overlay"></div>
                  <span className="collection__list-item-title">{item.data.title.text}</span>
                </>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PhotoCollection