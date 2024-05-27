import React from 'react'
import productsJSON from "../../data/products.json"
// import cartJSON from "../../data/cart.json"
import { useState } from 'react';

function HomePage() {
  const [products, setProducts] = useState (productsJSON.slice());

  const reset = () => {
    setProducts(productsJSON.slice())
  }

  const sortAZ = ()  => { 
    products.sort((a, b) => a.title.localeCompare(b.title));
    setProducts(products.slice());
  } 

  return (
    <div>
      <br /><br />
      <div><b>Tooted</b></div>
      <button onClick={reset}>Tooted reset</button>
      <button onClick={sortAZ}>Tooded A-Z</button>
      {products.map(product => 
        <div key={product.id}>
          <img style={{width: "100px"}} src={product.imgage} alt=""></img>
          <div>{product.title}</div>
          <div>{product.price}</div>
          {/* <button onClick={() => toCart(product)}>Add to cart</button> */}
        </div>
      )} 
    </div>
  )
}

export default HomePage