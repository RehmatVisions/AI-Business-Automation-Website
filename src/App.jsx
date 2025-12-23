import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AlertProvider } from './contexts/AlertContext';
import AlertDisplay from './components/AlertDisplay';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import Industries from './pages/Industries';
import Pricing from './pages/Pricing';

const App = () => {

  return (
    <AlertProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1 pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/pricing" element={<Pricing />} />
            </Routes>
          </main>
          <Footer />
          <AlertDisplay />
        </div>
      </Router>
    </AlertProvider>
  )
}

export default App
