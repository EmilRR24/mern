import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const New = () => {
  // DECLARE STATE
  const [name, setName] = useState("");
  const [err, setErr] = useState([])
  const [errorObj, setErrorObj] = useState({})
    // TRAVELS TO ANOTHER ROUTE
    const navigate = useNavigate()

  // HANDLER FUNCTIONS
  const submitHandler = (event) => {
    event.preventDefault();
    // NEW AN OBJECT WITH THE PRODUCT INFO
    const authorObj = {
      name,
    };
    // MAKE POST REQUEST TO EXPRESS WITH authorObj
    axios.post("http://localhost:8000/api/authors/new", authorObj)
      .then((res) => {
        console.log(res);
        console.log("NEWD");
        navigate("/");
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
  };
  return (
    <div style={{textAlign: 'center'}}>
      {/* <legend>New.jsx</legend> */}
      <h1>Favorite Authors</h1>
      <Link to={"/"}>
      <h3>Home</h3>
      </Link>
      <h3>Add a new author:</h3>
      <form onSubmit={submitHandler}>
        <p>
          Name:
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </p>
        <button>New</button>
        {errorObj.name ? <p>{errorObj.name}</p> : null}
      </form>
      <Link to={"/"}>
      <button>Cancel</button>
      </Link>
    </div>
  );
};

export default New;
