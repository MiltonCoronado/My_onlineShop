import { ChevronRightIcon } from '@heroicons/react/24/solid';

const OrdersCards = ({ totalPrice, totalProducts }) => {
  return (
    <div className='flex justify-between items-center border border-black w-80 p-4 rounded-lg mb-3'>
      <p className='flex justify-between w-full'>
        <span className='flex flex-col'>
          <span className='font-light'>01.02.25</span>
          <span className='font-light'>{totalProducts} Articles</span>
        </span>
      <p className='flex items-center gap-2'>
        <span className='font-medium text-2xl'>${totalPrice}</span>
        <ChevronRightIcon className='h-6 w-6 text-black cursor-pointer'>
        </ChevronRightIcon>
      </p>
      </p>
    </div>
  )
};

export default OrdersCards;