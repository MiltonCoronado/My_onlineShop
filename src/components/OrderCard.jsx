import { XMarkIcon } from '@heroicons/react/24/solid';

const OrderCard = ({ deleteOrderCard, title, image, price }) => {
  return (
    <div className='flex justify-between items-center mb-3'>
      <div className='flex items-center gap-2'>
        <figure className='w-20 h-14'>
          <img className='w-full h-full rounded-lg object-cover' src={image} alt={title}/>
        </figure>
        <p className='text-xs font-light'>{title}</p>
      </div>
      <div className='flex items-center gap-2'>
        <p className='text-lg font-medium'>{price}</p>
        <XMarkIcon 
          className='h-6 w-6 text-black-500 cursor-pointer'
          onClick={() => deleteOrderCard()} 
        >
        </XMarkIcon>
      </div>
    </div>
  )
};

export default OrderCard;