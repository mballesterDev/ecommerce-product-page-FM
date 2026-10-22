import { Link } from 'react-router'
import { Logo } from '../icons/Logo'
import { CartIcon } from '../icons/CartIcon'
import { Avatar } from '../icons/Avatar'
import { navLinks } from '../../data/product'
import { useProductStore } from '../../store/useProductStore'

export const Header = () => {

  const totalItems = useProductStore((state) => state.totalItems())

  return (
    <header className='max-w-6xl mx-auto flex justify-between items-center h-28 border-b border-grayish-blue/40'>

        <div className='flex items-center gap-14 h-full'>

           <Link to="/">
             <Logo />
           </Link>
           <nav className='h-full'>
             <ul className='flex gap-8 h-full'>
               {navLinks.map((link) => (
                 <li key={link} className='h-full'>
                   <a
                     href='#'
                     className='flex items-center h-full text-[15px] text-dark-grayish-blue border-b-4 border-transparent hover:text-very-dark-blue hover:border-orange transition-colors'
                   >
                     {link}
                   </a>
                 </li>
               ))}
             </ul>
           </nav>
        </div>

        <div className='flex gap-11 items-center'>
          <div className='relative'>
            <Link to="/cart">
              <CartIcon/>
              {totalItems > 0 && (
                <span className='absolute -top-2 -right-2 px-1.5 rounded-full bg-orange text-white text-[10px] font-bold'>
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
          <Avatar/>
        </div>
    </header>
  )
}
