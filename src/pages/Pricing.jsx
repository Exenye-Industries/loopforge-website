import { motion } from 'framer-motion'
import { Check, Sparkles, Download, Zap, Building2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import GlassCard from '../components/GlassCard'

const plans = [
  {
    name: 'Community',
    price: 'Free',
    period: 'forever',
    description: 'Full-featured automation for individual developers and open source projects.',
    icon: Zap,
    features: [
      'Unlimited repositories',
      'AI agent integration (BYO API key)',
      'Visual workflow builder',
      'Smart automations & loops',
      'Real-time monitoring',
      'Desktop notifications',
      'GitHub integration',
      'REST API access',
      'Self-healing workflows',
      'Community support',
    ],
    cta: 'Download Free',
    ctaLink: 'https://github.com/Exenye-Industries/LoopForge/releases',
    highlighted: false,
    color: '#4ecdc4',
  },
  {
    name: 'Pro',
    price: '$19',
    period: '/month',
    description: 'For professional developers who want the full power of LoopForge.',
    icon: Sparkles,
    features: [
      'Everything in Community',
      'Priority AI agent queue',
      'Advanced workflow templates',
      'Security firewall dashboard',
      'Performance analytics',
      'Cloud sync (coming soon)',
      'Team collaboration (coming soon)',
      'Priority support',
    ],
    cta: 'Coming Soon',
    ctaLink: '#',
    highlighted: true,
    color: '#a855f7',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Custom solutions for organizations with advanced requirements.',
    icon: Building2,
    features: [
      'Everything in Pro',
      'Self-hosted deployment',
      'SSO & SAML integration',
      'Advanced audit logging',
      'Custom plugin development',
      'Dedicated support engineer',
      'SLA guarantees',
      'On-premise deployment',
    ],
    cta: 'Contact Sales',
    ctaLink: '/contact',
    highlighted: false,
    color: '#34d399',
  },
]

export default function Pricing() {
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
              className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest rounded-full"
              style={{
                color: '#34d399',
                background: 'rgba(52, 211, 153, 0.08)',
                border: '1px solid rgba(52, 211, 153, 0.15)',
              }}
            >
              <Sparkles size={12} /> Open Source
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Simple, transparent <span className="gradient-text">pricing</span>
            </h1>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Start for free. Upgrade when you need more power. No hidden fees, no surprises.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {plans.map((plan, i) => (
              <GlassCard
                key={plan.name}
                delay={i * 0.12}
                className={`p-7 relative overflow-hidden ${plan.highlighted ? 'animate-border-pulse' : ''}`}
              >
                {plan.highlighted && (
                  <>
                    <div
                      className="absolute top-0 left-0 right-0 h-1"
                      style={{
                        background: `linear-gradient(90deg, #4ecdc4, ${plan.color})`,
                      }}
                    />
                    <div
                      className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-semibold"
                      style={{
                        background: 'linear-gradient(135deg, #4ecdc4, #a855f7)',
                        color: '#0c0c12',
                      }}
                    >
                      Most Popular
                    </div>
                  </>
                )}
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{
                        background: `${plan.color}15`,
                        border: `1px solid ${plan.color}20`,
                      }}
                    >
                      <plan.icon size={16} style={{ color: plan.color }} />
                    </div>
                    <h3 className="text-base font-semibold" style={{ color: plan.color }}>
                      {plan.name}
                    </h3>
                  </div>
                  <div className="flex items-baseline gap-1 mb-2 mt-3">
                    <span className="text-3xl font-bold" style={{ color: 'rgba(255,255,255,0.9)' }}>
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-sm" style={{ color: 'rgba(255,255,255,0.35)' }}>
                        {plan.period}
                      </span>
                    )}
                  </div>
                  <p className="text-sm mb-6" style={{ color: 'rgba(255,255,255,0.4)' }}>
                    {plan.description}
                  </p>
                  <ul className="space-y-2.5 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2.5 text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
                        <Check size={14} style={{ color: plan.color, flexShrink: 0 }} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {plan.ctaLink === '#' ? (
                    <button
                      disabled
                      className="btn-primary w-full justify-center opacity-60 cursor-not-allowed"
                    >
                      {plan.cta}
                    </button>
                  ) : plan.ctaLink.startsWith('/') ? (
                    <Link
                      to={plan.ctaLink}
                      className={`${plan.highlighted ? 'btn-primary' : 'btn-secondary'} w-full justify-center`}
                    >
                      {plan.cta}
                    </Link>
                  ) : (
                    <a
                      href={plan.ctaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${plan.highlighted ? 'btn-primary' : 'btn-secondary'} w-full justify-center`}
                    >
                      <Download size={16} />
                      {plan.cta}
                    </a>
                  )}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-bold mb-3">Frequently Asked Questions</h2>
          </motion.div>

          <div className="space-y-4">
            {[
              { q: 'Is LoopForge really free?', a: 'Yes! The Community edition is completely free and open source. All core features are available including repository management, AI agents, visual workflows, and real-time monitoring. You only need your own API key for AI features.' },
              { q: 'What AI models does LoopForge support?', a: 'LoopForge currently integrates with Anthropic\'s Claude models. Support for additional AI providers is planned for future releases.' },
              { q: 'Can I use it commercially?', a: 'LoopForge is open source and free for commercial use. You can use it in your business, for client projects, or in any commercial context.' },
              { q: 'Can I use LoopForge offline?', a: 'LoopForge is a desktop application that runs locally. Most features work offline, though AI agent features require an internet connection to communicate with the AI provider.' },
              { q: 'Is my data stored in the cloud?', a: 'No. LoopForge runs entirely on your local machine. Your code stays local. Only the specific context needed for AI agent tasks is sent to the AI provider, and you have full control through the security firewall.' },
              { q: 'How do I get support?', a: 'Community support is available through GitHub Issues and Discussions. For enterprise support with SLAs, contact us about our Enterprise plan.' },
            ].map((item, i) => (
              <GlassCard key={i} delay={i * 0.08} className="p-6">
                <h3 className="text-sm font-semibold mb-2" style={{ color: 'rgba(255,255,255,0.85)' }}>
                  {item.q}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  {item.a}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
