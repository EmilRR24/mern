import './App.css';
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path ="/:product_id" element={<Detail />}/>
        <Route path="/:product_id/edit" element={<Update />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;