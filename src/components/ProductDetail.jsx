import { XMarkIcon } from '@heroicons/react/24/solid';

const ProductDetail = () => {
  return (
    <aside className='top-[63px] w-[360px] h-[calc(100vh-68px)] flex flex-col fixed right-0 border border-black rounded-lg bg-white'>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>Detail</h2>
        <button>
          <XMarkIcon className='h-6 w-6 text-black-500'></XMarkIcon>
        </button>
      </div>
    </aside>
  )
};

export default ProductDetail;