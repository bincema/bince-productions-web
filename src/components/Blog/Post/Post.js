import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import './Post.css';
import Tags from '../../Tags/Tags';

const Post = ({ post }) => {
  console.log(post)

  const { featured_image, page_title, text } = post.data
  const { tags } = post

  const image = getImage(featured_image)

  return (
    <article className="post">
      <div className="featured-image">
        <GatsbyImage image={image} />
      </div>
      <h1 className="title">{page_title.text}</h1>
      <Tags tags={tags} />
      <div className="post-content" dangerouslySetInnerHTML={{ __html: text.html }}></div>

    </article>
  )
}

export default Post
