import { HttpTypes } from "@medusajs/types"
import { CATEGORIES } from "@lib/mock-data"

export const listCategories = async (query?: Record<string, any>) => {
  const limit = query?.limit || 100
  return CATEGORIES.slice(0, limit)
}

export const getCategoryByHandle = async (categoryHandle: string[]) => {
  const handle = `${categoryHandle.join("/")}`

  return (
    CATEGORIES.find((c) => c.handle === handle) as HttpTypes.StoreProductCategory
  )
}
