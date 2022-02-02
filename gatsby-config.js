require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Bince Productions`,
    description: `Best videographer in UK`,
    author: `@jamborski-dev`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-prismic-previews',
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
      },
    },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
        linkResolver: require('./src/linkResolver').linkResolver,
        schemas: {
          "homepage": require('./custom_types/homepage.json'),
          "primary_navigation": require('./custom_types/primary_navigation.json'),
          "gallery_page": require('./custom_types/gallery_page.json'),
          "single_work_page": require('./custom_types/single_work_page.json'),
          "blog_listing": require('./custom_types/blog_listing.json'),
          "blog_post": require('./custom_types/blog_post.json'),
          "video_gallery": require('./custom_types/video_gallery.json'),
          "video": require('./custom_types/video.json'),
        }
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: [
            'Montserrat:ital,wght@0,200;0,500;0,700;1,500',
            'Oswald:ital,wght@0,200;0,500;0,700;1,500',
          ]
        }
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-styled-components`,
    // {
    //   resolve: "gatsby-plugin-transition-link",
    //   // options: {
    //   //   layout: require.resolve(`./src/components/Layout.js`)
    //   // }
    // },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/ // See below to configure properly
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `gallery`,
        path: `${__dirname}/static/gallery`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/svg/bince-emblem.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
