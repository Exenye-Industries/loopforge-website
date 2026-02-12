import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Github, Download } from 'lucide-react'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/features', label: 'Features' },
  { path: '/pricing', label: 'Pricing' },
  { path: '/docs', label: 'Docs' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [location])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass-nav shadow-lg shadow-black/20' : ''
    }`} style={!scrolled ? {
      background: 'transparent',
      borderBottom: '1px solid transparent',
    } : undefined}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 no-underline group">
          <span className="text-xl gradient-text font-bold transition-transform group-hover:scale-110" style={{ fontFamily: 'serif' }}>&#9672;</span>
          <span className="text-lg font-bold text-white tracking-tight">
            Loop<span className="text-lf-purple">Forge</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-0.5">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path
            return (
              <Link
                key={link.path}
                to={link.path}
                className="relative px-3.5 py-2 text-sm font-medium no-underline transition-colors duration-200"
                style={{
                  color: isActive ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.45)',
                }}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full"
                    style={{ background: 'linear-gradient(90deg, #4ecdc4, #a855f7)' }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            )
          })}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Exenye-Industries/LoopForge"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 text-lf-text-secondary hover:text-lf-text transition-colors"
            style={{ fontSize: 13 }}
          >
            <Github size={16} />
          </a>
          <a
            href="https://github.com/Exenye-Industries/LoopForge/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex btn-primary text-sm"
            style={{ padding: '8px 20px', fontSize: '13px' }}
          >
            <Download size={14} /> Download
          </a>
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.7)', cursor: 'pointer' }}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
            style={{
              background: 'rgba(12, 12, 18, 0.95)',
              borderBottom: '1px solid rgba(255,255,255,0.04)',
            }}
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="py-2.5 px-3 text-sm font-medium no-underline rounded-lg transition-all"
                  style={{
                    color: location.pathname === link.path ? '#a855f7' : 'rgba(255,255,255,0.5)',
                    background: location.pathname === link.path ? 'rgba(168, 85, 247, 0.1)' : 'transparent',
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://github.com/Exenye-Industries/LoopForge/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm mt-3 justify-center"
                style={{ padding: '10px 20px', fontSize: '13px' }}
              >
                <Download size={14} /> Download
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
