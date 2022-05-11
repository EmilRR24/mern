import logo from './logo.svg';
import './App.css';
import React from 'react'
import {BrowserRouter, Link, Routes, Route} from "react-router-dom"
import Search from './components/Search'
import Display from './components/Display'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Display />}  />
    </Routes>

    </BrowserRouter>
  )
}

export default App;
