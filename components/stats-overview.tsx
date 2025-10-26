"use client"

import { motion } from "framer-motion"
import { AnimatedNumber } from "./animated-number"

const stats = [
  { label: "Active Projects", value: "12", change: "+2 this month" },
  { label: "Total Clients", value: "24", change: "+3 new" },
  { label: "Team Members", value: "18", change: "Across 2 branches" },
  { label: "Revenue (Pending)", value: "156", change: "+$45K this month", prefix: "$", suffix: "K" },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

export function StatsOverview() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          variants={itemVariants}
          whileHover={{
            y: -12,
            boxShadow: "0 20px 40px -10px rgba(26, 26, 26, 0.1)",
            transition: { duration: 0.3 },
          }}
          className="group bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all cursor-pointer overflow-hidden relative"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-transparent opacity-0 group-hover:opacity-100"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          />

          <div className="relative z-10">
            <p className="text-sm text-muted-foreground mb-3 font-semibold tracking-wide">{stat.label}</p>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6, ease: "easeOut" }}
              className="mb-4"
            >
              <p className="text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                {stat.prefix && <span>{stat.prefix}</span>}
                <AnimatedNumber value={stat.value} duration={2} delay={0.3 + index * 0.1} />
                {stat.suffix && <span>{stat.suffix}</span>}
              </p>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
              className="text-xs text-muted-foreground font-medium"
            >
              {stat.change}
            </motion.p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
