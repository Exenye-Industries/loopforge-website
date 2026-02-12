import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Cpu, Eye, Zap, Heart, Github, ArrowRight } from 'lucide-react'
import GlassCard from '../components/GlassCard'
import SectionHeading from '../components/SectionHeading'

const values = [
  {
    icon: Zap,
    title: 'Automation First',
    description: 'We believe repetitive tasks should be eliminated. LoopForge automates the tedious parts of development so you can focus on building.',
    color: '#a855f7',
  },
  {
    icon: Eye,
    title: 'Full Transparency',
    description: 'Open source from day one. Every line of code is visible, auditable, and improvable by the community.',
    color: '#4ecdc4',
  },
  {
    icon: Cpu,
    title: 'Developer-Centric',
    description: 'Built by developers, for developers. Every feature is designed to fit naturally into existing development workflows.',
    color: '#ff6b9d',
  },
  {
    icon: Heart,
    title: 'Community Driven',
    description: 'LoopForge grows with its community. Feature requests, bug reports, and contributions shape the future of the project.',
    color: '#34d399',
  },
]

const techStack = [
  { name: 'Electron', description: 'Cross-platform desktop framework' },
  { name: 'React', description: 'Modern UI library' },
  { name: 'Node.js', description: 'Backend service & automation engine' },
  { name: 'TailwindCSS', description: 'Utility-first styling' },
  { name: 'GitHub API', description: 'Repository management integration' },
  { name: 'WebSocket', description: 'Real-time communication' },
]

export default function About() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
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
              About
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Modern automation
              <br />
              <span className="gradient-text">for developers</span>
            </h1>
            <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
              LoopForge was born from the need to simplify development operations.
              We&apos;re building the tools that let developers spend less time on operations
              and more time on what matters: writing great software.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 relative">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.5)' }}>
                We envision a world where developers can focus entirely on creating software,
                while intelligent automation handles the rest. Repository management,
                deployment, monitoring, and incident response should be seamless and automatic.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                LoopForge is our step toward that vision: a single desktop application
                that connects all your repositories, automates repetitive tasks, and
                monitors everything in real-time with self-healing capabilities.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-8 relative overflow-hidden">
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.06) 0%, transparent 50%)',
                  }}
                />
                <div className="relative z-10">
                  <div className="text-4xl font-bold gradient-text mb-2">Exenye</div>
                  <div className="text-lg font-semibold mb-4" style={{ color: 'rgba(255,255,255,0.6)' }}>Industries</div>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>
                    Building modern developer tools that automate the mundane
                    and amplify creativity. LoopForge is our flagship product.
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            badge="Our Values"
            title="What drives us"
            description="The principles that guide every decision we make when building LoopForge."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, i) => (
              <GlassCard key={value.title} delay={i * 0.1} className="p-8">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background: `linear-gradient(135deg, ${value.color}20 0%, ${value.color}08 100%)`,
                    border: `1px solid ${value.color}20`,
                  }}
                >
                  <value.icon size={20} style={{ color: value.color }} />
                </div>
                <h3 className="text-base font-semibold mb-2" style={{ color: 'rgba(255,255,255,0.9)' }}>
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  {value.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading
            badge="Technology"
            title="Built with modern tools"
            description="LoopForge is built on a robust foundation of proven technologies."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {techStack.map((tech, i) => (
              <GlassCard key={tech.name} delay={i * 0.08} className="p-5 text-center">
                <div className="text-sm font-semibold mb-1" style={{ color: 'rgba(255,255,255,0.85)' }}>
                  {tech.name}
                </div>
                <div className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
                  {tech.description}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <GlassCard className="p-12 relative overflow-hidden">
            <div
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(circle at 50% 0%, rgba(78, 205, 196, 0.06) 0%, transparent 60%)',
              }}
            />
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Join the <span className="gradient-text">community</span>
              </h2>
              <p className="text-sm mb-8" style={{ color: 'rgba(255,255,255,0.45)' }}>
                LoopForge is open source. Contribute, report issues, or just star the repo.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://github.com/Exenye-Industries/LoopForge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <Github size={18} /> View on GitHub
                </a>
                <Link to="/contact" className="btn-secondary">
                  <ArrowRight size={18} /> Get in Touch
                </Link>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>
    </div>
  )
}
