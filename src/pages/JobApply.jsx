import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  User, 
  Mail, 
  Phone, 
  FileText, 
  CheckCircle, 
  AlertCircle, 
  ArrowRight,
  Building2,
  Briefcase,
  MapPin,
  Clock,
  Upload
} from "lucide-react";
import '../styles/career.css';

const API = import.meta.env.VITE_APP_API_URL || "https://itbackend-p7sr.onrender.com";

export default function JobApply() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [job, setJob] = useState(null);
  const [loadingJob, setLoadingJob] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [resume, setResume] = useState(null);

  const [step, setStep] = useState(1); // 1: details, 2: otp, 3: resume
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await axios.get(`${API}/api/jobs/${id}`);
        setJob(res.data);
      } catch (err) {
        setMessage("Failed to load job details");
      } finally {
        setLoadingJob(false);
      }
    };
    if (id) fetchJob();
  }, [id]);

  const sendOtp = async () => {
    if (!name || !email || !phone) {
      setMessage("All fields are required");
      return;
    }
    setSending(true);
    setMessage("");

    try {
      const res = await axios.post(`${API}/api/apply/send-otp`, {
        name, email, phone, description, jobId: id, jobName: job?.techstack
      });
      setStep(2);
      setMessage(res.data.message || "OTP sent to your email!");
    } catch (err) {
      setMessage(err.response?.data?.message || "Failed to send OTP");
    } finally {
      setSending(false);
    }
  };

  const verifyOtp = async () => {
    if (!otp) {
      setMessage("Enter OTP");
      return;
    }
    setSending(true);

    try {
      await axios.post(`${API}/api/apply/verify-otp`, { email, code: otp, jobId: id });
      setStep(3);
      setMessage("Verified! Upload your resume");
    } catch (err) {
      setMessage(err.response?.data?.message || "Invalid OTP");
    } finally {
      setSending(false);
    }
  };

  const submitApplication = async (e) => {
    e.preventDefault();
    if (!resume) {
      setMessage("Select resume");
      return;
    }
    if (resume.size > 5 * 1024 * 1024) {
      setMessage("Resume < 5MB");
      return;
    }

    setSending(true);
    const formData = new FormData();
    formData.append("email", email);
    formData.append("jobId", id);
    formData.append("resume", resume);

    try {
      const res = await axios.post(`${API}/api/apply/upload-resume`, formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      setMessage(res.data.message || "Application submitted!");
      setTimeout(() => navigate("/careers"), 3000);
    } catch (err) {
      setMessage(err.response?.data?.message || "Upload failed");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <section className="apply-hero">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="apply-header"
          >
            <h1>Apply for Position</h1>
            <div className="progress-bar">
              <div className={`progress-fill step-${step}`}></div>
            </div>
            <p className="progress-text">Step {step} of 3</p>
          </motion.div>
        </div>
      </section>

      <section className="apply-main">
        <div className="container">
          <div className="apply-grid">
            {/* Job Info Card */}
            <div className="job-info-card">
              {loadingJob ? (
                <p>Loading job...</p>
              ) : job ? (
                <>
                  <h2>{job.techstack || "Software Engineer"}</h2>
                  <div className="job-tags">
                    <span><Building2 size={16} /> {job.company || "The IT Talent"}</span>
                    <span><Briefcase size={16} /> {job.engagementtype || "Full-time"}</span>
                    <span><MapPin size={16} /> {job.location || "Remote"}</span>
                    <span><Clock size={16} /> Posted {new Date(job.createdAt).toLocaleDateString()}</span>
                  </div>
                  {job.budget && <div className="budget-tag">{job.budget}</div>}
                  {job.description && (
                    <p className="job-desc-preview">
                      {job.description.length > 300 
                        ? job.description.substring(0, 300) + "..." 
                        : job.description}
                    </p>
                  )}
                </>
              ) : (
                <p className="error">Job not found</p>
              )}
            </div>

            {/* Application Form */}
            <div className="application-form">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    className="form-step"
                  >
                    <h3>Enter Your Details</h3>
                    <div className="input-group">
                      <User size={20} />
                      <input placeholder="Full Name *" value={name} onChange={e => setName(e.target.value)} />
                    </div>
                    <div className="input-group">
                      <Mail size={20} />
                      <input type="email" placeholder="Email Address *" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="input-group">
                      <Phone size={20} />
                      <input placeholder="Phone Number *" value={phone} onChange={e => setPhone(e.target.value)} />
                    </div>
                    <textarea 
                      rows="4" 
                      placeholder="Brief introduction (optional)" 
                      value={description} 
                      onChange={e => setDescription(e.target.value)} 
                    />
                    <button onClick={sendOtp} disabled={sending} className="btn-primary">
                      {sending ? "Sending OTP..." : "Send Verification OTP"} <ArrowRight className="ml-2" />
                    </button>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    className="form-step"
                  >
                    <h3>Verify Your Email</h3>
                    <p className="verify-note">We sent a 6-digit code to <strong>{email}</strong></p>
                    <div className="otp-input">
                      <input 
                        maxLength="6" 
                        placeholder="------" 
                        value={otp} 
                        onChange={e => setOtp(e.target.value.replace(/\D/g, ""))}
                      />
                    </div>
                    <button onClick={verifyOtp} disabled={sending} className="btn-primary">
                      {sending ? "Verifying..." : "Verify OTP"}
                    </button>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="form-step"
                  >
                    <h3>Upload Resume</h3>
                    <p>PDF, DOC, DOCX • Max 5MB</p>
                    <label className="resume-upload">
                      <Upload size={32} />
                      <span>{resume ? resume.name : "Click to select resume"}</span>
                      <input 
                        type="file" 
                        accept=".pdf,.doc,.docx"
                        onChange={e => setResume(e.target.files[0] || null)}
                      />
                    </label>
                    {resume && (
                      <p className="file-info">
                        {(resume.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    )}
                    <button onClick={submitApplication} disabled={sending} className="btn-primary large">
                      {sending ? "Submitting..." : "Complete Application"}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              {message && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`status-message ${message.includes("success") || message.includes("Verified") ? "success" : "error"}`}
                >
                  {message.includes("success") || message.includes("Verified") ? <CheckCircle size={24} /> : <AlertCircle size={24} />}
                  {message}
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}