import * as React from 'react'
import { Link } from 'gatsby'
import { PrismicProvider } from '@prismicio/react'
import { AppProvider } from './src/context/AppContext'
import { URLParamsProvider } from './src/context/URLParamsContext'

export const wrapRootElement = ({ element }) => (
  <URLParamsProvider>
    <AppProvider>
      <PrismicProvider
        internalLinkComponent={({ href, ...props }) => (
          <Link to={href} {...props} />
        )}
      >
        {element}
      </PrismicProvider>
    </AppProvider>
  </URLParamsProvider>
)