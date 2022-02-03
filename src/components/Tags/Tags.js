import React from 'react'
import './Tags.css'


const Tags = ({ tags, className }) => {
  const mock_tags = ['drone', 'drinks', 'product', 'tag', 'more', 'example']

  return (
    <div className={`tags ${className}`}>
      {tags
        ? tags.map((tag, i) => <span key={i} className="tag" style={{ backgroundImage: `var(--g${i + 1})` }}>{tag}</span>)
        : mock_tags.map((tag, i) => <span key={i} className="tag" style={{ backgroundImage: `var(--g${i + 1})` }}>{tag}</span>)
      }
    </div>
  )
}

export default Tags
