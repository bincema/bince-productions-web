import * as React from 'react'
import { Link } from 'gatsby'
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreviewProvider, componentResolverFromMap } from 'gatsby-plugin-prismic-previews'
import { AppProvider } from './src/context/AppContext'
import { URLParamsProvider } from './src/context/URLParamsContext'

import IndexTemplate from './src/pages/index'
import GalleryTemplate from './src/pages/photo'
import VideoGalleryTemplate from './src/pages/video'
import VideoTemplate from './src/pages/{PrismicVideo.url}'
import { linkResolver } from './src/linkResolver'

export const wrapRootElement = ({ element }) => (
  <URLParamsProvider>
    <AppProvider>
      <PrismicProvider
        internalLinkComponent={({ href, ...props }) => (
          <Link to={href} {...props} />
        )}
      >
        <PrismicPreviewProvider
          repositoryConfigs={[
            {
              repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
              linkResolver,
              componentResolver: componentResolverFromMap({
                "homepage": IndexTemplate,
                "gallery_page": GalleryTemplate,
                // "video": VideoTemplate,
                "video_gallery": VideoGalleryTemplate,
              }),
            },
          ]}
        >
          {element}
        </PrismicPreviewProvider>
      </PrismicProvider>
    </AppProvider>
  </URLParamsProvider>
)