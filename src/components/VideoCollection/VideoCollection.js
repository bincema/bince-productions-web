import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import Animated from 'react-mount-animation'
import { useCollectionContext } from '../../hooks/useCollectionContext'

import Video from '../Video/Video'
import { isBrowser } from '../../utils/helpers'
import BinceEmblem from '../../assets/svg/bince-emblem.svg'

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
          <li className="collection__list-item collection__list-item--video" key={i}>
            <Link
              className="collection__list-item-link"
              to={item.url}
            >
              <Video
                className="collection__video"
                id={item.data.vimeo_video_id}
                setVideoLoaded={setVideoLoaded}
              />
              <Loader isLoading={isVideoLoaded} />
              <BinceEmblem className="loader-emblem" style={{ animationDelay: `${i * 250}ms` }} />
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

const Loader = ({ isLoading }) => {
  const [dots, setDots] = useState(0)

  const addDots = () => {
    if (dots < 3) {
      setDots(prev => prev + 1)
    } else {
      setDots(0)
    }
  }

  useEffect(() => {
    console.log('effect')
    if (!isBrowser) return
    const interval = window.setTimeout(() => {
      addDots()
    }, 500)

    return () => window.clearTimeout(interval)
  })

  return (
    <Animated.div
      show={!isLoading}
      className={`loader`}
      unmountAnim={`
        0 % { opacity: 1 }
        100 % { opacity: 0 }
      `}
    >
      Loading Video{Array(dots).fill('.').map(dot => (
        <span className="loader-dot">.</span>
      ))}
    </Animated.div>
  )
}