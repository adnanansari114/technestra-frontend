import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, User, Mail, MessageSquare, Building2 } from "lucide-react";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");
    setTimeout(() => {
      setStatus("Message sent! We'll reply soon.");
      setForm({ name: "", email: "", company: "", message: "" });
    }, 1500);
  };

  return (
    <section className="contact-form-section">
      <div className="container">
        <h2 className="section-title">Send a Message</h2>
        <motion.form 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          onSubmit={handleSubmit}
          className="contact-form"
        >
          <div className="form-grid">
            <div className="input-wrapper">
              <User size={20} />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-wrapper">
              <Mail size={20} />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-wrapper full">
              <Building2 size={20} />
              <input
                type="text"
                name="company"
                placeholder="Company (Optional)"
                value={form.company}
                onChange={handleChange}
              />
            </div>
            <div className="input-wrapper full">
              <MessageSquare size={20} />
              <textarea
                name="message"
                rows="3"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <button type="submit" className="submit-btn">
            Send Message <Send className="ml-2" size={20} />
          </button>
          {status && <p className="form-status">{status}</p>}
        </motion.form>
      </div>
    </section>
  );
}