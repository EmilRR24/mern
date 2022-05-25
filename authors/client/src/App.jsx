import './App.css';
import React, { useState } from "react";
import Dashboard from './views/Dashboard';
import New from './views/New';
import Update from './views/Update';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  const [refreshState, setRefresh] = useState(false)
  // REFRESH
  const refresh = () => {
    setRefresh(!refreshState)
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard refreshState={refreshState} refresh={refresh}/>}/>
        <Route path="/new" element={<New />}/>
        <Route path="/:author_id/edit" element={<Update />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;