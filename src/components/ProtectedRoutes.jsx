import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { ShoppingCartContext } from './Context';

const ProtectedRoute = ({ children }) => {
  const { account, signOut } = useContext(ShoppingCartContext);
  const hasUserAnAccount = Object.keys(account).length > 0;
  const isUserLogged = hasUserAnAccount && !signOut;

  if (!isUserLogged) {
    return <Navigate to="/sign-in" replace />;
  }

  return children;
};

export default ProtectedRoute;
