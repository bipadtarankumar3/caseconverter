'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  // There is no backend, so hand the message to the visitor's own mail app
  // instead of pretending it was sent.
  const handleSubmit = (e) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const topic = f.get('subject') || 'General';
    const subject = `[CaseConverter] ${topic}`;
    const body = `${f.get('message')}\n\n— ${f.get('name')} (${f.get('email')})`;
    window.location.href = `mailto:support@revoxera.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <div className="p-6 md:p-8 bg-white border border-slate-200 rounded-2xl shadow-xs">
      <h2 className="text-xl font-bold text-slate-900 mb-6">Send Us a Message</h2>
      {submitted ? (
        <div className="text-center py-8">
          <div className="text-4xl mb-3">✅</div>
          <h3 className="text-lg font-bold text-slate-900 mb-1">Your email app should open now</h3>
          <p className="text-slate-600 text-sm">Press send there to deliver your message. If nothing opened, email us directly at <a href="mailto:support@revoxera.com" className="text-emerald-600 font-semibold">support@revoxera.com</a>.</p>
        </div>
      ) : (
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-700 mb-1.5">Name</label>
              <input id="contact-name" name="name" type="text" placeholder="Your name" required
                className="w-full bg-white border border-slate-200 px-3.5 py-2.5 rounded-xl text-slate-900 placeholder:text-slate-400 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 text-sm transition-all" />
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-700 mb-1.5">Email</label>
              <input id="contact-email" name="email" type="email" placeholder="you@example.com" required
                className="w-full bg-white border border-slate-200 px-3.5 py-2.5 rounded-xl text-slate-900 placeholder:text-slate-400 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 text-sm transition-all" />
            </div>
          </div>
          <div>
            <label htmlFor="contact-subject" className="block text-xs font-semibold text-slate-700 mb-1.5">Subject</label>
            <select id="contact-subject" name="subject"
              className="w-full bg-white border border-slate-200 px-3.5 py-2.5 rounded-xl text-slate-900 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 text-sm transition-all">
              <option value="">Select a topic</option>
              <option value="Bug report">Bug Report</option>
              <option value="Feature request">Feature Request</option>
              <option value="Question">General Question</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-700 mb-1.5">Message</label>
            <textarea id="contact-message" name="message" rows={4} placeholder="Describe your issue or suggestion..." required
              className="w-full bg-white border border-slate-200 px-3.5 py-2.5 rounded-xl text-slate-900 placeholder:text-slate-400 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 text-sm transition-all resize-y" />
          </div>
          <button type="submit"
            className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-all shadow-xs text-sm">
            Send via Email
          </button>
        </form>
      )}
    </div>
  );
}
