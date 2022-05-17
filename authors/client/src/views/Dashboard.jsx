import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'

const Dashboard = () => {
  const [authors, setAuthors] = useState([]);
  // DESTRUCTURE

  useEffect(()=>{
    axios.get('http://localhost:8000/api/authors')
      .then(res=>{
        console.log(res.data)
        setAuthors(res.data);
      })
      .catch(err => console.error(err));
  },[]);

  const deleteHandler = (author_id) => {
    axios.delete('http://localhost:8000/api/authors/' + author_id)
      .then(res=>{
        console.log("Deleted")
      })
      .catch(err => console.error(err));
  }

  return (
    <fieldset>
      {/* <legend>DashboardComponent.jsx</legend> */}
      <h1>Favorite Authors:</h1>
      <div>
        <Link to={"/new"}>
          <h3>Add an author</h3>
        </Link>
      </div>
      <h3>We have qoutes by:</h3>
      {
        authors.map((author, index)=>{
          return (
            <table>
            <tr>
              <th>Author</th>
              <th>Actions Available</th>
            </tr>
            <tr>
                <td key={index}>
                <Link to={"/" + author._id}>
                <h2>{author.name}</h2>
                </Link>
                </td>
                <td>
                    <Link to={"/" + author._id + "/edit"}>
                      <button>Edit</button> 
                    </Link>
                    <button onClick={(e)=>{deleteHandler(author._id)}}>
                      Delete
                    </button>
                </td>
            </tr>
            </table>
          )
        })
      }
  </fieldset>
  )
}

export default Dashboard