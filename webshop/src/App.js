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
import AdminHome from './pages/admin/AdminHome';
import AddProduct from './pages/admin/AddProduct';
import EditProduct from './pages/admin/EditProduct';
import MaintainProducts from './pages/admin/MaintainProducts';
import EditCategories from './pages/admin/EditCategories';
import MaintainShops from './pages/admin/MaintainShops';
import Supplier from './pages/admin/Supplier';
import BookSupplier from './pages/admin/BookSupplier';

function App() {
  return (
    <div className="App">
        <NavigationBar/>
        <Routes>
          <Route path='' element={<HomePage/>}></Route>
          <Route path='contact' element={<ContactUs/>}></Route>
          <Route path='shops' element={<Shops/>}></Route>
          <Route path='cart' element={<Cart/>}></Route>
          <Route path='product/:id' element={<SingleProduct/>}></Route>

          <Route path='admin' element={<AdminHome/>}></Route>
          <Route path='admin/add-product' element={<AddProduct/>}></Route>
          <Route path='admin/edit-product/:id' element={<EditProduct/>}></Route>
          <Route path='admin/maintain-products' element={<MaintainProducts/>}></Route>
          <Route path='admin/maintain-categories' element={<EditCategories/>}></Route>
          <Route path='admin/maintain-shops' element={<MaintainShops/>}></Route>
          <Route path='admin/supplier' element={<Supplier/>}></Route>
          <Route path='admin/book-supplier' element={<BookSupplier/>}></Route>

          <Route path='login' element={<Login/>}></Route>
          <Route path='signup' element={<Signup/>}></Route>

          <Route path='*' element={<NotFound/>}></Route>

        </Routes>
    </div>
  );
}

export default App;

// N 30.05 -> 3/4s keel siin projektis. uudised projektile Bootstrap+tõlge
// 4ak/h
// 15.45-18.00   3x45min
// 13. 03.06 E 17.30-20.45
// 14. 06.06 N 17.30-20.45
// 15. 10.06 E 17.30-20.45
// 16. 13.06 N 11.00-14.15
// 17. 17.06 E 17.30-20.45
// 18a. 27.06 N ---> 45min 17.30-18.15
// 18. 04.07 N ---> 2ak/h  1.5h  17.30-19.00

// Lõpuprojekt:
// * React
// * Firebase-i üles pandud
// * Githubi üles pandud

// Youtube-s: React project
// Udemy.com: Free React
// ChatGPT / OpenAI --> tema käest küsida, kust leiab häid Reacti projekte