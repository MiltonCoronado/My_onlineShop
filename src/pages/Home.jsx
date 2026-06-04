import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ShoppingCartContext } from '../components/Context.jsx';
import Card from '../components/Card.jsx';
import ProductDetail from '../components/ProductDetail.jsx';

const Home = () => {
  const {
    searchByOptionAtNavBar,
    setSearchByOptionAtNavBar,
    searchByTitle,
    setSearchByTitle,
    filteredProducts,
    products,
  } = useContext(ShoppingCartContext);

  const { slug } = useParams(); // UseParams captura el endpoint dinamico. si no existe(miltonext ve tu lo que haces).

  // Sincroniza la URL con el estado de filtrado del contexto
  useEffect(() => {
    if (slug === '/' || slug === 'clothing' || slug === 'electronics') {
      setSearchByOptionAtNavBar(slug);
    } else {
      setSearchByOptionAtNavBar(null);
    }
  }, [slug, setSearchByOptionAtNavBar]);

  // Renderiza la vista dependiendo de lo que dicte el contexto
  const renderView = () => {
    // Si el usuario está buscando algo (por título o categoría)
    if (searchByTitle?.length > 0 || searchByOptionAtNavBar) {
      if (filteredProducts?.length > 0) {
        return filteredProducts.map((item) => (
          <Card key={item.id} data={item} />
        ));
      } else {
        return (
          <div className="col-span-4 text-center text-gray-500">
            We don't have anything
          </div>
        );
      }
    }

    // Si no hay filtros activos, muestra todos los productos cargados
    return products?.map((item) => <Card key={item.id} data={item} />);
  };

  return (
    <div>
      <div>
        <h1 className="flex justify-center mb-4 text-2xl font-bold uppercase">
          {slug ? slug : 'Home'}
        </h1>
      </div>

      <div className="flex justify-center">
        <input
          className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
          type="text"
          placeholder="Search a product"
          onChange={(event) => {
            setSearchByTitle(event.target.value);
          }}
        />
      </div>

      <div className="grid gap-x-4 gap-y-6 grid-cols-4 w-full max-w-screen-lg">
        {renderView()}
      </div>

      <ProductDetail />
    </div>
  );
};

export default Home;
