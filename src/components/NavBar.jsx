import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from './Context.jsx';

const NavElement = ({ to, children, activeStyle, onClick }) => {
  return (
    <li>
      <NavLink
        to={to}
        onClick={onClick}
        className={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        {children}
      </NavLink>
    </li>
  );
};

const NavBar = () => {
  const { signOut, account, logoutUser, cartProducts, setIsSignUp } =
    useContext(ShoppingCartContext);

  const hasUserAnAccount = Object.keys(account).length > 0;
  const isUserLogged = hasUserAnAccount && !signOut; //si "¡NO!" esta sigOut/osea deslogueado

  const activeStyle = 'underline underline-offset-4';

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-3.5 px-8 text-sm font-light bg-white">
      <ul className="flex items-center gap-3">
        <div className="font-semibold text-lg">
          <NavElement to={'/'}>Shopi</NavElement>
        </div>
        <NavElement to={'/all'} activeStyle={activeStyle}>
          All
        </NavElement>
        <NavElement to={'/clothing'} activeStyle={activeStyle}>
          Clothes
        </NavElement>
        <NavElement to={'/electronics'} activeStyle={activeStyle}>
          Electronics
        </NavElement>
        <NavElement to={'/jewelery'} activeStyle={activeStyle}>
          Jewelery
        </NavElement>
      </ul>
      <ul className="flex items-center gap-3">
        {isUserLogged ? (
          <>
            <li className="text-black/60">{account.email}</li>
            <NavElement to="/my-orders" activeStyle={activeStyle}>
              My Orders
            </NavElement>
            <NavElement to="/my-account" activeStyle={activeStyle}>
              My Account
            </NavElement>
            <NavElement
              to="/sign-in"
              activeStyle={activeStyle}
              onClick={() => logoutUser()}
            >
              Sign out
            </NavElement>
          </>
        ) : (
          <NavElement
            to="/sign-in"
            activeStyle={activeStyle}
            onClick={() => setIsSignUp(false)}
          >
            Sign in
          </NavElement>
        )}
        <li className="flex items-center">
          <ShoppingCartIcon className="h-6 w-6 text-black-500"></ShoppingCartIcon>
          <div>{cartProducts.length}</div>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
