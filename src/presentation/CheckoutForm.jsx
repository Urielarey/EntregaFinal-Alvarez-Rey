import React, { useState } from 'react'
import { useCart } from '../context/CartContext'
import { createOrder } from '../services/firebaseService'
import { useAuth } from '../context/AuthContext'
import { Link } from 'react-router-dom'

export default function CheckoutForm(){
  const { items, totalPrice, clearCart } = useCart()
  const { user } = useAuth()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [orderId, setOrderId] = useState(null)

  function handleSubmit(e){
    e.preventDefault()
    if(!user){
      alert('Debes ingresar para completar la compra')
      return
    }
    const order = {
      buyer: { name, email, uid: user.uid, userEmail: user.email },
      items: items.map(i => ({ id: i.id, title: i.title, price: i.price, quantity: i.quantity })),
      total: totalPrice
    }
    setOrderId('...generando...')
    createOrder(order).then(id => {
      setOrderId(id)
      clearCart()
    }).catch(err => {
      console.error('createOrder error', err)
      setOrderId('ERROR')
    })
  }

  if(orderId) return (
    <div style={{padding:20}}>
      <h2>Gracias por tu compra, {name}!</h2>
      <p>Tu id de orden es: <strong>{orderId}</strong></p>
      <p>Se enviará un correo a: {email}</p>
    </div>
  )

  if(!user) return (
    <div style={{padding:20}}>
      <p>Debes <Link to="/login">ingresar</Link> para finalizar la compra.</p>
    </div>
  )

  return (
    <div style={{padding:20}}>
      <h2>Checkout</h2>
      <p>Total a pagar: ${totalPrice}</p>
      <form onSubmit={handleSubmit} style={{display:'grid', gap:8, maxWidth:400}}>
        <input placeholder="Nombre" value={name} onChange={e=>setName(e.target.value)} required />
        <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} type="email" required />
        <button className="btn primary" type="submit">Confirmar compra</button>
      </form>
    </div>
  )
}
