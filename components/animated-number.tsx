"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface AnimatedNumberProps {
  value: string | number
  duration?: number
  delay?: number
}

export function AnimatedNumber({ value, duration = 2, delay = 0 }: AnimatedNumberProps) {
  const [displayValue, setDisplayValue] = useState(0)
  const numValue = typeof value === "string" ? Number.parseInt(value) : value

  useEffect(() => {
    const startTime = Date.now()
    const startValue = 0

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / (duration * 1000), 1)
      const current = Math.floor(startValue + (numValue - startValue) * progress)
      setDisplayValue(current)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    const timer = setTimeout(() => {
      requestAnimationFrame(animate)
    }, delay * 1000)

    return () => clearTimeout(timer)
  }, [numValue, duration, delay])

  return <motion.span>{displayValue}</motion.span>
}
