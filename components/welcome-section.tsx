"use client"

import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"

export function WelcomeSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.23, 1, 0.32, 1] },
    },
  }

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="mb-12">
      <motion.div variants={itemVariants} className="flex items-center gap-3 mb-4">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.15, 1],
          }}
          transition={{
            rotate: { duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
            scale: { duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          }}
          className="relative"
        >
          <motion.div
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(26, 26, 26, 0.4)",
                "0 0 0 12px rgba(26, 26, 26, 0.1)",
                "0 0 0 0 rgba(26, 26, 26, 0)",
              ],
            }}
            transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
            className="absolute inset-0 rounded-full"
          />
          <Sparkles className="text-primary relative z-10" size={32} />
        </motion.div>
        <motion.h1
          variants={itemVariants}
          className="text-5xl font-bold tracking-tight bg-gradient-to-r from-foreground via-foreground to-foreground/60 bg-clip-text text-transparent"
        >
          Welcome back
        </motion.h1>
      </motion.div>
      <motion.p variants={itemVariants} className="text-lg text-muted-foreground font-medium max-w-2xl">
        Here's what's happening with your projects today
      </motion.p>
    </motion.div>
  )
}
