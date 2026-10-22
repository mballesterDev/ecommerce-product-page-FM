import type { Product } from '../../types/product'
import { AddToCart } from './AddToCart'

export const ProductInfo = ({ product }: { product: Product }) => {
  return (
    <div className='flex flex-col'>
      <span className='text-xs font-bold uppercase tracking-[0.15em] text-dark-grayish-blue'>
        {product.company}
      </span>
      <h1 className='mt-6 text-[44px] font-bold leading-[1.1] text-very-dark-blue'>{product.name}</h1>
      <p className='mt-8 text-base leading-relaxed text-dark-grayish-blue'>{product.description}</p>

      <div className='mt-6 flex items-center gap-4'>
        <span className='text-3xl font-bold text-very-dark-blue'>${product.price.toFixed(2)}</span>
        <span className='bg-very-dark-blue text-white text-base font-bold px-2 rounded-md'>
          {product.discount}%
        </span>
      </div>
      <span className='mt-2 font-bold line-through text-grayish-blue'>${product.originalPrice.toFixed(2)}</span>

      <div className='mt-8'>
        <AddToCart product={product} />
      </div>
    </div>
  )
}
