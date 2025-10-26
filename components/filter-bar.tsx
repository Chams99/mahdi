"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const filters = [
  { label: "Status", options: ["All", "Planning", "In Progress", "Completed"] },
  { label: "Type", options: ["All", "Design", "Web", "Sound"] },
  { label: "Branch", options: ["All", "Branch A", "Branch B"] },
]

export function FilterBar() {
  const [openFilter, setOpenFilter] = useState<string | null>(null)

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className="flex flex-wrap gap-3 mt-8"
    >
      {filters.map((filter, index) => (
        <div key={filter.label} className="relative">
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + index * 0.08, duration: 0.5 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setOpenFilter(openFilter === filter.label ? null : filter.label)}
            className="flex items-center gap-2 px-4 py-2.5 bg-muted rounded-lg hover:bg-muted/80 transition-all text-sm font-medium border border-border/50 hover:border-border"
          >
            {filter.label}
            <motion.div
              animate={{
                rotate: openFilter === filter.label ? 180 : 0,
              }}
              transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
            >
              <ChevronDown size={16} />
            </motion.div>
          </motion.button>

          {/* Dropdown */}
          <AnimatePresence>
            {openFilter === filter.label && (
              <motion.div
                initial={{ opacity: 0, y: -15, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.9 }}
                transition={{ duration: 0.25, type: "spring", stiffness: 300, damping: 25 }}
                className="absolute top-full mt-2 left-0 bg-card border border-border rounded-lg shadow-xl z-10 min-w-48 overflow-hidden backdrop-blur-sm"
              >
                {filter.options.map((option, optionIndex) => (
                  <motion.button
                    key={option}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: optionIndex * 0.06, duration: 0.3 }}
                    whileHover={{
                      backgroundColor: "var(--color-muted)",
                      paddingLeft: "1.25rem",
                    }}
                    className="w-full text-left px-4 py-2.5 hover:bg-muted transition-all text-sm first:rounded-t-lg last:rounded-b-lg"
                  >
                    {option}
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </motion.div>
  )
}
