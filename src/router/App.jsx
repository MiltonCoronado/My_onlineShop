import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import MyAccount from '../pages/MyAccount';
import MyOrder from '../pages/MyOrder';
import MyOrders from '../pages/MyOrders';
import Signin from '../pages/Signin';
import NotFound from '../pages/NotFound';
import NavBar from '../components/NavBar';
import Layout from '../components/Layout';
import CheckoutSideMenu from '../components/CheckoutSideMenu';
import ProtectedRoute from '../components/ProtectedRoutes';
import { ShoppingCartProvider } from '../components/Context';

const App = () => {
  return (
    <HashRouter>
      <ShoppingCartProvider>
        <NavBar />
        <CheckoutSideMenu />
        <Layout>
          <Routes>
            {/* :slug => para capturar rutas dinamicas*/}
            <Route path="/" element={<Home />} />
            <Route path="/:slug" element={<Home />} />
            <Route
              path="/my-account"
              element={
                <ProtectedRoute>
                  <MyAccount />
                </ProtectedRoute>
              }
            />
            <Route
              path="/my-orders"
              element={
                <ProtectedRoute>
                  <MyOrders />
                </ProtectedRoute>
              }
            />
            <Route
              path="/my-order/:index"
              element={
                <ProtectedRoute>
                  <MyOrder />
                </ProtectedRoute>
              }
            />
            <Route path="/sign-in" element={<Signin />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </ShoppingCartProvider>
    </HashRouter>
  );
};

export default App;
