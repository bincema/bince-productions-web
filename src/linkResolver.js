exports.linkResolver = (doc) => {
  // URL for a category type
  if (doc.type === 'gallery_page') {
    return `/${doc.uid}`
  }

  // // URL for a product type
  // if (doc.type === 'video_page') {
  //   return `/video/${doc.uid}`
  // }

  // Backup for all other types
  return '/'
}