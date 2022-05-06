import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard'
import React, { useState } from 'react';

function App() {

  // const [users, setUsers] = useState([
  //   {firstName: 'John', lastName: 'Smith', age:31,},
  //   {firstName: 'Jane', lastName: 'Doe', age:34,},
  //   {firstName: 'Alex', lastName: 'Smith', age:24,},
  // ])

  

  return (
    <fieldset>
      <legend>App.js</legend>
      {/* {
        users.map( (person, index) => <PersonCard key={index} user={person} /> )
      } */}
      <Form />
      <Display />
    </fieldset>
  );
}

export default App;
