import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import ItemListContainer from './containers/ItemListContainer'
import ItemDetailContainer from './containers/ItemDetailContainer'
import { CartProvider } from './context/CartContext'
import { AuthProvider } from './context/AuthContext'
import Login from './pages/Login'
import Register from './pages/Register'
import MyOrders from './pages/MyOrders'
import Cart from './presentation/Cart'
import CheckoutForm from './presentation/CheckoutForm'
import { useEffect, useState } from 'react'

function NotFound(){
  return <h2 style={{padding:20}}>404 - Página no encontrada</h2>
}

export default function App(){
  return (
    <AuthProvider>
      <CartProvider>
        <div>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer/>} />
            <Route path='/category/:categoryId' element={<ItemListContainer/>} />
            <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/checkout' element={<CheckoutForm/>} />
            <Route path='/orders' element={<MyOrders/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='*' element={<NotFound/>} />
          </Routes>
        </div>
      </CartProvider>
    </AuthProvider>
  )
}
