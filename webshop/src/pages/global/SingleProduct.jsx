
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
//import productsJSON from "../../data/products.json"
 
function SingleProduct() {
   const {id} = useParams();
              // productsJSON[index]          ÜKSHAAVAL      URLs
    const [products, changeProducts] = useState([]);

   const found = products.find(product => product.id === Number(id));
   const urlProducts = "https://react-mihkel-webshop-04-24-default-rtdb.europe-west1.firebasedatabase.app/products.json"
 
   useEffect(() => {
     fetch(urlProducts)
       .then(res => res.json())
       .then(json => changeProducts(json || []));
   }, []);

   if (found === undefined) {
    return <div>Not Found</div>
   }
 
  return (
    <div><br /><br />
      <div>Product: <br />
      <b>{found.title} </b></div>
      <hr></hr>
      <div>Product description: {found.description} </div>
      <div>Product category: {found.category} </div>
      <div>Product rate: {found.rating.rate} </div>
      <div>Product price: {found.price} </div>   
      <div> <img src={found.image} alt="product"/></div>
      <br /><br /><br />
    </div>
  )
}
 
export default SingleProduct