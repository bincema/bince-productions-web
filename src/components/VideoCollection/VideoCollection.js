import React from 'react'
import '../PhotoCollection/PhotoCollection.css'
import './VideoCollection.css'

import Video from '../Video/Video'
import { useGalleryContext } from '../../hooks/useGalleryContext'

const PhotoCollection = () => {
  const { filteredItems: galleryItems, columns } = useGalleryContext()

  if (!galleryItems) return

  console.log(galleryItems)
  return (
    <div className="collection">
      <ul className={`collection__list columns-${columns}`}>
        {galleryItems && galleryItems.map((item, i) => (
          <li className="collection__list-item collection__list-item--video" key={i}>
            <Video className="collection__video" id={item.data.vimeo_video_id} />
            <div className="collection__list-item-overlay"></div>
            <span className="collection__list-item-title">{item.data.title.text}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PhotoCollection