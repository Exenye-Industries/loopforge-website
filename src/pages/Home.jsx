import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  FolderGit2, Zap, Activity, RefreshCw, Shield, Terminal,
  ArrowRight, Github, Download, ChevronRight, Sparkles,
  Bot, GitBranch, Eye, Cpu,
} from 'lucide-react'
import GlassCard from '../components/GlassCard'
import SectionHeading from '../components/SectionHeading'

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const features = [
  {
    icon: FolderGit2,
    title: 'Repository Management',
    description: 'Connect, monitor, and manage multiple Git repositories from a single unified dashboard.',
    color: '#4ecdc4',
  },
  {
    icon: Zap,
    title: 'Smart Automations',
    description: 'Build powerful automation workflows with event triggers, scheduling, and intelligent loops.',
    color: '#c77dff',
  },
  {
    icon: Activity,
    title: 'Real-time Monitoring',
    description: 'Live health checks, performance metrics, and instant notifications for all your repositories.',
    color: '#ff6b9d',
  },
  {
    icon: RefreshCw,
    title: 'Loop System',
    description: 'Self-healing automation loops that detect failures and automatically recover your workflows.',
    color: '#34d399',
  },
]

const stats = [
  { value: '100%', label: 'Open Source' },
  { value: 'Real-time', label: 'Monitoring' },
  { value: '3+', label: 'AI Providers' },
  { value: 'Zero', label: 'Config Required' },
]

