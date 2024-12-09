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