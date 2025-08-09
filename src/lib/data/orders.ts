"use server"

import { HttpTypes } from "@medusajs/types"
import { ORDERS } from "@lib/mock-data"

export const retrieveOrder = async (id: string) =>
  ORDERS.find((o) => o.id === id) as HttpTypes.StoreOrder

export const listOrders = async (
  limit: number = 10,
  offset: number = 0
) => ORDERS.slice(offset, offset + limit)

export const createTransferRequest = async (
  state: {
    success: boolean
    error: string | null
    order: HttpTypes.StoreOrder | null
  },
  formData: FormData
): Promise<{
  success: boolean
  error: string | null
  order: HttpTypes.StoreOrder | null
}> => {
  const id = formData.get("order_id") as string

  if (!id) {
    return { success: false, error: "Order ID is required", order: null }
  }

  const order = ORDERS.find((o) => o.id === id) || null
  return { success: !!order, error: order ? null : "Order not found", order }
}

export const acceptTransferRequest = async (id: string, _token: string) => {
  const order = ORDERS.find((o) => o.id === id) || null
  return { success: !!order, error: order ? null : "Order not found", order }
}

export const declineTransferRequest = async (id: string, _token: string) => {
  const order = ORDERS.find((o) => o.id === id) || null
  return { success: !!order, error: order ? null : "Order not found", order }
}
