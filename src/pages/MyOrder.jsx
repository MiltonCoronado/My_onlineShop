import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import { MyContext } from '../components/Context';
import OrderCard from '../components/OrderCard';
import { Link, useParams } from 'react-router-dom';

const MyOrder = () => {
  const context = MyContext();

  let { index } = useParams();
  
  if(index === 'last') index = context.order.length - 1;
  
  console.log(context.order)
  console.log('index', index)

  return (
    <div>
      <div className='flex items-center justify-center w-96 relative mb-6'>
        <Link to='/my-orders' className='absolute left-0'>
          <ChevronLeftIcon className='h-6 w-6 text-black'>
          </ChevronLeftIcon>
        </Link>
        <h1>MyOrder</h1> 
      </div>
      <div className='flex flex-col w-96'>
        {context.order?.[index]?.products.map(item => (
          <OrderCard 
            key={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
          />
        ))}
        </div>
    </div>
  )
};

export default MyOrder;