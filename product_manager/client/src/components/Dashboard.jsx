import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'

const Dashboard = (props) => {
    const [products, setProducts] = useState([]);
    // DESTRUCTURE
    const {refreshState, refresh} = props

    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
            .then(res=>{
                setProducts(res.data);
            })
            .catch(err => console.error(err));
    },[refreshState]);

    const deleteHandler = (product_id) => {
      axios.delete('http://localhost:8000/api/products/' + product_id)
          .then(res=>{
            console.log("Deleted")
            refresh()
          })
          .catch(err => console.error(err));
    }

  return (
    <fieldset>
        {/* <legend>DashboardComponent.jsx</legend> */}
        <h1>All Products:</h1>
        {
          products.map((product, index)=>{
          return (
            <div key={index}>
            <Link to={"/" + product._id}>
            <h2>{product.title}</h2>
            </Link>
            <div>
                <Link to={"/" + product._id + "/edit"}>
                  Edit
                </Link>
                </div>
                <button onClick={(e)=>{deleteHandler(product._id)}}>
                  Delete
                </button>
            </div>
          )})
        }
    </fieldset>
  )
}

export default Dashboard