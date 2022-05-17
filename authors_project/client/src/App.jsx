import './App.css';
import Dashboard from './views/Dashboard';
import Create from './views/Create';
import Update from './views/Update';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path ="/new" element={<Create />}/>
        <Route path="/:author_id/edit" element={<Update />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;