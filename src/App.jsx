import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Services from './pages/Services/Services'
import ArtificialIntelligence from './pages/Services/ArtificialIntelligence'
import GenerativeAI from './pages/Services/GenerativeAI'
import ComputerVision from './pages/Services/ComputerVision'
import NaturalLanguageProcessing from './pages/Services/NaturalLanguageProcessing'
import MLOpsAIInfrastructure from './pages/Services/MLOpsAIInfrastructure'
import AIEthicsGovernance from './pages/Services/AIEthicsGovernance'
import Careers from './pages/Careers'
import JobApply from './pages/JobApply'
import Leadership from './pages/About/Leadership'
import Blog from './pages/About/Blog'
import OurStory from './pages/About/OutStory'
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
            <Route path="/generativeai" element={<GenerativeAI />} />
            <Route path="/computervision" element={<ComputerVision />} />
            <Route path='/naturallanguageprocessing' element={<NaturalLanguageProcessing />} />
            <Route path='/mlopsaiinfrastructure' element={<MLOpsAIInfrastructure />} />
            <Route path='/aiethicsgovernance' element={<AIEthicsGovernance />} />
            <Route path='/leadership' element={<Leadership />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/blog/:id' element={<BlogDetailPage />} />
            <Route path='/our-story' element={<OurStory />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
