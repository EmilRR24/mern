import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams, useNavigate } from "react-router-dom";
    
const Update = (props) => {
  const { author_id } = useParams();

  const [name, setName] = useState("");
  const [err, setErr] = useState([])
  const [errorObj, setErrorObj] = useState({})
  // TRAVELS TO ANOTHER ROUTE
  const navigate = useNavigate()

    
  useEffect(() => {
    axios.get('http://localhost:8000/api/authors/' + author_id)
      .then(res => {
        setName(res.data.name);
      })
      .catch(err => console.log(err))
  }, []);
    
  const updateAuthor = e => {
    e.preventDefault();
    const authorObj = {
      name
    }
    axios.put('http://localhost:8000/api/authors/' + author_id, authorObj)
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
      <h1>Favorite Authors</h1>
      <Link to={"/"}>
      <h3>Home</h3>
      </Link>
      <h3>Edit this author:</h3>
      <form onSubmit={updateAuthor}>
        <p>
          <label>Author</label><br />
          <input type="text" 
          name="name" 
          value={name} 
          onChange={(e) => { setName(e.target.value) }} />
        </p>
        <input type="Submit" />
      </form>
        {errorObj.name ? <p>{errorObj.name}</p> : null}
      <Link to={"/"}>
      <button>Cancel</button>
      </Link>
    </div>
  )
}
    
export default Update;