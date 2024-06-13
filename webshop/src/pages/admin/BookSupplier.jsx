import React, { useEffect, useState } from 'react'

function BookSupplier() {
  const [products, setProducts] = useState([]);

  // products.map is not a function
  // teen valele tüübile .map() funktsiooni
  // .map() funktsiooni saab teha vaid Array'dele: []

  useEffect(() => {
    fetch('https://api.itbook.store/1.0/search/mongodb')
      .then(response => response.json())
      .then(json => setProducts(json.books))
  }, []);

  return (
    <div>
      <div>
        {products.map(product => 
          <div key={product.id}>
            <img style={{width: "100px"}} src={product.image} alt=""></img>
            <div>{product.title.length > 50 ? product.title.substring(0,50) + "..." : product.title }</div>
            <div>{product.price}</div>
          </div>
        )} 
      </div>
    </div>
  )
}

export default BookSupplier