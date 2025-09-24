import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate, Link } from 'react-router-dom'

export default function Login(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const { login } = useAuth()
  const navigate = useNavigate()

  function handleSubmit(e){
    e.preventDefault()
    setError(null)
    login(email, password).then(()=>navigate('/')).catch(err=>{
      console.error('Login error', err)
      setError(err)
    })
  }

  return (
    <div style={{padding:20}}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} style={{display:'grid', gap:8, maxWidth:400}}>
        <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" required />
        <input value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" type="password" required />
        <button className="btn primary" type="submit">Ingresar</button>
      </form>
      {error && <div style={{color:'red', marginTop:8}}><strong>Error:</strong> {error.code || error.message}
        {error.message === 'Auth not initialized' && <div>La autenticación no está inicializada. Verifica la conexión con Firebase y las variables de entorno.</div>}
      </div>}
      <p>¿No tenés cuenta? <Link to="/register">Registrate</Link></p>
    </div>
  )
}
