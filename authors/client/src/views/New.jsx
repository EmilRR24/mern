import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const New = () => {
  // DECLARE STATE
  const [name, setName] = useState("");
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
      .catch((err) => console.log(err));
  };
  return (
    <fieldset>
      {/* <legend>New.jsx</legend> */}
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
      </form>
    </fieldset>
  );
};

export default New;
