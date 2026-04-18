import { Plus, Search, Filter } from 'lucide-react';

export default function GamesPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Games</h1>
          <p className="text-muted-foreground mt-1">
            Manage all your games in one place
          </p>
        </div>
        <button className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
          <Plus className="h-4 w-4" />
          Add Game
        </button>
      </div>

      {/* Filters */}
      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="search"
            placeholder="Search games..."
            className="w-full rounded-lg border bg-background py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <button className="flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-800">
          <Filter className="h-4 w-4" />
          Filters
        </button>
      </div>

      {/* Games List */}
      <div className="rounded-xl border bg-card shadow-sm">
        <div className="p-6 text-center text-muted-foreground">
          Games management interface coming soon...
        </div>
      </div>
    </div>
  );
}
