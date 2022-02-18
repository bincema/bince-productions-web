exports.linkResolver = (doc) => {
  // URL for a category type
  if (doc.type === 'photo_gallery_page') {
    return `/${doc.uid}`
  }

  if (doc.type === 'video_gallery_page') {
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

  if (doc.type === 'contact_page') {
    return `/contact`
  }

  // Backup for all other types
  return '/'
}