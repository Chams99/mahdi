"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { TrendingUp, Users, Briefcase, DollarSign } from "lucide-react"

const stats = [
  { label: "Active Projects", value: "12", icon: Briefcase, color: "from-blue-500 to-blue-600" },
  { label: "Team Members", value: "24", icon: Users, color: "from-purple-500 to-purple-600" },
  { label: "Revenue", value: "$125K", icon: DollarSign, color: "from-green-500 to-green-600" },
  { label: "Growth", value: "+23%", icon: TrendingUp, color: "from-orange-500 to-orange-600" },
]

export function QuickStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon
        return (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -4 }}
          >
            <Card className="p-4 bg-gradient-to-br from-card to-card/50 border-border/50 hover:border-primary/30 transition-all">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs text-muted-foreground font-semibold mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 8 }}
                  className={`p-2 rounded-lg bg-gradient-to-br ${stat.color} text-white`}
                >
                  <Icon size={20} />
                </motion.div>
              </div>
            </Card>
          </motion.div>
        )
      })}
    </div>
  )
}
