"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"

interface ClientCardProps {
  client: {
    id: number
    name: string
    contact: string
    phone: string
    notes: string
    projects: string[]
    branch: string
  }
}

export function ClientCard({ client }: ClientCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all cursor-pointer group"
    >
      <h3 className="text-lg font-semibold mb-4">{client.name}</h3>

      <div className="space-y-3 mb-4">
        <div className="flex items-center gap-3 text-sm">
          <Mail size={16} className="text-muted-foreground" />
          <span className="text-muted-foreground">{client.contact}</span>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <Phone size={16} className="text-muted-foreground" />
          <span className="text-muted-foreground">{client.phone}</span>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <MapPin size={16} className="text-muted-foreground" />
          <span className="text-muted-foreground">{client.branch}</span>
        </div>
      </div>

      <p className="text-sm text-muted-foreground mb-4 italic">"{client.notes}"</p>

      <div className="pt-4 border-t border-border">
        <p className="text-xs text-muted-foreground mb-2">Active Projects</p>
        <div className="flex flex-wrap gap-2">
          {client.projects.map((project) => (
            <span key={project} className="text-xs px-2 py-1 bg-muted rounded">
              {project}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
