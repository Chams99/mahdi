"use client"

import { motion } from "framer-motion"
import { EmployeeCard } from "./employee-card"

const employees = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Creative Director",
    branch: "Branch A",
    projects: 8,
    avatar: "👨‍💼",
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "UI/UX Designer",
    branch: "Branch A",
    projects: 6,
    avatar: "👩‍💻",
  },
  {
    id: 3,
    name: "Marcus Williams",
    role: "Full Stack Developer",
    branch: "Branch B",
    projects: 7,
    avatar: "👨‍💻",
  },
  {
    id: 4,
    name: "Emma Davis",
    role: "Sound Designer",
    branch: "Branch B",
    projects: 5,
    avatar: "👩‍🎨",
  },
  {
    id: 5,
    name: "James Rodriguez",
    role: "Project Manager",
    branch: "Branch A",
    projects: 12,
    avatar: "👨‍💼",
  },
  {
    id: 6,
    name: "Lisa Park",
    role: "Brand Strategist",
    branch: "Branch B",
    projects: 9,
    avatar: "👩‍💼",
  },
]

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

export function EmployeesView() {
  return (
    <div className="p-8 lg:p-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h1 className="text-4xl font-bold tracking-tight mb-2">Team</h1>
        <p className="text-muted-foreground">Meet our talented team members across both branches</p>
      </motion.div>

      {/* Employees Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {employees.map((employee) => (
          <motion.div key={employee.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <EmployeeCard employee={employee} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
