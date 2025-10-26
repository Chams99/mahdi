"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Card } from "@/components/ui/card"

export function CalendarWidget() {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 0, 1))

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const monthName = currentDate.toLocaleString("default", { month: "long", year: "numeric" })
  const daysInMonth = getDaysInMonth(currentDate)
  const firstDay = getFirstDayOfMonth(currentDate)
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)
  const emptyDays = Array.from({ length: firstDay }, (_, i) => i)

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))
  }

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))
  }

  const today = new Date()
  const isToday = (day: number) => {
    return (
      day === today.getDate() &&
      currentDate.getMonth() === today.getMonth() &&
      currentDate.getFullYear() === today.getFullYear()
    )
  }

  return (
    <Card className="p-6 bg-gradient-to-br from-card to-card/50 border-border/50">
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <motion.h3 className="text-lg font-semibold">{monthName}</motion.h3>
          <div className="flex gap-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePrevMonth}
              className="p-1 hover:bg-muted rounded-lg transition-colors"
            >
              <ChevronLeft size={18} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNextMonth}
              className="p-1 hover:bg-muted rounded-lg transition-colors"
            >
              <ChevronRight size={18} />
            </motion.button>
          </div>
        </div>

        {/* Weekdays */}
        <div className="grid grid-cols-7 gap-2">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="text-center text-xs font-semibold text-muted-foreground py-2">
              {day}
            </div>
          ))}
        </div>

        {/* Days */}
        <div className="grid grid-cols-7 gap-2">
          {emptyDays.map((_, i) => (
            <div key={`empty-${i}`} />
          ))}
          {days.map((day) => (
            <motion.button
              key={day}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`aspect-square flex items-center justify-center rounded-lg text-sm font-medium transition-all ${
                isToday(day) ? "bg-primary text-primary-foreground shadow-md" : "hover:bg-muted text-foreground"
              }`}
            >
              {day}
            </motion.button>
          ))}
        </div>
      </div>
    </Card>
  )
}
