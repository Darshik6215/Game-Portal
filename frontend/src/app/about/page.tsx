import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About GameHub - Free Online Gaming Platform',
  description: 'Learn about GameHub, the best platform for free online HTML5 games. Play instantly in your browser without downloads.',
  keywords: ['about gamehub', 'online gaming platform', 'free games', 'HTML5 games'],
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About GameHub</h1>
        
        <div className="prose dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Welcome to GameHub</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              GameHub is your premier destination for free online gaming. We're passionate about bringing you the best 
              HTML5 games that you can play instantly in your browser, without any downloads or installations required.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Founded with the mission to make quality gaming accessible to everyone, we've curated a diverse collection 
              of games spanning multiple genres including action, puzzle, racing, adventure, strategy, sports, and simulation.
            </p>
          </section>

          <section className="mb-8 bg-card border rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our mission is simple: to provide a safe, fun, and accessible gaming platform where players of all ages 
              can discover and enjoy high-quality games for free. We believe gaming should be easy, instant, and available 
              to everyone, regardless of their device or location.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-card border rounded-xl p-4">
                <h3 className="font-bold mb-2">🎮 20+ Quality Games</h3>
                <p className="text-sm text-muted-foreground">
                  Carefully selected games across multiple categories, all tested for quality and fun factor.
                </p>
              </div>
              <div className="bg-card border rounded-xl p-4">
                <h3 className="font-bold mb-2">🚀 Instant Play</h3>
                <p className="text-sm text-muted-foreground">
                  No downloads, no installations. Click and play immediately in your browser.
                </p>
              </div>
              <div className="bg-card border rounded-xl p-4">
                <h3 className="font-bold mb-2">💯 100% Free</h3>
                <p className="text-sm text-muted-foreground">
                  All games are completely free with no hidden costs or subscription fees.
                </p>
              </div>
              <div className="bg-card border rounded-xl p-4">
                <h3 className="font-bold mb-2">📱 Cross-Platform</h3>
                <p className="text-sm text-muted-foreground">
                  Play on desktop, tablet, or mobile - our games work on all devices.
                </p>
              </div>
              <div className="bg-card border rounded-xl p-4">
                <h3 className="font-bold mb-2">🔒 Safe & Secure</h3>
                <p className="text-sm text-muted-foreground">
                  All games are vetted for safety and security. No malware, no viruses.
                </p>
              </div>
              <div className="bg-card border rounded-xl p-4">
                <h3 className="font-bold mb-2">🆕 Regular Updates</h3>
                <p className="text-sm text-muted-foreground">
                  New games added regularly to keep the collection fresh and exciting.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Why HTML5 Games?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              HTML5 is the modern standard for web games. Unlike older Flash games, HTML5 games work on all modern 
              browsers and devices without requiring plugins. This means:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Better performance and faster loading times</li>
              <li>Works on mobile devices (iOS and Android)</li>
              <li>No security vulnerabilities from outdated plugins</li>
              <li>Smooth gameplay across all platforms</li>
              <li>Future-proof technology that's constantly improving</li>
            </ul>
          </section>

          <section className="mb-8 bg-primary/5 border border-primary/10 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-4">Our Commitment</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We're committed to maintaining a high-quality gaming platform that's:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>✓ Always free to use</li>
              <li>✓ Safe for all ages</li>
              <li>✓ Regularly updated with new content</li>
              <li>✓ Optimized for the best gaming experience</li>
              <li>✓ Accessible on all devices</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Join Our Community</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              GameHub is more than just a gaming platform - it's a community of gamers who share a passion for fun, 
              accessible gaming. Whether you're a casual player looking for a quick break or a dedicated gamer seeking 
              new challenges, you'll find a home here.
            </p>
            <div className="flex gap-4">
              <Link href="/" className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-bold hover:opacity-90 transition-all">
                Start Playing
              </Link>
              <Link href="/categories" className="border px-6 py-3 rounded-full font-bold hover:bg-slate-50 transition-all">
                Browse Games
              </Link>
            </div>
          </section>

          <section className="bg-card border rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              Have questions, suggestions, or feedback? We'd love to hear from you! Reach out to us and help us 
              make GameHub even better for the gaming community.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
