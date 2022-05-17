import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";
    
const Update = (props) => {
    const { product_id } = useParams();

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState();
    const [description, setDescription] = useState("");
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
            .catch(err => console.error(err));
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
                <p>
                    <label>Price</label><br />
                    <input type="num" 
                    name="price"
                    value={price} 
                    onChange={(e) => { setPrice(e.target.value) }} />
                </p>
                <p>
                    <label>Description</label><br />
                    <input type="text" 
                    name="description"
                    value={description} 
                    onChange={(e) => { setDescription(e.target.value) }} />
                </p>
                <input type="Submit" />
            </form>
        </div>
    )
}
    
export default Update;