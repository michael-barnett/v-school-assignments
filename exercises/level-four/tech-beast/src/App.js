import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import AnimatedRoutes from './components/AnimatedRoutes.js';

export default function App() {
  return (
    <Router>
      <nav className='navbar'>
        <Link to="/" style={{padding: 10}}>
          <img alt='Home Icon' src='./images/home_FILL0_wght400_GRAD0_opsz48.svg' className='navbar--icons' />
        </Link>
        <Link to="/about" style={{padding: 10}}>
          <img alt='About Icon' src='./images/help_FILL0_wght400_GRAD0_opsz48.svg' className='navbar--icons' />
        </Link>
        <Link to="/saved" style={{padding: 10}}>
          <img alt='Saved Icon' src='./images/note_FILL0_wght400_GRAD0_opsz48.svg' className='navbar--icons' />
        </Link>
      </nav>
      <AnimatedRoutes />
    </Router>
  );
}
