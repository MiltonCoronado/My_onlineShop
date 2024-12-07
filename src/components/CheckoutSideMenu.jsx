import { XMarkIcon } from '@heroicons/react/24/solid';
import { MyContext } from './Context';
import OrderCard from './OrderCard.jsx';

const CheckoutSideMenu = () => {
  const context = MyContext();

  console.log('CheckoutSideMenu', context.showProduct)

  return (
    <aside className={`${context.checkoutSideMenu ? 'flex' : 'hidden'} top-[63px] w-[360px] h-[calc(100vh-68px)] flex-col fixed right-0 border border-black rounded-lg bg-white z-10 overflow-y-scroll`}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>My Order</h2>
        <button>
          <XMarkIcon 
            className='h-6 w-6 text-black-500'
            onClick={() => context.closeCheckoutSideMenu()}
          >
          </XMarkIcon>
        </button>
      </div>
      <div className='px-6'>
        {context.cartProducts.map(item => (
          <OrderCard 
            key={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </aside>
  )
};

export default CheckoutSideMenu;