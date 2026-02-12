import { motion } from 'framer-motion'

export default function GlassCard({ children, className = '', delay = 0, hover = true, ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      className={`glass-card ${className}`}
      style={!hover ? { pointerEvents: 'auto' } : undefined}
      {...props}
    >
      {children}
    </motion.div>
  )
}
