import type { Product } from '../types/product'

// Las imágenes están en public/images. Se usan rutas RELATIVAS ("images/...")
// para que funcionen tanto en local como en GitHub Pages (base /ecommerce-product-page/).
export const product: Product = {
  id: 1,
  company: 'Sneaker Company',
  name: 'Fall Limited Edition Sneakers',
  description:
    'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
  price: 125,
  discount: 50,
  originalPrice: 250,
  images: [1, 2, 3, 4].map((n) => ({
    full: `images/image-product-${n}.jpg`,
    thumbnail: `images/image-product-${n}-thumbnail.jpg`,
  })),
}

export const navLinks = ['Collections', 'Men', 'Women', 'About', 'Contact']

export const icons = {
  logo: 'images/logo.svg',
  cart: 'images/icon-cart.svg',
  menu: 'images/icon-menu.svg',
  close: 'images/icon-close.svg',
  delete: 'images/icon-delete.svg',
  plus: 'images/icon-plus.svg',
  minus: 'images/icon-minus.svg',
  next: 'images/icon-next.svg',
  previous: 'images/icon-previous.svg',
  avatar: 'images/image-avatar.png',
}
