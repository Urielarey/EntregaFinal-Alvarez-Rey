import React from 'react'
import { useCart } from '../context/CartContext'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'

export default function Cart(){
  const { items, totalPrice, clearCart } = useCart()

  if(!items.length) return <div style={{padding:20}}><p>El carrito está vacío.</p><Link to="/">Volver al catálogo</Link></div>

  return (
    <div style={{padding:20}}>
      <h2>Carrito</h2>
      {items.map(i => <CartItem key={i.id} item={i} />)}
      <h3>Total: ${totalPrice}</h3>
      <div style={{display:'flex', gap:8}}>
        <Link to="/checkout" className="btn primary">Finalizar compra</Link>
        <button className="btn" onClick={clearCart}>Vaciar carrito</button>
      </div>
    </div>
  )
}
