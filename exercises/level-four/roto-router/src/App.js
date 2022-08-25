import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home.js'
import About from './components/About.js'
import Services from './components/Services.js'

export default function App() {
  return (
    <Router>

      <nav>
        <Link to="/" style={{padding: 10}}>
          Home
        </Link>
        <Link to="/about" style={{padding: 10}}>
          About
        </Link>
        <Link to="/services" style={{padding: 10}}>
          Services
        </Link>

      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>

      <footer className="footer"><p>Footer text</p></footer>
    </Router>
  );
}
