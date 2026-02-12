import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, MessageSquare, Send, ExternalLink } from 'lucide-react'
import GlassCard from '../components/GlassCard'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '10px',
    border: '1px solid rgba(255,255,255,0.06)',
    background: 'rgba(0,0,0,0.25)',
    color: 'rgba(255,255,255,0.85)',
    fontSize: '14px',
    fontFamily: 'inherit',
    outline: 'none',
    transition: 'all 0.2s',
  }

  return (
    <div className="pt-24 pb-20">
      <section className="section-padding relative">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span
              className="inline-block mb-4 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest rounded-full"
              style={{
                color: '#4ecdc4',
                background: 'rgba(78, 205, 196, 0.08)',
                border: '1px solid rgba(78, 205, 196, 0.15)',
              }}
            >
              Contact
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in <span className="gradient-text">touch</span>
            </h1>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Have a question, feedback, or want to collaborate? We&apos;d love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Contact Form */}
            <div className="md:col-span-3">
              <GlassCard className="p-8 relative overflow-hidden" delay={0.1}>
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'radial-gradient(circle at 20% 80%, rgba(168, 85, 247, 0.04) 0%, transparent 50%)',
                  }}
                />
                <div className="relative z-10">
                  <h2 className="text-xl font-bold mb-6" style={{ color: 'rgba(255,255,255,0.9)' }}>
                    Send us a message
                  </h2>

                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                        style={{
                          background: 'rgba(52, 211, 153, 0.1)',
                          border: '1px solid rgba(52, 211, 153, 0.2)',
                        }}
                      >
                        <Send size={24} style={{ color: '#34d399' }} />
                      </div>
                      <h3 className="text-lg font-semibold mb-2" style={{ color: 'rgba(255,255,255,0.9)' }}>
                        Message sent!
                      </h3>
                      <p className="text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>
                        This is a demo form. For real inquiries, please use the links on the right.
                      </p>
                      <button
                        onClick={() => { setSubmitted(false); setForm({ name: '', email: '', message: '' }) }}
                        className="mt-4 text-sm font-medium"
                        style={{ color: '#a855f7', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}
                      >
                        Send another message
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label className="block text-xs font-medium mb-1.5 uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.3)' }}>
                          Name
                        </label>
                        <input
                          type="text"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="Your name"
                          required
                          style={inputStyle}
                          onFocus={(e) => { e.target.style.borderColor = 'rgba(168, 85, 247, 0.3)' }}
                          onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.06)' }}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium mb-1.5 uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.3)' }}>
                          Email
                        </label>
                        <input
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="you@example.com"
                          required
                          style={inputStyle}
                          onFocus={(e) => { e.target.style.borderColor = 'rgba(168, 85, 247, 0.3)' }}
                          onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.06)' }}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium mb-1.5 uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.3)' }}>
                          Message
                        </label>
                        <textarea
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          placeholder="Tell us what's on your mind..."
                          required
                          rows={5}
                          style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
                          onFocus={(e) => { e.target.style.borderColor = 'rgba(168, 85, 247, 0.3)' }}
                          onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.06)' }}
                        />
                      </div>
                      <button type="submit" className="btn-primary w-full justify-center">
                        <Send size={16} /> Send Message
                      </button>
                    </form>
                  )}
                </div>
              </GlassCard>
            </div>

            {/* Contact Links */}
            <div className="md:col-span-2 space-y-4">
              <GlassCard className="p-6" delay={0.2}>
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      background: 'rgba(168, 85, 247, 0.1)',
                      border: '1px solid rgba(168, 85, 247, 0.15)',
                    }}
                  >
                    <Github size={18} style={{ color: '#a855f7' }} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold" style={{ color: 'rgba(255,255,255,0.85)' }}>GitHub Issues</h3>
                    <p className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>Bug reports & features</p>
                  </div>
                </div>
                <a
                  href="https://github.com/Exenye-Industries/LoopForge/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-medium no-underline"
                  style={{ color: '#a855f7' }}
                >
                  Open an issue <ExternalLink size={12} />
                </a>
              </GlassCard>

              <GlassCard className="p-6" delay={0.3}>
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      background: 'rgba(78, 205, 196, 0.1)',
                      border: '1px solid rgba(78, 205, 196, 0.15)',
                    }}
                  >
                    <MessageSquare size={18} style={{ color: '#4ecdc4' }} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold" style={{ color: 'rgba(255,255,255,0.85)' }}>GitHub Discussions</h3>
                    <p className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>Questions & ideas</p>
                  </div>
                </div>
                <a
                  href="https://github.com/Exenye-Industries/LoopForge/discussions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-medium no-underline"
                  style={{ color: '#4ecdc4' }}
                >
                  Join the discussion <ExternalLink size={12} />
                </a>
              </GlassCard>

              <GlassCard className="p-6" delay={0.4}>
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      background: 'rgba(52, 211, 153, 0.1)',
                      border: '1px solid rgba(52, 211, 153, 0.15)',
                    }}
                  >
                    <Mail size={18} style={{ color: '#34d399' }} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold" style={{ color: 'rgba(255,255,255,0.85)' }}>Email</h3>
                    <p className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>Direct inquiries</p>
                  </div>
                </div>
                <a
                  href="mailto:contact@exenye.com"
                  className="flex items-center gap-1.5 text-xs font-medium no-underline"
                  style={{ color: '#34d399' }}
                >
                  contact@exenye.com <ExternalLink size={12} />
                </a>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
