import './App.css';
import {Routes, Route} from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import HomePage from './pages/global/HomePage';
import ContactUs from './pages/global/ContactUs';
import Shops from './pages/global/Shops';
import Cart from './pages/global/Cart';
import SingleProduct from './pages/global/SingleProduct';
import Signup from './pages/auth/Signup';
import Login from './pages/auth/Login';
import NotFound from './pages/global/NotFound';

function App() {
  return (
    <div className="App">
      <br /><br />
      <NavigationBar/>
        <Routes>
          <Route path='' element={<HomePage/>}></Route>
          <Route path='contact' element={<ContactUs/>}></Route>
          <Route path='shops' element={<Shops/>}></Route>
          <Route path='cart' element={<Cart/>}></Route>
          <Route path='product/:index' element={<SingleProduct/>}></Route>

          <Route path='admin' element={<HomePage/>}></Route>
          <Route path='admin/add-product' element={<HomePage/>}></Route>
          <Route path='admin/edit-product/:index' element={<HomePage/>}></Route>
          <Route path='admin/maintain-products' element={<HomePage/>}></Route>
          <Route path='admin/maintain-categories' element={<HomePage/>}></Route>
          <Route path='admin/maintain-shops' element={<HomePage/>}></Route>

          <Route path='login' element={<Login/>}></Route>
          <Route path='signup' element={<Signup/>}></Route>

          <Route path='*' element={<NotFound/>}></Route>

        </Routes>
    </div>
  );
}

export default App;
