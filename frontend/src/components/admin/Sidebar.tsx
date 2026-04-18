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
        "fixed left-0 top-0 z-40 h-screen border-r bg-background transition-all duration-300",
        collapsed ? "w-16" : "w-64"
      )}
    >
      {/* Logo */}
      <div className="flex h-16 items-center justify-between border-b px-4">
        {!collapsed && (
          <Link href="/admin" className="flex items-center gap-2 font-bold text-xl">
            <Gamepad2 className="h-6 w-6 text-primary" />
            <span>GameHub</span>
          </Link>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className={cn(
            "rounded-lg p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors",
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
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-foreground",
                collapsed && "justify-center"
              )}
              title={collapsed ? item.title : undefined}
            >
              <Icon className="h-5 w-5 flex-shrink-0" />
              {!collapsed && <span>{item.title}</span>}
            </Link>
          );
        })}
      </nav>

      {/* User Section */}
      {!collapsed && (
        <div className="absolute bottom-0 left-0 right-0 border-t p-4">
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
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
        {user?.name?.charAt(0) || 'A'}
      </div>
      <div className="flex-1 overflow-hidden">
        <p className="text-sm font-medium truncate">{user?.name || 'Admin User'}</p>
        <p className="text-xs text-muted-foreground truncate">{user?.email || 'admin@gamehub.com'}</p>
      </div>
    </div>
  );
}
