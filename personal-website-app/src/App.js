import React, { useEffect } from 'react';
import './App.css';
import Home from './components/pages/Home';
import Lavender from './components/pages/Lavender';
import Pinecone from './components/pages/Pinecone';
import Mp4Player from './components/pages/mp4';
import WIP from './components/pages/Work-in-Progress';
import Footer from './components/Footer';
import {BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
      <ScrollToTop /> {/*This section counteracts the bs around using react hooks to change screens in an SPA */}
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/Lavender' element={<Lavender />} />
          <Route path='/Pinecone' element={<Pinecone />} />
          <Route path='/Mp4Player' element={<Mp4Player />} />
          <Route path='/wip' element={<WIP />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default App;
