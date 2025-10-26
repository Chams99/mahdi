"use client"

import { motion } from "framer-motion"
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

const projectPerformanceData = [
  { month: "Jan", completed: 4, inProgress: 3, planned: 2 },
  { month: "Feb", completed: 6, inProgress: 2, planned: 3 },
  { month: "Mar", completed: 5, inProgress: 4, planned: 2 },
  { month: "Apr", completed: 7, inProgress: 3, planned: 1 },
  { month: "May", completed: 8, inProgress: 2, planned: 2 },
  { month: "Jun", completed: 9, inProgress: 1, planned: 3 },
]

const clientSatisfactionData = [
  { category: "Quality", value: 92 },
  { category: "Timeline", value: 88 },
  { category: "Communication", value: 95 },
  { category: "Innovation", value: 87 },
  { category: "Support", value: 90 },
  { category: "Value", value: 85 },
]

const teamProductivityData = [
  { week: "W1", designers: 85, developers: 92, managers: 78 },
  { week: "W2", designers: 88, developers: 89, managers: 82 },
  { week: "W3", designers: 92, developers: 95, managers: 85 },
  { week: "W4", designers: 90, developers: 93, managers: 88 },
]

export function AdvancedCharts() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] },
    },
  }

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
      {/* Project Performance Line Chart */}
      <motion.div
        variants={itemVariants}
        className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
      >
        <h3 className="text-lg font-semibold mb-6">Project Performance Trend</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={projectPerformanceData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis dataKey="month" stroke="var(--muted-foreground)" />
            <YAxis stroke="var(--muted-foreground)" />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "8px",
              }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="completed"
              stroke="var(--chart-1)"
              strokeWidth={2}
              dot={{ fill: "var(--chart-1)", r: 4 }}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="inProgress"
              stroke="var(--chart-2)"
              strokeWidth={2}
              dot={{ fill: "var(--chart-2)", r: 4 }}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="planned"
              stroke="var(--chart-3)"
              strokeWidth={2}
              dot={{ fill: "var(--chart-3)", r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Client Satisfaction Radar */}
        <motion.div
          variants={itemVariants}
          className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
        >
          <h3 className="text-lg font-semibold mb-6">Client Satisfaction</h3>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={clientSatisfactionData}>
              <PolarGrid stroke="var(--border)" />
              <PolarAngleAxis dataKey="category" stroke="var(--muted-foreground)" />
              <PolarRadiusAxis stroke="var(--muted-foreground)" />
              <Radar
                name="Satisfaction Score"
                dataKey="value"
                stroke="var(--chart-1)"
                fill="var(--chart-1)"
                fillOpacity={0.6}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: "8px",
                }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Team Productivity Area Chart */}
        <motion.div
          variants={itemVariants}
          className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
        >
          <h3 className="text-lg font-semibold mb-6">Team Productivity</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={teamProductivityData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="week" stroke="var(--muted-foreground)" />
              <YAxis stroke="var(--muted-foreground)" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: "8px",
                }}
              />
              <Legend />
              <Area
                type="monotone"
                dataKey="designers"
                stackId="1"
                stroke="var(--chart-1)"
                fill="var(--chart-1)"
                fillOpacity={0.6}
              />
              <Area
                type="monotone"
                dataKey="developers"
                stackId="1"
                stroke="var(--chart-2)"
                fill="var(--chart-2)"
                fillOpacity={0.6}
              />
              <Area
                type="monotone"
                dataKey="managers"
                stackId="1"
                stroke="var(--chart-3)"
                fill="var(--chart-3)"
                fillOpacity={0.6}
              />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </motion.div>
  )
}
