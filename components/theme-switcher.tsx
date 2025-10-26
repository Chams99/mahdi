"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Moon, Sun, Palette } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const themes = [
  { name: "Light", value: "light", icon: Sun },
  { name: "Dark", value: "dark", icon: Moon },
]

const colorSchemes = [
  { name: "Elegant Luxury", value: "elegant-luxury", color: "#6b5b95" },
  { name: "Cosmic Night", value: "cosmic-night", color: "#1a1a2e" },
  { name: "Ocean Breeze", value: "ocean-breeze", color: "#0066cc" },
  { name: "Sunset Horizon", value: "sunset-horizon", color: "#ff6b35" },
  { name: "Nature", value: "nature", color: "#2d5016" },
]

export function ThemeSwitcher() {
  const [theme, setTheme] = useState<"light" | "dark">("light")
  const [colorScheme, setColorScheme] = useState("elegant-luxury")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null
    const savedScheme = localStorage.getItem("colorScheme") || "elegant-luxury"
    if (savedTheme) setTheme(savedTheme)
    setColorScheme(savedScheme)
  }, [])

  const handleThemeChange = (newTheme: "light" | "dark") => {
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  const handleColorSchemeChange = (scheme: string) => {
    setColorScheme(scheme)
    localStorage.setItem("colorScheme", scheme)
    document.documentElement.setAttribute("data-color-scheme", scheme)
  }

  if (!mounted) return null

  return (
    <DropdownMenu>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon" className="relative bg-transparent">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Palette className="h-4 w-4" />
            </motion.div>
          </Button>
        </DropdownMenuTrigger>
      </motion.div>

      <DropdownMenuContent align="end" className="w-56">
        <div className="px-2 py-2">
          <p className="text-xs font-semibold text-muted-foreground mb-3">Theme</p>
          <div className="flex gap-2 mb-4">
            {themes.map((t) => {
              const Icon = t.icon
              return (
                <motion.button
                  key={t.value}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleThemeChange(t.value as "light" | "dark")}
                  className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg transition-all ${
                    theme === t.value ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
                  }`}
                >
                  <Icon size={16} />
                  <span className="text-xs font-medium">{t.name}</span>
                </motion.button>
              )
            })}
          </div>

          <p className="text-xs font-semibold text-muted-foreground mb-3">Color Scheme</p>
          <div className="grid grid-cols-2 gap-2">
            {colorSchemes.map((scheme) => (
              <motion.button
                key={scheme.value}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleColorSchemeChange(scheme.value)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all border-2 ${
                  colorScheme === scheme.value
                    ? "border-primary bg-primary/10"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: scheme.color }} />
                <span className="text-xs font-medium">{scheme.name}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
