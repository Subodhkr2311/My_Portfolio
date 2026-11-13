import React, { useState, useEffect } from 'react';
import {
  Send,
  Mail,
  Linkedin,
  Github,
  CheckCircle2,
  ExternalLink,
  Loader2,
  ArrowRight,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function ContactConsole({ selectedService, prefilledCode, onClearService }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'transmitting' | 'sent'
  const [receiptCode, setReceiptCode] = useState('');

  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({
        ...prev,
        service: selectedService,
        message: prev.message || `Hi Subodh, I would like to consult with you regarding ${selectedService} (${prefilledCode || 'INQUIRY'}).`,
      }));
    }
  }, [selectedService, prefilledCode]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setStatus('transmitting');
    setTimeout(() => {
      const code = `SK-${Math.floor(100000 + Math.random() * 900000)}`;
      setReceiptCode(code);
      setStatus('sent');
    }, 600);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', company: '', service: '', message: '' });
    setStatus('idle');
    if (onClearService) onClearService();
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14 pb-6 border-b border-neutral-200">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500 block mb-2">
              Let's Connect
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-neutral-950 tracking-tight">
              Start a Conversation
            </h2>
          </div>
          <p className="text-sm text-neutral-600 max-w-md leading-relaxed">
            Reach out directly for Technical Product Management roles, mobile systems architecture, or full-stack engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Links (Email, LinkedIn, GitHub - NO WhatsApp, NO Phone, NO Location) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 sm:p-8 rounded-3xl bg-neutral-50/70 border border-neutral-200/80 shadow-xs">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 mb-4">
                Direct Channels
              </h3>

              <div className="space-y-3">
                {/* Email Direct */}
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center justify-between p-4 rounded-2xl bg-white border border-neutral-200/80 hover:border-neutral-400 hover:shadow-xs transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-neutral-100 group-hover:bg-[#FFD91A] group-hover:text-black flex items-center justify-center transition-colors">
                      <Mail size={16} />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-neutral-400 block uppercase">
                        Email
                      </span>
                      <span className="text-sm font-medium text-neutral-900 group-hover:text-black">
                        {PERSONAL_INFO.email}
                      </span>
                    </div>
                  </div>
                  <ExternalLink size={14} className="text-neutral-400 group-hover:text-neutral-700" />
                </a>

                {/* LinkedIn */}
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-white border border-neutral-200/80 hover:border-neutral-400 hover:shadow-xs transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-neutral-100 group-hover:bg-[#0077B5] group-hover:text-white flex items-center justify-center transition-colors">
                      <Linkedin size={16} />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-neutral-400 block uppercase">
                        LinkedIn
                      </span>
                      <span className="text-sm font-medium text-neutral-900 group-hover:text-black">
                        Subodh Kumar
                      </span>
                    </div>
                  </div>
                  <ExternalLink size={14} className="text-neutral-400 group-hover:text-neutral-700" />
                </a>

                {/* GitHub */}
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-white border border-neutral-200/80 hover:border-neutral-400 hover:shadow-xs transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-neutral-100 group-hover:bg-neutral-950 group-hover:text-white flex items-center justify-center transition-colors">
                      <Github size={16} />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-neutral-400 block uppercase">
                        GitHub
                      </span>
                      <span className="text-sm font-medium text-neutral-900 group-hover:text-black">
                        Subodhkr2311
                      </span>
                    </div>
                  </div>
                  <ExternalLink size={14} className="text-neutral-400 group-hover:text-neutral-700" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Sleek Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-9 rounded-3xl bg-neutral-50/70 border border-neutral-200/80 shadow-xs">
              {status === 'sent' ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#D0F030] text-black mx-auto flex items-center justify-center font-bold text-xl">
                    ✓
                  </div>

                  <h3 className="text-2xl font-display font-bold text-neutral-950">
                    Message Sent
                  </h3>

                  <p className="text-sm text-neutral-600 max-w-sm mx-auto leading-relaxed">
                    Thank you, <strong className="text-neutral-900">{formData.name}</strong>. Your note has been received and I will follow up shortly.
                  </p>

                  <div className="p-4 rounded-2xl bg-white border border-neutral-200/80 max-w-xs mx-auto text-xs font-mono text-left space-y-1">
                    <div className="flex justify-between text-neutral-500">
                      <span>Ref ID:</span>
                      <span className="font-semibold text-neutral-900">{receiptCode}</span>
                    </div>
                    <div className="flex justify-between text-neutral-500">
                      <span>Status:</span>
                      <span className="text-[#F04400] font-semibold">Delivered</span>
                    </div>
                  </div>

                  <button
                    onClick={handleReset}
                    className="mt-4 px-6 py-2.5 rounded-full bg-neutral-900 text-white font-medium text-xs hover:bg-neutral-800 transition-colors"
                  >
                    Send another note &rarr;
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-neutral-700 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-950 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-neutral-700 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-950 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-neutral-700 mb-1.5">
                        Organization / Role
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Company or Project"
                        className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-950 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-neutral-700 mb-1.5">
                        Topic of Interest
                      </label>
                      <input
                        type="text"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        placeholder="e.g. Technical Product Management"
                        className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-950 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-1.5">
                      Message Brief
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share a brief overview of your initiative or requirements..."
                      className="w-full bg-white border border-neutral-200 rounded-xl p-4 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-950 resize-none transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'transmitting'}
                    className="w-full py-3.5 px-6 rounded-full bg-neutral-950 hover:bg-[#FFD91A] hover:text-black text-white font-medium text-sm tracking-tight transition-all duration-200 flex items-center justify-center gap-2 group shadow-sm"
                  >
                    {status === 'transmitting' ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        <span>Sending message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
