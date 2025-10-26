"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { LayoutDashboard, Users, Briefcase, Wrench, Users2, BarChart3, Menu, X } from "lucide-react"
import { AnimatePresence } from "framer-motion"
import { ThemeSwitcher } from "./theme-switcher"

const navItems = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/clients", label: "Clients", icon: Users },
  { href: "/projects", label: "Projects", icon: Briefcase },
  { href: "/services", label: "Services", icon: Wrench },
  { href: "/employees", label: "Employees", icon: Users2 },
  { href: "/finance", label: "Finance", icon: BarChart3 },
]

export function Sidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(true)

  return (
    <>
      {/* Mobile toggle */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden p-2 hover:bg-muted rounded-lg transition-colors"
      >
        <motion.div animate={{ rotate: isOpen ? 0 : 90 }} transition={{ duration: 0.3 }}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.div>
      </motion.button>

      {/* Sidebar */}
      <motion.aside
        initial={{ x: -280 }}
        animate={{ x: isOpen ? 0 : -280 }}
        transition={{ duration: 0.4, type: "spring", stiffness: 300, damping: 30 }}
        className="fixed lg:static w-64 h-screen bg-card border-r border-border p-6 flex flex-col z-40 lg:translate-x-0"
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mb-12 mt-8 lg:mt-0"
        >
          <motion.h1
            className="text-2xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            STUDIO
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-xs text-muted-foreground mt-1 font-semibold tracking-wide"
          >
            Creative Agency
          </motion.p>
        </motion.div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1">
          {navItems.map((item, index) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <Link key={item.href} href={item.href}>
                <motion.div
                  initial={{ opacity: 0, x: -25 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.06, duration: 0.5 }}
                  whileHover={{ x: 6 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all relative group ${
                    isActive ? "bg-primary text-primary-foreground shadow-md" : "text-foreground hover:bg-muted"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary-foreground rounded-r-lg"
                      transition={{ type: "spring", stiffness: 400, damping: 40 }}
                    />
                  )}
                  <motion.div whileHover={{ scale: 1.2, rotate: 8 }} transition={{ type: "spring", stiffness: 400 }}>
                    <Icon size={20} />
                  </motion.div>
                  <span className="text-sm font-semibold">{item.label}</span>
                </motion.div>
              </Link>
            )
          })}
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="mb-4"
        >
          <ThemeSwitcher />
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="pt-6 border-t border-border"
        >
          <p className="text-xs text-muted-foreground font-semibold">© 2025 Creative Studio. All rights reserved.</p>
        </motion.div>
      </motion.aside>

      {/* Mobile overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  )
}
