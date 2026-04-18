import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | GameHub',
  description: 'Privacy Policy for GameHub - Learn how we collect, use, and protect your information.',
  robots: 'index, follow',
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto prose dark:prose-invert">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Introduction</h2>
          <p className="text-muted-foreground leading-relaxed">
            Welcome to GameHub. We respect your privacy and are committed to protecting your personal data. 
            This privacy policy will inform you about how we look after your personal data when you visit our 
            website and tell you about your privacy rights.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We may collect, use, store and transfer different kinds of personal data about you:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li><strong>Usage Data:</strong> Information about how you use our website and games</li>
            <li><strong>Technical Data:</strong> IP address, browser type, device information</li>
            <li><strong>Cookie Data:</strong> Information stored in cookies for functionality and analytics</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We use your information for the following purposes:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>To provide and maintain our gaming service</li>
            <li>To improve user experience and website functionality</li>
            <li>To analyze usage patterns and optimize performance</li>
            <li>To display relevant advertisements through Google AdSense</li>
            <li>To comply with legal obligations</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Cookies</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We use cookies and similar tracking technologies to track activity on our website. Cookies are 
            files with a small amount of data which may include an anonymous unique identifier.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            <strong>Types of cookies we use:</strong>
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
            <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
            <li><strong>Advertising Cookies:</strong> Used to deliver relevant ads through Google AdSense</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-4">
            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. 
            However, if you do not accept cookies, you may not be able to use some portions of our website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Google AdSense</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We use Google AdSense to display advertisements on our website. Google AdSense uses cookies to 
            serve ads based on your prior visits to our website or other websites.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Google's use of advertising cookies enables it and its partners to serve ads based on your visit 
            to our site and/or other sites on the Internet.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            You may opt out of personalized advertising by visiting{' '}
            <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              Google Ads Settings
            </a>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Third-Party Links</h2>
          <p className="text-muted-foreground leading-relaxed">
            Our website may contain links to third-party games and websites. We have no control over and assume 
            no responsibility for the content, privacy policies, or practices of any third-party sites or services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>
          <p className="text-muted-foreground leading-relaxed">
            Our service is intended for general audiences. We do not knowingly collect personally identifiable 
            information from children under 13. If you are a parent or guardian and you are aware that your child 
            has provided us with personal data, please contact us.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Data Security</h2>
          <p className="text-muted-foreground leading-relaxed">
            We implement appropriate technical and organizational security measures to protect your personal data. 
            However, no method of transmission over the Internet or electronic storage is 100% secure.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            You have the right to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Access your personal data</li>
            <li>Correct inaccurate personal data</li>
            <li>Request deletion of your personal data</li>
            <li>Object to processing of your personal data</li>
            <li>Request restriction of processing your personal data</li>
            <li>Withdraw consent at any time</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Changes to This Privacy Policy</h2>
          <p className="text-muted-foreground leading-relaxed">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting 
            the new Privacy Policy on this page and updating the "Last updated" date.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-muted-foreground leading-relaxed">
            If you have any questions about this Privacy Policy, please contact us through our website.
          </p>
        </section>

        <div className="bg-card border rounded-2xl p-6 mt-8">
          <h3 className="font-bold text-lg mb-2">GDPR Compliance</h3>
          <p className="text-sm text-muted-foreground">
            If you are a resident of the European Economic Area (EEA), you have certain data protection rights. 
            GameHub aims to take reasonable steps to allow you to correct, amend, delete, or limit the use of 
            your personal data.
          </p>
        </div>
      </div>
    </div>
  );
}
