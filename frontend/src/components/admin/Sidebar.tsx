'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Gamepad2, 
  FolderTree, 
  BarChart3, 
  Settings,
  ChevronLeft
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';

const menuItems = [
  {
    title: 'Dashboard',
    href: '/admin',
    icon: LayoutDashboard,
  },
  {
    title: 'Games',
    href: '/admin/games',
    icon: Gamepad2,
  },
  {
    title: 'Categories',
    href: '/admin/categories',
    icon: FolderTree,
  },
  {
    title: 'Analytics',
    href: '/admin/analytics',
    icon: BarChart3,
  },
  {
    title: 'Settings',
    href: '/admin/settings',
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-40 h-screen border-r border-slate-200/60 dark:border-slate-800/60 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl transition-all duration-300 shadow-xl",
        collapsed ? "w-16" : "w-64"
      )}
    >
      {/* Logo */}
      <div className="flex h-16 items-center justify-between border-b border-slate-200/60 dark:border-slate-800/60 px-4 bg-gradient-to-r from-primary/5 to-purple-500/5">
        {!collapsed && (
          <Link href="/admin" className="flex items-center gap-2 font-bold text-xl group">
            <div className="p-1.5 rounded-lg bg-gradient-to-br from-primary to-purple-600 shadow-lg group-hover:shadow-xl transition-shadow">
              <Gamepad2 className="h-5 w-5 text-white" />
            </div>
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              GameHub
            </span>
          </Link>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className={cn(
            "rounded-lg p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all hover:scale-110",
            collapsed && "mx-auto"
          )}
        >
          <ChevronLeft className={cn(
            "h-5 w-5 transition-transform",
            collapsed && "rotate-180"
          )} />
        </button>
      </div>

      {/* Navigation */}
      <nav className="space-y-1 p-3">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200 relative group",
                isActive
                  ? "bg-gradient-to-r from-primary to-purple-600 text-white shadow-lg shadow-primary/25"
                  : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100 hover:shadow-md hover:scale-[1.02]",
                collapsed && "justify-center"
              )}
              title={collapsed ? item.title : undefined}
            >
              {isActive && (
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/20 to-purple-600/20 blur-xl" />
              )}
              <Icon className={cn(
                "h-5 w-5 flex-shrink-0 relative z-10 transition-transform group-hover:scale-110",
                isActive && "drop-shadow-sm"
              )} />
              {!collapsed && <span className="relative z-10">{item.title}</span>}
              {isActive && !collapsed && (
                <div className="ml-auto h-2 w-2 rounded-full bg-white shadow-sm" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* User Section */}
      {!collapsed && (
        <div className="absolute bottom-0 left-0 right-0 border-t border-slate-200/60 dark:border-slate-800/60 p-4 bg-gradient-to-t from-slate-50/50 dark:from-slate-900/50">
          <UserSection />
        </div>
      )}
    </aside>
  );
}

function UserSection() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Get user from localStorage
    if (typeof window !== 'undefined') {
      const userStr = localStorage.getItem('admin_user');
      if (userStr) {
        try {
          setUser(JSON.parse(userStr));
        } catch (e) {
          console.error('Failed to parse user data');
        }
      }
    }
  }, []);

  return (
    <div className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-slate-800 shadow-md hover:shadow-lg transition-all duration-200 border border-slate-200/60 dark:border-slate-700/60">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-purple-600 text-white font-semibold shadow-lg">
        {user?.name?.charAt(0) || 'A'}
      </div>
      <div className="flex-1 overflow-hidden">
        <p className="text-sm font-semibold truncate text-slate-900 dark:text-slate-100">
          {user?.name || 'Admin User'}
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
          {user?.email || 'admin@gamehub.com'}
        </p>
      </div>
    </div>
  );
}
