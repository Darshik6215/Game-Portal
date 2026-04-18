import { Plus } from 'lucide-react';

export default function CategoriesPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Categories</h1>
          <p className="text-muted-foreground mt-1">
            Organize your games by categories
          </p>
        </div>
        <button className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
          <Plus className="h-4 w-4" />
          Add Category
        </button>
      </div>

      {/* Categories Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {['Action', 'Puzzle', 'Racing', 'Strategy', 'Sports', 'Simulation'].map((category) => (
          <div key={category} className="rounded-xl border bg-card p-6 shadow-sm">
            <h3 className="text-lg font-semibold">{category}</h3>
            <p className="text-sm text-muted-foreground mt-1">
              {Math.floor(Math.random() * 10) + 1} games
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
