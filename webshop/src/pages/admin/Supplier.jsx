import React, { useEffect, useState } from 'react'

function Supplier() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(json => setProducts(json))
  }, []);

  return (
    <div>
      <div>
        {products.map(product => 
          <div key={product.id}>
            <img src={product.image} alt=""></img>
            <div>{product.title.length > 50 ? product.title.substring(0,50) + "..." : product.title }</div>
            <div>{product.price}</div>
          </div>
        )} 
      </div>
    </div>
  )
}

export default Supplier