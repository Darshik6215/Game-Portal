import { Gamepad2, Eye, TrendingUp, Users } from 'lucide-react';
import StatCard from '@/components/admin/StatCard';
import TopGamesTable from '@/components/admin/TopGamesTable';
import PageViewsChart from '@/components/analytics/PageViewsChart';
import TopGamesChart from '@/components/analytics/TopGamesChart';
import UserActivityChart from '@/components/analytics/UserActivityChart';
import TrafficSourcesChart from '@/components/analytics/TrafficSourcesChart';
import RealTimeStats from '@/components/analytics/RealTimeStats';

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground mt-1">
          Welcome back! Here's what's happening with your games today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Games"
          value="20"
          change="+2"
          changeType="positive"
          icon={Gamepad2}
          iconColor="text-blue-600"
        />
        <StatCard
          title="Total Views"
          value="125.4K"
          change="+12.5%"
          changeType="positive"
          icon={Eye}
          iconColor="text-green-600"
        />
        <StatCard
          title="Active Users"
          value="8,549"
          change="+8.2%"
          changeType="positive"
          icon={Users}
          iconColor="text-purple-600"
        />
        <StatCard
          title="Avg. Rating"
          value="4.7"
          change="+0.3"
          changeType="positive"
          icon={TrendingUp}
          iconColor="text-orange-600"
        />
      </div>

      {/* Real-Time Stats */}
      <RealTimeStats />

      {/* Main Charts */}
      <PageViewsChart />

      {/* Charts Row */}
      <div className="grid gap-6 lg:grid-cols-2">
        <TopGamesChart />
        <TrafficSourcesChart />
      </div>

      {/* User Activity */}
      <UserActivityChart />

      {/* Top Games Table */}
      <TopGamesTable />

      {/* Category Distribution */}
      <div className="rounded-xl border bg-card p-6 shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Category Distribution</h3>
        <div className="space-y-4">
          {[
            { name: 'Action', count: 5, percentage: 25, color: 'bg-blue-500' },
            { name: 'Puzzle', count: 4, percentage: 20, color: 'bg-green-500' },
            { name: 'Racing', count: 3, percentage: 15, color: 'bg-orange-500' },
            { name: 'Strategy', count: 3, percentage: 15, color: 'bg-purple-500' },
            { name: 'Others', count: 5, percentage: 25, color: 'bg-gray-500' },
          ].map((category) => (
            <div key={category.name}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">{category.name}</span>
                <span className="text-sm text-muted-foreground">
                  {category.count} games ({category.percentage}%)
                </span>
              </div>
              <div className="h-2 w-full rounded-full bg-slate-200 dark:bg-slate-800">
                <div
                  className={`h-full rounded-full ${category.color}`}
                  style={{ width: `${category.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="rounded-xl border bg-card shadow-sm">
        <div className="border-b p-6">
          <h3 className="text-lg font-semibold">Recent Activity</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Latest updates and changes
          </p>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {[
              { action: 'New game added', game: 'Battle Royale Arena', time: '2 hours ago', type: 'success' },
              { action: 'Game updated', game: 'Cyber Racer', time: '5 hours ago', type: 'info' },
              { action: 'Category created', game: 'Simulation', time: '1 day ago', type: 'info' },
              { action: 'Game removed', game: 'Old Game', time: '2 days ago', type: 'warning' },
            ].map((activity, index) => (
              <div key={index} className="flex items-center gap-4 pb-4 border-b last:border-0 last:pb-0">
                <div className={`h-2 w-2 rounded-full ${
                  activity.type === 'success' ? 'bg-green-500' :
                  activity.type === 'warning' ? 'bg-orange-500' :
                  'bg-blue-500'
                }`} />
                <div className="flex-1">
                  <p className="text-sm font-medium">{activity.action}</p>
                  <p className="text-sm text-muted-foreground">{activity.game}</p>
                </div>
                <span className="text-xs text-muted-foreground">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
