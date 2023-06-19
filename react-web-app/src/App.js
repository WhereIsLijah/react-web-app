import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Button from './components/Button';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from '../src/components/pages/Home'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact Component={Home}/>
      </Routes>
    </Router>
  );
}

export default App;
