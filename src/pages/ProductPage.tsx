import { product } from '../data/product'
import { ProductGallery } from '../components/product/ProductGallery'
import { ProductInfo } from '../components/product/ProductInfo'

export const ProductPage = () => {
  return (
    <main className='max-w-6xl mx-auto grid grid-cols-2 gap-32 items-center px-12 py-22'>
      <ProductGallery product={product} />
      <ProductInfo product={product} />
    </main>
  )
}
