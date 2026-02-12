import { motion } from 'framer-motion'

export default function GlowOrb({ color = 'purple', size = 400, className = '', delay = 0 }) {
  const colors = {
    purple: 'rgba(168, 85, 247, 0.15)',
    teal: 'rgba(78, 205, 196, 0.12)',
    pink: 'rgba(255, 107, 157, 0.1)',
    mixed: 'rgba(168, 85, 247, 0.1)',
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, delay }}
      className={`absolute rounded-full blur-3xl pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${colors[color] || colors.purple}, transparent 70%)`,
      }}
    />
  )
}
