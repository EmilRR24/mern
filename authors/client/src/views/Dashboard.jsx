import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'

const Dashboard = (props) => {
  const [authors, setAuthors] = useState([]);
  // DESTRUCTURE
  const {refreshState, refresh} = props

  useEffect(()=>{
    axios.get('http://localhost:8000/api/authors')
      .then(res=>{
        console.log(res.data)
        setAuthors(res.data);
      })
      .catch(err => console.log(err));
  },[refreshState]);

  const deleteHandler = (author_id) => {
    axios.delete('http://localhost:8000/api/authors/' + author_id)
    // SUCCESSFUL RESPONSE
      .then(res=>{
        console.log("Deleted")
        refresh();
      })
      // UNSUCCESSFUL RESPONSE
      .catch(err => console.log(err));
  }

  return (
    <div style={{textAlign: 'center'}}>
      {/* <legend>DashboardComponent.jsx</legend> */}
      <h1>Favorite Authors</h1>
      <div>
        <Link to={"/new"}>
          <h3>Add an author</h3>
        </Link>
      <h3>We have qoutes by:</h3>
            <table style={{textAlign: 'center', marginLeft:'auto', marginRight:'auto'}}>
            <tr>
              <th>Author</th>
              <th>Actions Available</th>
            </tr>
      {
        authors.map((author, index)=>{
          return (
            <tr>
              <td key={index}>
              <h2>{author.name}</h2>
              </td>
              <td>
                  <Link to={"/" + author._id + "/edit"}> <button>Edit</button> </Link>
                  <button onClick={(e)=>{deleteHandler(author._id)}}>
                    Delete
                  </button>
              </td>
            </tr>
          )
        })
      }
      </table>
      </div>
  </div>
  )
}

export default Dashboard