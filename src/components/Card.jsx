import { useContext } from 'react';
import { CheckIcon, PlusIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from './Context';

const Card = ({ data }) => {
  const {
    increment,
    cartProducts,
    openSideMenu,
    closeSideMenu,
    openCheckoutSideMenu,
    closeCheckoutSideMenu,
    setShowProduct,
    setCardProducts,
  } = useContext(ShoppingCartContext);

  const handleSideMenu = () => {
    openSideMenu();
    setShowProduct(data);
    closeCheckoutSideMenu();
  };

  const addProductToCart = (event, data) => {
    event.stopPropagation();
    openCheckoutSideMenu();
    increment();
    closeSideMenu();
    setCardProducts([...cartProducts, data]);
  };

  const renderIcon = (dataId) => {
    const renderCheckIcon = cartProducts.some((item) => item.id === dataId);

    if (renderCheckIcon) {
      return (
        <button
          className="absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1"
          onClick={(event) => event.stopPropagation()}
        >
          <CheckIcon className="h-6 w-6 text-white"></CheckIcon>
        </button>
      );
    } else {
      return (
        <button
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
          onClick={(event) => addProductToCart(event, data)}
        >
          <PlusIcon className="h-6 w-6 text-black-500"></PlusIcon>
        </button>
      );
    }
  };

  return (
    <article
      className="bg-white cursor-pointer w-56 h-60 rounded-lg"
      onClick={() => handleSideMenu()}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0-5">
          {data.category}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={data.image}
          alt="headphones"
        />
        {renderIcon(data.id)}
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{data.title}</span>
        <span className="text-lg font-medium">${data.price}</span>
      </p>
    </article>
  );
};

export default Card;
