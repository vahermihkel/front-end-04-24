import React from 'react'
import productsJSON from "../../data/products.json"
import cartJSON from "../../data/cart.json"
import { useState } from 'react';
import { Button } from '@mui/material';

function HomePage() {
  const [products, setProducts] = useState (productsJSON.slice());

  const reset = () => {
    setProducts(productsJSON.slice())
  }

  const sortAZ = ()  => { 
    products.sort((a, b) => a.title.localeCompare(b.title));
    setProducts(products.slice());
  } 

  const toCart = (product) => {
    cartJSON.push(product);
  }

  const filterMensClothing = () => {
    const result = productsJSON.filter(product => product.category === "men's clothing");
    setProducts(result);
  }

  const filterJewelery = () => {
    const result = productsJSON.filter(product => product.category === "jewelery");
    setProducts(result);
  }

  const filterElectronics = () => {
    const result = productsJSON.filter(product => product.category === "electronics");
    setProducts(result);
  }

  const filterWomensClothing = () => {
    const result = productsJSON.filter(product => product.category === "women's clothing");
    setProducts(result);
  }

  return (
    <div>
      <br /><br />
      <div><b>Tooted: {products.length} tk</b></div>
      <Button onClick={reset} variant="contained">Tooted reset</Button>
      <Button onClick={sortAZ} variant="outlined">Tooded A-Z</Button>
      <br /><br />
      <Button onClick={filterMensClothing}>men's clothing</Button>
      <Button onClick={filterJewelery}>jewelery</Button>
      <Button onClick={filterElectronics}>electronics</Button>
      <Button onClick={filterWomensClothing}>women's clothing</Button>
      
      <div className="products">
        {products.map(product => 
          <div key={product.id} className="product">
            <img className="picture" src={product.image} alt=""></img>
            <div className="title">{product.title.length > 50 ? product.title.substring(0,50) + "..." : product.title }</div>
            <div>{product.price}</div>
            <button onClick={() => toCart(product)}>Add to cart</button>
          </div>
        )} 
      </div>

    </div>
  )
}

export default HomePage