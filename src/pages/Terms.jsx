import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-black to-gray-900 text-white px-6 py-12">
      <Helmet>
        <title>Terms of Service | Kerliix Technologies</title>
        <meta
          name="description"
          content="Read Kerliix Technologies' Terms of Service. Learn the rules for using our website, services, and platforms, ensuring transparency and safety."
        />
        <meta
          name="keywords"
          content="Kerliix, terms of service, rules, account responsibilities, intellectual property, user obligations"
        />
        <meta name="author" content="Kerliix Technologies" />

        {/* Open Graph / Social Sharing */}
        <meta property="og:title" content="Terms of Service | Kerliix Technologies" />
        <meta
          property="og:description"
          content="Kerliix Technologies Terms of Service explain how you can safely and responsibly use our services."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://raw.githubusercontent.com/kerliix/.github/main/company/logo.png" />
        <meta property="og:url" content="https://www.kerliix.com/terms" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Terms of Service | Kerliix Technologies" />
        <meta
          name="twitter:description"
          content="Kerliix Technologies Terms of Service explain how you can safely and responsibly use our services."
        />
        <meta
          name="twitter:image"
          content="https://raw.githubusercontent.com/kerliix/.github/main/company/logo.png"
        />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Terms of Service",
            "url": "https://www.kerliix.com/terms",
            "description": "Kerliix Technologies Terms of Service explain how you can safely and responsibly use our website and services.",
            "publisher": {
              "@type": "Organization",
              "name": "Kerliix Technologies",
              "logo": {
                "@type": "ImageObject",
                "url": "https://raw.githubusercontent.com/kerliix/.github/main/company/logo.png"
              }
            }
          })}
        </script>
      </Helmet>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-blue-400">Terms of Service</h1>
        <p className="mb-8 text-white/90">Last updated: August 23, 2025</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">1. Acceptance of Terms</h2>
          <p className="text-white/90">
            By accessing or using any part of Kerliix Technologies Limited ("Kerliix", "we", "our", or "us") platform, website, or services, you agree to these Terms of Service. If you do not agree, please do not use our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">2. Use of the Service</h2>
          <ul className="list-disc pl-5 text-white/90">
            <li>You must be at least 13 years old to use our services.</li>
            <li>You agree not to misuse or interfere with our services or try to access them in ways other than the interface provided.</li>
            <li>You are responsible for all activity that occurs under your account.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">3. Account Responsibilities</h2>
          <p className="text-white/90">
            Keep your login credentials confidential. Notify us immediately if you suspect unauthorized use of your account.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">4. Intellectual Property</h2>
          <p className="text-white/90">
            All content and intellectual property on our platform, including logos, designs, software, and text, belong to Kerliix or our licensors and are legally protected.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">5. Termination</h2>
          <p className="text-white/90">
            We may suspend or terminate your access at any time without notice for violations of these Terms or other reasons.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">6. Limitation of Liability</h2>
          <p className="text-white/90">
            Kerliix is not liable for indirect, incidental, or consequential damages resulting from your use of or inability to use our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">7. Modifications</h2>
          <p className="text-white/90">
            We may update these Terms at any time. Updated terms will be posted here with a revised date. Continued use of services constitutes acceptance of the new terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">8. Governing Law</h2>
          <p className="text-white/90">
            These Terms are governed by the laws of the jurisdiction in which Kerliix Technologies Limited operates, without regard to conflict of law principles.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">9. Contact</h2>
          <p className="text-white/90">
            For questions regarding these Terms, contact us at:
          </p>
          <ul className="pl-5 mt-2 text-white/90">
            <li>Email: <a href="mailto:support@kerliix.com" className="text-blue-400 hover:underline">support@kerliix.com</a></li>
            <li>Email: <a href="mailto:info@kerliix.com" className="text-blue-400 hover:underline">info@kerliix.com</a></li>
          </ul>
        </section>
      </div>
    </div>
  );
}
