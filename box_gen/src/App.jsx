import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard'
import Form from './components/Form'
import Display from './components/Display'
import React, { useState } from 'react';

function App() {

  // const [users, setUsers] = useState([
  //   {firstName: 'John', lastName: 'Smith', age:31,},
  //   {firstName: 'Jane', lastName: 'Doe', age:34,},
  //   {firstName: 'Alex', lastName: 'Smith', age:24,},
  // ])
  // BOX GEN //
  const [colors, setColors] = useState([])

  // CREATE A FUNCTION THAT HANDLES ADDING A COLOR
  const addColor = (newColor) => {
    // ADD newColor TO THE LIST OF COLORS
    setColors([...colors, newColor,])
  }


  return (
    <fieldset>
      {/* {
        users.map( (person, index) => <PersonCard key={index} user={person} /> )
      } */}
      <Form addColor={addColor} />
      <Display allColors={colors}/>
    </fieldset>
  );
}

export default App;
