import { useState, useEffect } from 'react';
import Card from '../components/Card.jsx';
import ProductDetail from '../components/ProductDetail.jsx';

const Home = () => {
  const [products, setProducts] = useState([]); 

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    }

    fetchItems();
  }, [])

  return (
    <div>
      <p className='flex justify-center mb-8'>
        Home
      </p>
      <div className='grid gap-x-4 gap-y-6 grid-cols-4 w-full max-w-screen-lg'>
        {products.map(item => (
          <Card 
            key={item.id} 
            data={item} 
          />
        ))}
      </div>
      <ProductDetail />
    </div>
  )
};

export default Home;