/* Pipeline visual nodes */
const pipelineNodes = [
  { icon: GitBranch, label: 'Git Push', color: '#4ecdc4' },
  { icon: Bot, label: 'AI Analyze', color: '#a855f7' },
  { icon: Terminal, label: 'Build & Test', color: '#34d399' },
  { icon: Shield, label: 'Security', color: '#ff6b9d' },
  { icon: Zap, label: 'Deploy', color: '#f0a500' },
]

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* ── Hero Section ── */}
      <section className="relative min-h-screen flex items-center justify-center pt-16">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full animate-glow-pulse"
            style={{
              background: 'radial-gradient(circle, rgba(199, 125, 255, 0.12) 0%, transparent 70%)',
              filter: 'blur(60px)',
            }}
          />
          <div
            className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full animate-glow-pulse"
            style={{
              background: 'radial-gradient(circle, rgba(78, 205, 196, 0.1) 0%, transparent 70%)',
              filter: 'blur(60px)',
              animationDelay: '1.5s',
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
              maskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, black, transparent)',
              WebkitMaskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, black, transparent)',
            }}
          />
          {/* Spinning orbit ring */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full animate-spin-slow opacity-10"
            style={{ border: '1px solid rgba(168, 85, 247, 0.2)' }} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div variants={stagger} initial="hidden" animate="show">
            {/* Badge */}
            <motion.div variants={fadeUp} className="mb-6">
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest rounded-full"
                style={{
                  color: '#4ecdc4',
                  background: 'rgba(78, 205, 196, 0.08)',
                  border: '1px solid rgba(78, 205, 196, 0.15)',
                }}
              >
                <Sparkles size={12} /> Now with AI Agent Teams
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={fadeUp}
              className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-6"
            >
              <span className="gradient-text text-glow-purple">Automation</span>
              <br />
              <span style={{ color: 'rgba(255,255,255,0.9)' }}>Reimagined</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.45)' }}
            >
              Build, monitor, and scale intelligent automations with zero effort.
              LoopForge gives you full control over your repositories, workflows, and deployments.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://github.com/Exenye-Industries/LoopForge/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base"
              >
                <Download size={18} /> Download Free
              </a>
              <a
                href="https://github.com/Exenye-Industries/LoopForge"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-base"
              >
                <Github size={18} /> View on GitHub
              </a>
            </motion.div>
          </motion.div>

          {/* Hero visual - App mockup */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-20 relative"
          >
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, var(--color-lf-surface) 0%, var(--color-lf-elevated) 100%)',
                border: '1px solid rgba(255,255,255,0.06)',
                boxShadow: '0 25px 100px rgba(0,0,0,0.5), 0 0 60px rgba(199, 125, 255, 0.05)',
              }}
            >
              {/* Title bar */}
              <div className="flex items-center gap-2 px-4 py-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full" style={{ background: '#ff6b6b' }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: '#f0a500' }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: '#34d399' }} />
                </div>
                <span className="ml-3 text-xs font-mono" style={{ color: 'rgba(255,255,255,0.3)' }}>
                  LoopForge — Repositories
                </span>
              </div>
              {/* Mock content */}
              <div className="p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {['loopforge-website', 'api-service', 'deploy-config'].map((name, i) => (
                    <div
                      key={name}
                      className="p-4 rounded-xl transition-all duration-300 hover:scale-[1.02]"
                      style={{
                        background: 'rgba(255,255,255,0.02)',
                        border: '1px solid rgba(255,255,255,0.04)',
                      }}
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 rounded-full" style={{ background: ['#34d399', '#c77dff', '#4ecdc4'][i], boxShadow: `0 0 8px ${['rgba(52,211,153,0.5)', 'rgba(199,125,255,0.5)', 'rgba(78,205,196,0.5)'][i]}` }} />
                        <span className="text-xs font-mono font-semibold" style={{ color: 'rgba(255,255,255,0.7)' }}>{name}</span>
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 rounded-full" style={{ background: 'rgba(255,255,255,0.06)', width: '80%' }} />
                        <div className="h-2 rounded-full" style={{ background: 'rgba(255,255,255,0.04)', width: '60%' }} />
                      </div>
                      <div className="mt-3 flex items-center gap-1">
                        <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#34d399' }} />
                        <span className="text-[10px] font-mono" style={{ color: 'rgba(255,255,255,0.3)' }}>
                          {['Active', 'Building', 'Healthy'][i]}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div
              className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-20"
              style={{
                background: 'radial-gradient(ellipse, rgba(199, 125, 255, 0.15) 0%, transparent 70%)',
                filter: 'blur(30px)',
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* ── Features Section ── */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            badge="Features"
            title="Everything you need to automate"
            description="LoopForge combines repository management, smart automations, and real-time monitoring into one powerful desktop application."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, i) => (
              <GlassCard key={feature.title} delay={i * 0.1} className="p-8">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    background: `linear-gradient(135deg, ${feature.color}20 0%, ${feature.color}08 100%)`,
                    border: `1px solid ${feature.color}20`,
                  }}
                >
                  <feature.icon size={22} style={{ color: feature.color }} />
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: 'rgba(255,255,255,0.9)' }}>
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  {feature.description}
                </p>
              </GlassCard>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/features" className="btn-secondary inline-flex items-center gap-2 text-sm">
              View all features <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Code Demo Section ── */}
      <section className="py-24 relative" style={{ background: 'linear-gradient(180deg, transparent, rgba(168, 85, 247, 0.015), transparent)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            badge="Developer Experience"
            title="Configure in code, deploy in seconds"
            description="Declarative automation configs that are easy to read, version, and share."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Code block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="rounded-2xl overflow-hidden" style={{
                background: 'rgba(0,0,0,0.5)',
                border: '1px solid rgba(255,255,255,0.06)',
                boxShadow: '0 20px 50px rgba(0,0,0,0.4), 0 0 30px rgba(168, 85, 247, 0.04)',
              }}>
                <div className="flex items-center gap-2 px-4 py-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#ff5f57' }} />
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#febc2e' }} />
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#28c840' }} />
                  </div>
                  <span className="ml-2 text-[11px] font-mono text-lf-text-muted">loopforge.config.ts</span>
                </div>
                <div className="code-block !rounded-none !border-0 !bg-transparent text-[12.5px] leading-7">
                  <div><span className="ln"> 1</span><span className="kw">import</span> {'{'} <span className="fn">defineWorkflow</span> {'}'} <span className="kw">from</span> <span className="str">'@loopforge/core'</span></div>
                  <div><span className="ln"> 2</span></div>
                  <div><span className="ln"> 3</span><span className="kw">export default</span> <span className="fn">defineWorkflow</span>({'{'})</div>
                  <div><span className="ln"> 4</span>  name: <span className="str">'auto-deploy'</span>,</div>
                  <div><span className="ln"> 5</span>  trigger: <span className="str">'on:push'</span>,</div>
                  <div><span className="ln"> 6</span>  agent: <span className="str">'claude-opus'</span>,</div>
                  <div><span className="ln"> 7</span></div>
                  <div><span className="ln"> 8</span>  steps: [</div>
                  <div><span className="ln"> 9</span>    {'{'} run: <span className="str">'lint'</span>,   cmd: <span className="str">'eslint .'</span> {'}'},</div>
                  <div><span className="ln">10</span>    {'{'} run: <span className="str">'test'</span>,   cmd: <span className="str">'vitest run'</span> {'}'},</div>
                  <div><span className="ln">11</span>    {'{'} run: <span className="str">'build'</span>,  cmd: <span className="str">'vite build'</span> {'}'},</div>
                  <div><span className="ln">12</span>    {'{'} run: <span className="str">'deploy'</span>, target: <span className="str">'cloudflare'</span> {'}'},</div>
                  <div><span className="ln">13</span>  ],</div>
                  <div><span className="ln">14</span></div>
                  <div><span className="ln">15</span>  <span className="cmt">// AI auto-fix on failure</span></div>
                  <div><span className="ln">16</span>  onFailure: <span className="str">'agent:auto-repair'</span>,</div>
                  <div><span className="ln">17</span>{'}'})</div>
                </div>
              </div>
            </motion.div>

            {/* Feature bullets */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 pt-4"
            >
              {[
                { icon: Bot, title: 'AI-Powered Auto-Repair', desc: 'When builds break, LoopForge agents analyze the error, find the root cause, and submit a fix automatically.', color: '#a855f7' },
                { icon: Sparkles, title: 'Zero-Config Detection', desc: 'Automatically detects your project type, test framework, and deployment target. Just push your code.', color: '#4ecdc4' },
                { icon: Cpu, title: 'Multi-Provider AI', desc: 'Works with Claude, GPT-4, Gemini, and local models. Switch providers without changing workflows.', color: '#ff6b9d' },
                { icon: Eye, title: 'Full Observability', desc: 'Live streaming logs, execution traces, and performance metrics for every pipeline run.', color: '#34d399' },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center"
                    style={{ background: `${item.color}12`, border: `1px solid ${item.color}20` }}>
                    <item.icon size={18} style={{ color: item.color }} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-sm leading-relaxed text-lf-text-secondary">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Pipeline Visual ── */}
      <section className="py-16 relative">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeading
            badge="Pipeline"
            title="From push to production"
            description="Every git push triggers an intelligent pipeline that builds, tests, scans, and deploys."
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-3 md:gap-2"
          >
            {pipelineNodes.map((node, i) => (
              <div key={node.label} className="flex items-center gap-2 md:gap-3">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="glass-card-static px-4 py-3 flex items-center gap-2.5"
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: `${node.color}15`, border: `1px solid ${node.color}25` }}>
                    <node.icon size={16} style={{ color: node.color }} />
                  </div>
                  <span className="text-xs font-medium text-white whitespace-nowrap">{node.label}</span>
                </motion.div>
                {i < pipelineNodes.length - 1 && (
                  <ChevronRight size={16} className="text-lf-text-muted hidden md:block" />
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── How it Works ── */}
      <section className="py-32 relative">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeading
            badge="How it works"
            title="Three steps to automation"
            description="Get started with LoopForge in minutes. No complex setup, no steep learning curve."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Connect', desc: 'Add your Git repositories and configure access. LoopForge connects to GitHub seamlessly.', icon: Terminal, color: '#4ecdc4' },
              { step: '02', title: 'Automate', desc: 'Set up automation workflows, triggers, and loops. Define what should happen and when.', icon: Zap, color: '#c77dff' },
              { step: '03', title: 'Monitor', desc: 'Watch your automations run in real-time. Get notified of successes, failures, and anomalies.', icon: Shield, color: '#34d399' },
            ].map((item, i) => (
              <GlassCard key={item.step} delay={i * 0.15} className="p-8 text-center relative">
                <span
                  className="text-5xl font-black absolute top-4 right-6"
                  style={{ color: `${item.color}08` }}
                >
                  {item.step}
                </span>
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
                  style={{
                    background: `linear-gradient(135deg, ${item.color}18 0%, ${item.color}08 100%)`,
                    border: `1px solid ${item.color}15`,
                  }}
                >
                  <item.icon size={24} style={{ color: item.color }} />
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: 'rgba(255,255,255,0.9)' }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  {item.desc}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats Section ── */}
      <section className="py-20 relative">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6"
              >
                <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.35)' }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-32 relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <GlassCard className="p-12 md:p-16 relative overflow-hidden">
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64"
              style={{
                background: 'radial-gradient(circle, rgba(199, 125, 255, 0.1) 0%, transparent 70%)',
                filter: 'blur(40px)',
              }}
            />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to <span className="gradient-text">automate</span>?
              </h2>
              <p className="text-base mb-8 max-w-lg mx-auto" style={{ color: 'rgba(255,255,255,0.45)' }}>
                Download LoopForge and start building intelligent automation workflows today. Free and open source.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="https://github.com/Exenye-Industries/LoopForge/releases"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <Download size={18} /> Get Started
                </a>
                <Link to="/docs" className="btn-secondary">
                  <ChevronRight size={18} /> Read the Docs
                </Link>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>
    </div>
  )
}
