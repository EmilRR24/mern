import logo from './logo.svg';
import './App.css';
//IMPORTING ALL THE COMPONENTS WITH
import Display from './components/Display'
import Form from './components/Form'
import Functional from './components/Functional'
import Form_functional from './components/Form_functional'
import {Component} from 'react'
import React, {useState} from 'react'


function App() {
  //INITIAL STATE
  const [clickState, setClickState] = useState({
    clicked:0,
    name:"Ray R"
  })

  const clickHandler = () => {
    let {clicked} = clickState
    setClickState({
      ...clickState,
      clicked : clicked+1
    })
  }

  return (
    <fieldset>
      <legend>App.jsx</legend>
      <Functional firstName="Ray" lastName="R" age={35}/>
      <button onClick={clickHandler}>Click Me! {clickState.clicked}</button>
      <Form_functional />
    </fieldset>
  );
}

// class App extends Component{
//   constructor(props) {
//     super(props)
//     this.state = {
//       clicked: 0
//     }
//   }

//   clickHandler = () => {
//     let {clicked} = this.state
//     this.setState ({
//       'clicked': clicked+1
//     })
//   }

//   render() {
//     return (
//       <fieldset>
//         <legend>App.js</legend>
//         <h1>React</h1>
//         <button onClick={this.clickHandler}>Click Me!</button>
//         <Display firstName="Ray" lastName="R" age={35} clicked={this.state.clicked}/>
//         <Form/>

//       </fieldset>
//     );
//   }
// }

export default App;
