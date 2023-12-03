import React from 'react'
import './Home.css'
import Product from './Product'


function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img className='home__image' src="https://m.media-amazon.com/images/I/71j8damPo5L._SX3000_.jpg" alt="" />
        <div className='home__row'>
            <Product id={12121212} title="The Lean Startup" price={11.23} image="https://www.crossword.in/cdn/shop/products/9780670921607.jpg?v=1680194129" rating={5}  />
            <Product id={41414141} title="The Lean Startup" price={11.23} image="https://www.crossword.in/cdn/shop/products/9780670921607.jpg?v=1680194129" rating={5}  />
            
        </div>
        <div className='home__row'>
            <Product id={78787878} title="The Lean Startup" price={11.23} image="https://www.crossword.in/cdn/shop/products/9780670921607.jpg?v=1680194129" rating={5}  />
            <Product id={92929292} title="The Lean Startup" price={11.23} image="https://www.crossword.in/cdn/shop/products/9780670921607.jpg?v=1680194129" rating={5}  />
            <Product id={58585858} title="The Lean Startup" price={11.23} image="https://www.crossword.in/cdn/shop/products/9780670921607.jpg?v=1680194129" rating={5}  />
        </div>
        <div className='home__row'>
        <Product id={65656565} title="The Lean Startup" price={11.23} image="https://www.crossword.in/cdn/shop/products/9780670921607.jpg?v=1680194129" rating={5}  />
        </div>
        
      </div>
    </div>
  )
}

export default Home
