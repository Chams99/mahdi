"use client"

import { motion } from "framer-motion"
import { TrendingUp, Users, Zap, Target } from "lucide-react"

const analyticsCards = [
  {
    title: "Active Projects",
    value: "24",
    change: "+12%",
    icon: Target,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Team Members",
    value: "18",
    change: "+3",
    icon: Users,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Efficiency Rate",
    value: "94%",
    change: "+5%",
    icon: Zap,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Growth Rate",
    value: "28%",
    change: "+8%",
    icon: TrendingUp,
    color: "from-green-500 to-emerald-500",
  },
]

export function AnalyticsDashboard() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] },
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      {analyticsCards.map((card) => {
        const Icon = card.icon
        return (
          <motion.div
            key={card.title}
            variants={itemVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="group relative bg-card border border-border rounded-lg p-6 overflow-hidden cursor-pointer"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
            />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-muted-foreground">{card.title}</h3>
                <div className={`p-2 rounded-lg bg-gradient-to-br ${card.color} bg-opacity-10`}>
                  <Icon className="w-4 h-4 text-primary" />
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-3xl font-bold">{card.value}</p>
                <p className="text-xs text-green-600 font-medium">{card.change} from last month</p>
              </div>
            </div>

            <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
          </motion.div>
        )
      })}
    </motion.div>
  )
}
