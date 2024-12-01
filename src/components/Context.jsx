import { createContext, useContext, useState } from 'react';

const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({ children }) => {

  const [incrementProduct, setIncrementProduct] = useState(0);

  const increment = () => {
    setIncrementProduct(incrementProduct + 1);
  };

  return (
    <ShoppingCartContext.Provider value={{
      incrementProduct,
      increment,
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