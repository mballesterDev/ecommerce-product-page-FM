export interface ProductImage {
  full: string
  thumbnail: string
}

export interface Product {
  id: number
  company: string
  name: string
  description: string
  price: number          // precio con descuento
  discount: number       // porcentaje (50 = 50%)
  originalPrice: number
  images: ProductImage[]
}

export interface CartItem {
  product: Product
  quantity: number
  totalPrice: number
}


// Datos que rellena el cliente en el checkout
export interface CheckoutInfo {
  email: string
  fullName: string
  address: string
  city: string
  postalCode: string
  cardNumber: string
  expiry: string   // "MM/AA"
  cvc: string
}
