import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link 
} from "react-router-dom";
import Home from './components/Home'
import Number from './components/Number'
import Colored from './components/Colored'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:num" element={<Number />} />
          <Route path="/:word/:color/:bgColor" element={<Colored />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
