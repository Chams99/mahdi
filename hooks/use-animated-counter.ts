"use client"

import { useEffect } from "react"
import { useMotionValue, useTransform } from "framer-motion"

export function useAnimatedCounter(value: number, duration = 2) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))

  useEffect(() => {
    const controls = {
      animate: (target: number) => {
        const animation = {
          duration,
          ease: "easeOut",
        }
        count.set(target)
      },
    }

    controls.animate(value)
  }, [value, count, duration])

  return rounded
}
