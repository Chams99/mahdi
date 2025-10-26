"use client"

import { motion } from "framer-motion"
import { ProjectCard } from "./project-card"
import { FilterBar } from "./filter-bar"
import { StatsOverview } from "./stats-overview"
import { WelcomeSection } from "./welcome-section"
import { CalendarWidget } from "./calendar-widget"
import { QuickStats } from "./quick-stats"
import { AnalyticsDashboard } from "./analytics-dashboard"
import { DashboardEquipment } from "./dashboard-equipment"

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
  },
  {
    id: 4,
    name: "Marketing Campaign",
    type: "Design",
    status: "In Progress",
    progress: 45,
    client: "RetailBrand",
    deadline: "2025-02-28",
    price: "$15,000",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

export function Dashboard() {
  return (
    <div className="p-8 lg:p-12">
      <WelcomeSection />

      <QuickStats />

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mb-12">
        <h2 className="text-xl font-semibold mb-6">Key Metrics</h2>
        <AnalyticsDashboard />
      </motion.div>

      {/* Stats Overview */}
      <StatsOverview />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        <div className="lg:col-span-2">
          <motion.div variants={itemVariants} initial="hidden" animate="visible">
            <FilterBar />
          </motion.div>

          {/* Projects Grid with enhanced stagger */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
          >
            {projects.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Sidebar with calendar and equipment */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="space-y-6"
        >
          <CalendarWidget />
          <DashboardEquipment />
        </motion.div>
      </div>
    </div>
  )
}
