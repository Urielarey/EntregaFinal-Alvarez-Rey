import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate, Link } from 'react-router-dom'

export default function Register(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { register } = useAuth()
  const navigate = useNavigate()
  const [error, setError] = useState(null)

  function handleSubmit(e){
    e.preventDefault()
    setError(null)
    register(email, password).then(()=>navigate('/')).catch(err=>{
      console.error('Register error', err)
      setError(err)
    })
  }

  return (
    <div style={{padding:20}}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit} style={{display:'grid', gap:8, maxWidth:400}}>
        <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" required />
        <input value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" type="password" required />
        <button className="btn primary" type="submit">Crear cuenta</button>
      </form>
      {error && <div style={{color:'red', marginTop:8}}><strong>Error:</strong> {error.code || error.message}
        {error.message === 'Auth not initialized' && <div>La autenticación no está inicializada. Verifica la conexión con Firebase y las variables de entorno.</div>}
      </div>}
      <p>¿Ya tenés cuenta? <Link to="/login">Ingresar</Link></p>
    </div>
  )
}
