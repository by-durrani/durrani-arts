"use server";

import { HttpTypes } from "@medusajs/types";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import {
  getAuthHeaders,
  getCacheOptions,
  getCacheTag,
  getCartId,
  removeCartId,
  setCartId,
} from "./cookies";
import { getRegion } from "./regions";
import { CART, SHIPPING_OPTIONS } from "@lib/mock-data";
import medusaError from "@lib/util/medusa-error";

/**
 * Retrieves a cart by its ID. If no ID is provided, it will use the cart ID from the cookies.
 * @param cartId - optional - The ID of the cart to retrieve.
 * @returns The cart object if found, or null if not found.
 */
export async function retrieveCart(cartId?: string) {
  const id = cartId || (await getCartId());

  if (!id) {
    return null;
  }

  // In mock, always return the static cart if IDs match or cookie exists
  return CART;
}

export async function getOrSetCart(countryCode: string) {
  const region = await getRegion(countryCode);

  if (!region) {
    throw new Error(`Region not found for country code: ${countryCode}`);
  }

  let cart = await retrieveCart();

  if (!cart) {
    // initialize mock cart region
    (CART as any).region_id = region.id;
    cart = CART;
    await setCartId(cart.id);
    const cartCacheTag = await getCacheTag("carts");
    revalidateTag(cartCacheTag);
  }

  if (cart && cart?.region_id !== region.id) {
    (CART as any).region_id = region.id;
    const cartCacheTag = await getCacheTag("carts");
    revalidateTag(cartCacheTag);
  }

  return cart;
}

export async function updateCart(data: HttpTypes.StoreUpdateCart) {
  const cartId = await getCartId();

  if (!cartId) {
    throw new Error(
      "No existing cart found, please create one before updating"
    );
  }

  return Promise.resolve({ cart: Object.assign(CART as any, data) })
    .then(async ({ cart }) => {
      const cartCacheTag = await getCacheTag("carts");
      revalidateTag(cartCacheTag);

      const fulfillmentCacheTag = await getCacheTag("fulfillment");
      revalidateTag(fulfillmentCacheTag);

      return cart;
    })
    .catch(medusaError);
}

export async function addToCart({
  variantId,
  quantity,
  countryCode,
}: {
  variantId: string;
  quantity: number;
  countryCode: string;
}) {
  if (!variantId) {
    throw new Error("Missing variant ID when adding to cart");
  }

  const cart = await getOrSetCart(countryCode);

  if (!cart) {
    throw new Error("Error retrieving or creating cart");
  }

  // push simple line item into mock cart
  (CART.items as any)
    .push({
      id: `li_${Date.now()}`,
      variant_id: variantId,
      quantity,
      unit_price: 1000,
    })
    .then(async () => {
      const cartCacheTag = await getCacheTag("carts");
      revalidateTag(cartCacheTag);

      const fulfillmentCacheTag = await getCacheTag("fulfillment");
      revalidateTag(fulfillmentCacheTag);
    })
    .catch(medusaError);
}

export async function updateLineItem({
  lineId,
  quantity,
}: {
  lineId: string;
  quantity: number;
}) {
  if (!lineId) {
    throw new Error("Missing lineItem ID when updating line item");
  }

  const cartId = await getCartId();

  if (!cartId) {
    throw new Error("Missing cart ID when updating line item");
  }

  const li = (CART.items as any).find((i: any) => i.id === lineId);
  if (li)
    li.quantity = quantity
      .then(async () => {
        const cartCacheTag = await getCacheTag("carts");
        revalidateTag(cartCacheTag);

        const fulfillmentCacheTag = await getCacheTag("fulfillment");
        revalidateTag(fulfillmentCacheTag);
      })
      .catch(medusaError);
}

export async function deleteLineItem(lineId: string) {
  if (!lineId) {
    throw new Error("Missing lineItem ID when deleting line item");
  }

  const cartId = await getCartId();

  if (!cartId) {
    throw new Error("Missing cart ID when deleting line item");
  }

  (CART.items as any) = (CART.items as any)
    .filter((i: any) => i.id !== lineId)
    .then(async () => {
      const cartCacheTag = await getCacheTag("carts");
      revalidateTag(cartCacheTag);

      const fulfillmentCacheTag = await getCacheTag("fulfillment");
      revalidateTag(fulfillmentCacheTag);
    })
    .catch(medusaError);
}

export async function setShippingMethod({
  cartId,
  shippingMethodId,
}: {
  cartId: string;
  shippingMethodId: string;
}) {
  const opt =
    SHIPPING_OPTIONS.find((s) => s.id === shippingMethodId) ||
    SHIPPING_OPTIONS[0];
  (CART.shipping_methods as any) = [
    {
      id: `sm_${Date.now()}`,
      option_id: opt.id,
      name: opt.name,
      amount: opt.amount,
    },
  ];
  return Promise.resolve({ cart: CART })
    .then(async () => {
      const cartCacheTag = await getCacheTag("carts");
      revalidateTag(cartCacheTag);
    })
    .catch(medusaError);
}

export async function initiatePaymentSession(
  cart: HttpTypes.StoreCart,
  data: HttpTypes.StoreInitializePaymentSession
) {
  return Promise.resolve({})
    .then(async (resp) => {
      const cartCacheTag = await getCacheTag("carts");
      revalidateTag(cartCacheTag);
      return resp;
    })
    .catch(medusaError);
}

export async function applyPromotions(codes: string[]) {
  const cartId = await getCartId();

  if (!cartId) {
    throw new Error("No existing cart found");
  }

  const headers = {
    ...(await getAuthHeaders()),
  };

  return sdk.store.cart
    .update(cartId, { promo_codes: codes }, {}, headers)
    .then(async () => {
      const cartCacheTag = await getCacheTag("carts");
      revalidateTag(cartCacheTag);

      const fulfillmentCacheTag = await getCacheTag("fulfillment");
      revalidateTag(fulfillmentCacheTag);
    })
    .catch(medusaError);
}

export async function applyGiftCard(code: string) {
  //   const cartId = getCartId()
  //   if (!cartId) return "No cartId cookie found"
  //   try {
  //     await updateCart(cartId, { gift_cards: [{ code }] }).then(() => {
  //       revalidateTag("cart")
  //     })
  //   } catch (error: any) {
  //     throw error
  //   }
}

export async function removeDiscount(code: string) {
  // const cartId = getCartId()
  // if (!cartId) return "No cartId cookie found"
  // try {
  //   await deleteDiscount(cartId, code)
  //   revalidateTag("cart")
  // } catch (error: any) {
  //   throw error
  // }
}

export async function removeGiftCard(
  codeToRemove: string,
  giftCards: any[]
  // giftCards: GiftCard[]
) {
  //   const cartId = getCartId()
  //   if (!cartId) return "No cartId cookie found"
  //   try {
  //     await updateCart(cartId, {
  //       gift_cards: [...giftCards]
  //         .filter((gc) => gc.code !== codeToRemove)
  //         .map((gc) => ({ code: gc.code })),
  //     }).then(() => {
  //       revalidateTag("cart")
  //     })
  //   } catch (error: any) {
  //     throw error
  //   }
}

export async function submitPromotionForm(
  currentState: unknown,
  formData: FormData
) {
  const code = formData.get("code") as string;
  try {
    await applyPromotions([code]);
  } catch (e: any) {
    return e.message;
  }
}

// TODO: Pass a POJO instead of a form entity here
export async function setAddresses(currentState: unknown, formData: FormData) {
  try {
    if (!formData) {
      throw new Error("No form data found when setting addresses");
    }
    const cartId = getCartId();
    if (!cartId) {
      throw new Error("No existing cart found when setting addresses");
    }

    const data = {
      shipping_address: {
        first_name: formData.get("shipping_address.first_name"),
        last_name: formData.get("shipping_address.last_name"),
        address_1: formData.get("shipping_address.address_1"),
        address_2: "",
        company: formData.get("shipping_address.company"),
        postal_code: formData.get("shipping_address.postal_code"),
        city: formData.get("shipping_address.city"),
        country_code: formData.get("shipping_address.country_code"),
        province: formData.get("shipping_address.province"),
        phone: formData.get("shipping_address.phone"),
      },
      email: formData.get("email"),
    } as any;

    const sameAsBilling = formData.get("same_as_billing");
    if (sameAsBilling === "on") data.billing_address = data.shipping_address;

    if (sameAsBilling !== "on")
      data.billing_address = {
        first_name: formData.get("billing_address.first_name"),
        last_name: formData.get("billing_address.last_name"),
        address_1: formData.get("billing_address.address_1"),
        address_2: "",
        company: formData.get("billing_address.company"),
        postal_code: formData.get("billing_address.postal_code"),
        city: formData.get("billing_address.city"),
        country_code: formData.get("billing_address.country_code"),
        province: formData.get("billing_address.province"),
        phone: formData.get("billing_address.phone"),
      };
    await updateCart(data);
  } catch (e: any) {
    return e.message;
  }

  redirect(
    `/${formData.get("shipping_address.country_code")}/checkout?step=delivery`
  );
}

/**
 * Places an order for a cart. If no cart ID is provided, it will use the cart ID from the cookies.
 * @param cartId - optional - The ID of the cart to place an order for.
 * @returns The cart object if the order was successful, or null if not.
 */
export async function placeOrder(cartId?: string) {
  const id = cartId || (await getCartId());

  if (!id) {
    throw new Error("No existing cart found when placing an order");
  }

  // In mock, just redirect to a success page with a fake order id
  const countryCode = "us";
  const orderCacheTag = await getCacheTag("orders");
  revalidateTag(orderCacheTag);
  removeCartId();
  redirect(`/${countryCode}/order/order_${Date.now()}/confirmed`);
  return CART;
}

/**
 * Updates the countrycode param and revalidates the regions cache
 * @param regionId
 * @param countryCode
 */
export async function updateRegion(countryCode: string, currentPath: string) {
  // Regions removed in mock; simply keep path unchanged
  redirect(`${currentPath || "/"}`);
}

export async function listCartOptions() {
  const cartId = await getCartId();
  const headers = {
    ...(await getAuthHeaders()),
  };
  const next = {
    ...(await getCacheOptions("shippingOptions")),
  };

  return await sdk.client.fetch<{
    shipping_options: HttpTypes.StoreCartShippingOption[];
  }>("/store/shipping-options", {
    query: { cart_id: cartId },
    next,
    headers,
    cache: "force-cache",
  });
}
