import React, { useEffect, useState, createContext } from 'react'
import { useURLParamsContext } from '../hooks/useURLParamsContext'
import { useAppContext } from '../hooks/useAppContext'

import { sleep } from '../utils/helpers'

export const CollectionContext = createContext()

export const CollectionProvider = ({ children, items, maxColumns }) => {
  const { params } = useURLParamsContext()
  const { setEnableScroll, setHeaderVisible } = useAppContext()

  // default columnCount to 4 columns if the value is not in range [1..6]
  const maxColumnsCount = maxColumns >= 1 && maxColumns <= 6 ? maxColumns : 1

  const [collectionItems, setCollectionItems] = useState(items)
  const [filteredItems, setFilteredItems] = useState([])
  const [columns, setColumns] = useState(maxColumnsCount)
  const [categories, setCategories] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isSliderMounted, setIsSliderMounted] = useState(false)

  const switchCategory = async category => {
    let filtered
    if (collectionItems[0].tags) {
      filtered = collectionItems.filter(item => item.tags.some(tag => tag === category))
    } else {
      filtered = collectionItems.filter(item => item.category === category)
    }
    await sleep(500)

    setFilteredItems(filtered)
  }

  const resetCollection = () => setFilteredItems(collectionItems)

  const showPortfolio = () => {
    const portfolioItems = collectionItems.filter(item => item.include_in_portfolio === true || item.data.include_in_reels_ === true)
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
    setFilteredItems(collectionItems)
    let categorySet

    if (collectionItems[0].tags) {
      // use tags
      const tagsList = collectionItems.map(item => item.tags).flat()
      categorySet = new Set(tagsList)
    } else {
      // use categories
      const categoryList = collectionItems.map(item => item.category)
      categorySet = new Set(categoryList)
    }

    setCategories([...categorySet].sort())

  }, [])
  useEffect(() => {
    onInitialLoadConfig()
  }, [params])

  return (
    <CollectionContext.Provider value={{
      filteredItems,
      columns,
      categories,
      currentIndex,
      isSliderMounted,
      switchCategory,
      resetCollection,
      showPortfolio,
      setCurrentIndex,
      setIsSliderMounted
    }}>
      {children}
    </CollectionContext.Provider>
  )
}

