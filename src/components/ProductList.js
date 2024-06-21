import React, { useEffect, useState } from 'react'
import Product from './Product'
import './ProductList.css'

function ProductList() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error))
  }, [])

  return (
    <div className="product-list">
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductList