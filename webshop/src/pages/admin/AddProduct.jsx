import React, {useRef, useState} from 'react'
import productsJSON from "../../data/products.json"
 
function AddProduct() {
   const [message, changeMessage] = useState("Add new product");
   const idRef = useRef();
   const titleRef = useRef();
   const priceRef = useRef();
   const imageRef = useRef()
   const categoryRef = useRef();
   const descriptionRef = useRef();
 
   const add = () => {
      if (titleRef.current.value === "") {
         changeMessage("Add product title!");
         return;
      } 

      if (priceRef.current.value === "") {
        changeMessage("Add product price!");
        return;
      } 
          
      const newProduct = {
        title: titleRef.current.value,
        id: Number(idRef.current.value),
        price: Number(priceRef.current.value),
        image: imageRef.current.value,
        category: categoryRef.current.value,
        description: descriptionRef.current.value,
        "rating": {
          "rate": 0,
          "count": 0
        }
      }
        
      productsJSON.push(newProduct)
      changeMessage("Product " + titleRef.current.value + "added !");
    }
 
  return (
    <div>
        <div>{message}</div>
       <label>Product title</label><br/>
       <input ref={titleRef} type="text" /> <br />      .
       <label>Product id</label><br/>
       <input ref={idRef} type="number" /> <br />      .
       <label>Product price</label><br/>
       <input ref={priceRef} type="number" /> <br />        
       <label>Product category</label><br/>
       <input ref={categoryRef} type="text" /> <br />   
       <label>Product description</label><br/>
       <input ref={descriptionRef} type="text" /> <br />   
       <label>Product image</label><br/>
       <input ref={imageRef} type="text" /> <br />      
       <button onClick={add}>Add</button>
    </div>
  )
}
 
export default AddProduct