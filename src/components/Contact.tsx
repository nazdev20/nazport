import React, { useState } from 'react';
import { contactData } from '../data/portfolioData';
import { Mail, Github, Linkedin, Copy, Check, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [sent, setSent] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSent(true);
  };

  return (
    <section
      id="contact"
      aria-label="Contact"
      className="py-16 sm:py-20"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-950 dark:text-white mb-6">
          Contact
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Contact Direct Links */}
          <div className="space-y-4">
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
              Feel free to reach out directly via email or connect on LinkedIn and GitHub.
            </p>

            {/* Email */}
            <div className="p-3.5 rounded border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5 overflow-hidden">
                <Mail className="w-4 h-4 text-neutral-500 shrink-0" />
                <a
                  href={`mailto:${contactData.email}`}
                  className="text-xs sm:text-sm font-medium text-neutral-900 dark:text-neutral-100 hover:underline truncate"
                >
                  {contactData.email}
                </a>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-1.5 rounded text-xs border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-900 text-neutral-600 dark:text-neutral-300 transition-colors shrink-0"
                title="Copy email to clipboard"
                aria-label="Copy email"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* GitHub */}
            <div className="p-3.5 rounded border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 flex items-center gap-2.5">
              <Github className="w-4 h-4 text-neutral-500 shrink-0" />
              <a
                href={contactData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm font-medium text-neutral-900 dark:text-neutral-100 hover:underline"
              >
                github.com/nazareneeroa
              </a>
            </div>

            {/* LinkedIn */}
            <div className="p-3.5 rounded border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 flex items-center gap-2.5">
              <Linkedin className="w-4 h-4 text-neutral-500 shrink-0" />
              <a
                href={contactData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm font-medium text-neutral-900 dark:text-neutral-100 hover:underline"
              >
                linkedin.com/in/nazareneeroa
              </a>
            </div>
          </div>

          {/* Simple Contact Form */}
          <div className="p-5 rounded border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950">
            {sent ? (
              <div className="py-6 text-center space-y-2">
                <Check className="w-5 h-5 mx-auto text-emerald-600" />
                <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                  Message sent successfully.
                </p>
                <p className="text-xs text-neutral-500">
                  Thank you for reaching out!
                </p>
                <button
                  onClick={() => {
                    setSent(false);
                    setFormData({ name: '', email: '', message: '' });
                  }}
                  className="mt-3 text-xs underline text-neutral-600 dark:text-neutral-400"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full px-3 py-1.5 text-xs sm:text-sm rounded border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-hidden focus:border-neutral-900 dark:focus:border-neutral-100"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    className="w-full px-3 py-1.5 text-xs sm:text-sm rounded border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-hidden focus:border-neutral-900 dark:focus:border-neutral-100"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Your message..."
                    className="w-full px-3 py-1.5 text-xs sm:text-sm rounded border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-hidden focus:border-neutral-900 dark:focus:border-neutral-100 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2 px-3 rounded bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 text-xs sm:text-sm font-medium hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors flex items-center justify-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
