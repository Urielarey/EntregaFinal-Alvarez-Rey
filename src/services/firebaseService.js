// Firebase / Firestore service with fallback to mock data
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore, collection, getDocs, doc, getDoc, addDoc, serverTimestamp, query, where } from 'firebase/firestore'
import * as mock from './mockAsync'

// Support reading config from Vite env (`import.meta.env`) or process.env (for Node scripts)
function getEnvVar(key, fallback=''){
  try{
    if(typeof import.meta !== 'undefined' && import.meta.env && import.meta.env[key]) return import.meta.env[key]
  }catch(e){}
  try{
    if(typeof process !== 'undefined' && process.env && process.env[key]) return process.env[key]
  }catch(e){}
  return fallback
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

let db = null
try{
  // Only initialize if we have a projectId (simple check)
  if(firebaseConfig.projectId){
    const app = initializeApp(firebaseConfig)
    try{ getAnalytics(app) }catch(e){ /* ignore analytics errors in non-browser env */ }
    db = getFirestore(app)
  }
} catch(e){
  console.error('Firebase init failed, using mock', e)
  db = null
}

export async function getProducts(){
  if(!db) return mock.getProducts()
  try{
    const col = collection(db, 'products')
    const snap = await getDocs(col)
    return snap.docs.map(d => ({ id: d.id, ...d.data() }))
  } catch(err){
    console.error('Firestore getProducts failed, falling back to mock', err)
    return mock.getProducts()
  }
}

export async function getProductById(id){
  if(!db) return mock.getProductById(id)
  try{
    const ref = doc(db, 'products', id)
    const snap = await getDoc(ref)
    if(snap.exists()) return { id: snap.id, ...snap.data() }
    throw new Error('not found')
  } catch(err){
    console.error('Firestore getProductById failed, falling back to mock', err)
    return mock.getProductById(id)
  }
}

export async function createOrder(orderData){
  if(!db) {
    // simulate delay and id
    await new Promise(r => setTimeout(r, 300))
    return 'MOCK-' + Math.random().toString(36).slice(2,9).toUpperCase()
  }
  try{
    const col = collection(db, 'orders')
    const ref = await addDoc(col, { ...orderData, createdAt: serverTimestamp() })
    return ref.id
  } catch(err){
    console.error('Firestore createOrder failed, fallback to mock id', err)
    await new Promise(r => setTimeout(r, 300))
    return 'MOCK-' + Math.random().toString(36).slice(2,9).toUpperCase()
  }
}

export async function getOrdersByUser(uid){
  if(!db) return []
  try{
    const col = collection(db, 'orders')
    const q = query(col, where('buyer.uid', '==', uid))
    const snap = await getDocs(q)
    return snap.docs.map(d => ({ id: d.id, ...d.data() }))
  } catch(err){
    console.error('Firestore getOrdersByUser failed', err)
    return []
  }
}
