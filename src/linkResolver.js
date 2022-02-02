exports.linkResolver = (doc) => {
  // URL for a category type
  if (doc.type === 'gallery_page') {
    return `/${doc.uid}`
  }

  if (doc.type === 'video_gallery') {
    return `/${doc.uid}`
  }

  if (doc.type === 'video') {
    return `/video/${doc.uid}`
  }

  if (doc.type === 'blog_post') {
    return `/blog/${doc.uid}`
  }

  if (doc.type === 'blog_listing') {
    return `/blog`
  }

  // Backup for all other types
  return '/'
}