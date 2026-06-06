import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ShoppingCartContext } from '../components/Context';
import Card from '../components/Card';
import ProductDetail from '../components/ProductDetail';

const Home = () => {
  const { searchText, setSearchText, getFilteredProducts, products } =
    useContext(ShoppingCartContext);

  const { slug } = useParams(); // UseParams captura el slug dinamico. si no existe retornamos un dato vacio.

  const filteredProducts = getFilteredProducts(slug);

  return (
    <div>
      <div>
        <h1 className="flex justify-center mb-4 text-2xl font-normal uppercase">
          {slug ? slug : 'Home'}
        </h1>
      </div>

      <div className="flex justify-center">
        <input
          className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
          type="text"
          placeholder="Search a product"
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
        />
      </div>

      <div className="grid gap-x-4 gap-y-6 grid-cols-4 w-full max-w-screen-lg">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => <Card key={item.id} data={item} />)
        ) : (
          <div className="col-span-4 text-center text-gray-500">
            We don't have anything
          </div>
        )}
      </div>

      <ProductDetail />
    </div>
  );
};

export default Home;
