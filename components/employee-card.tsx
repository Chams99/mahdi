"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Briefcase, MapPin } from "lucide-react"
import {
  CreativeDirectorAvatar,
  UIUXDesignerAvatar,
  DeveloperAvatar,
  SoundDesignerAvatar,
  ProjectManagerAvatar,
  BrandStrategistAvatar,
} from "./svg-avatars"

interface EmployeeCardProps {
  employee: {
    id: number
    name: string
    role: string
    branch: string
    projects: number
    avatar: string
  }
}

const avatarMap: Record<string, React.ComponentType> = {
  "Creative Director": CreativeDirectorAvatar,
  "UI/UX Designer": UIUXDesignerAvatar,
  "Full Stack Developer": DeveloperAvatar,
  "Sound Designer": SoundDesignerAvatar,
  "Project Manager": ProjectManagerAvatar,
  "Brand Strategist": BrandStrategistAvatar,
}

export function EmployeeCard({ employee }: EmployeeCardProps) {
  const AvatarComponent = avatarMap[employee.role] || CreativeDirectorAvatar

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all group overflow-hidden relative"
    >
      <div className="w-20 h-20 mb-4 group-hover:scale-110 transition-transform">
        <AvatarComponent />
      </div>

      {/* Name & Role */}
      <h3 className="text-lg font-semibold mb-1">{employee.name}</h3>
      <p className="text-sm text-muted-foreground mb-4">{employee.role}</p>

      {/* Info */}
      <div className="space-y-2 mb-4 pb-4 border-b border-border">
        <div className="flex items-center gap-2 text-sm">
          <MapPin size={16} className="text-muted-foreground" />
          <span className="text-muted-foreground">{employee.branch}</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Briefcase size={16} className="text-muted-foreground" />
          <span className="text-muted-foreground">{employee.projects} active projects</span>
        </div>
      </div>

      {/* Action */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        className="w-full py-2 px-4 bg-muted hover:bg-muted/80 rounded-lg transition-colors font-medium text-sm"
      >
        View Profile
      </motion.button>
    </motion.div>
  )
}
