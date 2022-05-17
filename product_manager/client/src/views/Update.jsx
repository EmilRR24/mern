import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";
    
const Update = (props) => {
  const { product_id } = useParams();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState();
  const [description, setDescription] = useState("");
  const [err, setErr] = useState([])
  const [errorObj, setErrorObj] = useState({})
  // TRAVELS TO ANOTHER ROUTE
  const navigate = useNavigate()

    
  useEffect(() => {
    axios.get('http://localhost:8000/api/products/' + product_id)
      .then(res => {
        setTitle(res.data.title);
        setPrice(res.data.price);
        setDescription(res.data.description);
      })
      .catch(err => console.log(err))
  }, []);
    
  const updateProduct = e => {
    e.preventDefault();
    const productObj = {
      title,
      price,
      description
    }
    axios.put('http://localhost:8000/api/products/' + product_id, productObj)
      .then(res => {
        console.log('UPDATED')
        console.log(res.data)
        navigate('/')
      })
      .catch(err =>{ 
        console.log("ERROR FROM SERVER", err.response.data.errors)
        const errorResponse= err.response.data.errors;
        const errorArr = [];
        const errorObj = {};
        for (const key of Object.keys(errorResponse)) {
          errorArr.push(errorResponse[key].message)
          errorObj[key] = errorResponse[key].message
        }
        console.log(errorObj)
        setErr(errorArr)
        setErrorObj(errorObj)
      })
  }
    
  return (
    <div style={{textAlign: 'center'}}>
      <h1>Update a Product</h1>
      <form onSubmit={updateProduct}>
        <p>
          <label>Title</label><br />
          <input type="text" 
          name="title" 
          value={title} 
          onChange={(e) => { setTitle(e.target.value) }} />
        </p>
        {errorObj.title ? <p>{errorObj.title}</p> : null}
        <p>
          <label>Price</label><br />
          <input type="num" 
          name="price"
          value={price} 
          onChange={(e) => { setPrice(e.target.value) }} />
        </p>
        {errorObj.price ? <p>{errorObj.price}</p> : null}
        <p>
          <label>Description</label><br />
          <input type="text" 
          name="description"
          value={description} 
          onChange={(e) => { setDescription(e.target.value) }} />
        </p>
        {errorObj.description ? <p>{errorObj.description}</p> : null}
        <input type="Submit" />
      </form>
    </div>
  )
}
    
export default Update;