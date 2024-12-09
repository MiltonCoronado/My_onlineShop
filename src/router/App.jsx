import { HashRouter, Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import MyAccount from '../pages/MyAccount';
import MyOrder from '../pages/MyOrder';
import MyOrders from '../pages/MyOrders';
import Signin from '../pages/Signin';
import NotFound from '../pages/NotFound';
import NavBar from '../components/NavBar';
import Layout from '../components/Layout';
import { ShoppingCartProvider } from '../components/Context.jsx';
import CheckoutSideMenu from '../components/CheckoutSideMenu.jsx';

const App = () => {
  return (
    <HashRouter>
      <ShoppingCartProvider>
        <NavBar />
        <Layout>
        <CheckoutSideMenu />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/my-account' element={<MyAccount />} />
            <Route path='/my-order' element={<MyOrder />} />
            <Route path='/my-orders' element={<MyOrders />} />
            <Route path='/my-orders/last' element={<MyOrder />} />
            <Route path='/sign-in' element={<Signin />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Layout>
      </ShoppingCartProvider>
    </HashRouter>
  )
};

export default App;