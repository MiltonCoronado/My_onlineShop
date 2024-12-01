import { XMarkIcon } from '@heroicons/react/24/solid';
import { MyContext } from './Context';

const ProductDetail = () => {
  const context = MyContext();

  console.log('productDetail', context.showProduct)

  return (
    <aside className={`${context.ProductDetailOpen ? 'flex' : 'hidden'} top-[63px] w-[360px] h-[calc(100vh-68px)] flex-col fixed right-0 border border-black rounded-lg bg-white`}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>Detail</h2>
        <button>
          <XMarkIcon 
            className='h-6 w-6 text-black-500'
            onClick={() => context.closeSideMenu()}
          >
          </XMarkIcon>
        </button>
      </div>
      <div className='flex flex-col overflow-y-auto'>
        <figure className='flex justify-center '>
          <img 
            className='w-60 h-60 rounded-lg' 
            src={context.showProduct?.image} 
            alt={context.showProduct?.title} 
          />
        </figure>
        <p className='flex flex-col p-6'>
          <span className='font-medium text-2xl'>${context.showProduct?.price}</span>
          <span className='font-medium text-md'>${context.showProduct?.title}</span>
          <span className='font-light text-sm'>${context.showProduct?.description}</span>
        </p>
      </div>
    </aside>
  )
};

export default ProductDetail;