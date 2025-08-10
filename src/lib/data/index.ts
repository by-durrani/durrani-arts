// Complete dummy data for Medusa storefront
// This covers all major pages and components for an e-commerce store

export const storefrontData = {
  // HOMEPAGE DATA
  hero: {
    title: "Summer Collection 2024",
    subtitle: "Discover our latest trends and bestsellers",
    ctaText: "Shop Now",
    ctaLink: "/collections/summer-2024",
    backgroundImage:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=600&fit=crop",
    overlayOpacity: 0.4,
  },

  featuredCollections: [
    {
      id: "col_01HQ8X5Y2Z3A4B5C6D7E8F9G0H",
      title: "Summer Essentials",
      description: "Beat the heat with our curated summer collection",
      image:
        "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&h=300&fit=crop",
      productCount: 24,
      handle: "summer-essentials",
    },
    {
      id: "col_01HQ8X5Y2Z3A4B5C6D7E8F9G1I",
      title: "Tech Gadgets",
      description: "Latest technology for modern lifestyle",
      image:
        "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=300&fit=crop",
      productCount: 18,
      handle: "tech-gadgets",
    },
    {
      id: "col_01HQ8X5Y2Z3A4B5C6D7E8F9G2J",
      title: "Home & Living",
      description: "Transform your space with our home collection",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      productCount: 32,
      handle: "home-living",
    },
  ],

  featuredProducts: [
    {
      id: "prod_01HQ8X5Y2Z3A4B5C6D7E8F9G0H",
      title: "Wireless Bluetooth Headphones",
      handle: "wireless-bluetooth-headphones",
      description:
        "Premium quality wireless headphones with noise cancellation",
      thumbnail:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&h=600&fit=crop",
      ],
      variants: [
        {
          id: "variant_01HQ8X5Y2Z3A4B5C6D7E8F9G0H",
          title: "Black / Standard",
          sku: "WBH-BLK-STD",
          prices: [{ amount: 12999, currency_code: "usd" }],
          inventory_quantity: 25,
          options: [
            { option_id: "opt_color", value: "Black" },
            { option_id: "opt_size", value: "Standard" },
          ],
        },
        {
          id: "variant_01HQ8X5Y2Z3A4B5C6D7E8F9G1I",
          title: "White / Standard",
          sku: "WBH-WHT-STD",
          prices: [{ amount: 12999, currency_code: "usd" }],
          inventory_quantity: 18,
          options: [
            { option_id: "opt_color", value: "White" },
            { option_id: "opt_size", value: "Standard" },
          ],
        },
      ],
      options: [
        {
          id: "opt_color",
          title: "Color",
          values: [
            { id: "optval_black", value: "Black" },
            { id: "optval_white", value: "White" },
          ],
        },
      ],
      tags: [
        { id: "tag_electronics", value: "Electronics" },
        { id: "tag_audio", value: "Audio" },
        { id: "tag_wireless", value: "Wireless" },
      ],
      collection: {
        id: "col_01HQ8X5Y2Z3A4B5C6D7E8F9G1I",
        title: "Tech Gadgets",
      },
      rating: 4.5,
      reviewCount: 127,
    },
    {
      id: "prod_01HQ8X5Y2Z3A4B5C6D7E8F9G2J",
      title: "Smart Watch Pro",
      handle: "smart-watch-pro",
      description: "Advanced smartwatch with health monitoring and GPS",
      thumbnail:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=600&h=600&fit=crop",
      ],
      variants: [
        {
          id: "variant_01HQ8X5Y2Z3A4B5C6D7E8F9G2J",
          title: "Silver / 42mm",
          sku: "SWP-SLV-42",
          prices: [{ amount: 29999, currency_code: "usd" }],
          inventory_quantity: 12,
          options: [
            { option_id: "opt_color", value: "Silver" },
            { option_id: "opt_size", value: "42mm" },
          ],
        },
        {
          id: "variant_01HQ8X5Y2Z3A4B5C6D7E8F9G3K",
          title: "Black / 42mm",
          sku: "SWP-BLK-42",
          prices: [{ amount: 29999, currency_code: "usd" }],
          inventory_quantity: 8,
          options: [
            { option_id: "opt_color", value: "Black" },
            { option_id: "opt_size", value: "42mm" },
          ],
        },
      ],
      options: [
        {
          id: "opt_color",
          title: "Color",
          values: [
            { id: "optval_silver", value: "Silver" },
            { id: "optval_black", value: "Black" },
          ],
        },
        {
          id: "opt_size",
          title: "Size",
          values: [
            { id: "optval_42mm", value: "42mm" },
            { id: "optval_46mm", value: "46mm" },
          ],
        },
      ],
      tags: [
        { id: "tag_electronics", value: "Electronics" },
        { id: "tag_wearable", value: "Wearable" },
        { id: "tag_fitness", value: "Fitness" },
      ],
      collection: {
        id: "col_01HQ8X5Y2Z3A4B5C6D7E8F9G1I",
        title: "Tech Gadgets",
      },
      rating: 4.7,
      reviewCount: 89,
    },
    {
      id: "prod_01HQ8X5Y2Z3A4B5C6D7E8F9G4L",
      title: "Cotton Summer T-Shirt",
      handle: "cotton-summer-t-shirt",
      description: "Comfortable 100% organic cotton t-shirt perfect for summer",
      thumbnail:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1583743814966-8936f37f4678?w=600&h=600&fit=crop",
      ],
      variants: [
        {
          id: "variant_01HQ8X5Y2Z3A4B5C6D7E8F9G4L",
          title: "White / S",
          sku: "CST-WHT-S",
          prices: [{ amount: 2999, currency_code: "usd" }],
          inventory_quantity: 45,
          options: [
            { option_id: "opt_color", value: "White" },
            { option_id: "opt_size", value: "S" },
          ],
        },
        {
          id: "variant_01HQ8X5Y2Z3A4B5C6D7E8F9G5M",
          title: "White / M",
          sku: "CST-WHT-M",
          prices: [{ amount: 2999, currency_code: "usd" }],
          inventory_quantity: 52,
          options: [
            { option_id: "opt_color", value: "White" },
            { option_id: "opt_size", value: "M" },
          ],
        },
        {
          id: "variant_01HQ8X5Y2Z3A4B5C6D7E8F9G6N",
          title: "Blue / M",
          sku: "CST-BLU-M",
          prices: [{ amount: 2999, currency_code: "usd" }],
          inventory_quantity: 38,
          options: [
            { option_id: "opt_color", value: "Blue" },
            { option_id: "opt_size", value: "M" },
          ],
        },
      ],
      options: [
        {
          id: "opt_color",
          title: "Color",
          values: [
            { id: "optval_white", value: "White" },
            { id: "optval_blue", value: "Blue" },
            { id: "optval_black", value: "Black" },
          ],
        },
        {
          id: "opt_size",
          title: "Size",
          values: [
            { id: "optval_s", value: "S" },
            { id: "optval_m", value: "M" },
            { id: "optval_l", value: "L" },
            { id: "optval_xl", value: "XL" },
          ],
        },
      ],
      tags: [
        { id: "tag_clothing", value: "Clothing" },
        { id: "tag_summer", value: "Summer" },
        { id: "tag_organic", value: "Organic" },
      ],
      collection: {
        id: "col_01HQ8X5Y2Z3A4B5C6D7E8F9G0H",
        title: "Summer Essentials",
      },
      rating: 4.3,
      reviewCount: 234,
    },
  ],

  // COLLECTIONS DATA
  collections: [
    {
      id: "col_01HQ8X5Y2Z3A4B5C6D7E8F9G0H",
      title: "Summer Essentials",
      handle: "summer-essentials",
      description:
        "Beat the heat with our curated summer collection featuring lightweight fabrics and vibrant colors",
      image:
        "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&h=400&fit=crop",
      products: [], // Will be populated with product IDs
      metadata: {
        featured: true,
        season: "summer",
      },
    },
    {
      id: "col_01HQ8X5Y2Z3A4B5C6D7E8F9G1I",
      title: "Tech Gadgets",
      handle: "tech-gadgets",
      description: "Latest technology and gadgets for modern lifestyle",
      image:
        "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&h=400&fit=crop",
      products: [],
      metadata: {
        featured: true,
        category: "electronics",
      },
    },
    {
      id: "col_01HQ8X5Y2Z3A4B5C6D7E8F9G2J",
      title: "Home & Living",
      handle: "home-living",
      description: "Transform your space with our home collection",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=400&fit=crop",
      products: [],
      metadata: {
        featured: true,
        category: "home",
      },
    },
  ],

  // CUSTOMER DATA (for authenticated users)
  customer: {
    id: "cus_01HQ8X5Y2Z3A4B5C6D7E8F9G0H",
    email: "john.doe@example.com",
    first_name: "John",
    last_name: "Doe",
    phone: "+1-555-0123",
    has_account: true,
    billing_address: {
      id: "addr_01HQ8X5Y2Z3A4B5C6D7E8F9G0H",
      first_name: "John",
      last_name: "Doe",
      address_1: "123 Main Street",
      address_2: "Apt 4B",
      city: "New York",
      province: "NY",
      postal_code: "10001",
      country_code: "US",
      phone: "+1-555-0123",
    },
    shipping_addresses: [
      {
        id: "addr_01HQ8X5Y2Z3A4B5C6D7E8F9G1I",
        first_name: "John",
        last_name: "Doe",
        address_1: "123 Main Street",
        address_2: "Apt 4B",
        city: "New York",
        province: "NY",
        postal_code: "10001",
        country_code: "US",
        phone: "+1-555-0123",
        metadata: { is_default: true },
      },
      {
        id: "addr_01HQ8X5Y2Z3A4B5C6D7E8F9G2J",
        first_name: "John",
        last_name: "Doe",
        address_1: "456 Work Avenue",
        address_2: "Suite 100",
        city: "Brooklyn",
        province: "NY",
        postal_code: "11201",
        country_code: "US",
        phone: "+1-555-0123",
        metadata: { is_default: false, label: "Work Address" },
      },
    ],
  },

  // CART DATA
  cart: {
    id: "cart_01HQ8X5Y2Z3A4B5C6D7E8F9G0H",
    email: "john.doe@example.com",
    billing_address: null,
    shipping_address: null,
    items: [
      {
        id: "item_01HQ8X5Y2Z3A4B5C6D7E8F9G0H",
        quantity: 2,
        variant: {
          id: "variant_01HQ8X5Y2Z3A4B5C6D7E8F9G0H",
          title: "Black / Standard",
          sku: "WBH-BLK-STD",
          prices: [{ amount: 12999, currency_code: "usd" }],
          product: {
            id: "prod_01HQ8X5Y2Z3A4B5C6D7E8F9G0H",
            title: "Wireless Bluetooth Headphones",
            thumbnail:
              "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
          },
        },
        unit_price: 12999,
        total: 25998,
      },
      {
        id: "item_01HQ8X5Y2Z3A4B5C6D7E8F9G1I",
        quantity: 1,
        variant: {
          id: "variant_01HQ8X5Y2Z3A4B5C6D7E8F9G4L",
          title: "White / M",
          sku: "CST-WHT-M",
          prices: [{ amount: 2999, currency_code: "usd" }],
          product: {
            id: "prod_01HQ8X5Y2Z3A4B5C6D7E8F9G4L",
            title: "Cotton Summer T-Shirt",
            thumbnail:
              "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop",
          },
        },
        unit_price: 2999,
        total: 2999,
      },
    ],
    region: {
      id: "reg_01HQ8X5Y2Z3A4B5C6D7E8F9G0H",
      name: "US",
      currency_code: "usd",
      tax_rate: 8.25,
      payment_providers: [
        { id: "stripe", is_installed: true },
        { id: "paypal", is_installed: true },
      ],
      fulfillment_providers: [{ id: "manual", is_installed: true }],
    },
    shipping_methods: [],
    payment_sessions: [],
    subtotal: 28997,
    tax_total: 2392,
    shipping_total: 0,
    discount_total: 0,
    total: 31389,
  },

  // ORDER HISTORY
  orders: [
    {
      id: "order_01HQ8X5Y2Z3A4B5C6D7E8F9G0H",
      display_id: 1001,
      email: "john.doe@example.com",
      status: "completed",
      fulfillment_status: "shipped",
      payment_status: "captured",
      created_at: "2024-08-01T10:30:00Z",
      items: [
        {
          id: "item_01HQ8X5Y2Z3A4B5C6D7E8F9G0H",
          quantity: 1,
          variant: {
            title: "Silver / 42mm",
            product: {
              title: "Smart Watch Pro",
              thumbnail:
                "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop",
            },
          },
          unit_price: 29999,
          total: 29999,
        },
      ],
      shipping_address: {
        first_name: "John",
        last_name: "Doe",
        address_1: "123 Main Street",
        city: "New York",
        province: "NY",
        postal_code: "10001",
        country_code: "US",
      },
      subtotal: 29999,
      tax_total: 2475,
      shipping_total: 999,
      total: 33473,
      tracking_number: "TRK123456789",
    },
    {
      id: "order_01HQ8X5Y2Z3A4B5C6D7E8F9G1I",
      display_id: 1002,
      email: "john.doe@example.com",
      status: "pending",
      fulfillment_status: "not_fulfilled",
      payment_status: "awaiting",
      created_at: "2024-08-05T14:15:00Z",
      items: [
        {
          id: "item_01HQ8X5Y2Z3A4B5C6D7E8F9G1I",
          quantity: 2,
          variant: {
            title: "White / M",
            product: {
              title: "Cotton Summer T-Shirt",
              thumbnail:
                "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop",
            },
          },
          unit_price: 2999,
          total: 5998,
        },
      ],
      shipping_address: {
        first_name: "John",
        last_name: "Doe",
        address_1: "123 Main Street",
        city: "New York",
        province: "NY",
        postal_code: "10001",
        country_code: "US",
      },
      subtotal: 5998,
      tax_total: 495,
      shipping_total: 599,
      total: 7092,
    },
  ],

  // PRODUCT REVIEWS
  reviews: [
    {
      id: "rev_01HQ8X5Y2Z3A4B5C6D7E8F9G0H",
      product_id: "prod_01HQ8X5Y2Z3A4B5C6D7E8F9G0H",
      customer_name: "Sarah Johnson",
      rating: 5,
      title: "Amazing sound quality!",
      content:
        "These headphones exceeded my expectations. The noise cancellation is fantastic and the battery life is incredible.",
      created_at: "2024-07-28T09:15:00Z",
      verified_purchase: true,
    },
    {
      id: "rev_01HQ8X5Y2Z3A4B5C6D7E8F9G1I",
      product_id: "prod_01HQ8X5Y2Z3A4B5C6D7E8F9G0H",
      customer_name: "Mike Chen",
      rating: 4,
      title: "Great value for money",
      content:
        "Really good headphones for the price. Comfortable to wear for long periods.",
      created_at: "2024-07-25T16:42:00Z",
      verified_purchase: true,
    },
    {
      id: "rev_01HQ8X5Y2Z3A4B5C6D7E8F9G2J",
      product_id: "prod_01HQ8X5Y2Z3A4B5C6D7E8F9G2J",
      customer_name: "Emily Rodriguez",
      rating: 5,
      title: "Perfect fitness companion",
      content:
        "This smartwatch has all the features I need for tracking my workouts. The GPS is very accurate.",
      created_at: "2024-07-30T11:20:00Z",
      verified_purchase: true,
    },
  ],

  // SHIPPING METHODS
  shipping_options: [
    {
      id: "so_01HQ8X5Y2Z3A4B5C6D7E8F9G0H",
      name: "Standard Shipping",
      price_incl_tax: 599,
      estimated_delivery: "5-7 business days",
    },
    {
      id: "so_01HQ8X5Y2Z3A4B5C6D7E8F9G1I",
      name: "Express Shipping",
      price_incl_tax: 1299,
      estimated_delivery: "2-3 business days",
    },
    {
      id: "so_01HQ8X5Y2Z3A4B5C6D7E8F9G2J",
      name: "Next Day Delivery",
      price_incl_tax: 2499,
      estimated_delivery: "Next business day",
    },
  ],

  // PAYMENT METHODS
  payment_methods: [
    {
      id: "stripe",
      name: "Credit/Debit Card",
      description: "Pay securely with your credit or debit card",
      icon: "credit-card",
    },
    {
      id: "paypal",
      name: "PayPal",
      description: "Pay with your PayPal account",
      icon: "paypal",
    },
    {
      id: "apple_pay",
      name: "Apple Pay",
      description: "Pay with Touch ID or Face ID",
      icon: "apple",
    },
  ],

  // STORE SETTINGS
  store: {
    name: "Your Store",
    currencies: [
      { code: "USD", symbol: "$" },
      { code: "EUR", symbol: "€" },
      { code: "GBP", symbol: "£" },
    ],
    default_currency: "USD",
    countries: ["US", "CA", "GB", "DE", "FR", "AU"],
    default_country: "US",
  },

  // SEARCH RESULTS (for search functionality)
  searchResults: {
    query: "headphones",
    hits: [
      {
        id: "prod_01HQ8X5Y2Z3A4B5C6D7E8F9G0H",
        title: "Wireless Bluetooth Headphones",
        handle: "wireless-bluetooth-headphones",
        thumbnail:
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
        price: { amount: 12999, currency_code: "usd" },
      },
    ],
    estimatedTotalHits: 1,
  },

  // WISHLIST (if implemented)
  wishlist: [
    {
      id: "wish_01HQ8X5Y2Z3A4B5C6D7E8F9G0H",
      product_id: "prod_01HQ8X5Y2Z3A4B5C6D7E8F9G2J",
      created_at: "2024-08-01T12:00:00Z",
    },
  ],

  // BLOG POSTS (if you have a blog section)
  blog: [
    {
      id: "post_01HQ8X5Y2Z3A4B5C6D7E8F9G0H",
      title: "Summer Fashion Trends 2024",
      slug: "summer-fashion-trends-2024",
      excerpt: "Discover the hottest fashion trends for this summer season",
      featured_image:
        "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&h=400&fit=crop",
      published_at: "2024-07-15T10:00:00Z",
      author: "Fashion Team",
    },
    {
      id: "post_01HQ8X5Y2Z3A4B5C6D7E8F9G1I",
      title: "Tech Gadgets That Will Change Your Life",
      slug: "tech-gadgets-life-changing",
      excerpt:
        "Explore the latest technology that's making everyday life easier",
      featured_image:
        "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&h=400&fit=crop",
      published_at: "2024-07-20T14:30:00Z",
      author: "Tech Team",
    },
  ],
};

