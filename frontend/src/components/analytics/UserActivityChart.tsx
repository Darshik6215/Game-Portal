'use client';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface UserActivity {
  hour: string;
  users: number;
}

interface UserActivityChartProps {
  data?: UserActivity[];
}

export default function UserActivityChart({ data }: UserActivityChartProps) {
  const chartData = data || [];

  return (
    <div className="rounded-2xl border border-slate-200/60 dark:border-slate-800/60 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm p-6 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="mb-6">
        <h3 className="text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
          User Activity (24 Hours)
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1.5">
          Active users throughout the day
        </p>
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <AreaChart data={chartData}>
          <defs>
            <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" className="dark:stroke-slate-700" opacity={0.5} />
          <XAxis 
            dataKey="hour" 
            tick={{ fontSize: 12, fill: '#64748b' }}
            stroke="#cbd5e1"
            tickLine={false}
          />
          <YAxis 
            tick={{ fontSize: 12, fill: '#64748b' }}
            stroke="#cbd5e1"
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
            formatter={(value: number) => [`${value} users`, 'Active Users']}
            cursor={{ stroke: '#8b5cf6', strokeWidth: 1, strokeDasharray: '5 5' }}
          />
          <Area 
            type="monotone" 
            dataKey="users" 
            stroke="#8b5cf6" 
            strokeWidth={3}
            fillOpacity={1} 
            fill="url(#colorUsers)"
            dot={{ fill: '#8b5cf6', r: 3, strokeWidth: 2, stroke: '#fff' }}
            activeDot={{ r: 6, strokeWidth: 2, stroke: '#fff', fill: '#8b5cf6' }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
