import { Link } from 'react-router-dom';
import { MyContext } from '../components/Context';
import OrdersCards from '../components/OrderCards';

const MyOrders = () => {
  const context = MyContext()

  return (
    <div>
      <h1 className='flex justify-center mb-4'>
        MyOrders
      </h1>
      {context.order.map((item, index) => (
         <Link key={index} to={`/my-order/${index}`}>{/*Aca index incrementa a uno debido al aumento de renders, callback de incremento numerico en 1 de acuerdo a los llamados de renderizarse*/}
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