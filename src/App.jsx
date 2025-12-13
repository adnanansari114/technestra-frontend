import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Services from './pages/Services/Services'
import ArtificialIntelligence from './pages/Services/ArtificialIntelligence'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/artificial-intelligence" element={<ArtificialIntelligence />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
