import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if accessing admin routes (except login page)
  if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
    // Check for auth token in localStorage (we'll handle this client-side)
    // For now, we'll let the client-side handle authentication
    // This middleware is here for future server-side token validation
    
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/admin/:path*',
};
