import { NavLink } from 'react-router-dom';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import { MyContext } from './Context.jsx';

const NavElement = ({ to, children, activeStyle }) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) => 
          isActive ? activeStyle : undefined
        }>
          {children}
      </NavLink>
    </li>
  )
};

const NavBar = () => {
  const activeStyle = 'underline underline-offset-4';
  const context = MyContext();

  return (
    <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-3.5 px-8 text-sm font-light bg-white'>
      <ul className='flex items-center gap-3'>
        <div className='font-semibold text-lg'>
            <NavElement
              to={'/'}
            >
              Shopi
            </NavElement>
        </div>
        <NavElement
          to={'/'}
          activeStyle={activeStyle}
        >
          All
        </NavElement>
        <NavElement
          to={'/clothes'}
          activeStyle={activeStyle}
        >
          Clothes
        </NavElement>
        <NavElement
          to={'/electronics'}
          activeStyle={activeStyle}
        >
          Electronics
        </NavElement>
        <NavElement
          to={'/fornitures'}
          activeStyle={activeStyle}
        >
          Fornitures
        </NavElement>
        <NavElement 
          to='/toys'
          activeStyle={activeStyle}
        >
          toys
        </NavElement>
        <NavElement 
          to='/others'
          activeStyle={activeStyle}
        >
          others
        </NavElement>
      </ul>
      <ul className='flex items-center gap-3'>
        <li className='text-black/60'>
          Shop@example.com
        </li>
        <NavElement 
          to='/my-orders'
          activeStyle={activeStyle}
        >
          My Orders
        </NavElement>
        <NavElement 
          to='/My-Account'
          activeStyle={activeStyle}
        >
          My Account
        </NavElement>
        <NavElement 
          to='/sign-in'
          activeStyle={activeStyle}
        >
          Sign In
        </NavElement>
        <li className='flex items-center'>
          <ShoppingCartIcon className='h-6 w-6 text-black-500'>
          </ShoppingCartIcon>
          <div>{context.incrementProduct}</div>
        </li>
      </ul>
    </nav>
  )
};

export default NavBar;