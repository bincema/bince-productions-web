import React, { useState, useEffect } from 'react'
import './Video.css'
import Vimeo from '@u-wave/react-vimeo'

const Video = ({ className, embedLink, id, setVideoLoaded, isThumbnail, autoplay }) => {

  const videoLink = embedLink !== '' ? embedLink : `https://player.vimeo.com/video/${id}`

  const [isLoaded, setLoaded] = useState(false)
  const [isPlaying, setPlaying] = useState(false)

  useEffect(() => {
    if (!isLoaded && !isPlaying) return

    setVideoLoaded(true)
  }, [isLoaded, isPlaying])

  return (
    <Vimeo
      className={className}
      video={videoLink}
      autoplay={autoplay}
      width="100%"
      height="100%"
      controls={!isThumbnail || autoplay}
      muted={isThumbnail || autoplay}
      background={isThumbnail || autoplay}
      responsive
      showTitle={false}
      showByline={false}
      loop
      onLoaded={() => setLoaded(true)}
      onPlay={() => setPlaying(true)}
    />
  )
}

export default Video

Video.defaultProps = {
  embedLink: '',
  id: '',
  setVideoLoaded: () => { },
  autoplay: false
}