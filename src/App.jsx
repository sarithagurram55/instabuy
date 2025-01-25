import { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import {Routes, Route, useNavigate} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import { Badge } from 'react-bootstrap';

import './App.css'
import Logo from "./assets/7.png"

import Home from './components/Home';
import Loginn from './components/Login';
import Signup from './components/Signup';
import ProductGallery from './components/ProductGallery';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState('');
  const [cartItems, setCartItems] = useState({});

  useEffect(()=>{
    const userEmail = localStorage.getItem('userEmail');
    if(userEmail){
      setUser(userEmail)
    }
  }, []);

  const handleAddToCart = (item) =>{
    setCartItems({...cartItems, ...item})
  }

  return (
    <div>    
      <Navbar className="instabuy-navbar">
       <Navbar.Brand onClick={()=>navigate('/')}>
          <img alt='' src={Logo} width="25px" />
          Instabuy!</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
           {user && <Button onClick={()=> navigate('/cart')}>Cart &nbsp;{Object.keys(cartItems).length > 0 && (<Badge bg = 'success'>{Object.keys(cartItems).length} </Badge>)}</Button>}
            &nbsp;&nbsp;&nbsp;
            <button onClick={()=> navigate('/login')}>{user ? 'Logout' :'Login'}</button>
          </Navbar.Collapse>
      </Navbar>
      <Routes>
        <Route path='/' element={<Home user={user} />} />
        <Route path='/login' element={<Loginn setUser={setUser}/>} />
        <Route path='/signup' element={<Signup setUser={setUser}/>} />
        <Route path='/products' element={<ProductGallery/>} />
        <Route path='/product/:id' element={<ProductDetails handleAddToCart={handleAddToCart} cartItems={cartItems}/>} />
        <Route path='/cart' element={<Cart cartItems={cartItems}/>} />
        <Route path='/checkout' element={<Checkout/>} />
      </Routes>
      {/* <Home /> */}
      {/* < Loginn />
      <Signup/> */}
    </div>
  )
}

export default App
