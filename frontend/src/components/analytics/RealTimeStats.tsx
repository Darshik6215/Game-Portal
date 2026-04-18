'use client';

import { useEffect, useState } from 'react';
import { Activity, Users, Eye, Clock } from 'lucide-react';

export default function RealTimeStats() {
  const [stats, setStats] = useState({
    activeUsers: 847,
    pageViews: 1234,
    avgSessionTime: '3:42',
    bounceRate: '42%',
  });

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        ...prev,
        activeUsers: prev.activeUsers + Math.floor(Math.random() * 10) - 5,
        pageViews: prev.pageViews + Math.floor(Math.random() * 5),
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-6">
        <Activity className="h-5 w-5 text-green-500 animate-pulse" />
        <h3 className="text-lg font-semibold">Real-Time Stats</h3>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Users className="h-4 w-4" />
            <span className="text-sm">Active Users</span>
          </div>
          <p className="text-3xl font-bold">{stats.activeUsers}</p>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Eye className="h-4 w-4" />
            <span className="text-sm">Page Views</span>
          </div>
          <p className="text-3xl font-bold">{stats.pageViews}</p>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span className="text-sm">Avg. Session</span>
          </div>
          <p className="text-2xl font-bold">{stats.avgSessionTime}</p>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Activity className="h-4 w-4" />
            <span className="text-sm">Bounce Rate</span>
          </div>
          <p className="text-2xl font-bold">{stats.bounceRate}</p>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t">
        <p className="text-xs text-muted-foreground">
          Last updated: {new Date().toLocaleTimeString()}
        </p>
      </div>
    </div>
  );
}
