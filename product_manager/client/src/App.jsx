import './App.css';
import Main from './views/Main';
import Detail from './views/Detail';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path ="/:product_id" element={<Detail />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;