import { motion } from 'framer-motion'

export default function SectionHeading({ badge, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mb-16"
    >
      {badge && (
        <span
          className="inline-block mb-4 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest rounded-full"
          style={{
            color: '#c77dff',
            background: 'rgba(199, 125, 255, 0.08)',
            border: '1px solid rgba(199, 125, 255, 0.15)',
          }}
        >
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      {description && (
        <p className="max-w-2xl mx-auto text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
          {description}
        </p>
      )}
    </motion.div>
  )
}
