import { createContext, useContext, useEffect, useState } from 'react';

const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState('');

  // Estados de UI y Carrito
  const [incrementProduct, setIncrementProduct] = useState(0);
  const [ProductDetailOpen, setProductDetailOpen] = useState(false);
  const [showProduct, setShowProduct] = useState(null);
  const [cartProducts, setCardProducts] = useState([]);
  const [checkoutSideMenu, setCheckoutSideMenu] = useState(false);
  const [order, setOrder] = useState([]);

  // Estados de Filtrado
  const [searchByTitle, setSearchByTitle] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    };
    fetchItems();
  }, []);

  const getFilteredProducts = (slug) => {
    const validPaths = ['clothing', 'electronics', 'jewelery'];
    const currentCategory = validPaths.includes(slug) ? slug : null;

    return (
      products?.filter((product) => {
        const matchesCategory = currentCategory
          ? product.category
              .toLowerCase()
              .includes(currentCategory.toLowerCase())
          : true;

        const matchesTitle = searchText
          ? product.title.toLowerCase().includes(searchText.toLowerCase())
          : true;

        return matchesCategory && matchesTitle;
      }) || []
    );
  };

  const increment = () => setIncrementProduct(incrementProduct + 1);
  const openSideMenu = () => setProductDetailOpen(true);
  const closeSideMenu = () => setProductDetailOpen(false);
  const openCheckoutSideMenu = () => setCheckoutSideMenu(true);
  const closeCheckoutSideMenu = () => setCheckoutSideMenu(false);

  return (
    <ShoppingCartContext.Provider
      value={{
        incrementProduct,
        searchText,
        ProductDetailOpen,
        showProduct,
        cartProducts,
        checkoutSideMenu,
        order,
        products,
        searchByTitle,
        increment,
        setSearchText,
        setIncrementProduct,
        openSideMenu,
        closeSideMenu,
        setShowProduct,
        setCardProducts,
        setCheckoutSideMenu,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        setOrder,
        getFilteredProducts,
        setSearchByTitle,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export { ShoppingCartProvider, ShoppingCartContext };
