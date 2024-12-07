import { XMarkIcon } from '@heroicons/react/24/solid';
import { MyContext } from './Context';
import OrderCard from './OrderCard.jsx';

const CheckoutSideMenu = () => {
  const context = MyContext();

  console.log('CheckoutSideMenu', context.showProduct)

  const deleteOrderCard = (id) => {
    const deleteProducts = context.cartProducts.filter(item => item.id !== id);
    context.setCardProducts(deleteProducts);
  };

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
            deleteOrderCard={() => deleteOrderCard(item.id)}//para evitar el problema del provider que no se podia montar mientras se montaba otro componente debi de enviar esta funcion como algo asi tipo una render function que enrealidad solo es una funcion anonima para crear una referencia y no se ejecute. Por que? 
          />
        ))}
      </div>
    </aside>
  )
};

export default CheckoutSideMenu;