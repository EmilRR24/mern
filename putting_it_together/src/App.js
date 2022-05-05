import logo from './logo.svg';
import './App.css';
//IMPORTING ALL THE COMPONENTS WITH
import Display from './components/Display'
import {Component} from 'react'

class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      clicked: 0,
      clicked_2: 0
    }
  }

  clickHandler = () => {
    let {clicked} = this.state
    this.setState ({
      'clicked': clicked+1
    })
  }
  clickHandler_2 = () => {
    let {clicked_2} = this.state
    this.setState({
      'clicked_2': clicked_2+1
    })
  }

  render() {
    return (
      <div class="person">
        <Display firstName="Jane" lastName="Doe" age={this.state.clicked+45} haircolor="Black"/>
        <button onClick={this.clickHandler}>Birthday Button for Jane Doe</button>
        <Display firstName="John" lastName="Smith" age={this.state.clicked_2+88} haircolor="Brown"/>
        <button onClick={this.clickHandler_2}>Birthday Button for John Smith</button>
      </div>
    );
  }
}

export default App;
