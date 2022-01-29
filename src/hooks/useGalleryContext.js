import React, { useContext } from 'react'
import { GalleryContext } from '../context/GalleryContext'

export const useGalleryContext = () => {
  const galleryContext = useContext(GalleryContext)
  return galleryContext
}