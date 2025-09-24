import React, { createContext, useContext, useEffect, useState } from 'react'
import { initializeApp } from 'firebase/app'
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'

function getEnvVar(key){
  try{
    if(typeof import.meta !== 'undefined' && import.meta.env && import.meta.env[key]) return import.meta.env[key]
  }catch(e){}
  // avoid referencing process in browser
  try{
    if(typeof process !== 'undefined' && process.env && process.env[key]) return process.env[key]
  }catch(e){}
  return undefined
}

const firebaseConfig = {
  apiKey: getEnvVar('VITE_FIREBASE_API_KEY'),
  authDomain: getEnvVar('VITE_FIREBASE_AUTH_DOMAIN'),
  projectId: getEnvVar('VITE_FIREBASE_PROJECT_ID'),
  storageBucket: getEnvVar('VITE_FIREBASE_STORAGE_BUCKET'),
  messagingSenderId: getEnvVar('VITE_FIREBASE_MESSAGING_SENDER_ID'),
  appId: getEnvVar('VITE_FIREBASE_APP_ID'),
  measurementId: getEnvVar('VITE_FIREBASE_MEASUREMENT_ID')
}

let auth = null
try{
  if(firebaseConfig.projectId){
    const app = initializeApp(firebaseConfig)
    auth = getAuth(app)
  }
}catch(e){ console.warn('Firebase Auth init failed', e) }

const AuthContext = createContext()

export function useAuth(){ return useContext(AuthContext) }

export function AuthProvider({children}){
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if(!auth){ setLoading(false); return }
    const unsub = onAuthStateChanged(auth, u => { setUser(u); setLoading(false) })
    return unsub
  }, [])

  const register = (email, password) => {
    if(!auth) return Promise.reject(new Error('Auth not initialized'))
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const login = (email, password) => {
    if(!auth) return Promise.reject(new Error('Auth not initialized'))
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logout = () => {
    if(!auth) return Promise.reject(new Error('Auth not initialized'))
    return signOut(auth)
  }

  return (
    <AuthContext.Provider value={{user, loading, register, login, logout}}>
      {children}
    </AuthContext.Provider>
  )
}
