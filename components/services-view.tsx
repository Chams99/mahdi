"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

const serviceCategories = [
  {
    category: "Design",
    services: [
      { name: "Logo Design", description: "Custom brand identity", price: "$2,500" },
      { name: "Brand Guidelines", description: "Comprehensive brand standards", price: "$3,500" },
      { name: "UI/UX Design", description: "Digital product design", price: "$4,000" },
    ],
  },
  {
    category: "Web",
    services: [
      { name: "Web Design", description: "Responsive website design", price: "$5,000" },
      { name: "Frontend Development", description: "React/Next.js development", price: "$8,000" },
      { name: "Backend Integration", description: "API and database setup", price: "$6,000" },
    ],
  },
  {
    category: "Sound",
    services: [
      { name: "Audio Logo", description: "Brand sound signature", price: "$2,000" },
      { name: "Sound Design", description: "Custom audio effects", price: "$3,000" },
      { name: "Music Composition", description: "Original music production", price: "$4,500" },
    ],
  },
]

export function ServicesView() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>("Design")

  return (
    <div className="p-8 lg:p-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h1 className="text-4xl font-bold tracking-tight mb-2">Services</h1>
        <p className="text-muted-foreground">Explore our comprehensive service offerings</p>
      </motion.div>

      {/* Service Categories */}
      <div className="space-y-4 max-w-2xl">
        {serviceCategories.map((category) => (
          <motion.div key={category.category}>
            {/* Category Header */}
            <motion.button
              whileHover={{ scale: 1.01 }}
              onClick={() => setExpandedCategory(expandedCategory === category.category ? null : category.category)}
              className="w-full flex items-center justify-between p-6 bg-card border border-border rounded-lg hover:shadow-md transition-all"
            >
              <h2 className="text-xl font-semibold">{category.category}</h2>
              <motion.div
                animate={{
                  rotate: expandedCategory === category.category ? 180 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={24} />
              </motion.div>
            </motion.button>

            {/* Services List */}
            {expandedCategory === category.category && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-3 mt-3"
              >
                {category.services.map((service) => (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="p-6 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold mb-1">{service.name}</h3>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </div>
                      <p className="font-bold text-lg ml-4">{service.price}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
