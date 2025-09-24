import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../services/firebaseService'
import ItemDetail from '../presentation/ItemDetail'

export default function ItemDetailContainer(){
  const { itemId } = useParams()
  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    setError(null)
    getProductById(itemId).then(p => setItem(p)).catch(err => setError(err.message)).finally(() => setLoading(false))
  }, [itemId])

  if(loading) return <p style={{padding:20}}>Cargando detalle...</p>
  if(error) return <p style={{padding:20}}>Error: {error}</p>
  return <ItemDetail item={item} />
}
