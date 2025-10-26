"use cache"

import { Sidebar } from "@/components/sidebar"
import { ClientsView } from "@/components/clients-view"

export default function ClientsPage() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <ClientsView />
      </main>
    </div>
  )
}
