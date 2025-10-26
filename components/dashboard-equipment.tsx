"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BarChart3, PieChart, TrendingUp, Activity } from "lucide-react"

const equipmentItems = [
  {
    name: "Real-time Analytics",
    description: "Live project metrics and performance tracking",
    icon: Activity,
    status: "Active",
  },
  {
    name: "Revenue Forecasting",
    description: "AI-powered revenue predictions and trends",
    icon: TrendingUp,
    status: "Active",
  },
  {
    name: "Data Visualization",
    description: "Advanced charts and interactive dashboards",
    icon: BarChart3,
    status: "Active",
  },
  {
    name: "Performance Metrics",
    description: "Team and project performance indicators",
    icon: PieChart,
    status: "Active",
  },
]

export function DashboardEquipment() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] },
    },
  }

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-4">
      <h3 className="text-lg font-semibold mb-6">Dashboard Equipment</h3>
      {equipmentItems.map((item) => {
        const Icon = item.icon
        return (
          <motion.div
            key={item.name}
            variants={itemVariants}
            whileHover={{ x: 8, transition: { duration: 0.3 } }}
            className="group"
          >
            <Card className="p-4 border border-border hover:border-primary/50 hover:shadow-md transition-all duration-300 cursor-pointer">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4 flex-1">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm mb-1">{item.name}</h4>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </div>
                </div>
                <Badge variant="outline" className="ml-2 bg-green-500/10 text-green-700 border-green-200">
                  {item.status}
                </Badge>
              </div>
            </Card>
          </motion.div>
        )
      })}
    </motion.div>
  )
}
