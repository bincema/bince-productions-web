import React, { useEffect, useState, createContext } from 'react'
import { useURLParamsContext } from '../hooks/useURLParamsContext'
import { useAppContext } from '../hooks/useAppContext'

import { sleep } from '../utils/helpers'

export const GalleryContext = createContext()

export const GalleryProvider = ({ children, items, maxColumns }) => {
  const { params } = useURLParamsContext()
  const { setEnableScroll, setHeaderVisible } = useAppContext()

  // default columnCount to 4 columns if the value is not in range [1..6]
  const maxColumnsCount = maxColumns >= 1 && maxColumns <= 6 ? maxColumns : 1

  const [galleryItems, setGalleryItems] = useState(items)
  const [filteredItems, setFilteredItems] = useState([])
  const [columns, setColumns] = useState(maxColumnsCount)
  const [categories, setCategories] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isSliderMounted, setIsSliderMounted] = useState(false)

  const switchCategory = async category => {
    const filtered = galleryItems.filter(item => item.category === category)
    await sleep(500)
    setFilteredItems(filtered)
  }

  const resetGallery = () => setFilteredItems(galleryItems)

  const showPortfolio = () => {
    const portfolioItems = galleryItems.filter(item => item.include_in_portfolio === true)
    setFilteredItems(portfolioItems)
  }

  const onInitialLoadConfig = async () => {
    if (!params) return
    if (params.category) {
      if (params.category === "portfolio") showPortfolio()
      else {
        await sleep(500)
        switchCategory(params.category)
      }
    }

    if (params.index) {
      if (params.index === "portfolio") showPortfolio()
      else {
        await sleep(500)
        setCurrentIndex(params.index)
        setIsSliderMounted(true)
        setEnableScroll(false)
        setHeaderVisible(false)
      }
    }
  }

  useEffect(() => {
    setFilteredItems(galleryItems)
    const categoryList = galleryItems.map(item => item.category)
    const categorySet = new Set(categoryList)
    setCategories([...categorySet].sort())

  }, [])
  useEffect(() => {
    onInitialLoadConfig()
  }, [params])

  return (
    <GalleryContext.Provider value={{
      filteredItems,
      columns,
      categories,
      switchCategory,
      resetGallery,
      showPortfolio,
      currentIndex,
      setCurrentIndex,
      isSliderMounted,
      setIsSliderMounted
    }}>
      {children}
    </GalleryContext.Provider>
  )
}

