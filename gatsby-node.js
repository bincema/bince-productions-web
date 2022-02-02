const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const postPages = await graphql(`
    {
      allPrismicBlogPost {
        nodes {
          id
          url
        }
      }
    }
  `)

  postPages.data.allPrismicBlogPost.nodes.forEach((page) => {
    createPage({
      path: page.url,
      component: path.resolve(__dirname, 'src/templates/post.js'),
      context: {
        id: page.id,
      },
    })
  })

  const posts = postPages.data.allPrismicBlogPost.nodes
  // The numPages constant will return the closest number between
  // 3 and the total amount of posts
  const numPages = Math.ceil(posts.length / 3)

  // Create blog listing
  createPage({
    path: '/blog',
    component: path.resolve(__dirname, 'src/templates/blog-listing.js'),
    context: {
      limit: 3,
      skip: 0,
    },
  })

  // Create listing pages
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: `/blog/${i + 1}`,
      component: path.resolve(__dirname, 'src/templates/blog-listing.js'),
      context: {
        limit: 3,
        skip: i * 3,
      },
    })
  })
}