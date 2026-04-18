export default function SettingsPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground mt-1">
          Manage your platform settings and preferences
        </p>
      </div>

      {/* Settings Sections */}
      <div className="space-y-6">
        {/* General Settings */}
        <div className="rounded-xl border bg-card shadow-sm">
          <div className="border-b p-6">
            <h3 className="text-lg font-semibold">General Settings</h3>
          </div>
          <div className="p-6 space-y-4">
            <div>
              <label className="text-sm font-medium">Site Name</label>
              <input
                type="text"
                defaultValue="GameHub"
                className="mt-1.5 w-full rounded-lg border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Site Description</label>
              <textarea
                defaultValue="Play the best free online games"
                rows={3}
                className="mt-1.5 w-full rounded-lg border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </div>

        {/* AdSense Settings */}
        <div className="rounded-xl border bg-card shadow-sm">
          <div className="border-b p-6">
            <h3 className="text-lg font-semibold">AdSense Settings</h3>
          </div>
          <div className="p-6 space-y-4">
            <div>
              <label className="text-sm font-medium">Publisher ID</label>
              <input
                type="text"
                placeholder="ca-pub-XXXXXXXXXXXXXXXX"
                className="mt-1.5 w-full rounded-lg border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button className="rounded-lg bg-primary px-6 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
          Save Changes
        </button>
      </div>
    </div>
  );
}
