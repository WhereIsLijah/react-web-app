import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Button from './components/Button';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from '../src/components/pages/Home'
import Products from './components/pages/Products';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';
import About from './components/pages/About';
import Cards from './components/Cards';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact Component={Home}/>
        <Route path='/about' exact Component={About}/>
        <Route path='/products' exact Component={Products}/>
        <Route path='/services' exact Component={Services}/>
        <Route path='/sign-up' exact Component={SignUp}/>
      </Routes>
    </Router>
  );
}

export default App;


// Make watch trailer play video in Background
// change the menu display
// increase width between Cards
// create Sign up Form
//