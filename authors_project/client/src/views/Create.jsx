import React, {useState} from 'react'
import axios from 'axios'
import { useParams, useNavigate } from "react-router-dom";

const Form = () => {
  // DECLARE STATE
  const [name, setName] = useState("")

  // HANDLER FUNCTIONS
  const submitHandler = event => {
      event.preventDefault()
      // CREATE AN OBJECT WITH THE PRODUCT INFO
      const authorObj = {
          name
      }
      // MAKE POST REQUEST TO EXPRESS WITH authorObj
      axios.post("http://localhost:8000/api/authors/new", authorObj)
          .then(res => {
              console.log(res)
              console.log("CREATED")
              navigate("/")
          })
          .catch(err => console.log(err))
  }
  return (
      <fieldset>
          {/* <legend>Create.jsx</legend> */}
          <form onSubmit={submitHandler}>
              <p>
                  Name:
                  <input type="text" name="name" onChange={(e) => setName(e.target.value)} value={name}/>
              </p>
              <button>Create</button>
          </form>
      </fieldset>
  )
}

export default Create