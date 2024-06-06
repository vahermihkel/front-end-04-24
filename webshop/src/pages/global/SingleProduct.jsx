
import React from 'react'
import { useParams } from 'react-router-dom'
import productsJSON from "../../data/products.json"
 
function SingleProduct() {
   const {id} = useParams();
              // productsJSON[index]          ÜKSHAAVAL      URLs
   const found = productsJSON.find(product => product.id === Number(id));
 
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