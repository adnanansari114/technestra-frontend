// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { motion } from "framer-motion";
// import { 
//   Search, 
//   MapPin, 
//   Clock, 
//   Briefcase, 
//   Building2, 
//   ChevronDown,
//   Zap 
// } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import '../styles/career.css'

// const API = import.meta.env.VITE_APP_API_URL;

// const categories = [
//   "All Categories", "React.js", "Node.js", "Python", "Java", "Angular", "Vue.js",
//   "DevOps", "AWS", "Data Science", "Full Stack", "Mobile Development"
// ];
// const jobTypes = ["All Types", "Full-time", "Part-time", "Contract", "Freelance", "Remote"];
// const locations = ["All Locations", "Indore", "Bangalore", "Pune", "Hyderabad", "Mumbai", "Delhi", "Remote"];

// export default function Careers() {
//   const [allJobs, setAllJobs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("All Categories");
//   const [selectedType, setSelectedType] = useState("All Types");
//   const [selectedLocation, setSelectedLocation] = useState("All Locations");
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchJobs = async () => {
//       try {
//         const res = await axios.get(`${API}/api/jobs`);
//         setAllJobs(res.data || []);
//       } catch (err) {
//         console.error("Error fetching jobs:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchJobs();
//   }, []);

//   const toggleDropdown = (type) => {
//     setOpenDropdown(openDropdown === type ? null : type);
//   };

//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (!e.target.closest('.dropdown-wrapper')) {
//         setOpenDropdown(null);
//       }
//     };
//     document.addEventListener('click', handleClickOutside);
//     return () => document.removeEventListener('click', handleClickOutside);
//   }, []);

//   const filteredJobs = allJobs.filter(job => {
//     if (!job.isActive) return false;

//     const techstack = (job.techstack || "").toString().toLowerCase();
//     const description = (job.description || "").toString().toLowerCase();
//     const company = (job.company || "").toString().toLowerCase();
//     const engagementtype = (job.engagementtype || "").toString().toLowerCase();
//     const location = (job.location || "").toString().toLowerCase();

//     const searchLower = searchTerm.toLowerCase();

//     const matchesSearch = 
//       techstack.includes(searchLower) ||
//       description.includes(searchLower) ||
//       company.includes(searchLower);

//     const matchesCategory = 
//       selectedCategory === "All Categories" ||
//       techstack.includes(selectedCategory.toLowerCase());

//     const matchesType = 
//       selectedType === "All Types" ||
//       engagementtype === selectedType.toLowerCase();

//     const matchesLocation = 
//       selectedLocation === "All Locations" ||
//       location === selectedLocation.toLowerCase();

//     return matchesSearch && matchesCategory && matchesType && matchesLocation;
//   });

//   if (loading) {
//     return (
//       <section className="careers-loading">
//         <div className="loading-spinner"></div>
//         <p>Discovering amazing opportunities...</p>
//       </section>
//     );
//   }

//   return (
//     <>

//       {/* HERO - DARK PREMIUM */}
//       <section className="careers-hero">
//         <div className="hero-glow"></div>
//         <div className="container">
//           <motion.div 
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.9 }}
//             className="careers-hero-content"
//           >
//             <div className="hero-badge">
//               <Zap size={32} />
//               <span>Careers</span>
//             </div>
//             <h1 className="careers-title">
//               Build the Future<br />
//               <span className="title-gradient">With Us</span>
//             </h1>
//             <p className="careers-subtitle">
//               Join a team of passionate innovators shaping tomorrow's technology. 
//               We value talent, growth, and impact.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* FILTERS BAR */}
//       <section className="careers-filters">
//         <div className="container">
//           <div className="filters-wrapper">
//             {/* Search */}
//             <div className="search-bar">
//               <Search size={22} />
//               <input
//                 type="text"
//                 placeholder="Search roles, tech stack, company..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//             </div>

