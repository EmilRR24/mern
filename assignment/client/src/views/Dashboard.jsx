import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'

const Dashboard = (props) => {
  const [changes, setChanges] = useState([]);
  // DESTRUCTURE
  const {refreshState, refresh} = props

  useEffect(()=>{
    axios.get('http://localhost:8000/api/changes')
      .then(res=>{
        console.log(res.data)
        setChanges(res.data);
      })
      .catch(err => console.error(err));
  },[refreshState]);

  const deleteHandler = (change_id) => {
    axios.delete('http://localhost:8000/api/changes/' + change_id)
      .then(res=>{
        console.log("Deleted")
        refresh();
      })
      .catch(err => console.error(err));
  }

  return (
    <div style={{textAlign: 'center'}}>
      {/* <legend>DashboardComponent.jsx</legend> */}
      <h1>Favorite Changes</h1>
      <div>
        <Link to={"/new"}>
          <h3>Add an change</h3>
        </Link>
      <h3>We have qoutes by:</h3>
            <table style={{textAlign: 'center', marginLeft:'auto', marginRight:'auto'}}>
            <tr>
              <th>Change</th>
              <th>Actions Available</th>
            </tr>
      {
        changes.map((change, index)=>{
          return (
            <tr>
              <td key={index}>
              <Link to={"/" + change._id}>
              <h2>{change.name}</h2>
              </Link>
              </td>
              <td>
                  <Link to={"/" + change._id + "/edit"}>
                    <button>Edit</button> 
                  </Link>
                  <button onClick={(e)=>{deleteHandler(change._id)}}>
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