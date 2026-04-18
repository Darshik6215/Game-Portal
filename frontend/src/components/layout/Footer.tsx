import React from 'react';
import Link from 'next/link';
import { Gamepad2, Github, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight text-primary">
              <Gamepad2 className="h-6 w-6" />
              <span>GamePortal</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              The ultimate destination for online web games. Play the best games for free, anytime, anywhere.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Games</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/category/action" className="hover:text-primary transition-colors">Action</Link></li>
              <li><Link href="/category/puzzle" className="hover:text-primary transition-colors">Puzzle</Link></li>
              <li><Link href="/category/racing" className="hover:text-primary transition-colors">Racing</Link></li>
              <li><Link href="/category/adventure" className="hover:text-primary transition-colors">Adventure</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Follow Us</h3>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} GamePortal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
