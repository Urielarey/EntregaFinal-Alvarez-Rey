import React, { useState } from 'react'
import { useCart } from '../context/CartContext'

export default function ItemCount({stock=0, initial=1, product}){
  const [count, setCount] = useState(initial)
  const [added, setAdded] = useState(false)
  const { addItem } = useCart()

  const inc = () => setCount(c => Math.min(stock, c+1))
  const dec = () => setCount(c => Math.max(1, c-1))

  function handleAdd(){
    addItem(product, count)
    setAdded(true)
  }

  if(added) return <p>Producto agregado al carrito.</p>

  return (
    <div style={{marginTop:10}}>
      <div className="count">
        <button onClick={dec}>-</button>
        <span>{count}</span>
        <button onClick={inc}>+</button>
      </div>
      <button className="btn primary" style={{marginTop:8}} onClick={handleAdd}>Agregar al carrito</button>
    </div>
  )
}
