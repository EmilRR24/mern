import logo from './logo.svg';
import './App.css';
//IMPORTING ALL THE COMPONENTS WITH
import Display from './components/Display'
import Form from './components/Form'

function App() {
  return (
    <fieldset>
      <legend>App.js</legend>
      <h1>React</h1>
      <Display />
      <Form/>
    </fieldset>
  );
}

export default App;
