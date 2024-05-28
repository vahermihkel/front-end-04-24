import React, { useState } from 'react'
import cartJSON from "../../data/cart.json"
import { Link } from 'react-router-dom';

function Cart() {
  const [products, setProducts] = useState(cartJSON.slice());

  function del(product) {
    cartJSON.splice(product, 1);
    setProducts(cartJSON.slice());
  }

  function add(product) {
    cartJSON.push(product);
    setProducts(cartJSON.slice())
  }

  function empty(){
    cartJSON.splice(0)
    setProducts(cartJSON.slice(0))
  }

  function addUp(){
    let sum = 0;
    products.forEach(product => sum = sum + product.price);
    return sum.toFixed(2);   
  }
  
  const reset = () => {
    setProducts(cartJSON.slice())
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