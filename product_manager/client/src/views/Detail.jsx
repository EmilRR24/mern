import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useParams} from "react-router-dom"
import {Link} from 'react-router-dom'

const Detail = () => {
  // STATE FOR HOLDING ONE PRODUCT
  const [product, setProduct] = useState()

  // GET PATH VARIABLE FROM REACT ROUTER
  const {product_id} = useParams()

  useEffect(() => {
    axios.get("http://localhost:8000/api/products/"+product_id)
      .then(res => {
        console.log(res.data)
        setProduct(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  const removeFromDom = product_id => {
    setProduct(product.filter(product => product._id != product_id));
  }

  const deleteProduct = (product_id) => {
    axios.delete('http://localhost:8000/api/products/' + product_id)
        .then(res => {
            removeFromDom(product_id)
        })
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
                <Link to={"/product/" + product._id + "/edit"}>
                  Edit
                </Link>
                <button onClick={(e)=>{deleteProduct(product._id)}}>
                  Delete
                </button>
              </div>
          }
    </div>
  )
}

export default Detail