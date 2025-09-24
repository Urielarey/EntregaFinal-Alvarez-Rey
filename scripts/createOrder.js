// Script to create an order in Firestore using current products in cart-like payload
// Usage: set VITE_FIREBASE_* env vars and run: node scripts/createOrder.js

import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc } from 'firebase/firestore'

function getEnv(k){ return process.env[k] }

const cfg = {
  apiKey: getEnv('VITE_FIREBASE_API_KEY'),
  authDomain: getEnv('VITE_FIREBASE_AUTH_DOMAIN'),
  projectId: getEnv('VITE_FIREBASE_PROJECT_ID'),
  storageBucket: getEnv('VITE_FIREBASE_STORAGE_BUCKET'),
  messagingSenderId: getEnv('VITE_FIREBASE_MESSAGING_SENDER_ID'),
  appId: getEnv('VITE_FIREBASE_APP_ID'),
  measurementId: getEnv('VITE_FIREBASE_MEASUREMENT_ID')
}

if(!cfg.projectId){ console.error('Missing VITE_FIREBASE_PROJECT_ID'); process.exit(1) }

const app = initializeApp(cfg)
const db = getFirestore(app)

async function create(){
  const order = {
    buyer: { name: 'Test User', email: 'test@example.com' },
    items: [
      { id: 'cTTLyRVsulbOdhLsElLU', title: 'Camiseta React', price: 25, quantity: 2 }
    ],
    total: 50
  }
  const ref = await addDoc(collection(db, 'orders'), order)
  console.log('Order created with id', ref.id)
}

create().catch(err=>{ console.error(err); process.exit(1) })
