import { useContext } from 'react'
import { CollectionContext } from '../context/CollectionContext'

export const useCollectionContext = () => {
  const collectionContext = useContext(CollectionContext)
  return collectionContext
}