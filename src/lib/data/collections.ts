"use server"

import { HttpTypes } from "@medusajs/types"
import { COLLECTIONS } from "@lib/mock-data"

export const retrieveCollection = async (id: string) => {
  return COLLECTIONS.find((c) => c.id === id) as HttpTypes.StoreCollection
}

export const listCollections = async (
  queryParams: Record<string, string> = {}
): Promise<{ collections: HttpTypes.StoreCollection[]; count: number }> => {
  queryParams.limit = queryParams.limit || "100"
  queryParams.offset = queryParams.offset || "0"
  return { collections: COLLECTIONS, count: COLLECTIONS.length }
}

export const getCollectionByHandle = async (
  handle: string
): Promise<HttpTypes.StoreCollection> => {
  return (
    COLLECTIONS.find((c) => c.handle === handle) as HttpTypes.StoreCollection
  )
}
