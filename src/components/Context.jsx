import { createContext, useContext, useEffect, useState } from 'react';

const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(null);

  // Estados de UI y Carrito
  const [incrementProduct, setIncrementProduct] = useState(0);
  const [ProductDetailOpen, setProductDetailOpen] = useState(false);
  const [showProduct, setShowProduct] = useState(null);
  const [cartProducts, setCardProducts] = useState([]);
  const [checkoutSideMenu, setCheckoutSideMenu] = useState(false);
  const [order, setOrder] = useState([]);

  // Estados de Filtrado
  const [searchByTitle, setSearchByTitle] = useState(null);
  const [searchByOptionAtNavBar, setSearchByOptionAtNavBar] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    };
    fetchItems();
  }, []);

  const filteredByTitle = (items, title) => {
    return items?.filter((item) =>
      item.title.toLowerCase().includes(title.toLowerCase()),
    );
  };

  const filteredByOptionAtNavBar = (products, searchByOptionAtNavBar) => {
    const option = searchByOptionAtNavBar?.toLowerCase();
    if (!option || option === 'all') return products;

    return products?.filter((item) =>
      item.category.toLowerCase().includes(option),
    );
  };

  useEffect(() => {
    let result = products;

    if (searchByTitle && searchByOptionAtNavBar) {
      result = filteredByOptionAtNavBar(products, searchByOptionAtNavBar);
      result = filteredByTitle(result, searchByTitle);
    } else if (searchByTitle) {
      result = filteredByTitle(products, searchByTitle);
    } else if (searchByOptionAtNavBar) {
      result = filteredByOptionAtNavBar(products, searchByOptionAtNavBar);
    }

    setFilteredProducts(result);
  }, [products, searchByTitle, searchByOptionAtNavBar]);

  const increment = () => setIncrementProduct(incrementProduct + 1);
  const openSideMenu = () => setProductDetailOpen(true);
  const closeSideMenu = () => setProductDetailOpen(false);
  const openCheckoutSideMenu = () => setCheckoutSideMenu(true);
  const closeCheckoutSideMenu = () => setCheckoutSideMenu(false);

  return (
    <ShoppingCartContext.Provider
      value={{
        incrementProduct,
        ProductDetailOpen,
        showProduct,
        cartProducts,
        checkoutSideMenu,
        order,
        products,
        searchByTitle,
        searchByOptionAtNavBar,
        filteredProducts,
        increment,
        setIncrementProduct,
        openSideMenu,
        closeSideMenu,
        setShowProduct,
        setCardProducts,
        setCheckoutSideMenu,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        setOrder,
        setSearchByTitle,
        setSearchByOptionAtNavBar,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export { ShoppingCartProvider, ShoppingCartContext };
