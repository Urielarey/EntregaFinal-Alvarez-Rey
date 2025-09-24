// Script to seed Firestore with products from data/products.json
// Usage: set the Vite env vars in .env.local or set env vars then run with node:
// Windows PowerShell example:
// $env:VITE_FIREBASE_PROJECT_ID="your-project-id"; $env:VITE_FIREBASE_API_KEY="..."; node scripts/seedProducts.js

import fs from 'fs'
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

if(!cfg.projectId){
  console.error('Missing VITE_FIREBASE_PROJECT_ID env var')
  process.exit(1)
}

const app = initializeApp(cfg)
const db = getFirestore(app)

const raw = fs.readFileSync('./data/products.json', 'utf8')
const products = JSON.parse(raw)

async function seed(){
  const col = collection(db, 'products')
  for(const p of products){
    const ref = await addDoc(col, p)
    console.log('Added', ref.id)
  }
}

seed().then(()=>console.log('Done')).catch(err=>{ console.error(err); process.exit(1) })
