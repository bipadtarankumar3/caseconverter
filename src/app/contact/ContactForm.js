'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production: connect to a form service (Formspree, EmailJS, etc.)
    setSubmitted(true);
  };

  return (
    <div className="p-8 bg-white/[0.02] border border-white/10 rounded-[28px]">
      <h2 className="text-2xl font-black text-white mb-6">Send a Message</h2>
      {submitted ? (
        <div className="text-center py-10">
          <div className="text-5xl mb-4">✅</div>
          <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
          <p className="text-muted">Thanks for reaching out. We will get back to you within 24–48 hours.</p>
        </div>
      ) : (
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contact-name" className="block text-sm font-semibold text-muted mb-2">Name</label>
              <input id="contact-name" type="text" placeholder="Your name" required
                className="w-full bg-white/[0.03] border border-white/10 px-4 py-3 rounded-xl text-white placeholder:text-white/25 outline-none focus:border-primary transition-colors" />
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-sm font-semibold text-muted mb-2">Email</label>
              <input id="contact-email" type="email" placeholder="you@example.com" required
                className="w-full bg-white/[0.03] border border-white/10 px-4 py-3 rounded-xl text-white placeholder:text-white/25 outline-none focus:border-primary transition-colors" />
            </div>
          </div>
          <div>
            <label htmlFor="contact-subject" className="block text-sm font-semibold text-muted mb-2">Subject</label>
            <select id="contact-subject"
              className="w-full bg-white/[0.03] border border-white/10 px-4 py-3 rounded-xl text-white outline-none focus:border-primary transition-colors">
              <option value="" className="bg-slate-900">Select a topic</option>
              <option value="bug" className="bg-slate-900">Bug Report</option>
              <option value="feature" className="bg-slate-900">Feature Request</option>
              <option value="question" className="bg-slate-900">General Question</option>
              <option value="other" className="bg-slate-900">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="contact-message" className="block text-sm font-semibold text-muted mb-2">Message</label>
            <textarea id="contact-message" rows={5} placeholder="Describe your issue or suggestion..." required
              className="w-full bg-white/[0.03] border border-white/10 px-4 py-3 rounded-xl text-white placeholder:text-white/25 outline-none focus:border-primary transition-colors resize-none" />
          </div>
          <button type="submit"
            className="w-full py-3 bg-primary hover:bg-primary/90 text-slate-950 font-black rounded-xl transition-all">
            Send Message
          </button>
        </form>
      )}
    </div>
  );
}
