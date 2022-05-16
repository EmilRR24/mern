import React, {useEffect, useState} from 'react'
import axios from 'axios';

const Dashboard = (props) => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [info, setInfo] = useState()

    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
            .then(res=>{
                setProducts(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[]);

    const getInfo = (info) =>{
      axios.get(info)
      .then(response => {
          console.log("SUCCESS", response.data)
          setInfo(response.data)
      })
      .catch(err => {console.log("ERROR", err)})
    }

  return (
    <fieldset>
        {/* <legend>DashboardComponent.jsx</legend> */}
        <h1>All Products:</h1>
        {
        products &&
        products.length > 0 && products.map((product, index)=>{
          return (<ul key={index}><a href={""}>{product.title}</a></ul>)})
        }
    </fieldset>
  )
}

export default Dashboard