import { HttpTypes } from "@medusajs/types"

// Single-region setup (no region switching)
export const SINGLE_REGION: HttpTypes.StoreRegion = {
  id: "reg_static_us",
  name: "United States",
  currency_code: "usd",
  tax_code: null as unknown as any,
  automatic_taxes: false as unknown as any,
  // @ts-ignore - storefront code mainly relies on countries[].iso_2/display_name
  countries: [
    {
      id: "cty_us",
      iso_2: "us",
      iso_3: "usa" as any,
      display_name: "United States",
      name: "United States" as any,
      num_code: null as any,
    },
  ],
} as any

// Minimal product/variant shapes used by the UI
export const PRODUCTS: HttpTypes.StoreProduct[] = [
  {
    id: "prod_1",
    title: "Static Hoodie",
    handle: "static-hoodie",
    subtitle: "Cozy and warm",
    description: "A super comfy hoodie for everyday wear.",
    thumbnail:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=640",
    images: [
      {
        id: "img_1",
        url: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=1200",
        created_at: new Date().toISOString() as any,
        updated_at: new Date().toISOString() as any,
        metadata: null as any,
      } as any,
    ],
    created_at: new Date().toISOString() as any,
    updated_at: new Date().toISOString() as any,
    status: "published" as any,
    variants: [
      {
        id: "variant_hoodie_s",
        title: "Small",
        sku: "HOODIE-S",
        options: [] as any,
        calculated_price: {
          calculated_amount: 4900,
          original_amount: 5900,
          currency_code: "usd",
          // nested calculated_price structure is referenced by get-product-price
          calculated_price: {
            price_list_type: "default",
          } as any,
        } as any,
      } as any,
      {
        id: "variant_hoodie_m",
        title: "Medium",
        sku: "HOODIE-M",
        options: [] as any,
        calculated_price: {
          calculated_amount: 4900,
          original_amount: 5900,
          currency_code: "usd",
          calculated_price: {
            price_list_type: "default",
          } as any,
        } as any,
      } as any,
    ],
    tags: [{ id: "tag_1", value: "hoodie" } as any],
    type: null as any,
    metadata: {} as any,
  } as any,
  {
    id: "prod_2",
    title: "Static Tee",
    handle: "static-tee",
    subtitle: "Soft cotton tee",
    description: "A comfy cotton t-shirt.",
    thumbnail:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=640",
    images: [
      {
        id: "img_2",
        url: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=1200",
        created_at: new Date().toISOString() as any,
        updated_at: new Date().toISOString() as any,
        metadata: null as any,
      } as any,
    ],
    created_at: new Date().toISOString() as any,
    updated_at: new Date().toISOString() as any,
    status: "published" as any,
    variants: [
      {
        id: "variant_tee_s",
        title: "Small",
        sku: "TEE-S",
        options: [] as any,
        calculated_price: {
          calculated_amount: 1900,
          original_amount: 2500,
          currency_code: "usd",
          calculated_price: {
            price_list_type: "default",
          } as any,
        } as any,
      } as any,
    ],
    tags: [{ id: "tag_2", value: "tshirt" } as any],
    type: null as any,
    metadata: {} as any,
  } as any,
]

export type MutableCart = HttpTypes.StoreCart & { items: any[] }

export const CART: MutableCart = {
  id: "cart_static",
  email: "",
  items: [],
  region_id: SINGLE_REGION.id,
  shipping_address: null as any,
  billing_address: null as any,
  shipping_methods: [] as any,
  payment_sessions: [] as any,
  completed_at: null as any,
  currency_code: SINGLE_REGION.currency_code,
  // Totals used in UI components; keep simple
  subtotal: 0 as any,
  total: 0 as any,
  item_subtotal: 0 as any,
  created_at: new Date().toISOString() as any,
  updated_at: new Date().toISOString() as any,
} as any

export const SHIPPING_OPTIONS: HttpTypes.StoreCartShippingOption[] = [
  {
    id: "ship_std",
    amount: 500 as any,
    name: "Standard Shipping",
    provider_id: "manual" as any,
    service_zone: null as any,
    data: {} as any,
  } as any,
]

export const PAYMENT_PROVIDERS: HttpTypes.StorePaymentProvider[] = [
  {
    id: "manual",
    is_installed: true as any,
  } as any,
]

export const COLLECTIONS: HttpTypes.StoreCollection[] = [
  {
    id: "col_static",
    title: "Featured",
    handle: "featured",
    created_at: new Date().toISOString() as any,
    updated_at: new Date().toISOString() as any,
    metadata: {} as any,
  } as any,
  {
    id: "col_static_2",
    title: "New Arrivals",
    handle: "new-arrivals",
    created_at: new Date().toISOString() as any,
    updated_at: new Date().toISOString() as any,
    metadata: {} as any,
  } as any,
]

export const CATEGORIES: HttpTypes.StoreProductCategory[] = [
  {
    id: "cat_tops",
    name: "Tops" as any,
    handle: "tops",
    parent_category: null as any,
    category_children: [] as any,
    products: [] as any,
  } as any,
]

export const CUSTOMER: HttpTypes.StoreCustomer = {
  id: "cus_static",
  email: "customer@example.com",
  first_name: "Static",
  last_name: "Customer",
  phone: null as any,
  metadata: {} as any,
  orders: [] as any,
} as any

export const ORDERS: HttpTypes.StoreOrder[] = []

export function recalcCartTotals() {
  const itemsTotal = CART.items.reduce((sum, li: any) => {
    return sum + (li.unit_price || 0) * (li.quantity || 0)
  }, 0)
  ;(CART as any).item_subtotal = itemsTotal
  ;(CART as any).subtotal = itemsTotal
  ;(CART as any).total = itemsTotal + (CART.shipping_methods[0]?.amount || 0)
}


