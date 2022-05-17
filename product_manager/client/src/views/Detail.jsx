import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link, useNavigate, useParams} from 'react-router-dom'

const Detail = () => {
  // STATE FOR HOLDING ONE PRODUCT
  const [product, setProduct] = useState()

  // GET PATH VARIABLE FROM REACT ROUTER
  const {product_id} = useParams()

  const navigate = useNavigate()


  useEffect(() => {
    axios.get("http://localhost:8000/api/products/"+product_id)
      .then(res => {
        console.log(res.data)
        setProduct(res.data)
      })
      .catch(err => console.log(err))
  }, [])


  const deleteHandler = (product_id) => {
    axios.delete('http://localhost:8000/api/products/' + product_id)
        .then(res => navigate('/'))
        .catch(err => console.error(err));
  }

  return (
    <div style={{textAlign: 'center'}}>
        <legend>Detail.jsx</legend>
          {
            product &&
              <div>
                <h1>Title: {product.title}</h1>
                <h2>Price: {product.price}</h2>
                <h2>Description: {product.description}</h2>
                <Link to={"/" + product._id + "/edit"}>
                  Edit
                </Link>
                <button onClick={(e)=>{deleteHandler(product._id)}}>
                  Delete
                </button>
              </div>
          }
    </div>
  )
}

export default Detail