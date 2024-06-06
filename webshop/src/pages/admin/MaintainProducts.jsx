import React, { useState } from 'react';
import productsJSON from "../../data/products.json"
import {Link} from 'react-router-dom'
 
function MaintainProducts() {
  const [products, changeProducts] = useState(productsJSON.slice());
 
  const sortAZ = ()  => { 
    products.sort();
    changeProducts(products.slice());
  } 

  const deleteProduct = (index) => {
    productsJSON.splice(index, 1);
    changeProducts(productsJSON.slice());
  }
 
  // function duplicate(product) {
  //   productsJSON.push(product);
  //   changeProducts(productsJSON.slice())
  // }

 
  return (
    <div>
      <button onClick={sortAZ}>Sort by title</button>
      <br /><br />

      {products.map((product, index) => 
      <div key={product.id}>
          <img className="product-img" src={product.image} alt=""/>
          <div>{product.title}</div> 
          <div>{product.price}</div> 
      <button onClick={() => deleteProduct(index)}>x</button>
      {/* <button onClick={() => duplicate(product)}>Add product</button> */}
      <Link to={"/admin/edit-product/" + product.id}><button>Change</button></Link>
      </div>)}
    </div>
  )
}
 
export default MaintainProducts