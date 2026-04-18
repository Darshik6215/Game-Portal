'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'Cyber Racer', views: 12500 },
  { name: 'Shadow Ninja', views: 10200 },
  { name: 'Logic Master', views: 9800 },
  { name: 'Space Explorer', views: 8900 },
  { name: 'Drift Hunters', views: 8500 },
  { name: 'Tetris Classic', views: 7800 },
  { name: 'Battle Royale', views: 7200 },
  { name: 'Subway Surfers', views: 6900 },
];

const COLORS = ['#8b5cf6', '#10b981', '#f59e0b', '#3b82f6', '#ef4444', '#ec4899', '#14b8a6', '#f97316'];

export default function TopGamesChart() {
  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm">
      <div className="mb-6">
        <h3 className="text-lg font-semibold">Top Games by Views</h3>
        <p className="text-sm text-muted-foreground mt-1">
          Most popular games this month
        </p>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis 
            type="number" 
            tick={{ fontSize: 12 }}
            stroke="#6b7280"
          />
          <YAxis 
            type="category" 
            dataKey="name" 
            tick={{ fontSize: 12 }}
            stroke="#6b7280"
            width={120}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: '#fff',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              padding: '8px 12px'
            }}
            formatter={(value: number) => [`${value.toLocaleString()} views`, 'Views']}
          />
          <Bar dataKey="views" radius={[0, 8, 8, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
