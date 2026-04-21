import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  icon: LucideIcon;
  iconColor?: string;
}

export default function StatCard({
  title,
  value,
  change,
  changeType = 'neutral',
  icon: Icon,
  iconColor = 'text-primary',
}: StatCardProps) {
  const getGradientClass = () => {
    if (iconColor.includes('blue')) return 'from-blue-500 to-blue-600';
    if (iconColor.includes('green')) return 'from-green-500 to-emerald-600';
    if (iconColor.includes('purple')) return 'from-purple-500 to-purple-600';
    if (iconColor.includes('orange')) return 'from-orange-500 to-orange-600';
    return 'from-primary to-purple-600';
  };

  return (
    <div className="group relative rounded-2xl border border-slate-200/60 dark:border-slate-800/60 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] overflow-hidden">
      {/* Gradient Background Effect */}
      <div className={cn(
        "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300",
        getGradientClass()
      )} />
      
      <div className="relative flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wide">
            {title}
          </p>
          <h3 className="mt-3 text-4xl font-bold bg-gradient-to-br from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
            {value}
          </h3>
          {change && (
            <p className="mt-3 flex items-center gap-1.5 text-sm">
              <span
                className={cn(
                  "font-semibold px-2 py-0.5 rounded-full",
                  changeType === 'positive' && "text-green-700 dark:text-green-400 bg-green-100 dark:bg-green-900/30",
                  changeType === 'negative' && "text-red-700 dark:text-red-400 bg-red-100 dark:bg-red-900/30",
                  changeType === 'neutral' && "text-slate-700 dark:text-slate-400 bg-slate-100 dark:bg-slate-800"
                )}
              >
                {change}
              </span>
              <span className="text-slate-500 dark:text-slate-500 text-xs">vs last month</span>
            </p>
          )}
        </div>
        <div className={cn(
          "rounded-2xl bg-gradient-to-br p-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110",
          getGradientClass()
        )}>
          <Icon className="h-7 w-7 text-white drop-shadow-sm" />
        </div>
      </div>
    </div>
  );
}
