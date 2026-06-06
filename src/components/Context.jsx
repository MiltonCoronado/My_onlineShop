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

  // Intenta leer si ya existe una cuenta en LocalStorage, si no, inicia vacío
  const [account, setAccount] = useState(() => {
    const savedAccount = localStorage.getItem('account');
    return savedAccount ? JSON.parse(savedAccount) : {};
  });

  // Intenta leer el estado de Sign-Out. Por defecto es true (sesión cerrada) si no hay nada
  const [signOut, setSignOut] = useState(() => {
    const savedSignOut = localStorage.getItem('sign-out');
    return savedSignOut ? JSON.parse(savedSignOut) : true;
  });

  // --- FUNCIONES DE AUTENTICACIÓN ---

  // Registrar usuario (Imagen 4 y 5)
  const signUpUser = (newAccount) => {
    localStorage.setItem('account', JSON.stringify(newAccount));
    localStorage.setItem('sign-out', JSON.stringify(false));
    setAccount(newAccount);
    setSignOut(false);
  };

  // Iniciar sesión (Imagen 1)
  const loginUser = () => {
    localStorage.setItem('sign-out', JSON.stringify(false));
    setSignOut(false);
  };

  // Cerrar sesión
  const logoutUser = () => {
    localStorage.setItem('sign-out', JSON.stringify(true));
    setSignOut(true);
  };

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
        account,
        signOut,
        setAccount,
        setSignOut,
        signUpUser,
        loginUser,
        logoutUser,
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
