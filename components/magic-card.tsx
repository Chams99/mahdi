"use client"

import type React from "react"
import { useRef, useState } from "react"
import { motion } from "framer-motion"

interface MagicCardProps {
  children: React.ReactNode
  className?: string
  gradientSize?: number
  gradientColor?: string
  gradientOpacity?: number
  gradientFrom?: string
  gradientTo?: string
}

export function MagicCard({
  children,
  className = "",
  gradientSize = 200,
  gradientColor = "#262626",
  gradientOpacity = 0.8,
  gradientFrom = "#9E7AFF",
  gradientTo = "#FE8BBB",
}: MagicCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={`relative overflow-hidden rounded-lg border border-border bg-card ${className}`}
    >
      {/* Gradient spotlight effect */}
      {isHovering && (
        <motion.div
          className="pointer-events-none absolute"
          style={{
            left: mousePosition.x - gradientSize / 2,
            top: mousePosition.y - gradientSize / 2,
            width: gradientSize,
            height: gradientSize,
            background: `radial-gradient(circle, ${gradientFrom} 0%, ${gradientTo} 100%)`,
            opacity: gradientOpacity,
            filter: "blur(40px)",
          }}
          animate={{
            left: mousePosition.x - gradientSize / 2,
            top: mousePosition.y - gradientSize / 2,
          }}
          transition={{ duration: 0.1 }}
        />
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
