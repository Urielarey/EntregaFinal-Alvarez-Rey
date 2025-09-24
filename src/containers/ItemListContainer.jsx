import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts } from '../services/firebaseService'
import ItemList from '../presentation/ItemList'

export default function ItemListContainer(){
  const { categoryId } = useParams()
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    setError(null)
    getProducts().then(data => {
      if(categoryId){
        setItems(data.filter(p => p.category === categoryId))
      } else {
        setItems(data)
      }
    }).catch(err => {
      setError('No se pudo conectar a Firestore. Mostrando productos de prueba.')
    }).finally(() => setLoading(false))
  }, [categoryId])

  return (
    <div style={{padding:20}}>
      {loading ? <p>Cargando productos...</p> : <>
        {error && <div style={{color:'red', marginBottom:8}}>{error}</div>}
        <ItemList items={items} />
      </>}
    </div>
  )
}
