import React from 'react'
import { Link } from 'react-router-dom'

export default function Item({item}){
  return (
    <div className="card">
      <h3>{item.title}</h3>
      <p>{item.category} • ${item.price}</p>
      <Link to={`/item/${item.id}`} className="btn">Ver detalle</Link>
    </div>
  )
}
