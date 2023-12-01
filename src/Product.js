import React from 'react'
import './Product.css'

function Product() {
  return (
    <div className='product'>
      <div className='product__info'>
        <p>The Lean Startup</p>
        <p className='product__price'>
            <small>$</small>
            <strong>11.95</strong>
        </p>
        <div className='product__rating'>
            <p>🌟🌟🌟</p>
        </div>
      </div>

      <img src='https://www.crossword.in/cdn/shop/products/9780670921607.jpg?v=1680194129' alt="" />
      <button>Add to Basket</button>
    </div>
  )
}

export default Product
