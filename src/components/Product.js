import React from 'react'
import './Product.css'

function Product({ product }) {
  return (
    <div className="product">
      <div className="product-container">
        <img src={product.image} alt={product.title} className="product-image" />
      </div>
      <div className="product-details">
        <h2 className="product-title">{product.title}</h2>
        <div className="product-rating">
          <span>⭐ {product.rating.rate}</span>
          <span> ({product.rating.count} reviews)</span>
        </div>
        <p className="product-price">${product.price}</p>
        <p className="product-category">Category: {product.category}</p>
        <p className="product-description">{product.description}</p>
        <button className="add-to-cart-button">Add to Cart</button>
        <button className="buy-now-button">Buy Now</button>
      </div>
    </div>
  )
}

export default Product