// Helper functions to use with the dummy data
export const dummyAPI = {
  // Get products with optional filters
  getProducts: (limit = 20, offset = 0, collection_id = null, tags = []) => {
    let products = storefrontData.featuredProducts;

    if (collection_id) {
      products = products.filter((p) => p.collection.id === collection_id);
    }

    if (tags.length > 0) {
      products = products.filter((p) =>
        p.tags.some((tag) => tags.includes(tag.value))
      );
    }

    return {
      products: products.slice(offset, offset + limit),
      count: products.length,
      offset,
      limit,
    };
  },

  // Get single product by handle
  getProductByHandle: (handle: string) => {
    return storefrontData.featuredProducts.find((p) => p.handle === handle);
  },

  // Get collections
  getCollections: () => {
    return {
      collections: storefrontData.collections,
    };
  },

  // Get cart
  getCart: () => {
    return storefrontData.cart;
  },

  // Get customer orders
  getOrders: () => {
    return storefrontData.orders;
  },

  // Search products
  searchProducts: (query: string) => {
    const results = storefrontData.featuredProducts.filter(
      (p) =>
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase())
    );

    return {
      hits: results.map((p) => ({
        id: p.id,
        title: p.title,
        handle: p.handle,
        thumbnail: p.thumbnail,
        price: p.variants[0]?.prices[0],
      })),
      estimatedTotalHits: results.length,
      query,
    };
  },

  // Get product reviews
  getProductReviews: (product_id: string) => {
    return storefrontData.reviews.filter((r) => r.product_id === product_id);
  },
};

export default storefrontData;
