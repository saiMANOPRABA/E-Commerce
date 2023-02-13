import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './components/Layout';
import Home from './pages/Home';
import Blog from './pages/Blog';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
import CompareProduct from './pages/CompareProduct';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import SignUp from './pages/SignUp';
import ResetPassword from './pages/ResetPassword';
import SingleBlog from './pages/SingleBlog';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import RefundPolicy from './pages/RefundPolicy';
import TermsAndCondition from './pages/TermsAndCondition';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout'


function App() {
  return<>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Layout/>}>
    <Route index element ={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='home' element={<Home/>}/>
    <Route path='contact' element={<Contact/>}/> 
    <Route path='store' element={<OurStore/>}/> 
    <Route path='product/id:' element={<SingleProduct/>}/> 
    <Route path='blogs' element={<Blog/>}/>
    <Route path='blog/id:' element={<SingleBlog/>}/>
    <Route path='compare' element={<CompareProduct/>}/>
    <Route path='wishlist' element={<Wishlist/>}/>
    <Route path='login' element={<Login/>}/>
    <Route path='forgot-password' element={<ForgotPassword/>}/>
    <Route path='signup' element={<SignUp/>}/>
    <Route path='reset-password' element={<ResetPassword/>}/>
    <Route path='privacy-policy' element={<PrivacyPolicy/>}/>
    <Route path='shipping-policy' element={<ShippingPolicy/>}/>
    <Route path='terms-condition' element={<TermsAndCondition/>}/>
    <Route path='refund-policy' element={<RefundPolicy/>}/>
    <Route path='cart' element={<Cart/>}/>
    <Route path='checkout' element={<Checkout/>}/>

    </Route>
  </Routes>
  </BrowserRouter>
  </>
  }


export default App;
