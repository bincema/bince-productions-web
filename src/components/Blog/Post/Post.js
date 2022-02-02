import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

import './Post.css';

const Post = ({ post }) => {
  console.log(post)

  return (
    <article className="post">
      blog post
    </article>
  )
}

export default Post
