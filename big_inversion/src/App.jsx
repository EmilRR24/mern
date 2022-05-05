import logo from './logo.svg';
import './App.css';
//IMPORTING ALL THE COMPONENTS WITH
import PersonCard from './components/PersonCard'


function App() {
  return (
    <div className="person">
      <PersonCard firstName="Jane" lastName="Doe" age={45} haircolor="Black"/>
      <PersonCard firstName="John" lastName="Smith" age={88} haircolor="Brown"/>
      <PersonCard firstName="Milliard" lastName="Fillmore" age={50} haircolor="Brown"/>
      <PersonCard firstName="Maria" lastName="Smith" age={62} haircolor="Brown"/>
    </div>
  );
}

export default App;
