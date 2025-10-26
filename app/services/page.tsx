"use cache"

import { Sidebar } from "@/components/sidebar"
import { ServicesView } from "@/components/services-view"

export default function ServicesPage() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <ServicesView />
      </main>
    </div>
  )
}
