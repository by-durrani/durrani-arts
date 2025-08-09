"use server"

import { HttpTypes } from "@medusajs/types"
import { SHIPPING_OPTIONS } from "@lib/mock-data"

export const listCartShippingMethods = async (cartId: string) => {
  return SHIPPING_OPTIONS
}

export const calculatePriceForShippingOption = async (
  optionId: string,
  cartId: string,
  data?: Record<string, unknown>
) => {
  return SHIPPING_OPTIONS.find((o) => o.id === optionId) || SHIPPING_OPTIONS[0]
}
