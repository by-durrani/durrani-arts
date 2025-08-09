// Local mock SDK: replaces Medusa network calls with static data so UI works offline
import { HttpTypes } from "@medusajs/types"
import {
  PRODUCTS,
  SINGLE_REGION,
  CART,
  SHIPPING_OPTIONS,
  PAYMENT_PROVIDERS,
  COLLECTIONS,
  CATEGORIES,
  CUSTOMER,
  ORDERS,
  recalcCartTotals,
} from "./mock-data"

type FetchArgs = {
  method?: string
  query?: Record<string, any>
  body?: any
}

function parseQuery<T = any>(query: Record<string, any> | undefined): T {
  return (query as T) || ({} as T)
}

export const sdk = {
  // Minimal client.fetch shim for places that still call sdk.client.fetch
  client: {
    async fetch<T = any>(path: string, init?: FetchArgs): Promise<T> {
      const url = path.split("?")[0]
      const method = (init?.method || "GET").toUpperCase()
      const q = parseQuery(init?.query)

      // Regions
      if (url.startsWith("/store/regions")) {
        if (method === "GET") {
          if (url === "/store/regions") {
            return { regions: [SINGLE_REGION] } as unknown as T
          }
          const id = url.split("/").pop()
          if (id === SINGLE_REGION.id) {
            return { region: SINGLE_REGION } as unknown as T
          }
          return { region: SINGLE_REGION } as unknown as T
        }
      }

      // Products
      if (url.startsWith("/store/products")) {
        if (method === "GET") {
          const handle = (q as any).handle as string | undefined
          const limit = Number((q as any).limit || 12)
          const offset = Number((q as any).offset || 0)
          let list = PRODUCTS
          if (handle) {
            list = PRODUCTS.filter((p) => p.handle === handle)
          }
          const sliced = list.slice(offset, offset + limit)
          return { products: sliced, count: list.length } as unknown as T
        }
      }

      // Collections
      if (url.startsWith("/store/collections")) {
        if (method === "GET") {
          const handle = (q as any).handle
          if (handle) {
            return { collections: COLLECTIONS.filter((c) => c.handle === handle) } as unknown as T
          }
          return { collections: COLLECTIONS, count: COLLECTIONS.length } as unknown as T
        }
      }

      // Categories
      if (url.startsWith("/store/product-categories")) {
        if (method === "GET") {
          return { product_categories: CATEGORIES } as unknown as T
        }
      }

      // Shipping Options
      if (url.startsWith("/store/shipping-options")) {
        if (method === "GET") {
          return { shipping_options: SHIPPING_OPTIONS } as unknown as T
        }
        if (method === "POST" && url.includes("/calculate")) {
          const id = url.split("/").slice(-2)[0]
          const opt = SHIPPING_OPTIONS.find((s) => s.id === id) || SHIPPING_OPTIONS[0]
          return { shipping_option: opt } as unknown as T
        }
      }

      // Orders
      if (url.startsWith("/store/orders")) {
        if (method === "GET") {
          if (url === "/store/orders") {
            return { orders: ORDERS } as unknown as T
          }
          const id = url.split("/").pop()
          const order = ORDERS.find((o) => o.id === id)
          return { order } as unknown as T
        }
      }

      return {} as T
    },
  },

  // Store namespaces used in the codebase
  store: {
    cart: {
      async create(
        data: { region_id: string },
        _opts?: any,
        _headers?: any
      ): Promise<{ cart: HttpTypes.StoreCart }> {
        (CART as any).region_id = data.region_id
        return { cart: CART }
      },
      async update(
        _cartId: string,
        data: Partial<HttpTypes.StoreUpdateCart>,
        _opts?: any,
        _headers?: any
      ): Promise<{ cart: HttpTypes.StoreCart }> {
        Object.assign(CART, data)
        recalcCartTotals()
        return { cart: CART }
      },
      async createLineItem(
        _cartId: string,
        data: { variant_id: string; quantity: number },
        _opts?: any,
        _headers?: any
      ): Promise<{ cart: HttpTypes.StoreCart }> {
        const variant = PRODUCTS.flatMap((p) => p.variants || []).find(
          (v: any) => v.id === data.variant_id || v.sku === data.variant_id
        ) as any
        const unit_price = variant?.calculated_price?.calculated_amount || 0
        const product = PRODUCTS.find((p) =>
          (p.variants || []).some((v: any) => v.id === variant?.id)
        )
        ;(CART.items as any).push({
          id: `li_${Date.now()}`,
          title: product?.title || "Item",
          thumbnail: product?.thumbnail,
          quantity: data.quantity,
          variant_id: data.variant_id,
          unit_price,
          product,
          variant,
        })
        recalcCartTotals()
        return { cart: CART }
      },
      async updateLineItem(
        _cartId: string,
        lineId: string,
        data: { quantity: number },
        _opts?: any,
        _headers?: any
      ): Promise<{ cart: HttpTypes.StoreCart }> {
        const li = (CART.items as any).find((i: any) => i.id === lineId)
        if (li) li.quantity = data.quantity
        recalcCartTotals()
        return { cart: CART }
      },
      async deleteLineItem(
        _cartId: string,
        lineId: string,
        _headers?: any
      ): Promise<void> {
        (CART.items as any) = (CART.items as any).filter((i: any) => i.id !== lineId)
        recalcCartTotals()
      },
      async addShippingMethod(
        _cartId: string,
        data: { option_id: string },
        _opts?: any,
        _headers?: any
      ): Promise<{ cart: HttpTypes.StoreCart }> {
        const opt = SHIPPING_OPTIONS.find((s) => s.id === data.option_id) || SHIPPING_OPTIONS[0]
        ;(CART.shipping_methods as any) = [
          { id: `sm_${Date.now()}`, option_id: opt.id, amount: opt.amount, name: opt.name },
        ]
        recalcCartTotals()
        return { cart: CART }
      },
      async complete(
        _cartId: string,
        _opts?: any,
        _headers?: any
      ): Promise<{ type: "order"; order: HttpTypes.StoreOrder } | { cart: HttpTypes.StoreCart }> {
        // Convert cart to a basic order-like object
        const order: HttpTypes.StoreOrder = {
          id: `order_${Date.now()}`,
          email: CUSTOMER.email,
          items: (CART.items as any),
          shipping_address: CART.shipping_address as any,
          billing_address: CART.billing_address as any,
          created_at: new Date().toISOString() as any,
          updated_at: new Date().toISOString() as any,
          payment_collections: [] as any,
          totals: {
            total: (CART as any).total,
            subtotal: (CART as any).subtotal,
          } as any,
        } as any
        ORDERS.unshift(order)
        // Reset cart
        ;(CART.items as any) = []
        recalcCartTotals()
        return { type: "order", order } as any
      },
      async transferCart(): Promise<void> {
        // no-op in mock
      },
    },
    payment: {
      async initiatePaymentSession(
        _cart: HttpTypes.StoreCart,
        _data: HttpTypes.StoreInitializePaymentSession,
        _opts?: any,
        _headers?: any
      ) {
        return { payment_session: { id: "ps_mock" } } as any
      },
    },
    customer: {
      async create(body: Partial<HttpTypes.StoreCustomer>) {
        Object.assign(CUSTOMER, body)
        return { customer: CUSTOMER }
      },
      async update(body: Partial<HttpTypes.StoreUpdateCustomer>) {
        Object.assign(CUSTOMER, body)
        return { customer: CUSTOMER }
      },
      async createAddress() {
        return { customer: CUSTOMER }
      },
      async updateAddress() {
        return { customer: CUSTOMER }
      },
      async deleteAddress() {
        return {}
      },
    },
    order: {
      async requestTransfer() {
        return { order: ORDERS[0] }
      },
      async acceptTransfer() {
        return { order: ORDERS[0] }
      },
      async declineTransfer() {
        return { order: ORDERS[0] }
      },
    },
  },

  // Very small auth shim used in signup/login
  auth: {
    async register() {
      return "mock_jwt_token"
    },
    async login() {
      return "mock_jwt_token"
    },
    async logout() {
      return
    },
  },
}

