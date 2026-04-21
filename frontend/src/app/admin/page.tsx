'use client';

import { useEffect, useState } from 'react';
import { Gamepad2, Eye, TrendingUp, DollarSign, AlertCircle } from 'lucide-react';
import StatCard from '@/components/admin/StatCard';
import TopGamesTable from '@/components/admin/TopGamesTable';
import PageViewsChart from '@/components/analytics/PageViewsChart';
import TopGamesChart from '@/components/analytics/TopGamesChart';
import UserActivityChart from '@/components/analytics/UserActivityChart';
import TrafficSourcesChart from '@/components/analytics/TrafficSourcesChart';
import RealTimeStats from '@/components/analytics/RealTimeStats';
import { fetchWithAuth } from '@/lib/auth';

// Types
interface DashboardStats {
  total_games: number;
  total_views: number;
  active_users: number;
  revenue: number;
  growth_percentage: number;
}

interface TopGame {
  id: string;
  title: string;
  views: number;
  plays: number;
  rating: number;
}

interface PageView {
  date: string;
  views: number;
  users: number;
}

interface TrafficSource {
  name: string;
  value: number;
  percentage: number;
}

interface UserActivity {
  hour: string;
  users: number;
}

interface RecentActivity {
  id: number;
  type: string;
  user: string;
  game: string;
  timestamp: string;
  action: string;
}

interface DashboardData {
  stats: DashboardStats;
  top_games: TopGame[];
  page_views: PageView[];
  traffic_sources: TrafficSource[];
  user_activity: UserActivity[];
  recent_activities: RecentActivity[];
}

// Skeleton Loader Components
function StatCardSkeleton() {
  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm animate-pulse">
      <div className="flex items-center justify-between">
        <div className="space-y-2 flex-1">
          <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-24"></div>
          <div className="h-8 bg-slate-200 dark:bg-slate-700 rounded w-20"></div>
          <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded w-16"></div>
        </div>
        <div className="h-12 w-12 bg-slate-200 dark:bg-slate-700 rounded-lg"></div>
      </div>
    </div>
  );
}

function ChartSkeleton({ height = "h-80" }: { height?: string }) {
  return (
    <div className={`rounded-xl border bg-card p-6 shadow-sm animate-pulse ${height}`}>
      <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded w-32 mb-4"></div>
      <div className="h-full bg-slate-100 dark:bg-slate-800 rounded"></div>
    </div>
  );
}

export default function AdminDashboard() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';
      const response = await fetchWithAuth(`${apiUrl}/api/v1/admin/dashboard`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch dashboard data');
      }
      
      const dashboardData: DashboardData = await response.json();
      setData(dashboardData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      console.error('Dashboard fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  // Error State
  if (error) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Welcome back! Here's what's happening with your games today.
          </p>
        </div>
        
        <div className="rounded-xl border border-red-200 bg-red-50 dark:bg-red-950/20 p-6">
          <div className="flex items-center gap-3">
            <AlertCircle className="h-5 w-5 text-red-600" />
            <div>
              <h3 className="font-semibold text-red-900 dark:text-red-100">
                Failed to load dashboard data
              </h3>
              <p className="text-sm text-red-700 dark:text-red-300 mt-1">
                {error}
              </p>
              <button
                onClick={fetchDashboardData}
                className="mt-3 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium"
              >
                Retry
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Loading State
  if (loading || !data) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Loading dashboard data...
          </p>
        </div>

        {/* Stats Grid Skeleton */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <StatCardSkeleton />
          <StatCardSkeleton />
          <StatCardSkeleton />
          <StatCardSkeleton />
        </div>

        {/* Charts Skeleton */}
        <ChartSkeleton />
        <div className="grid gap-6 lg:grid-cols-2">
          <ChartSkeleton height="h-96" />
          <ChartSkeleton height="h-96" />
        </div>
        <ChartSkeleton />
      </div>
    );
  }

  // Format numbers
  const formatNumber = (num: number): string => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-slate-900 via-primary to-purple-600 dark:from-slate-100 dark:via-primary dark:to-purple-400 bg-clip-text text-transparent">
            Dashboard
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mt-2 text-base">
            Welcome back! Here's what's happening with your games today.
          </p>
        </div>
        <button
          onClick={fetchDashboardData}
          className="px-5 py-2.5 bg-gradient-to-r from-primary to-purple-600 text-white rounded-xl hover:shadow-lg hover:shadow-primary/25 transition-all hover:scale-105 text-sm font-semibold flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Refresh
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Games"
          value={data.stats.total_games.toString()}
          change={`+${data.stats.growth_percentage}%`}
          changeType="positive"
          icon={Gamepad2}
          iconColor="text-blue-600"
        />
        <StatCard
          title="Total Views"
          value={formatNumber(data.stats.total_views)}
          change={`+${data.stats.growth_percentage}%`}
          changeType="positive"
          icon={Eye}
          iconColor="text-green-600"
        />
        <StatCard
          title="Active Users"
          value={formatNumber(data.stats.active_users)}
          change={`+${(data.stats.growth_percentage * 0.65).toFixed(1)}%`}
          changeType="positive"
          icon={TrendingUp}
          iconColor="text-purple-600"
        />
        <StatCard
          title="Revenue"
          value={`$${data.stats.revenue.toFixed(2)}`}
          change={`+${(data.stats.growth_percentage * 1.2).toFixed(1)}%`}
          changeType="positive"
          icon={DollarSign}
          iconColor="text-orange-600"
        />
      </div>

      {/* Real-Time Stats */}
      <RealTimeStats />

      {/* Main Charts */}
      <PageViewsChart data={data.page_views} />

      {/* Charts Row */}
      <div className="grid gap-6 lg:grid-cols-2">
        <TopGamesChart data={data.top_games} />
        <TrafficSourcesChart data={data.traffic_sources} />
      </div>

      {/* User Activity */}
      <UserActivityChart data={data.user_activity} />

      {/* Top Games Table */}
      <TopGamesTable games={data.top_games} />

      {/* Recent Activity */}
      <div className="rounded-xl border bg-card shadow-sm">
        <div className="border-b p-6">
          <h3 className="text-lg font-semibold">Recent Activity</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Latest updates and user actions
          </p>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {data.recent_activities.map((activity) => {
              const timeAgo = getTimeAgo(activity.timestamp);
              const activityType = getActivityType(activity.type);
              
              return (
                <div key={activity.id} className="flex items-center gap-4 pb-4 border-b last:border-0 last:pb-0">
                  <div className={`h-2 w-2 rounded-full ${activityType.color}`} />
                  <div className="flex-1">
                    <p className="text-sm font-medium">{activity.action}</p>
                    <p className="text-sm text-muted-foreground">
                      {activity.user} • {activity.game}
                    </p>
                  </div>
                  <span className="text-xs text-muted-foreground">{timeAgo}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper functions
function getTimeAgo(timestamp: string): string {
  const now = new Date();
  const past = new Date(timestamp);
  const diffMs = now.getTime() - past.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  
  if (diffMins < 1) return 'Just now';
  if (diffMins < 60) return `${diffMins} min ago`;
  
  const diffHours = Math.floor(diffMins / 60);
  if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
  
  const diffDays = Math.floor(diffHours / 24);
  return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
}

function getActivityType(type: string): { color: string } {
  switch (type) {
    case 'game_played':
      return { color: 'bg-blue-500' };
    case 'high_score':
      return { color: 'bg-green-500' };
    case 'game_completed':
      return { color: 'bg-purple-500' };
    case 'rating':
      return { color: 'bg-orange-500' };
    default:
      return { color: 'bg-gray-500' };
  }
}
