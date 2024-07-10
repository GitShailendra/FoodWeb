import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
import PlaceOrder from './pages/placeorder/PlaceOrder'
import Footer from './components/Footer/Footer'
import { FaArrowUp } from "react-icons/fa";
import Login from './components/loginpopup/Login'

function App() {
  const [login,setLogin] = useState(false);

  return (
    <>
        {login ? <Login setLogin={setLogin} />:<></>}
      <div className="app">
        <a href="/" className='fixed'><FaArrowUp /></a>
        <Navbar setLogin={setLogin}/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/order" element={<PlaceOrder/>}/>

        </Routes>
      </div>
      <Footer/>
    
    </>
    
  )
}

export default App
