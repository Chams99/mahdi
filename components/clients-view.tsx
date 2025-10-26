"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ClientCard } from "./client-card"
import { ClientModal } from "./client-modal"

const clients = [
  {
    id: 1,
    name: "TechCorp Industries",
    contact: "john@techcorp.com",
    phone: "+1 (555) 123-4567",
    notes: "Long-term partner, quarterly reviews",
    projects: ["Brand Identity Redesign", "Website Development"],
    branch: "Branch A",
  },
  {
    id: 2,
    name: "StartupXYZ",
    contact: "sarah@startupxyz.com",
    phone: "+1 (555) 234-5678",
    notes: "New client, high growth potential",
    projects: ["Website Development"],
    branch: "Branch B",
  },
  {
    id: 3,
    name: "MediaCo",
    contact: "mike@mediaco.com",
    phone: "+1 (555) 345-6789",
    notes: "Multimedia projects specialist",
    projects: ["Audio Branding", "Marketing Campaign"],
    branch: "Branch A",
  },
  {
    id: 4,
    name: "RetailBrand",
    contact: "emma@retailbrand.com",
    phone: "+1 (555) 456-7890",
    notes: "E-commerce focus",
    projects: ["Marketing Campaign"],
    branch: "Branch B",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

export function ClientsView() {
  const [selectedClient, setSelectedClient] = useState<(typeof clients)[0] | null>(null)

  return (
    <div className="p-8 lg:p-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        className="mb-12"
      >
        <motion.h1 className="text-4xl font-bold tracking-tight mb-2 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          Clients
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-muted-foreground font-medium"
        >
          Manage and view all client information and collaborations
        </motion.p>
      </motion.div>

      {/* Clients Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
      >
        {clients.map((client) => (
          <motion.div key={client.id} variants={itemVariants} onClick={() => setSelectedClient(client)}>
            <ClientCard client={client} />
          </motion.div>
        ))}
      </motion.div>

      {/* Client Modal */}
      {selectedClient && <ClientModal client={selectedClient} onClose={() => setSelectedClient(null)} />}
    </div>
  )
}
