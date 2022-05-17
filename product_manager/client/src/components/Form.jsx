import React, {useState} from 'react'
import axios from 'axios'

const Form = (props) => {
  // DECLARE STATE
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState(0)
  const [description, setDescription] = useState("")
  const [err, setErr] = useState([])
  const [errorObj, setErrorObj] = useState({})
  const [submitted, setSubmitted] = useState("")
  //DESTRUCTURE
  const {refresh} = props

  // HANDLER FUNCTIONS
  const submitHandler = event => {
    event.preventDefault()
    // CREATE AN OBJECT WITH THE PRODUCT INFO
    const productObj = {
      title,
      price,
      description
    }
    // MAKE POST REQUEST TO EXPRESS WITH productObj
    axios.post("http://localhost:8000/api/products/new", productObj)
      .then(res => {
        console.log(res)
        refresh();
        setTitle("");
        setPrice(0);
        setDescription("");
        setSubmitted("PRODUCT CREATED")
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
    <fieldset>
      {/* <legend>FormComponent.jsx</legend> */}
      <form onSubmit={submitHandler}>
        <p>
          Title:
          <input type="text" name="title" onChange={(e) => setTitle(e.target.value)} value={title}/>
          {errorObj.title ? <p>{errorObj.title}</p> : null}
        </p>
        <p>
          Prices:
          <input type="num" name="price" onChange={(e) => setPrice(e.target.value)} value={price}/>
          {errorObj.price ? <p>{errorObj.price}</p> : null}
        </p>
        <p>
          Description:
          <input type="text" name="description" onChange={(e) => setDescription(e.target.value)} value={description}/>
          {errorObj.description ? <p>{errorObj.description}</p> : null}
        </p>
        <button>Create</button>
      </form>
          <p>{submitted}</p>
    </fieldset>
  )
}

export default Form