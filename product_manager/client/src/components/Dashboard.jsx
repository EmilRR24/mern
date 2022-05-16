import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'

const Dashboard = (props) => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    // DESTRUCTURE
    const {refreshState} = props

    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
            .then(res=>{
                setProducts(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[refreshState]);

  return (
    <fieldset>
        {/* <legend>DashboardComponent.jsx</legend> */}
        <h1>All Products:</h1>
        {
          products.map((product, index)=>{
          return (
            <div key={index}>
            <Link to={"/" + product._id}>
            <p>{product.title}</p>
            </Link>
            </div>
          )})
        }
    </fieldset>
  )
}

export default Dashboard