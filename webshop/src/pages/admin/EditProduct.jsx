import React from 'react'
import {useRef} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import productsJSON from "../../data/products.json"
 
function EditProduct() {
  const {id} = useParams(); // edit/:id
  const found = productsJSON.find(product => product.id === Number(id));
  const navigate = useNavigate();
  const titleRef = useRef();
  const priceRef = useRef();
  const idRef = useRef();
  const imageRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
 
  function edit() {
    const index = productsJSON.indexOf(found);
    // const index = productsJSON.findIndex(product => product.id === Number(id));

    const newProduct = {
      title: titleRef.current.value,
      id: Number(idRef.current.value),
      price: Number(priceRef.current.value),
      image: imageRef.current.value,
      category: categoryRef.current.value,
      description: descriptionRef.current.value,
      rating: {
        rate: found.rating.rate,
        count: found.rating.count
      }
    };
 
    productsJSON[index] = newProduct;
    navigate("/admin/maintain-products");
    }
    if (found === undefined) {
      return <div>Product not found</div>
  }
 
  return (
    <div>
      <label>Title</label><br />
      <input type="text"  ref={titleRef} defaultValue={found.title}/> <br />
      <label>Price</label><br />
      <input type="number"  ref={priceRef} defaultValue={found.price}/> <br />
      <label>ID</label><br />
      <input type="number"  ref={idRef} defaultValue={found.id}/> <br />
      <label>Category</label><br />
      <input type="text"  ref={categoryRef} defaultValue={found.category}/> <br />
      <label>Image</label><br />
      <input type="text"  ref={imageRef} defaultValue={found.image}/> <br />
      <label>Description</label><br />
      <input type="text"  ref={descriptionRef} defaultValue={found.description}/> <br />

      <button onClick={edit}>Edit</button> <br />
    </div>
  )
}
 
export default EditProduct
