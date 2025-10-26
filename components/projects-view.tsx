"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ProjectDetailModal } from "./project-detail-modal"

const projects = [
  {
    id: 1,
    name: "Brand Identity Redesign",
    type: "Design",
    status: "In Progress",
    progress: 65,
    client: "TechCorp",
    deadline: "2025-02-15",
    price: "$12,500",
    description: "Complete brand identity overhaul including logo, color palette, and guidelines",
    services: ["Logo Design", "Brand Guidelines", "Color Palette"],
    notes: "Client requested modern, tech-forward aesthetic",
  },
  {
    id: 2,
    name: "Website Development",
    type: "Web",
    status: "Planning",
    progress: 20,
    client: "StartupXYZ",
    deadline: "2025-03-01",
    price: "$25,000",
    description: "Full-stack e-commerce website with custom CMS",
    services: ["Web Design", "Frontend Development", "Backend Integration"],
    notes: "High-performance requirements, mobile-first approach",
  },
  {
    id: 3,
    name: "Audio Branding",
    type: "Sound",
    status: "Completed",
    progress: 100,
    client: "MediaCo",
    deadline: "2025-01-20",
    price: "$8,500",
    description: "Custom audio logo and brand sound design",
    services: ["Audio Logo", "Sound Design", "Music Composition"],
    notes: "Delivered ahead of schedule",
  },
]

export function ProjectsView() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  return (
    <div className="p-8 lg:p-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h1 className="text-4xl font-bold tracking-tight mb-2">Projects</h1>
        <p className="text-muted-foreground">Detailed view of all active and completed projects</p>
      </motion.div>

      {/* Projects List */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
        className="space-y-4"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ x: 4 }}
            onClick={() => setSelectedProject(project)}
            className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all cursor-pointer group"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
                <div className="flex gap-3 items-center">
                  <span className="text-xs px-2 py-1 bg-muted rounded">{project.type}</span>
                  <span className="text-xs text-muted-foreground">{project.client}</span>
                  <span className="text-xs text-muted-foreground">{project.deadline}</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold">{project.progress}%</p>
                <p className="text-xs text-muted-foreground">{project.price}</p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-4 w-full h-2 bg-muted rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${project.progress}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="h-full bg-primary rounded-full"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Project Detail Modal */}
      {selectedProject && <ProjectDetailModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </div>
  )
}
