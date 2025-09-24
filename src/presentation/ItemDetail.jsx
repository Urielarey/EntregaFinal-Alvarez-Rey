import React from 'react'
import ItemCount from './ItemCount'

export default function ItemDetail({item}){
  return (
    <div style={{padding:20}}>
      <h2>{item.title}</h2>
      <p><strong>Categoría:</strong> {item.category}</p>
      <p><strong>Precio:</strong> ${item.price}</p>
      <p>{item.description}</p>
      <ItemCount stock={10} initial={1} product={item} />
    </div>
  )
}
