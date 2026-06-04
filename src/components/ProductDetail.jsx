import { useContext } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from './Context';

const ProductDetail = () => {
  const { ProductDetailOpen, closeSideMenu, showProduct } =
    useContext(ShoppingCartContext);

  return (
    <aside
      className={`${ProductDetailOpen ? 'flex' : 'hidden'} top-[63px] w-[360px] h-[calc(100vh-68px)] flex-col fixed right-0 border border-black rounded-lg bg-white z-10`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <button>
          <XMarkIcon
            className="h-6 w-6 text-black-500"
            onClick={() => closeSideMenu()}
          ></XMarkIcon>
        </button>
      </div>
      <div className="flex flex-col overflow-y-auto">
        <figure className="flex justify-center ">
          <img
            className="w-60 h-60 rounded-lg"
            src={showProduct?.image}
            alt={showProduct?.title}
          />
        </figure>
        <p className="flex flex-col p-6">
          <span className="font-medium text-2xl">${showProduct?.price}</span>
          <span className="font-medium text-md">${showProduct?.title}</span>
          <span className="font-light text-sm">
            ${showProduct?.description}
          </span>
        </p>
      </div>
    </aside>
  );
};

export default ProductDetail;
