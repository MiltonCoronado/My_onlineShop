import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from '../components/Context';
import OrderCard from '../components/OrderCard';

const MyOrder = () => {
  const { order } = useContext(ShoppingCartContext);
  let { index } = useParams();
  /*si esto ( es igual === "/:id" ) es igual var 
  "var index = 'last'; index es isual a cero ( = ) index. 
  arranca incremento cuando la cantidad de pedidos de 
  ('/last' renderPath)  aunmente.*/
  if (index === 'last') index = order.length - 1;

  return (
    <div>
      <div className="flex items-center justify-center w-96 relative mb-6">
        <Link to="/my-orders" className="absolute left-0">
          <ChevronLeftIcon className="h-6 w-6 text-black"></ChevronLeftIcon>
        </Link>
        <h1>My order</h1>
      </div>
      <div className="flex flex-col w-96">
        {order?.[index]?.products.map((item) => (
          <OrderCard
            key={item.id}
            title={item.title}
            image={item.image}
            price={item.price.toFixed(2)}
          />
        ))}
      </div>
    </div>
  );
};

export default MyOrder;
