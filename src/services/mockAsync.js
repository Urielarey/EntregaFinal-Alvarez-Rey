const products = [
  { id: '1', title: 'Camiseta React', category: 'ropa', price: 25, description: 'Camiseta oficial de React.' },
  { id: '2', title: 'Taza JS', category: 'hogar', price: 10, description: 'Taza con logo de JS.' },
  { id: '3', title: 'Auriculares', category: 'electronica', price: 75, description: 'Auriculares con cancelación.' },
  { id: '4', title: 'Pantalón', category: 'ropa', price: 40, description: 'Pantalón cómodo.' }
]

export function getProducts(){
  return new Promise((resolve) => {
    setTimeout(() => resolve(products), 500)
  })
}

export function getProductById(id){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const found = products.find(p => p.id === id)
      if(found) resolve(found)
      else reject(new Error('Producto no encontrado'))
    }, 400)
  })
}
