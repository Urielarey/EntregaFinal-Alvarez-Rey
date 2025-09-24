import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export function useCart(){
  return useContext(CartContext)
}

export function CartProvider({children}){
  const [items, setItems] = useState([])

  function addItem(product, quantity){
    setItems(prev => {
      const existing = prev.find(i => i.id === product.id)
      if(existing){
        return prev.map(i => i.id === product.id ? {...i, quantity: i.quantity + quantity} : i)
      }
      return [...prev, {...product, quantity}]
    })
  }

  function removeItem(id){
    setItems(prev => prev.filter(i => i.id !== id))
  }

  function clearCart(){
    setItems([])
  }

  const totalItems = items.reduce((s, i) => s + i.quantity, 0)
  const totalPrice = items.reduce((s, i) => s + i.quantity * i.price, 0)

  return (
    <CartContext.Provider value={{items, addItem, removeItem, clearCart, totalItems, totalPrice}}>
      {children}
    </CartContext.Provider>
  )
}