//             {/* Dropdowns */}
//             <div className="dropdowns-group">
//               <div className="dropdown-wrapper">
//                 <button className="dropdown-btn" onClick={() => toggleDropdown('category')}>
//                   <Briefcase size={20} />
//                   {selectedCategory}
//                   <ChevronDown className={`dropdown-arrow ${openDropdown === 'category' ? 'open' : ''}`} />
//                 </button>
//                 {openDropdown === 'category' && (
//                   <div className="dropdown-list">
//                     {categories.map(cat => (
//                       <button
//                         key={cat}
//                         className={selectedCategory === cat ? 'active' : ''}
//                         onClick={() => { setSelectedCategory(cat); setOpenDropdown(null); }}
//                       >
//                         {cat}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               <div className="dropdown-wrapper">
//                 <button className="dropdown-btn" onClick={() => toggleDropdown('type')}>
//                   <Clock size={20} />
//                   {selectedType}
//                   <ChevronDown className={`dropdown-arrow ${openDropdown === 'type' ? 'open' : ''}`} />
//                 </button>
//                 {openDropdown === 'type' && (
//                   <div className="dropdown-list">
//                     {jobTypes.map(type => (
//                       <button
//                         key={type}
//                         className={selectedType === type ? 'active' : ''}
//                         onClick={() => { setSelectedType(type); setOpenDropdown(null); }}
//                       >
//                         {type}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               <div className="dropdown-wrapper">
//                 <button className="dropdown-btn" onClick={() => toggleDropdown('location')}>
//                   <MapPin size={20} />
//                   {selectedLocation}
//                   <ChevronDown className={`dropdown-arrow ${openDropdown === 'location' ? 'open' : ''}`} />
//                 </button>
//                 {openDropdown === 'location' && (
//                   <div className="dropdown-list">
//                     {locations.map(loc => (
//                       <button
//                         key={loc}
//                         className={selectedLocation === loc ? 'active' : ''}
//                         onClick={() => { setSelectedLocation(loc); setOpenDropdown(null); }}
//                       >
//                         {loc}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </div>

//             <div className="results-count">
//               {filteredJobs.length} Active Position{filteredJobs.length !== 1 ? 's' : ''}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* JOBS LIST */}
//       <section className="careers-jobs">
//         <div className="container">
//           <div className="jobs-grid">
//             {filteredJobs.length > 0 ? (
//               filteredJobs.map(job => (
//                 <motion.div
//                   key={job._id}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5 }}
//                   className="job-card"
//                   onClick={() => navigate(`/jobapply/${job._id}`)}
//                 >
//                   <div className="job-header">
//                     <h3>{job.techstack || "Software Engineer"}</h3>
//                     <span className="company-name">
//                       <Building2 size={18} />
//                       {job.company || "The IT Talent"}
//                     </span>
//                   </div>

//                   <div className="job-meta">
//                     <span><Briefcase size={16} /> {job.engagementtype || "Full-time"}</span>
//                     <span><MapPin size={16} /> {job.location || "Remote"}</span>
//                     <span><Clock size={16} /> Posted {new Date(job.createdAt).toLocaleDateString()}</span>
//                   </div>

//                   {job.budget && (
//                     <div className="budget-highlight">{job.budget}</div>
//                   )}

//                   <div className="apply-action">
//                     View Details <ArrowRight size={18} />
//                   </div>
//                 </motion.div>
//               ))
//             ) : (
//               <div className="no-results">
//                 <h3>No positions match your filters</h3>
//                 <p>Try adjusting your search criteria</p>
//               </div>
//             )}
//           </div>
//         </div>
//       </section>

//     </>
//   );
// }



