import React from 'react'

const Video = () => {
  return (
    <video
      className="video slideItem"
      muted
    // poster=""
    >
      <source type="video/mp4" src="" />
      {/* source for WEBM & OGG formats */}

      {/* poster image */}
      {/* <img src="" /> */}
    </video>
  )
}

export default Video
