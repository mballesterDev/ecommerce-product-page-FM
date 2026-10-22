import { useState } from 'react'
import type { Product } from '../../types/product'

export const ProductGallery = ({ product }: { product: Product }) => {
  const [mainImage, setMainImage] = useState(product.images[0].full)

  return (
    <div className='flex flex-col gap-8'>

        <img src={mainImage} className='w-full rounded-2xl' alt={product.name} />

        <div className='grid grid-cols-4 gap-8'>
            {product.images.map((p, i) => {
                const isActive = p.full === mainImage
                return (
                    <button
                        key={p.thumbnail}
                        onClick={() => setMainImage(p.full)}
                        aria-label={`Show image ${i + 1}`}
                        aria-pressed={isActive}
                        className={`rounded-xl overflow-hidden border-2 cursor-pointer ${isActive ? 'border-orange' : 'border-transparent'}`}
                    >
                        <img
                            src={p.thumbnail}
                            alt=''
                            className={`w-full block transition-opacity ${isActive ? 'opacity-40' : 'hover:opacity-60'}`}
                        />
                    </button>
                )
            })}
        </div>
    </div>
  )
}