import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { 
  Search, 
  MapPin, 
  Clock, 
  Briefcase, 
  Building2, 
  ChevronDown,
  Zap,
  ArrowRight 
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import '../styles/career.css'

// Environment Variable से API URL लें
const API = import.meta.env.VITE_APP_API_URL;

const categories = [
  "All Categories", "React.js", "Node.js", "Python", "Java", "Angular", "Vue.js",
  "DevOps", "AWS", "Data Science", "Full Stack", "Mobile Development"
];
const jobTypes = ["All Types", "Full-time", "Part-time", "Contract", "Freelance", "Remote"];
const locations = ["All Locations", "Indore", "Bangalore", "Pune", "Hyderabad", "Mumbai", "Delhi", "Remote"];

export default function Careers() {
  const [allJobs, setAllJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedType, setSelectedType] = useState("All Types");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate();

  // --- 1. Fetching Jobs and Error Handling ---
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get(`${API}/api/jobs`);
        
        // **त्रुटि समाधान:** यह सुनिश्चित करता है कि res.data एक ऐरे है
        const jobsData = Array.isArray(res.data) ? res.data : [];
        setAllJobs(jobsData);

      } catch (err) {
        console.error("Error fetching jobs:", err);
        setAllJobs([]); // विफल होने पर भी खाली ऐरे सेट करें
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  const toggleDropdown = (type) => {
    setOpenDropdown(openDropdown === type ? null : type);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.dropdown-wrapper')) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // --- 2. Filtering Logic ---
  const filteredJobs = allJobs.filter(job => {
    if (!job.isActive) return false;

    const techstack = (job.techstack || "").toString().toLowerCase();
    const description = (job.description || "").toString().toLowerCase();
    const company = (job.company || "").toString().toLowerCase();
    const engagementtype = (job.engagementtype || "").toString().toLowerCase();
    const location = (job.location || "").toString().toLowerCase();

    const searchLower = searchTerm.toLowerCase();

    const matchesSearch = 
      techstack.includes(searchLower) ||
      description.includes(searchLower) ||
      company.includes(searchLower);

    const matchesCategory = 
      selectedCategory === "All Categories" ||
      techstack.includes(selectedCategory.toLowerCase());

    const matchesType = 
      selectedType === "All Types" ||
      engagementtype === selectedType.toLowerCase();

    const matchesLocation = 
      selectedLocation === "All Locations" ||
      location === selectedLocation.toLowerCase();

    return matchesSearch && matchesCategory && matchesType && matchesLocation;
  });

  if (loading) {
    return (
      <section className="careers-loading">
        <div className="loading-spinner"></div>
        <p>Discovering amazing opportunities...</p>
      </section>
    );
  }

  return (
    <>

      {/* HERO - DARK PREMIUM */}
      <section className="careers-hero">
        <div className="hero-glow"></div>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="careers-hero-content"
          >
            <div className="hero-badge">
              <Zap size={32} />
              <span>Careers</span>
            </div>
            <h1 className="careers-title">
              Build the Future<br />
              <span className="title-gradient">With Us</span>
            </h1>
            <p className="careers-subtitle">
              Join a team of passionate innovators shaping tomorrow's technology. 
              We value talent, growth, and impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FILTERS BAR */}
      <section className="careers-filters">
        <div className="container">
          <div className="filters-wrapper">
            {/* Search */}
            <div className="search-bar">
              <Search size={22} />
              <input
                type="text"
                placeholder="Search roles, tech stack, company..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Dropdowns */}
            <div className="dropdowns-group">
              <div className="dropdown-wrapper">
                <button className="dropdown-btn" onClick={() => toggleDropdown('category')}>
                  <Briefcase size={20} />
                  {selectedCategory}
                  <ChevronDown className={`dropdown-arrow ${openDropdown === 'category' ? 'open' : ''}`} />
                </button>
                {openDropdown === 'category' && (
                  <div className="dropdown-list">
                    {categories.map(cat => (
                      <button
                        key={cat}
                        className={selectedCategory === cat ? 'active' : ''}
                        onClick={() => { setSelectedCategory(cat); setOpenDropdown(null); }}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="dropdown-wrapper">
                <button className="dropdown-btn" onClick={() => toggleDropdown('type')}>
                  <Clock size={20} />
                  {selectedType}
                  <ChevronDown className={`dropdown-arrow ${openDropdown === 'type' ? 'open' : ''}`} />
                </button>
                {openDropdown === 'type' && (
                  <div className="dropdown-list">
                    {jobTypes.map(type => (
                      <button
                        key={type}
                        className={selectedType === type ? 'active' : ''}
                        onClick={() => { setSelectedType(type); setOpenDropdown(null); }}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="dropdown-wrapper">
                <button className="dropdown-btn" onClick={() => toggleDropdown('location')}>
                  <MapPin size={20} />
                  {selectedLocation}
                  <ChevronDown className={`dropdown-arrow ${openDropdown === 'location' ? 'open' : ''}`} />
                </button>
                {openDropdown === 'location' && (
                  <div className="dropdown-list">
                    {locations.map(loc => (
                      <button
                        key={loc}
                        className={selectedLocation === loc ? 'active' : ''}
                        onClick={() => { setSelectedLocation(loc); setOpenDropdown(null); }}
                      >
                        {loc}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="results-count">
              {filteredJobs.length} Active Position{filteredJobs.length !== 1 ? 's' : ''}
            </div>
          </div>
        </div>
      </section>

      {/* JOBS LIST */}
      <section className="careers-jobs">
        <div className="container">
          <div className="jobs-grid">
            {filteredJobs.length > 0 ? (
              filteredJobs.map(job => (
                <motion.div
                  key={job._id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="job-card"
                  viewport={{ once: true }} // केवल एक बार एनिमेट करें
                  onClick={() => navigate(`/jobapply/${job._id}`)}
                >
                  <div className="job-header">
                    <h3>{job.techstack || "Software Engineer"}</h3>
                    <span className="company-name">
                      <Building2 size={18} />
                      {job.company || "The IT Talent"}
                    </span>
                  </div>

                  <div className="job-meta">
                    <span><Briefcase size={16} /> {job.engagementtype || "Full-time"}</span>
                    <span><MapPin size={16} /> {job.location || "Remote"}</span>
                    <span><Clock size={16} /> Posted {new Date(job.createdAt).toLocaleDateString()}</span>
                  </div>

                  {job.budget && (
                    <div className="budget-highlight">{job.budget}</div>
                  )}

                  <div className="apply-action">
                    View Details <ArrowRight size={18} />
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="no-results">
                <h3>No positions match your filters</h3>
                <p>Try adjusting your search criteria or clear all filters.</p>
              </div>
            )}
          </div>
        </div>
      </section>

    </>
  );
}