import React from 'react'
import './Home.css'
import Product from './Product'


function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img className='home__image' src="https://m.media-amazon.com/images/I/71j8damPo5L._SX3000_.jpg" alt="" />
        <div className='home__row'>
            <Product title="The Lean Startup" price={11.23} image="https://www.crossword.in/cdn/shop/products/9780670921607.jpg?v=1680194129" rating={5}  />
            <Product title="The Lean Startup" price={11.23} image="https://www.crossword.in/cdn/shop/products/9780670921607.jpg?v=1680194129" rating={5}  />
            
        </div>
        <div className='home__row'>
            <Product title="The Lean Startup" price={11.23} image="https://www.crossword.in/cdn/shop/products/9780670921607.jpg?v=1680194129" rating={5}  />
            <Product title="The Lean Startup" price={11.23} image="https://www.crossword.in/cdn/shop/products/9780670921607.jpg?v=1680194129" rating={5}  />
            <Product title="The Lean Startup" price={11.23} image="https://www.crossword.in/cdn/shop/products/9780670921607.jpg?v=1680194129" rating={5}  />
        </div>
        <div className='home__row'>
        <Product title="The Lean Startup" price={11.23} image="https://www.crossword.in/cdn/shop/products/9780670921607.jpg?v=1680194129" rating={5}  />
        </div>
        
      </div>
    </div>
  )
}

export default Home
