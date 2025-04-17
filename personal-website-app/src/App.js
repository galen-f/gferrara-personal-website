import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Lavender from './components/pages/Lavender';
import Pebble from './components/pages/Pebble';
import WIP from './components/pages/Work-in-Progress';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/Lavender' element={<Lavender />} />
          <Route path='/Pebble' element={<Pebble />} />
          <Route path='/wip' element={<WIP />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
