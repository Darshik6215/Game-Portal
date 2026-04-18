import { Metadata } from 'next';
import Sidebar from '@/components/admin/Sidebar';
import TopNav from '@/components/admin/TopNav';
import AuthProvider from '@/components/admin/AuthProvider';

export const metadata: Metadata = {
  title: 'Admin Dashboard | GameHub',
  description: 'Manage your gaming platform',
  robots: 'noindex, nofollow', // Don't index admin pages
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <div className="flex h-screen overflow-hidden bg-slate-50 dark:bg-slate-950">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex flex-1 flex-col overflow-hidden lg:ml-64">
          {/* Top Navigation */}
          <TopNav />

          {/* Page Content */}
          <main className="flex-1 overflow-y-auto p-6">
            {children}
          </main>
        </div>
      </div>
    </AuthProvider>
  );
}
