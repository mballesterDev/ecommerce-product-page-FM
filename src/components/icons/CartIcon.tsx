import { icons } from '../../data/product'


export const CartIcon = ({ className = '' }: { className?: string }) => {
  return (
    <img src={icons.cart} className={className} alt="" />
  )
}
