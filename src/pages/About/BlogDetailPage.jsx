import React, { useState, useEffect, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import ReadySection from "../../components/ReadySection.jsx";
import { 
  Calendar, 
  MessageCircle, 
  ArrowRight, 
  ChevronDown,
  User,
  Mail,
  Globe, 
  Send
} from "lucide-react";
import '../../styles/Blog.css'

const API = import.meta.env.VITE_APP_API_URL;

export default function BlogDetailPage() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [recentPosts, setRecentPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);

  const [mainForm, setMainForm] = useState({ name: "", email: "", website: "", comment: "" });

  useEffect(() => {
    const fetchRecent = async () => {
      try {
        const res = await axios.get(`${API}/api/blogs`);
        const sorted = res.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setRecentPosts(sorted.filter(p => p._id !== id).slice(0, 6));
      } catch (err) {
        console.error(err);
      }
    };
    fetchRecent();
  }, [id]);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`${API}/api/blogs/${id}`);
        setBlog(res.data);
      } catch (err) {
        setError("Unable to load this article.");
      } finally {
        setLoading(false);
      }
    };

    const fetchComments = async () => {
      try {
        const res = await axios.get(`${API}/api/comments/blog/${id}`);
        setComments(res.data || []);
      } catch (err) {
        console.error(err);
      }
    };

    if (id) {
      fetchBlog();
      fetchComments();
    }
  }, [id]);

  const handleMainComment = async (e) => {
    e.preventDefault();
    if (!mainForm.name || !mainForm.email || !mainForm.comment) return;

    try {
      const res = await axios.post(`${API}/api/comments/add`, {
        blogId: id,
        blogTitle: blog.title,
        name: mainForm.name,
        email: mainForm.email,
        website: mainForm.website,
        comment: mainForm.comment,
        parentId: null
      });
      setComments([res.data.comment, ...comments]);
      setMainForm({ name: "", email: "", website: "", comment: "" });
    } catch (err) {
      alert("Failed to post comment");
    }
  };

  const addReply = useCallback(async (parentId, name, text) => {
    if (!name || !text) return;

    try {
      const res = await axios.post(`${API}/api/comments/add`, {
        blogId: id,
        blogTitle: blog.title,
        name,
        email: "",
        comment: text,
        parentId
      });

      const updateReplies = (cmts) => cmts.map(c => {
        if (c._id === parentId) {
          return { ...c, replies: [...(c.replies || []), res.data.comment] };
        }
        if (c.replies) {
          return { ...c, replies: updateReplies(c.replies) };
        }
        return c;
      });
      setComments(updateReplies(comments));
    } catch (err) {
      alert("Reply failed");
    }
  }, [id, blog?.title, comments]);

  const CommentItem = ({ comment, depth = 0 }) => {
    const [showReply, setShowReply] = useState(false);
    const [replyName, setReplyName] = useState("");
    const [replyText, setReplyText] = useState("");

    return (
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className={`comment-item ${depth > 0 ? "reply" : ""}`}
      >
        <div className="comment-avatar">
          {comment.name?.[0]?.toUpperCase() || "A"}
        </div>
        <div className="comment-body">
          <div className="comment-header">
            <h4>{comment.name || "Anonymous"}</h4>
            <span className="comment-date">
              <Calendar size={14} />
              {new Date(comment.createdAt).toLocaleDateString()}
            </span>
          </div>
          <p className="comment-text">{comment.comment}</p>
          <button onClick={() => setShowReply(!showReply)} className="reply-btn">
            Reply
          </button>

          {showReply && (
            <div className="reply-form">
              <input 
                placeholder="Your name" 
                value={replyName} 
                onChange={e => setReplyName(e.target.value)} 
              />
              <textarea 
                placeholder="Write reply..." 
                rows="3"
                value={replyText} 
                onChange={e => setReplyText(e.target.value)} 
              />
              <div className="reply-actions">
                <button onClick={() => {
                  addReply(comment._id, replyName, replyText);
                  setShowReply(false);
                  setReplyName("");
                  setReplyText("");
                }} className="btn-primary small">
                  Post Reply
                </button>
                <button onClick={() => setShowReply(false)} className="cancel-btn">
                  Cancel
                </button>
              </div>
            </div>
          )}

          {comment.replies && comment.replies.length > 0 && (
            <div className="replies">
              {comment.replies.map(reply => (
                <CommentItem key={reply._id} comment={reply} depth={depth + 1} />
              ))}
            </div>
          )}
        </div>
      </motion.div>
    );
  };

  if (loading) return <div className="loading-blog">Loading article...</div>;
  if (error || !blog) return <div className="blog-not-found">Article not found</div>;

  return (
    <>

      {/* HERO */}
      <section className="blog-detail-hero">
        <div className="hero-glow"></div>
        <div className="container">
          <motion.div className="hero-content">
            <h1 className="detail-title">{blog.title}</h1>
            <div className="post-meta">
              <span><Calendar size={18} /> {new Date(blog.createdAt).toLocaleDateString()}</span>
              <span><MessageCircle size={18} /> {comments.length} Comments</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="blog-detail-main">
        <div className="container">
          <div className="detail-grid">
            <article className="main-article">
              {blog.image ? (
                <div className="featured-image">
                  <img src={blog.image} alt={blog.title} onError={e => e.target.style.display = "none"} />
                </div>
              ) : (
                <div className="image-placeholder">
                  <span>{blog.title.charAt(0)}</span>
                </div>
              )}

              <div className="article-body">
                {blog.heading1 && <h2>{blog.heading1}</h2>}
                {blog.paragraphs1?.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* COMMENTS */}
              <div className="comments-area">
                <button onClick={() => setShowComments(!showComments)} className="comments-toggle">
                  {comments.length} Comments <ChevronDown className={`arrow ${showComments ? "open" : ""}`} />
                </button>

                <AnimatePresence>
                  {showComments && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="comments-container"
                    >
                      <form onSubmit={handleMainComment} className="main-comment-form">
                        <h3>Leave a Comment</h3>
                        <div className="form-row">
                          <input placeholder="Name *" value={mainForm.name} onChange={e => setMainForm({...mainForm, name: e.target.value})} required />
                          <input type="email" placeholder="Email *" value={mainForm.email} onChange={e => setMainForm({...mainForm, email: e.target.value})} required />
                        </div>
                        <input placeholder="Website (optional)" value={mainForm.website} onChange={e => setMainForm({...mainForm, website: e.target.value})} />
                        <textarea rows="5" placeholder="Your comment *" value={mainForm.comment} onChange={e => setMainForm({...mainForm, comment: e.target.value})} required />
                        <button type="submit" className="btn-primary">
                          Post Comment <Send className="ml-2" />
                        </button>
                      </form>

                      <div className="comments-list">
                        {comments.length === 0 ? (
                          <p className="no-comments">No comments yet. Be the first!</p>
                        ) : (
                          comments.map(comment => (
                            <CommentItem key={comment._id} comment={comment} />
                          ))
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </article>

            {/* SIDEBAR */}
            <aside className="blog-sidebar">
              <div className="sidebar-card">
                <h3>Recent Articles</h3>
                <ul>
                  {recentPosts.map(post => (
                    <li key={post._id}>
                      <Link to={`/blog/${post._id}`} className="recent-link">
                        {post.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <ReadySection />
    </>
  );
}