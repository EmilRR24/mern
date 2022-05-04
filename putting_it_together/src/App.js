import logo from './logo.svg';
import './App.css';
//IMPORTING ALL THE COMPONENTS WITH
import Display from './components/Display'
import {Component} from 'react'

class App extends Component{
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div class="person">
        <Display firstName="Jane" lastName="Doe" age={45} haircolor="Black"/>
        <Display firstName="John" lastName="Smith" age={88} haircolor="Brown"/>
        <Display firstName="Milliard" lastName="Fillmore" age={50} haircolor="Brown"/>
        <Display firstName="Maria" lastName="Smith" age={62} haircolor="Brown"/>
      </div>
    );
  }
}

export default App;
