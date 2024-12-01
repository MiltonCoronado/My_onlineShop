import { PlusIcon } from '@heroicons/react/24/solid';
import { MyContext } from './Context.jsx';

const Card = ({ data }) => {
  const context = MyContext();

  return (
    <article className='bg-white cursor-pointer w-56 h-60 rounded-lg'>
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0-5'>{data.category}</span>
        <img className='w-full h-full object-cover rounded-lg' src={data.image} alt='headphones'/>
        <button 
          className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
          onClick={() => context.increment()}
        >
          <PlusIcon className='h-6 w-6 text-black-500'></PlusIcon>
        </button>
      </figure>
      <p className='flex justify-between'>
        <span className='text-sm font-light'>{data.title}</span>
        <span className='text-lg font-medium'>${data.price}</span>
      </p>
    </article>
  )
};

export default Card;