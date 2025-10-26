"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

interface ProjectDetailModalProps {
  project: {
    id: number
    name: string
    type: string
    status: string
    progress: number
    client: string
    deadline: string
    price: string
    description: string
    services: string[]
    notes: string
  }
  onClose: () => void
}

const tabs = ["Overview", "Services", "Progress", "Notes"]

export function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  const [activeTab, setActiveTab] = useState("Overview")

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-card border border-border rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        >
          {/* Header */}
          <div className="sticky top-0 bg-card border-b border-border p-8 flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-bold">{project.name}</h2>
              <p className="text-sm text-muted-foreground mt-1">{project.client}</p>
            </div>
            <button onClick={onClose} className="p-1 hover:bg-muted rounded transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Tabs */}
          <div className="border-b border-border px-8 flex gap-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 font-medium text-sm transition-colors relative ${
                  activeTab === tab ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div layoutId="underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                )}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="p-8">
            <AnimatePresence mode="wait">
              {activeTab === "Overview" && (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6"
                >
                  <div>
                    <p className="text-xs text-muted-foreground mb-2">Description</p>
                    <p className="font-medium">{project.description}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <p className="text-xs text-muted-foreground mb-2">Status</p>
                      <p className="font-medium">{project.status}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-2">Type</p>
                      <p className="font-medium">{project.type}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-2">Deadline</p>
                      <p className="font-medium">{project.deadline}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-2">Budget</p>
                      <p className="font-medium">{project.price}</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "Services" && (
                <motion.div
                  key="services"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-3"
                >
                  {project.services.map((service) => (
                    <div key={service} className="p-4 bg-muted rounded-lg font-medium">
                      {service}
                    </div>
                  ))}
                </motion.div>
              )}

              {activeTab === "Progress" && (
                <motion.div
                  key="progress"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-4"
                >
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Overall Progress</span>
                      <span className="font-bold">{project.progress}%</span>
                    </div>
                    <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${project.progress}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-primary rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "Notes" && (
                <motion.div
                  key="notes"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <p className="font-medium italic">"{project.notes}"</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Footer */}
          <div className="border-t border-border p-8 flex gap-4">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium"
            >
              Close
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
