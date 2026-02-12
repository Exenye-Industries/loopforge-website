import { motion } from 'framer-motion'
import { Check, Sparkles, Download, Github } from 'lucide-react'
import GlassCard from '../components/GlassCard'

const plans = [
  {
    name: 'Open Source',
    price: 'Free',
    period: 'forever',
    description: 'Full-featured automation for individual developers and small teams.',
    features: [
      'Unlimited repositories',
      'Smart automations & loops',
      'Real-time monitoring',
      'Desktop notifications',
      'GitHub integration',
      'REST API access',
      'Self-healing workflows',
      'Community support',
    ],
    cta: 'Download Now',
    ctaLink: 'https://github.com/Exenye-Industries/LoopForge/releases',
    highlighted: true,
    color: '#a855f7',
  },
  {
    name: 'Enterprise',
    price: 'Contact Us',
    period: '',
    description: 'Custom solutions for organizations with advanced requirements.',
    features: [
      'Everything in Open Source',
      'Priority support',
      'Custom integrations',
      'Team management',
      'Advanced analytics',
      'SLA guarantees',
      'On-premise deployment',
      'Dedicated account manager',
    ],
    cta: 'Contact Sales',
    ctaLink: '/contact',
    highlighted: false,
    color: '#4ecdc4',
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
              Free and <span className="gradient-text">open source</span>
            </h1>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.45)' }}>
              LoopForge is completely free to use. We believe powerful automation tools should be accessible to everyone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {plans.map((plan, i) => (
              <GlassCard
                key={plan.name}
                delay={i * 0.15}
                className={`p-8 relative overflow-hidden ${plan.highlighted ? 'animate-border-pulse' : ''}`}
              >
                {plan.highlighted && (
                  <div
                    className="absolute top-0 left-0 right-0 h-1"
                    style={{
                      background: `linear-gradient(90deg, #4ecdc4, ${plan.color})`,
                    }}
                  />
                )}
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold mb-1" style={{ color: plan.color }}>
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl font-bold" style={{ color: 'rgba(255,255,255,0.9)' }}>
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
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2.5 text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
                        <Check size={15} style={{ color: plan.color, flexShrink: 0 }} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={plan.ctaLink}
                    target={plan.ctaLink.startsWith('http') ? '_blank' : undefined}
                    rel={plan.ctaLink.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={plan.highlighted ? 'btn-primary w-full justify-center' : 'btn-secondary w-full justify-center'}
                  >
                    {plan.highlighted ? <Download size={16} /> : null}
                    {plan.cta}
                  </a>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ-like section */}
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
              { q: 'Is LoopForge really free?', a: 'Yes! LoopForge is fully open source under a permissive license. All features are available for free, including repository management, automations, and real-time monitoring.' },
              { q: 'Can I use it commercially?', a: 'LoopForge is open source and free for commercial use. You can use it in your business, for client projects, or in any commercial context.' },
              { q: 'How do I get support?', a: 'Community support is available through GitHub Issues and Discussions. For enterprise support with SLAs, contact us about our Enterprise plan.' },
              { q: 'Is my data stored in the cloud?', a: 'No. LoopForge runs entirely on your local machine. Your repository data, configurations, and automation history stay on your computer.' },
            ].map((item, i) => (
              <GlassCard key={i} delay={i * 0.1} className="p-6">
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
