"use cache"

import { Sidebar } from "@/components/sidebar"
import { EmployeesView } from "@/components/employees-view"

export default function EmployeesPage() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <EmployeesView />
      </main>
    </div>
  )
}
