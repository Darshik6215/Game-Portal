import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | GameHub',
  description: 'Terms of Service for GameHub - Rules and guidelines for using our gaming platform.',
  robots: 'index, follow',
};

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto prose dark:prose-invert">
        <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Agreement to Terms</h2>
          <p className="text-muted-foreground leading-relaxed">
            By accessing and using GameHub, you accept and agree to be bound by the terms and provision of this 
            agreement. If you do not agree to these terms, please do not use our service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Use License</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Permission is granted to temporarily access and play the games on GameHub for personal, 
            non-commercial use only. This is the grant of a license, not a transfer of title, and under 
            this license you may not:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose</li>
            <li>Attempt to decompile or reverse engineer any software</li>
            <li>Remove any copyright or proprietary notations</li>
            <li>Transfer the materials to another person</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">User Conduct</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            You agree not to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Use the service for any illegal purpose</li>
            <li>Attempt to gain unauthorized access to any portion of the service</li>
            <li>Interfere with or disrupt the service or servers</li>
            <li>Use any automated system to access the service</li>
            <li>Impersonate any person or entity</li>
            <li>Collect or store personal data about other users</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Disclaimer</h2>
          <p className="text-muted-foreground leading-relaxed">
            The games and materials on GameHub are provided on an 'as is' basis. GameHub makes no warranties, 
            expressed or implied, and hereby disclaims and negates all other warranties including, without 
            limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, 
            or non-infringement of intellectual property or other violation of rights.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Limitations</h2>
          <p className="text-muted-foreground leading-relaxed">
            In no event shall GameHub or its suppliers be liable for any damages (including, without limitation, 
            damages for loss of data or profit, or due to business interruption) arising out of the use or 
            inability to use the materials on GameHub, even if GameHub or a GameHub authorized representative 
            has been notified orally or in writing of the possibility of such damage.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Third-Party Content</h2>
          <p className="text-muted-foreground leading-relaxed">
            GameHub may contain links to third-party games and websites. We are not responsible for the content, 
            accuracy, or opinions expressed in such games or websites. The inclusion of any link does not imply 
            endorsement by GameHub.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
          <p className="text-muted-foreground leading-relaxed">
            All games, content, and materials available on GameHub are the property of their respective owners. 
            GameHub respects the intellectual property rights of others and expects users to do the same.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Advertising</h2>
          <p className="text-muted-foreground leading-relaxed">
            GameHub displays advertisements through Google AdSense and other advertising partners. We are not 
            responsible for the content of advertisements or the practices of advertisers.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Modifications</h2>
          <p className="text-muted-foreground leading-relaxed">
            GameHub may revise these terms of service at any time without notice. By using this website, you 
            are agreeing to be bound by the then current version of these terms of service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Termination</h2>
          <p className="text-muted-foreground leading-relaxed">
            We may terminate or suspend access to our service immediately, without prior notice or liability, 
            for any reason whatsoever, including without limitation if you breach the Terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
          <p className="text-muted-foreground leading-relaxed">
            These terms shall be governed and construed in accordance with applicable laws, without regard to 
            its conflict of law provisions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <p className="text-muted-foreground leading-relaxed">
            If you have any questions about these Terms, please contact us through our website.
          </p>
        </section>

        <div className="bg-card border rounded-2xl p-6 mt-8">
          <h3 className="font-bold text-lg mb-2">Acceptance of Terms</h3>
          <p className="text-sm text-muted-foreground">
            By using GameHub, you signify your acceptance of these terms. If you do not agree to these terms, 
            please do not use our service.
          </p>
        </div>
      </div>
    </div>
  );
}
