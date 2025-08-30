import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-black to-gray-900 text-white px-6 py-12">
      <Helmet>
        <title>Privacy Policy | Kerliix Technologies</title>
        <meta
          name="description"
          content="Read Kerliix Technologies' Privacy Policy. Learn how we collect, use, and protect your information, ensuring transparency and trust."
        />
        <meta
          name="keywords"
          content="Kerliix, privacy policy, data protection, personal information, user rights, security"
        />
        <meta name="author" content="Kerliix Technologies" />

        {/* Open Graph / Social Sharing */}
        <meta property="og:title" content="Privacy Policy | Kerliix Technologies" />
        <meta
          property="og:description"
          content="Kerliix Technologies values your privacy. Learn how we collect, use, and safeguard your information."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://raw.githubusercontent.com/kerliix/.github/main/company/logo.png" />
        <meta property="og:url" content="https://www.kerliix.com/privacy" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Privacy Policy | Kerliix Technologies" />
        <meta
          name="twitter:description"
          content="Kerliix Technologies values your privacy. Learn how we collect, use, and safeguard your information."
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
            "name": "Privacy Policy",
            "url": "https://www.kerliix.com/privacy",
            "description": "Kerliix Technologies values your privacy. This page explains how we collect, use, and protect your information.",
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
        <h1 className="text-4xl font-bold mb-6 text-blue-400">Privacy Policy</h1>
        <p className="mb-8 text-white/90">Last updated: August 23, 2025</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
          <p className="text-white/90">
            Welcome to Kerliix Technologies Limited ("Kerliix", "we", "our", or "us"). Your privacy is very important to us. This Privacy Policy explains clearly how we collect, use, and protect your information while using our website, apps, and services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">2. Information We Collect</h2>
          <ul className="list-disc pl-5 text-white/90">
            <li>Personal Information: name, email address, phone number, and other contact details you provide.</li>
            <li>Usage Data: browser type, IP address, pages visited, time and date of visit to help us improve our services.</li>
            <li>Cookies and Tracking Technologies for analytics and personalized experiences.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">3. How We Use Your Information</h2>
          <ul className="list-disc pl-5 text-white/90">
            <li>To provide, maintain, and improve our services</li>
            <li>To enhance your user experience on our platforms</li>
            <li>To send updates or promotional content only if you’ve opted in</li>
            <li>To comply with legal requirements and protect your rights</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">4. Sharing Your Information</h2>
          <p className="text-white/90">
            We do not sell your personal data. We may share it with:
          </p>
          <ul className="list-disc pl-5 text-white/90">
            <li>Service providers and vendors working under contract</li>
            <li>Legal authorities when required by law</li>
            <li>Trusted business partners only with your consent</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">5. Your Rights</h2>
          <p className="text-white/90">
            You have the right to:
          </p>
          <ul className="list-disc pl-5 text-white/90">
            <li>Access the personal data we hold about you</li>
            <li>Request correction or deletion of your information</li>
            <li>Opt-out of marketing communications at any time</li>
            <li>Withdraw consent whenever you wish</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">6. Data Security</h2>
          <p className="text-white/90">
            We take the protection of your data seriously and implement industry-standard measures. However, no online system is 100% secure, so we encourage you to also protect your information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">7. Third-Party Links</h2>
          <p className="text-white/90">
            Our services may include links to third-party websites. We are not responsible for their privacy practices, so we encourage you to review their policies before sharing any information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">8. Changes to This Policy</h2>
          <p className="text-white/90">
            We may update this Privacy Policy occasionally. When we do, we’ll update the “Last updated” date above and, if necessary, notify you of significant changes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">9. Contact Us</h2>
          <p className="text-white/90">
            If you have questions or concerns about your privacy, please reach out to us at:
          </p>
          <ul className="pl-5 mt-2 text-white/90">
            <li>Email: <a href="mailto:privacy@kerliix.com" className="text-blue-400 hover:underline">privacy@kerliix.com</a></li>
            <li>Email: <a href="mailto:info@kerliix.com" className="text-blue-400 hover:underline">info@kerliix.com</a></li>
          </ul>
        </section>
      </div>
    </div>
  );
      }
