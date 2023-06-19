import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Button from './components/Button';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact />
      </Routes>
      <HeroSection/>
    </Router>
  );
}

export default App;
