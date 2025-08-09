"use server"

import { HttpTypes } from "@medusajs/types"
import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"
import {
  getAuthHeaders,
  getCacheOptions,
  getCacheTag,
  getCartId,
  removeAuthToken,
  removeCartId,
  setAuthToken,
} from "./cookies"

export const retrieveCustomer =
  async (): Promise<HttpTypes.StoreCustomer | null> => {
    // In mock, return a simple static customer if token exists; otherwise null
    const authHeaders = await getAuthHeaders()
    if (!authHeaders || !("authorization" in authHeaders)) return null
    return {
      id: "cus_static",
      email: "customer@example.com",
      first_name: "Static",
      last_name: "Customer",
      orders: [],
    } as any
  }

export const updateCustomer = async (body: HttpTypes.StoreUpdateCustomer) => {
  const cacheTag = await getCacheTag("customers")
  revalidateTag(cacheTag)
  return {
    id: "cus_static",
    email: body.email || "customer@example.com",
    first_name: body.first_name || "Static",
    last_name: body.last_name || "Customer",
  } as any
}

export async function signup(_currentState: unknown, formData: FormData) {
  const password = formData.get("password") as string
  const customerForm = {
    email: formData.get("email") as string,
    first_name: formData.get("first_name") as string,
    last_name: formData.get("last_name") as string,
    phone: formData.get("phone") as string,
  }

  try {
    await setAuthToken("mock_jwt_token")
    const customerCacheTag = await getCacheTag("customers")
    revalidateTag(customerCacheTag)
    await transferCart()
    return {
      id: "cus_static",
      ...customerForm,
    } as any
  } catch (error: any) {
    return error.toString()
  }
}

export async function login(_currentState: unknown, formData: FormData) {
  const email = formData.get("email") as string
  const password = formData.get("password") as string

  try {
    await setAuthToken("mock_jwt_token")
    const customerCacheTag = await getCacheTag("customers")
    revalidateTag(customerCacheTag)
  } catch (error: any) {
    return error.toString()
  }

  try {
    await transferCart()
  } catch (error: any) {
    return error.toString()
  }
}

export async function signout(countryCode: string) {
  await removeAuthToken()

  const customerCacheTag = await getCacheTag("customers")
  revalidateTag(customerCacheTag)

  await removeCartId()

  const cartCacheTag = await getCacheTag("carts")
  revalidateTag(cartCacheTag)

  redirect(`/${countryCode}/account`)
}

export async function transferCart() {
  const cartId = await getCartId()

  if (!cartId) {
    return
  }
  // no-op for mock

  const cartCacheTag = await getCacheTag("carts")
  revalidateTag(cartCacheTag)
}

export const addCustomerAddress = async (
  currentState: Record<string, unknown>,
  formData: FormData
): Promise<any> => {
  const isDefaultBilling = (currentState.isDefaultBilling as boolean) || false
  const isDefaultShipping = (currentState.isDefaultShipping as boolean) || false

  const address = {
    first_name: formData.get("first_name") as string,
    last_name: formData.get("last_name") as string,
    company: formData.get("company") as string,
    address_1: formData.get("address_1") as string,
    address_2: formData.get("address_2") as string,
    city: formData.get("city") as string,
    postal_code: formData.get("postal_code") as string,
    province: formData.get("province") as string,
    country_code: formData.get("country_code") as string,
    phone: formData.get("phone") as string,
    is_default_billing: isDefaultBilling,
    is_default_shipping: isDefaultShipping,
  }

  const customerCacheTag = await getCacheTag("customers")
  revalidateTag(customerCacheTag)
  return { success: true, error: null }
}

export const deleteCustomerAddress = async (
  addressId: string
): Promise<void> => {
  const customerCacheTag = await getCacheTag("customers")
  revalidateTag(customerCacheTag)
  return { success: true, error: null } as any
}

export const updateCustomerAddress = async (
  currentState: Record<string, unknown>,
  formData: FormData
): Promise<any> => {
  const addressId =
    (currentState.addressId as string) || (formData.get("addressId") as string)

  if (!addressId) {
    return { success: false, error: "Address ID is required" }
  }

  const address = {
    first_name: formData.get("first_name") as string,
    last_name: formData.get("last_name") as string,
    company: formData.get("company") as string,
    address_1: formData.get("address_1") as string,
    address_2: formData.get("address_2") as string,
    city: formData.get("city") as string,
    postal_code: formData.get("postal_code") as string,
    province: formData.get("province") as string,
    country_code: formData.get("country_code") as string,
  } as HttpTypes.StoreUpdateCustomerAddress

  const phone = formData.get("phone") as string

  if (phone) {
    address.phone = phone
  }

  const customerCacheTag = await getCacheTag("customers")
  revalidateTag(customerCacheTag)
  return { success: true, error: null } as any
}
