import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function CartWidget(){
  const { totalItems } = useCart()
  return (
    <Link to="/cart" className="cartwidget">
      🛒 <span className="badge">{totalItems}</span>
    </Link>
  )
}
