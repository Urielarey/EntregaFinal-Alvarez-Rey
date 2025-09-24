import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { getOrdersByUser } from '../services/firebaseService'

export default function MyOrders(){
  const { user } = useAuth()
  const [orders, setOrders] = useState([])

  useEffect(() => {
    if(!user) return
    getOrdersByUser(user.uid).then(setOrders)
  }, [user])

  if(!user) return <div style={{padding:20}}><p>Debes ingresar para ver tus órdenes.</p></div>

  return (
    <div style={{padding:20}}>
      <h2>Mis órdenes</h2>
      {orders.length === 0 ? <p>No tenés órdenes todavía.</p> : (
        orders.map(o => (
          <div key={o.id} style={{border:'1px solid #ddd', padding:8, marginBottom:8}}>
            <h4>Orden {o.id}</h4>
            <p>Total: ${o.total}</p>
            <p>Items:</p>
            <ul>{o.items.map(it => <li key={it.id}>{it.title} x {it.quantity}</li>)}</ul>
          </div>
        ))
      )}
    </div>
  )
}
