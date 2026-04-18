import PageViewsChart from '@/components/analytics/PageViewsChart';
import TopGamesChart from '@/components/analytics/TopGamesChart';
import UserActivityChart from '@/components/analytics/UserActivityChart';
import TrafficSourcesChart from '@/components/analytics/TrafficSourcesChart';
import RealTimeStats from '@/components/analytics/RealTimeStats';
import { Calendar, Download, Filter } from 'lucide-react';

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
          <p className="text-muted-foreground mt-1">
            Track your platform's performance and user engagement
          </p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-800">
            <Calendar className="h-4 w-4" />
            Last 30 Days
          </button>
          <button className="flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-800">
            <Filter className="h-4 w-4" />
            Filters
          </button>
          <button className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
            <Download className="h-4 w-4" />
            Export
          </button>
        </div>
      </div>

      {/* Real-Time Stats */}
      <RealTimeStats />

      {/* Main Chart */}
      <PageViewsChart />

      {/* Charts Grid */}
      <div className="grid gap-6 lg:grid-cols-2">
        <TopGamesChart />
        <TrafficSourcesChart />
      </div>

      {/* User Activity */}
      <UserActivityChart />

      {/* Detailed Stats */}
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <h4 className="text-sm font-medium text-muted-foreground mb-2">Avg. Session Duration</h4>
          <p className="text-3xl font-bold">3:42</p>
          <p className="text-sm text-green-600 mt-2">+12% from last month</p>
        </div>
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <h4 className="text-sm font-medium text-muted-foreground mb-2">Pages per Session</h4>
          <p className="text-3xl font-bold">4.2</p>
          <p className="text-sm text-green-600 mt-2">+8% from last month</p>
        </div>
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <h4 className="text-sm font-medium text-muted-foreground mb-2">Bounce Rate</h4>
          <p className="text-3xl font-bold">42%</p>
          <p className="text-sm text-red-600 mt-2">-5% from last month</p>
        </div>
      </div>

      {/* Top Pages */}
      <div className="rounded-xl border bg-card shadow-sm">
        <div className="border-b p-6">
          <h3 className="text-lg font-semibold">Top Pages</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Most visited pages this month
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-slate-50 dark:bg-slate-900/50">
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Page
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Views
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Unique Visitors
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Avg. Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Bounce Rate
                </th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {[
                { page: '/game/1', views: 12500, visitors: 8200, time: '4:32', bounce: '38%' },
                { page: '/', views: 10200, visitors: 7800, time: '2:15', bounce: '45%' },
                { page: '/game/2', views: 9800, visitors: 6500, time: '5:10', bounce: '32%' },
                { page: '/categories', views: 8900, visitors: 6200, time: '1:45', bounce: '52%' },
                { page: '/game/3', views: 8500, visitors: 5800, time: '4:05', bounce: '35%' },
              ].map((row, index) => (
                <tr key={index} className="hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    {row.page}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {row.views.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {row.visitors.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {row.time}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {row.bounce}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
