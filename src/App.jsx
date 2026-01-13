import React from 'react'
import Navbar from './Components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Cart from './pages/Cart/Cart'
import Homepage from './pages/Homepage'
import ProductDetails from './pages/ProductDetails'
import Footer from './Components/Footer'
import ProductList from './Components/ProductList'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path="/productList" element={<ProductList />} />
        <Route path='/product/:id' element={<ProductDetails/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App