import React, { useState } from 'react'
import productsJSON from "../../data/products.json"
import { Link } from 'react-router-dom';

function Cart() {
  const [products, setProducts] = useState(productsJSON.slice());

  function del(product) {
    productsJSON.splice(product, 1);
    setProducts(productsJSON.slice());
  }

  function add(product) {
    productsJSON.push(product);
    setProducts(productsJSON.slice())
  }

  function empty(){
    productsJSON.splice(0, 100)
    setProducts(productsJSON.slice(0))
  }

  function addUp(){
    let sum = 0;
    products.forEach(product => sum = sum + product.price);
    return sum.toFixed(2);   
  }
  
  const reset = () => {
    setProducts(productsJSON.slice())
  }

  return (
    <div><br /> Sinu ostukorv <br /><br />
        Toodete kogus : {products.length}  tk <br />
        <button onClick={reset}>Tooted reset</button>
        <div>Toodete hind kokku: {addUp()}</div>
        {products.length > 0 &&  <button onClick={empty}>Tühjenda ostukorv</button> } <br /><br />
        {products.map ((product, index) =>
            <div key={index}>
                  <div>{product.title}
                     {product.price}
                    <button onClick={() => del(index)}>x</button>
                    <button onClick={() => add(product)}>Add prduct</button>
                 </div>    
            </div>
        )} 
        {products.length === 0 && <Link to='/'>Ostukorv on tühi. Mine avalehele</Link> }
    </div>
  )
}

export default Cart