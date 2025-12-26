import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import '../../styles/Blog.css';
import ReadySection from "../../components/ReadySection.jsx"; 

const API = import.meta.env.VITE_APP_API_URL;

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const res = await axios.get(`${API}/api/blogs`);
        const sorted = res.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setBlogs(sorted);
      } catch (err) {
        setError("Unable to load blogs at the moment.");
      } finally {
        setLoading(false);
      }
    };
    getBlogs();
  }, []);

  return (
    <>

      {/* HERO */}
      <section className="blog-hero">
        <div className="hero-glow-effect"></div>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="blog-hero-content"
          >
            <h1 className="blog-main-title">
              Latest <span className="gradient-title">Insights</span>
            </h1>
            <p className="blog-subtitle">
              Deep dives into AI, cloud, development best practices, and the future of technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="blog-grid-section">
        <div className="container">
          {loading && (
            <div className="blog-loading-state">
              <div className="spinner"></div>
              <p>Loading latest insights...</p>
            </div>
          )}

          {error && (
            <div className="blog-error-state">
              <p>{error}</p>
            </div>
          )}

          {!loading && !error && blogs.length === 0 && (
            <div className="blog-empty-state">
              <p>No blogs published yet. Check back soon!</p>
            </div>
          )}

          <div className="blog-grid">
            {blogs.map((post, index) => (
              <motion.div
                key={post._id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="blog-card"
              >
                <div className="blog-thumbnail">
                  <div className="thumbnail-placeholder">
                    <span>{post.title.charAt(0).toUpperCase()}</span>
                  </div>
                </div>

                <div className="blog-card-content">
                  <h3 className="blog-card-title">{post.title}</h3>
                  <p className="blog-excerpt">
                    {post.heading1 || "Explore this article to discover valuable insights and expert perspectives..."}
                  </p>

                  <div className="blog-meta-info">
                    <span>{new Date(post.createdAt).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>

                  <Link to={`/blog/${post._id}`} className="read-more-link">
                    Read Article <span className="arrow">→</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <ReadySection />
    </>
  );
}