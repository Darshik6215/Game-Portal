'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

interface TopGame {
  id: string;
  title: string;
  views: number;
  plays: number;
  rating: number;
}

interface TopGamesChartProps {
  data?: TopGame[];
}

const COLORS = ['#8b5cf6', '#10b981', '#f59e0b', '#3b82f6', '#ef4444', '#ec4899', '#14b8a6', '#f97316'];

export default function TopGamesChart({ data }: TopGamesChartProps) {
  // Transform data for chart
  const chartData = data?.map(game => ({
    name: game.title,
    views: game.views
  })) || [];

  return (
    <div className="rounded-2xl border border-slate-200/60 dark:border-slate-800/60 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm p-6 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="mb-6">
        <h3 className="text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
          Top Games by Views
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1.5">
          Most popular games this month
        </p>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" className="dark:stroke-slate-700" opacity={0.5} />
          <XAxis 
            type="number" 
            tick={{ fontSize: 12, fill: '#64748b' }}
            stroke="#cbd5e1"
            tickLine={false}
          />
          <YAxis 
            type="category" 
            dataKey="name" 
            tick={{ fontSize: 12, fill: '#64748b' }}
            stroke="#cbd5e1"
            width={120}
            tickLine={false}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              border: '1px solid #e5e7eb',
              borderRadius: '12px',
              padding: '12px',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            }}
            formatter={(value: number) => [`${value.toLocaleString()} views`, 'Views']}
            cursor={{ fill: 'rgba(139, 92, 246, 0.05)' }}
          />
          <Bar dataKey="views" radius={[0, 12, 12, 0]}>
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
