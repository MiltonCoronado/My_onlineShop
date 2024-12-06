import { XMarkIcon } from '@heroicons/react/24/solid';
import { MyContext } from './Context';

const CheckoutSideMenu = () => {
  const context = MyContext();

  console.log('CheckoutSideMenu', context.showProduct)

  return (
    <aside className={`${context.checkoutSideMenu ? 'flex' : 'hidden'} top-[63px] w-[360px] h-[calc(100vh-68px)] flex-col fixed right-0 border border-black rounded-lg bg-white z-10`}>
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
    </aside>
  )
};

export default CheckoutSideMenu;