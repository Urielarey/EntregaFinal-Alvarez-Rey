import React from 'react'
import { NavLink } from 'react-router-dom'
import CartWidget from './CartWidget'
import { useAuth } from '../context/AuthContext'

const categories = [
  { id: 'bolsos', label: 'Bolsos' },
  { id: 'mochilas', label: 'Mochilas' },
  { id: 'riñoneras', label: 'Riñoneras' }
]

export default function NavBar(){
  const { user, logout } = useAuth()
  return (
    <nav className="navbar">
      <div style={{display:'flex', alignItems:'center', gap:16}}>
        <NavLink to="/" className="logo">VRBAGS</NavLink>
        <NavLink to="/">Todos</NavLink>
        {categories.map(c => (
          <NavLink key={c.id} to={`/category/${c.id}`}>{c.label}</NavLink>
        ))}
      </div>
      <div style={{display:'flex', alignItems:'center', gap:12}}>
        {user ? (
          <>
            <span style={{marginRight:8}}>{user.email}</span>
            <NavLink to="/orders" className="btn">Mis órdenes</NavLink>
            <button className="btn" onClick={logout}>Salir</button>
          </>
        ) : (
          <NavLink to="/login" className="btn">Ingresar</NavLink>
        )}
        <CartWidget />
      </div>
    </nav>
  )
}
