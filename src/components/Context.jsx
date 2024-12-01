import { createContext, useContext, useState } from 'react';

const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({ children }) => {
  const [incrementProduct, setIncrementProduct] = useState(0);
  const increment = () => {
    setIncrementProduct(incrementProduct + 1);
  };

  const [ProductDetailOpen, setProductDetailOpen] = useState(false);
  const openSideMenu = () => setProductDetailOpen(true);
  const closeSideMenu = () => setProductDetailOpen(false);

  const [showProduct, setShowProduct] = useState(null);

  return (
    <ShoppingCartContext.Provider value={{
      incrementProduct,
      increment,
      ProductDetailOpen,
      openSideMenu,
      closeSideMenu,
      showProduct,
      setShowProduct,
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