import React from 'react';
import Map from './Map';
import Blank from './blank';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import logo from './logo.svg';


function App() {
  
  return (
    <Router basename="/maps">
      <Routes>
        <Route exact path="/"  element={<Map/>} />
        <Route path="/:state" element={<Blank/>} />
      </Routes>
    </Router>
  );
}

export default App;
