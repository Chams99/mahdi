"use cache"

import { Sidebar } from "@/components/sidebar"
import { FinanceView } from "@/components/finance-view"

export default function FinancePage() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <FinanceView />
      </main>
    </div>
  )
}
