import logo from './logo.svg';
import './App.css';
import React from 'react'
import {BrowserRouter, Link, Routes, Route} from "react-router-dom"
import Search from './components/Search'
import People from './views/People'
import Planet from './views/Planets'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Search />}>
          <Route path="/people/:index" element={<People />} />
          <Route path="/planets/:index" element={<Planet />} />
        </Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App;
