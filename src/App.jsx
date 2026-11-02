import { useState } from 'react'
import './App.css'
import Home from './pages/home'
import VisionMission from './pages/vision'
import Footer from './components/footer'
import { BrowserRouter as Router, Routes, Route, BrowserRouter, Link } from 'react-router-dom'
import Navbar from './components/navbar'
import About from './pages/about'
import OurTeam from './pages/ourteam'
import Donate from './pages/donate'
import Blog from './pages/blog'
import Demo from './components/demo'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/vision" element={ <VisionMission />} />
          <Route path="/" element={ <Home />} />
          <Route path="/about" element={ <About />} />
          <Route path="/ourteam" element={ <OurTeam />} />
          <Route path="/blog" element={ <Blog />} />
          <Route path="/donate" element={ <Donate />} />
          <Route path="/demo" element={ <Demo />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
