import React from 'react';
import Link from 'next/link';
import { Gamepad2, Search, Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight text-primary">
            <Gamepad2 className="h-6 w-6" />
            <span>GamePortal</span>
          </Link>
        </div>

        <div className="hidden md:flex flex-1 items-center justify-center px-8">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search games..."
              className="w-full rounded-md border border-input bg-background py-2 pl-9 pr-4 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="md:hidden">
            <Menu className="h-6 w-6" />
          </button>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="/" className="transition-colors hover:text-primary">Home</Link>
            <Link href="/categories" className="transition-colors hover:text-primary">Categories</Link>
            <Link href="/new" className="transition-colors hover:text-primary">New</Link>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
