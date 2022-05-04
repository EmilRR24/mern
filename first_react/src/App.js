import logo from './logo.svg';
import './App.css';
//IMPORTING ALL THE COMPONENTS WITH
import Display from './components/Display'
import Form from './components/Form'
import {Component} from 'react'

class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      clicked: 0
    }
  }

  clickHandler = () => {
    let {clicked} = this.state
    this.setState ({
      'clicked': clicked+1
    })
  }

  render() {
    return (
      <fieldset>
        <legend>App.js</legend>
        <h1>React</h1>
        <button onClick={this.clickHandler}>Click Me!</button>
        <Display firstName="Ray" lastName="R" age={35} clicked={this.state.clicked}/>
        <Display firstName="Arya" lastName="V" age={2} clicked={this.state.clicked}/>
        <Form/>
      </fieldset>
    );
  }
}

export default App;
