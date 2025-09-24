import React from 'react'
import Item from './Item'

export default function ItemList({items}){
  if(!items.length) return <p>No hay productos para mostrar.</p>

  return (
    <div className="grid">
      {items.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  )
}
