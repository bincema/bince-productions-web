import React from 'react'
import './Video.css'
import Vimeo from '@u-wave/react-vimeo'

const Video = ({ className, embedLink, id, setVideoLoaded }) => {

  const videoLink = embedLink !== '' ? embedLink : `https://player.vimeo.com/video/${id}`

  return (
    <Vimeo
      className={className}
      video={videoLink}
      autoplay
      width="100%"
      height="100%"
      controls={false}
      muted
      background
      responsive
      showTitle={false}
      showByline={false}
      loop
      onLoaded={() => setVideoLoaded(true)}
    />
  )
}

export default Video

Video.defaultProps = {
  embedLink: '',
  id: '',
  setVideoLoaded: () => { }
}