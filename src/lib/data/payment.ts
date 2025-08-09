"use server"

import { HttpTypes } from "@medusajs/types"
import { PAYMENT_PROVIDERS } from "@lib/mock-data"

export const listCartPaymentMethods = async (regionId: string) => {
  return PAYMENT_PROVIDERS.sort((a, b) => (a.id > b.id ? 1 : -1))
}
