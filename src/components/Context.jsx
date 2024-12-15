import { createContext, useContext, useEffect, useState } from 'react';

const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({ children }) => {
  const [products, setProducts] = useState([]); 

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    }

    fetchItems();
  }, []);

  const [incrementProduct, setIncrementProduct] = useState(0);
  const increment = () => {
    setIncrementProduct(incrementProduct + 1);
  };

  const [ProductDetailOpen, setProductDetailOpen] = useState(false);
  const openSideMenu = () => setProductDetailOpen(true);
  const closeSideMenu = () => setProductDetailOpen(false);

  const [showProduct, setShowProduct] = useState(null);

  const [cartProducts, setCardProducts] = useState([]);

  const [checkoutSideMenu, setCheckoutSideMenu] = useState(false);
  const openCheckoutSideMenu = () => setCheckoutSideMenu(true);
  const closeCheckoutSideMenu = () => setCheckoutSideMenu(false);

  const [order, setOrder] = useState([]);

  console.log('Order', order)

  //fitrado-----------------------------------------------
  const [searchByTitle, setSearchByTitle] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(null);

  const filteredByTitle = (products, searchByTitle) => {
    return products?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()));//esta es la clasica linea para filtrado, esta vez hace lo que este guardado en el estado searchByTitle
  };

  useEffect(() => {
    if(searchByTitle)  setFilteredProducts(filteredByTitle(products, searchByTitle));

  }, [products, searchByTitle]);//Esto se hace en un useEffect me imagino para activar el seteo apenas se escriba o renderice el nombre o los productos. osea siempre "va a estar atento a cualquier cambio" ya que al final va a seguir recorriendo el mismo array del principo, no es una derivada de una funcion es pasarle el estado.

  console.log('filteres', filteredProducts)

  return (
    <ShoppingCartContext.Provider value={{
      incrementProduct,
      increment,
      setIncrementProduct,
      ProductDetailOpen,
      openSideMenu,
      closeSideMenu,
      showProduct,
      setShowProduct,
      cartProducts,
      setCardProducts,
      checkoutSideMenu,
      setCheckoutSideMenu,
      openCheckoutSideMenu,
      closeCheckoutSideMenu,
      order,
      setOrder,
      products,
      searchByTitle,
      setSearchByTitle,
      filteredProducts,
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
};

const MyContext = () => {
  const context = useContext(ShoppingCartContext);
  return context;
};

export {ShoppingCartProvider, MyContext}