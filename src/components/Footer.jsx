import { Link } from 'react-router-dom'
import { Github, Mail, FileText } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{
      background: 'linear-gradient(180deg, var(--color-lf-base) 0%, #08080e 100%)',
      borderTop: '1px solid rgba(255,255,255,0.04)',
    }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <span className="text-lg font-bold font-mono gradient-text">
              &#9672; LoopForge
            </span>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Modern automation for developers. Build, monitor, and scale intelligent workflows with zero effort.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: 'rgba(255,255,255,0.3)' }}>
              Product
            </h4>
            <div className="flex flex-col gap-2">
              <Link to="/features" className="text-sm no-underline hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.5)' }}>Features</Link>
              <Link to="/pricing" className="text-sm no-underline hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.5)' }}>Pricing</Link>
              <Link to="/docs" className="text-sm no-underline hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.5)' }}>Documentation</Link>
              <a href="https://github.com/Exenye-Industries/LoopForge/releases" target="_blank" rel="noopener noreferrer" className="text-sm no-underline hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.5)' }}>Downloads</a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: 'rgba(255,255,255,0.3)' }}>
              Company
            </h4>
            <div className="flex flex-col gap-2">
              <Link to="/about" className="text-sm no-underline hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.5)' }}>About</Link>
              <Link to="/contact" className="text-sm no-underline hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.5)' }}>Contact</Link>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: 'rgba(255,255,255,0.3)' }}>
              Connect
            </h4>
            <div className="flex flex-col gap-2">
              <a href="https://github.com/Exenye-Industries/LoopForge" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm no-underline hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.5)' }}>
                <Github size={14} /> GitHub
              </a>
              <a href="https://github.com/Exenye-Industries/LoopForge/issues" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm no-underline hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.5)' }}>
                <FileText size={14} /> Issues
              </a>
              <Link to="/contact" className="flex items-center gap-2 text-sm no-underline hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.5)' }}>
                <Mail size={14} /> Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>
            &copy; {new Date().getFullYear()} Exenye Industries. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/Exenye-Industries" target="_blank" rel="noopener noreferrer" className="transition-colors" style={{ color: 'rgba(255,255,255,0.25)' }}>
              <Github size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
