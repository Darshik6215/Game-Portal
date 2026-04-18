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
  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <h3 className="mt-2 text-3xl font-bold">{value}</h3>
          {change && (
            <p className="mt-2 flex items-center gap-1 text-sm">
              <span
                className={cn(
                  "font-medium",
                  changeType === 'positive' && "text-green-600",
                  changeType === 'negative' && "text-red-600",
                  changeType === 'neutral' && "text-muted-foreground"
                )}
              >
                {change}
              </span>
              <span className="text-muted-foreground">vs last month</span>
            </p>
          )}
        </div>
        <div className={cn("rounded-full bg-primary/10 p-3", iconColor)}>
          <Icon className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
}
