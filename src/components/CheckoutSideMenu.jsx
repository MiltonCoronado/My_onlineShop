import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { totalPrice } from '../utils';
import { ShoppingCartContext } from './Context';
import OrderCard from './OrderCard';

const CheckoutSideMenu = () => {
  const {
    closeCheckoutSideMenu,
    checkoutSideMenu,
    cartProducts,
    setCardProducts,
    order,
    setOrder,
    setCheckoutSideMenu,
    setSearchByTitle,
  } = useContext(ShoppingCartContext);

  const deleteOrderCard = (id) => {
    const deleteProducts = cartProducts.filter((item) => item.id !== id);
    setCardProducts(deleteProducts);
  };

  const handleCheckout = () => {
    const myOrder = {
      date: '01.01.25',
      products: cartProducts,
      totalProducts: cartProducts.length,
      totalPrice: totalPrice(cartProducts),
    };

    setOrder([...order, myOrder]); //aca introduzco el objeto que tipe empezando de la linea 27.
    setCardProducts([]);
    setCheckoutSideMenu(false);
    setSearchByTitle(null);
  };

  return (
    <aside
      className={`${checkoutSideMenu ? 'flex' : 'hidden'} top-[63px] w-[360px] h-[calc(100vh-68px)] flex-col fixed right-0 border border-black rounded-lg bg-white z-10 overflow-y-scroll`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <button>
          <XMarkIcon
            className="h-6 w-6 text-black-500"
            onClick={() => closeCheckoutSideMenu()}
          ></XMarkIcon>
        </button>
      </div>
      <div className="px-6 flex-1">
        {cartProducts.map((item) => (
          <OrderCard
            key={item.id}
            title={item.title}
            image={item.image}
            price={item.price.toFixed(2)}
            deleteOrderCard={() => deleteOrderCard(item.id)} //para evitar el problema del provider que no se podia montar mientras se montaba otro componente debi de enviar esta funcion como algo asi tipo una render function que enrealidad solo es una funcion anonima para crear una referencia y no se ejecute. Por que?
          />
        ))}
      </div>
      <div className="px-6 mb-6">
        <p className="flex justify-between items-center mb-2">
          <span className="font-light">Total:</span>
          <span className="font-medium text-2xl">
            ${totalPrice(cartProducts)}
          </span>
        </p>
        <Link to="/my-order/last">
          <button
            className="bg-black py-3 text-white w-full rounded-lg"
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
