import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Services from './pages/Services/Services'
import ArtificialIntelligence from './pages/Services/ArtificialIntelligence'
import WebAndAppDevelopment from './pages/Services/WebAndAppDevelopment'
import StaffAugmentation from './pages/Services/StaffAugmentation'
import CloudDevops from './pages/Services/CloudDevops'
import DataEngineering from './pages/Services/DataEngineering'
import Maintenance from './pages/Services/Maintenance'
import Careers from './pages/Careers'
import JobApply from './pages/JobApply'
import Leadership from './pages/About/Leadership'
import Blog from './pages/About/Blog'
import OurStory from './pages/About/OutStory'
import BlogDetailPage from './pages/About/BlogDetailPage'
import TechStackWhyUs from './pages/About/TechstackWhyUs'
import Footer from './components/Footer'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms' 

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
            <Route path="/webandappdevelopment" element={<WebAndAppDevelopment />} />
            <Route path="/staffaugmentation" element={<StaffAugmentation />} />
            <Route path='/cloud-devops' element={<CloudDevops />} />
            <Route path='/dataengineering' element={<DataEngineering />} />
            <Route path='/maintenance' element={<Maintenance />} />
            <Route path='/leadership' element={<Leadership />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/blog/:id' element={<BlogDetailPage />} />
            <Route path='/our-story' element={<OurStory />} />
            <Route path='/techstack-whyus' element={<TechStackWhyUs />} />
            <Route path='/privacy' element={<Privacy />} />
            <Route path='/terms' element={<Terms />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
