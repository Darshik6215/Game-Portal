import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Play Games on GameHub - Complete Guide',
  description: 'Learn how to play free online games on GameHub. Step-by-step guide for beginners and tips for the best gaming experience.',
  keywords: ['how to play online games', 'gaming guide', 'browser games tutorial', 'HTML5 games help'],
};

export default function HowToPlayPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">How to Play Games on GameHub</h1>
        
        <div className="prose dark:prose-invert max-w-none">
          <section className="mb-8">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Welcome to GameHub! Playing games on our platform is incredibly easy. This guide will walk you through 
              everything you need to know to start playing and get the best gaming experience.
            </p>
          </section>

          <section className="mb-8 bg-card border rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-4">🚀 Quick Start Guide</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-bold mb-1">Browse Games</h3>
                  <p className="text-muted-foreground text-sm">
                    Visit our homepage or browse by category to find a game you'd like to play. We have 20+ games 
                    across multiple genres including Action, Puzzle, Racing, and more.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-bold mb-1">Click on a Game</h3>
                  <p className="text-muted-foreground text-sm">
                    Click on any game card to open the game page. Here you'll find the game description, controls, 
                    tips, and the play button.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-bold mb-1">Click "Play Now"</h3>
                  <p className="text-muted-foreground text-sm">
                    Click the big "Play Now" button to start the game. The game will load in your browser - 
                    no downloads or installations required!
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-bold mb-1">Start Playing!</h3>
                  <p className="text-muted-foreground text-sm">
                    Use the controls shown on the game page to play. Most games use keyboard controls (WASD or Arrow keys) 
                    and mouse clicks. Have fun!
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">🎮 Common Game Controls</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-card border rounded-xl p-4">
                <h3 className="font-bold mb-2">⌨️ Keyboard Controls</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><kbd className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs">WASD</kbd> or <kbd className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs">Arrow Keys</kbd> - Movement</li>
                  <li><kbd className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs">Space</kbd> - Jump or Action</li>
                  <li><kbd className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs">Shift</kbd> - Sprint or Special</li>
                  <li><kbd className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs">ESC</kbd> - Pause Menu</li>
                </ul>
              </div>
              
              <div className="bg-card border rounded-xl p-4">
                <h3 className="font-bold mb-2">🖱️ Mouse Controls</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><strong>Left Click</strong> - Select or Shoot</li>
                  <li><strong>Right Click</strong> - Secondary Action</li>
                  <li><strong>Mouse Move</strong> - Aim or Look Around</li>
                  <li><strong>Scroll Wheel</strong> - Zoom or Switch Items</li>
                </ul>
              </div>
              
              <div className="bg-card border rounded-xl p-4">
                <h3 className="font-bold mb-2">📱 Touch Controls (Mobile)</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><strong>Tap</strong> - Select or Action</li>
                  <li><strong>Swipe</strong> - Move or Navigate</li>
                  <li><strong>Pinch</strong> - Zoom In/Out</li>
                  <li><strong>Hold</strong> - Continuous Action</li>
                </ul>
              </div>
              
              <div className="bg-card border rounded-xl p-4">
                <h3 className="font-bold mb-2">🎯 Game-Specific Controls</h3>
                <p className="text-sm text-muted-foreground">
                  Each game may have unique controls. Always check the "Controls" section on the game page 
                  before playing to learn the specific controls for that game.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">💡 Tips for the Best Experience</h2>
            <div className="space-y-3">
              <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 rounded-xl p-4">
                <h3 className="font-bold mb-2">🌐 Use a Modern Browser</h3>
                <p className="text-sm text-muted-foreground">
                  For the best performance, use the latest version of Chrome, Firefox, Safari, or Edge. 
                  These browsers have the best HTML5 support.
                </p>
              </div>
              
              <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900 rounded-xl p-4">
                <h3 className="font-bold mb-2">📶 Stable Internet Connection</h3>
                <p className="text-sm text-muted-foreground">
                  While games load quickly, a stable internet connection ensures smooth gameplay without interruptions.
                </p>
              </div>
              
              <div className="bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-900 rounded-xl p-4">
                <h3 className="font-bold mb-2">🔊 Enable Sound</h3>
                <p className="text-sm text-muted-foreground">
                  Many games have sound effects and music that enhance the experience. Make sure your device volume is on!
                </p>
              </div>
              
              <div className="bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-900 rounded-xl p-4">
                <h3 className="font-bold mb-2">🍪 Enable Cookies</h3>
                <p className="text-sm text-muted-foreground">
                  Some games save your progress using browser cookies. Enable cookies for the best experience.
                </p>
              </div>
              
              <div className="bg-pink-50 dark:bg-pink-950/20 border border-pink-200 dark:border-pink-900 rounded-xl p-4">
                <h3 className="font-bold mb-2">🖥️ Fullscreen Mode</h3>
                <p className="text-sm text-muted-foreground">
                  Many games support fullscreen mode (usually F11 key). This provides an immersive gaming experience.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8 bg-card border rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-4">❓ Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold mb-2">Do I need to create an account?</h3>
                <p className="text-sm text-muted-foreground">
                  No! All games can be played instantly without registration. Just click and play.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold mb-2">Are the games really free?</h3>
                <p className="text-sm text-muted-foreground">
                  Yes, 100% free! No hidden costs, no subscriptions, no in-app purchases. Just free gaming fun.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold mb-2">Can I play on my phone or tablet?</h3>
                <p className="text-sm text-muted-foreground">
                  Absolutely! All our HTML5 games work on mobile devices. Just open the website in your mobile browser.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold mb-2">Why isn't a game loading?</h3>
                <p className="text-sm text-muted-foreground">
                  Try refreshing the page, clearing your browser cache, or using a different browser. Make sure you have 
                  a stable internet connection.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold mb-2">How do I save my game progress?</h3>
                <p className="text-sm text-muted-foreground">
                  Most games automatically save progress in your browser. Make sure cookies are enabled and don't clear 
                  your browser data if you want to keep your progress.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-primary/5 border border-primary/10 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-4">🎯 Ready to Play?</h2>
            <p className="text-muted-foreground mb-4">
              Now that you know how to play, it's time to start gaming! Browse our collection and find your next 
              favorite game.
            </p>
            <div className="flex gap-4">
              <Link href="/" className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-bold hover:opacity-90 transition-all">
                Browse All Games
              </Link>
              <Link href="/categories" className="border px-6 py-3 rounded-full font-bold hover:bg-slate-50 transition-all">
                View Categories
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
