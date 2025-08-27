import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function HelpCenter() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-black to-gray-900 text-white px-6 py-12">
      <Helmet>
        <title>Help Center | Kerliix Technologies</title>
        <meta
          name="description"
          content="Find answers to frequently asked questions about Kerliix Technologies. Learn how to create an account, reset passwords, contact support, and explore our services."
        />
        <meta
          name="keywords"
          content="Kerliix, help center, FAQ, support, account, services, password reset, contact support"
        />
        <meta name="author" content="Kerliix Technologies" />

        {/* Open Graph / Social Sharing */}
        <meta property="og:title" content="Help Center | Kerliix Technologies" />
        <meta
          property="og:description"
          content="Get help with your Kerliix account, services, and platform features. Our Help Center answers your most common questions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://raw.githubusercontent.com/kerliix/.github/main/company/logo.png" />
        <meta property="og:url" content="https://www.kerliix.com/help" />

        {/* Google Analytics */}
<script async src="https://www.googletagmanager.com/gtag/js?id=G-Z54P2X11KK"></script>
<script>
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-Z54P2X11KK');
  `}
</script>

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Help Center | Kerliix Technologies" />
        <meta
          name="twitter:description"
          content="Get help with your Kerliix account, services, and platform features. Our Help Center answers your most common questions."
        />
        <meta
          name="twitter:image"
          content="https://raw.githubusercontent.com/kerliix/.github/main/company/logo.png"
        />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How do I create an account?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Visit accounts.kerliix.com and follow the registration process."
                }
              },
              {
                "@type": "Question",
                "name": "I forgot my password. What should I do?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Go to the login page and click on 'Forgot Password?' to reset your password via email."
                }
              },
              {
                "@type": "Question",
                "name": "How can I contact support?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can reach our support team via email at support@kerliix.com."
                }
              },
              {
                "@type": "Question",
                "name": "Where can I learn more about your services?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Visit our Services page for a full breakdown of what we offer."
                }
              },
              {
                "@type": "Question",
                "name": "How do I delete my account?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Contact info@kerliix.com with your request to permanently delete your account."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-blue-400">Help Center</h1>
        <p className="mb-10 text-white/90">
          Welcome to the Kerliix Help Center. Find answers to frequently asked questions about our platform, services, and account management. If you don't find what you need, our support team is always here to help.
        </p>

        <div className="space-y-10">
          {/* FAQ 1 */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">1. How do I create an account?</h2>
            <p className="text-white/80">
              To create an account, visit{' '}
              <a href="https://accounts.kerliix.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                accounts.kerliix.com
              </a>{' '}
              and follow the registration steps. Make sure to use a valid email address for verification.
            </p>
          </div>

          {/* FAQ 2 */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">2. I forgot my password. What should I do?</h2>
            <p className="text-white/80">
              Click <span className="italic">"Forgot Password?"</span> on the login page. You will receive an email with instructions to reset your password securely.
            </p>
          </div>

          {/* FAQ 3 */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">3. How can I contact support?</h2>
            <p className="text-white/80">
              Reach our support team via email at{' '}
              <a href="mailto:support@kerliix.com" className="text-blue-400 hover:underline">
                support@kerliix.com
              </a>. We aim to respond within 24 hours.
            </p>
          </div>

          {/* FAQ 4 */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">4. Where can I learn more about your services?</h2>
            <p className="text-white/80">
              Visit our <a href="/services" className="text-blue-400 hover:underline">Services</a> page for a detailed overview of our offerings, including integrations, automation, cloud solutions, AI insights, and consulting.
            </p>
          </div>

          {/* FAQ 5 */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">5. How do I delete my account?</h2>
            <p className="text-white/80">
              To permanently delete your account, send a request to{' '}
              <a href="mailto:info@kerliix.com" className="text-blue-400 hover:underline">info@kerliix.com</a>. We will verify your request and securely remove your data.
            </p>
          </div>

          {/* FAQ 6 (expanded) */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">6. How is my data protected?</h2>
            <p className="text-white/80">
              Kerliix uses industry-standard security protocols, encryption, and access controls to safeguard your personal data. We never sell your information and only use it to provide and improve our services.
            </p>
          </div>

          {/* FAQ 7 (expanded) */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">7. Can I provide feedback or suggestions?</h2>
            <p className="text-white/80">
              Absolutely! We value your input. Send feedback to{' '}
              <a href="mailto:feedback@kerliix.com" className="text-blue-400 hover:underline">
                feedback@kerliix.com
              </a>. Your insights help us improve our platform.
            </p>
          </div>
        </div>

        <div className="mt-16 text-sm text-white/60 border-t border-white/20 pt-6 text-center">
          Still need help? Reach out anytime at{' '}
          <a href="mailto:support@kerliix.com" className="text-blue-400 hover:underline">
            support@kerliix.com
          </a>
          . Our team is happy to assist.
        </div>
      </div>
    </div>
  );
          }
