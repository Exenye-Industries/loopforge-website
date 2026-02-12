import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  FolderGit2, Zap, Activity, RefreshCw, Shield, Bell,
  GitBranch, Clock, Cpu, Settings, Database, Webhook,
  ArrowRight, Download
} from 'lucide-react'
import GlassCard from '../components/GlassCard'
import SectionHeading from '../components/SectionHeading'

const featureGroups = [
  {
    category: 'Repository Management',
    color: '#4ecdc4',
    features: [
      { icon: FolderGit2, title: 'Multi-Repo Dashboard', description: 'Manage all your Git repositories from one unified interface. See status, branches, and recent activity at a glance.' },
      { icon: GitBranch, title: 'Git Integration', description: 'Deep GitHub integration with branch tracking, commit history, and pull request awareness built right in.' },
      { icon: Database, title: 'Repository Profiles', description: 'Create detailed profiles for each repo with custom settings, automation rules, and monitoring preferences.' },
    ],
  },
  {
    category: 'Smart Automations',
    color: '#a855f7',
    features: [
      { icon: Zap, title: 'Event Triggers', description: 'Trigger automations based on Git events, file changes, time schedules, or custom webhook events.' },
      { icon: Clock, title: 'Scheduling', description: 'Set up cron-like schedules for recurring automation tasks. Run builds, tests, and deployments on autopilot.' },
      { icon: RefreshCw, title: 'Loop System', description: 'Create self-healing loops that continuously monitor and automatically recover from failures.' },
    ],
  },
  {
    category: 'Monitoring & Alerts',
    color: '#ff6b9d',
    features: [
      { icon: Activity, title: 'Real-time Health Checks', description: 'Continuous monitoring of repository health, build status, and automation performance with live dashboards.' },
      { icon: Bell, title: 'Smart Notifications', description: 'Get notified about successes, failures, and warnings through in-app alerts with categorized severity levels.' },
      { icon: Shield, title: 'Self-Healing', description: 'Automatic recovery mechanisms that detect failures and take corrective action without manual intervention.' },
    ],
  },
  {
    category: 'Developer Tools',
    color: '#34d399',
    features: [
      { icon: Webhook, title: 'API Endpoints', description: 'Full REST API for managing repositories, automations, and monitoring from external tools or scripts.' },
      { icon: Cpu, title: 'Build Integration', description: 'GitHub Actions integration for CI/CD pipeline management directly from the LoopForge dashboard.' },
      { icon: Settings, title: 'Customizable Workflows', description: 'Flexible workflow editor to create complex automation chains with conditional logic and error handling.' },
    ],
  },
]

export default function Features() {
  return (
    <div className="pt-24 pb-20">
      {/* Header */}
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
                color: '#a855f7',
                background: 'rgba(168, 85, 247, 0.08)',
                border: '1px solid rgba(168, 85, 247, 0.15)',
              }}
            >
              Features
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Powerful tools for
              <br />
              <span className="gradient-text">modern automation</span>
            </h1>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.45)' }}>
              LoopForge provides a comprehensive suite of tools to manage, automate, and monitor your development workflows.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Feature Groups */}
      {featureGroups.map((group, gi) => (
        <section key={group.category} className="py-16 relative">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-10"
            >
              <div
                className="w-1 h-8 rounded-full"
                style={{ background: group.color }}
              />
              <h2 className="text-2xl font-bold" style={{ color: 'rgba(255,255,255,0.9)' }}>
                {group.category}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {group.features.map((feature, i) => (
                <GlassCard key={feature.title} delay={i * 0.1} className="p-7">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      background: `linear-gradient(135deg, ${group.color}20 0%, ${group.color}08 100%)`,
                      border: `1px solid ${group.color}20`,
                    }}
                  >
                    <feature.icon size={20} style={{ color: group.color }} />
                  </div>
                  <h3 className="text-base font-semibold mb-2" style={{ color: 'rgba(255,255,255,0.9)' }}>
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>
                    {feature.description}
                  </p>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <GlassCard className="p-12 relative overflow-hidden">
            <div
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(circle at 50% 0%, rgba(168, 85, 247, 0.06) 0%, transparent 60%)',
              }}
            />
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Start automating <span className="gradient-text">today</span>
              </h2>
              <p className="text-sm mb-8" style={{ color: 'rgba(255,255,255,0.45)' }}>
                Download LoopForge and experience the future of repository automation.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://github.com/Exenye-Industries/LoopForge/releases"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <Download size={18} /> Download Now
                </a>
                <Link to="/docs" className="btn-secondary">
                  <ArrowRight size={18} /> Documentation
                </Link>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>
    </div>
  )
}
