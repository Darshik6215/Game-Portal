'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { date: 'Jan 1', views: 4200, users: 1200 },
  { date: 'Jan 5', views: 5100, users: 1500 },
  { date: 'Jan 10', views: 4800, users: 1400 },
  { date: 'Jan 15', views: 6200, users: 1800 },
  { date: 'Jan 20', views: 7500, users: 2100 },
  { date: 'Jan 25', views: 8900, users: 2500 },
  { date: 'Jan 30', views: 9200, users: 2700 },
  { date: 'Feb 5', views: 10500, users: 3000 },
  { date: 'Feb 10', views: 11200, users: 3200 },
  { date: 'Feb 15', views: 12400, users: 3500 },
  { date: 'Feb 20', views: 13100, users: 3700 },
  { date: 'Feb 25', views: 14500, users: 4000 },
];

export default function PageViewsChart() {
  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm">
      <div className="mb-6">
        <h3 className="text-lg font-semibold">Page Views & Users</h3>
        <p className="text-sm text-muted-foreground mt-1">
          Daily traffic overview for the last 30 days
        </p>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis 
            dataKey="date" 
            tick={{ fontSize: 12 }}
            stroke="#6b7280"
          />
          <YAxis 
            tick={{ fontSize: 12 }}
            stroke="#6b7280"
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: '#fff',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              padding: '8px 12px'
            }}
          />
          <Legend 
            wrapperStyle={{ paddingTop: '20px' }}
            iconType="circle"
          />
          <Line 
            type="monotone" 
            dataKey="views" 
            stroke="#8b5cf6" 
            strokeWidth={2}
            name="Page Views"
            dot={{ fill: '#8b5cf6', r: 4 }}
            activeDot={{ r: 6 }}
          />
          <Line 
            type="monotone" 
            dataKey="users" 
            stroke="#10b981" 
            strokeWidth={2}
            name="Unique Users"
            dot={{ fill: '#10b981', r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
