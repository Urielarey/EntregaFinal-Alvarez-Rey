import React from 'react'
import { useCart } from '../context/CartContext'

export default function CartItem({item}){
  const { removeItem } = useCart()
  return (
    <div style={{borderBottom:'1px solid #ddd', padding:8}}>
      <h4>{item.title}</h4>
      <p>Cantidad: {item.quantity} • Precio unitario: ${item.price} • Subtotal: ${item.quantity * item.price}</p>
      <button className="btn" onClick={() => removeItem(item.id)}>Eliminar</button>
    </div>
  )
}
