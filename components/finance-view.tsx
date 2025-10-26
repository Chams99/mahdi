"use client"

import { motion } from "framer-motion"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { AdvancedCharts } from "./advanced-charts"
import { AnalyticsDashboard } from "./analytics-dashboard"

const revenueData = [
  { month: "Jan", paid: 45000, pending: 12000 },
  { month: "Feb", paid: 52000, pending: 18000 },
  { month: "Mar", paid: 48000, pending: 15000 },
  { month: "Apr", paid: 61000, pending: 22000 },
  { month: "May", paid: 55000, pending: 19000 },
  { month: "Jun", paid: 67000, pending: 25000 },
]

const statusData = [
  { name: "Paid", value: 328000 },
  { name: "Pending", value: 111000 },
]

const COLORS = ["#000000", "#f5f5f5"]

export function FinanceView() {
  return (
    <div className="p-8 lg:p-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h1 className="text-4xl font-bold tracking-tight mb-2">Finance</h1>
        <p className="text-muted-foreground">Revenue tracking and financial overview</p>
      </motion.div>

      {/* Summary Cards */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
      >
        {[
          { label: "Total Revenue", value: "$439,000", change: "+12% vs last month" },
          { label: "Paid Invoices", value: "$328,000", change: "75% of total" },
          { label: "Pending Invoices", value: "$111,000", change: "25% of total" },
        ].map((card) => (
          <motion.div
            key={card.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card border border-border rounded-lg p-6"
          >
            <p className="text-sm text-muted-foreground mb-2">{card.label}</p>
            <p className="text-3xl font-bold mb-2">{card.value}</p>
            <p className="text-xs text-muted-foreground">{card.change}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Revenue Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-card border border-border rounded-lg p-6"
        >
          <h2 className="text-lg font-semibold mb-6">Revenue Trend</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
              <XAxis dataKey="month" stroke="#666666" />
              <YAxis stroke="#666666" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #e5e5e5",
                  borderRadius: "8px",
                }}
              />
              <Legend />
              <Bar dataKey="paid" fill="#000000" radius={[8, 8, 0, 0]} />
              <Bar dataKey="pending" fill="#f5f5f5" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Status Pie Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-card border border-border rounded-lg p-6"
        >
          <h2 className="text-lg font-semibold mb-6">Payment Status</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={statusData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: $${value.toLocaleString()}`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {statusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #e5e5e5",
                  borderRadius: "8px",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Analytics Overview</h2>
        <AnalyticsDashboard />
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
        <h2 className="text-2xl font-bold mb-6">Detailed Analytics</h2>
        <AdvancedCharts />
      </motion.div>
    </div>
  )
}
