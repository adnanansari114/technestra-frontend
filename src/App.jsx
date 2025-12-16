import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Services from './pages/Services/Services'
import ArtificialIntelligence from './pages/Services/ArtificialIntelligence'
import Careers from './pages/Careers'
import JobApply from './pages/JobApply'
import Leadership from './pages/About/Leadership'
import Blog from './pages/About/Blog'
import BlogDetailPage from './pages/About/BlogDetailPage'
import Footer from './components/Footer'

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
            <Route path="/careers" element={<Careers />} />
            <Route path="/jobapply/:id" element={<JobApply />} />
            <Route path="/services" element={<Services />} />
            <Route path="/artifiacialintelligence" element={<ArtificialIntelligence />} />
            <Route path='/leadership' element={<Leadership />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/blog/:id' element={<BlogDetailPage />} />s
          </Routes>
        </main>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
