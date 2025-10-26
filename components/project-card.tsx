"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

interface ProjectCardProps {
  project: {
    id: number
    name: string
    type: string
    status: string
    progress: number
    client: string
    deadline: string
    price: string
  }
}

const statusColors = {
  "In Progress": "bg-blue-500",
  Planning: "bg-yellow-500",
  Completed: "bg-green-500",
  Cancelled: "bg-red-500",
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      whileTap={{ scale: 0.98 }}
      className="group bg-card border border-border rounded-xl p-6 hover:shadow-xl transition-all cursor-pointer overflow-hidden relative"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100"
        initial={{ opacity: 0, scale: 0.95 }}
        whileHover={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      />

      <motion.div
        className="absolute top-0 left-0 h-1.5 bg-gradient-to-r from-primary via-primary/50 to-transparent"
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <motion.h3
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors"
            >
              {project.name}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-sm text-muted-foreground"
            >
              {project.client}
            </motion.p>
          </div>
          <motion.div
            whileHover={{ x: 8, rotate: 45 }}
            transition={{ duration: 0.3 }}
            className="opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ArrowRight size={20} className="text-primary" />
          </motion.div>
        </div>

        {/* Type & Status */}
        <div className="flex gap-2 mb-5">
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="text-xs font-semibold px-3 py-1.5 bg-muted rounded-full hover:bg-muted/80 transition-colors"
          >
            {project.type}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className={`text-xs font-semibold px-3 py-1.5 rounded-full text-white ${
              statusColors[project.status as keyof typeof statusColors]
            }`}
          >
            {project.status}
          </motion.span>
        </div>

        {/* Progress Bar with Animation */}
        <div className="mb-5">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs text-muted-foreground font-semibold">Progress</span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-xs font-bold text-primary"
            >
              {project.progress}%
            </motion.span>
          </div>
          <div className="w-full h-3 bg-muted rounded-full overflow-hidden relative">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${project.progress}%` }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
              className="h-full bg-gradient-to-r from-primary via-primary to-primary/70 rounded-full relative"
            >
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(26, 26, 26, 0.3)",
                    "0 0 12px 6px rgba(26, 26, 26, 0.1)",
                    "0 0 0 0 rgba(26, 26, 26, 0)",
                  ],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="absolute inset-0 rounded-full"
              />
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center pt-5 border-t border-border">
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
          >
            <p className="text-xs text-muted-foreground font-semibold">Deadline</p>
            <p className="text-sm font-bold">{project.deadline}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-right"
          >
            <p className="text-xs text-muted-foreground font-semibold">Budget</p>
            <p className="text-sm font-bold text-primary">{project.price}</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
