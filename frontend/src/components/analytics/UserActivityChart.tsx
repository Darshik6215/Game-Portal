'use client';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { time: '00:00', active: 120 },
  { time: '02:00', active: 80 },
  { time: '04:00', active: 50 },
  { time: '06:00', active: 90 },
  { time: '08:00', active: 250 },
  { time: '10:00', active: 420 },
  { time: '12:00', active: 580 },
  { time: '14:00', active: 650 },
  { time: '16:00', active: 720 },
  { time: '18:00', active: 890 },
  { time: '20:00', active: 950 },
  { time: '22:00', active: 680 },
];

export default function UserActivityChart() {
  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm">
      <div className="mb-6">
        <h3 className="text-lg font-semibold">User Activity</h3>
        <p className="text-sm text-muted-foreground mt-1">
          Active users throughout the day
        </p>
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorActive" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis 
            dataKey="time" 
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
            formatter={(value: number) => [`${value} users`, 'Active Users']}
          />
          <Area 
            type="monotone" 
            dataKey="active" 
            stroke="#8b5cf6" 
            strokeWidth={2}
            fillOpacity={1} 
            fill="url(#colorActive)" 
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
