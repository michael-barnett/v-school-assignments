import React from "react";
import Home from './Home.js'
import About from './About.js'
import Services from './Saved.js'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

export default function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/saved" element={<Services />} />
            </Routes>
        </AnimatePresence>
    )
}