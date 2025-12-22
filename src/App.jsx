import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import Home from './Home';
import Solutions from './pages/Solutions';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/solutions" element={<Solutions />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
