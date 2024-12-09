import { MyContext } from '../components/Context';
import OrderCard from '../components/OrderCard';

const MyOrder = () => {
  const context = MyContext();

  console.log(context.order)
  return (
    <div>
      <p className='flex justify-center mb-8'>
        MyOrder
      </p> 
      <div className='flex flex-col w-96'>
        {context.order.slice(-1)[0]?.products.map(item => (
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