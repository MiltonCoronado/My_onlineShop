import { Link } from 'react-router-dom';
import { MyContext } from '../components/Context';
import OrdersCards from '../components/OrderCards';

const MyOrders = () => {
  const context = MyContext()

  return (
    <div>
      <h1 className='flex justify-center'>
        MyOrders
      </h1>
      {context.order.map((item, index) => (
        <Link key={index} to={`/my-order/${index}`}>
          <OrdersCards 
            totalProducts={item.totalProducts}
            totalPrice={item.totalPrice}
          />
        </Link>
      ))}


    </div>
  )
};

export default MyOrders;