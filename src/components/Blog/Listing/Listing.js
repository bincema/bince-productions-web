import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import Tags from '../../Tags/Tags';

import './Listing.css';

const Listing = ({ posts }) => {

  return (
    <ul className="blog-listing">

      {posts.nodes.map((post, i) => {
        const { page_title, text, featured_image } = post.data

        return (
          <li key={i} className="blog-listing-item">
            {/* featured image */}
            <GatsbyImage
              image={featured_image.gatsbyImageData}
              alt={featured_image.alt}
              className="post-thumbnail" />

            {/* title */}
            <h3 className="post-title">
              {page_title.text}
            </h3>

            {/* tags */}
            <Tags tags={post.tags} />

            {/* link */}
            <a href={post.url} className="link post-url">Read more</a>

            {/* preview text */}
          </li>
        )
      })}
    </ul>
  )
}

export default Listing
