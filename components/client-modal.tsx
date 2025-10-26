"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

interface ClientModalProps {
  client: {
    id: number
    name: string
    contact: string
    phone: string
    notes: string
    projects: string[]
    branch: string
  }
  onClose: () => void
}

export function ClientModal({ client, onClose }: ClientModalProps) {
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
          className="bg-card border border-border rounded-lg max-w-md w-full p-8"
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold">{client.name}</h2>
              <p className="text-sm text-muted-foreground mt-1">{client.branch}</p>
            </div>
            <button onClick={onClose} className="p-1 hover:bg-muted rounded transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <p className="text-xs text-muted-foreground mb-1">Email</p>
              <p className="font-medium">{client.contact}</p>
            </div>

            <div>
              <p className="text-xs text-muted-foreground mb-1">Phone</p>
              <p className="font-medium">{client.phone}</p>
            </div>

            <div>
              <p className="text-xs text-muted-foreground mb-1">Notes</p>
              <p className="font-medium italic">"{client.notes}"</p>
            </div>

            <div>
              <p className="text-xs text-muted-foreground mb-3">Linked Projects</p>
              <div className="space-y-2">
                {client.projects.map((project) => (
                  <div key={project} className="p-3 bg-muted rounded-lg text-sm font-medium">
                    {project}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <button
            onClick={onClose}
            className="w-full mt-8 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium"
          >
            Close
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
