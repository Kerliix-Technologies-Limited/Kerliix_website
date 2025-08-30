import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function HelpCenter() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-black to-gray-900 text-white px-6 py-12">
      <Helmet>
        <title>Help Center | Kerliix Technologies</title>
        <meta
          name="description"
          content="Find answers to frequently asked questions about Kerliix Technologies. Learn how to register, reset passwords, manage your account, contact support, and explore our services."
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
                  "text": "Visit auth.kerliix.com to register for a new account. After creating your account, you can manage it at accounts.kerliix.com."
                }
              },
              {
                "@type": "Question",
                "name": "I forgot my password. What should I do?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Go to auth.kerliix.com/login and click on 'Forgot Password?' to reset your password via email."
                }
              },
              {
                "@type": "Question",
                "name": "How can I contact support?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Fill out the contact form at kerliix.com/contact and our team will respond as soon as possible."
                }
              },
              {
                "@type": "Question",
                "name": "Where can I learn more about your services?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Visit the Services page on kerliix.com for a full breakdown of what we offer."
                }
              },
              {
                "@type": "Question",
                "name": "How do I delete my account?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Go to accounts.kerliix.com, open Settings, scroll down to Danger Zone, and select Delete Account."
                }
              },
              {
                "@type": "Question",
                "name": "How is my data protected?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Kerliix uses encryption, secure access controls, and industry-standard protocols to protect your data."
                }
              },
              {
                "@type": "Question",
                "name": "Can I provide feedback or suggestions?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, you can send feedback via kerliix.com/contact using the feedback option in the form."
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
              <a href="https://auth.kerliix.com/register" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                auth.kerliix.com
              </a>{' '}
              and complete the registration steps. Once created, manage your details anytime at{' '}
              <a href="https://accounts.kerliix.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                accounts.kerliix.com
              </a>.
            </p>
          </div>

          {/* FAQ 2 */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">2. I forgot my password. What should I do?</h2>
            <p className="text-white/80">
              Go to{' '}
              <a href="https://auth.kerliix.com/login" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                auth.kerliix.com/login
              </a>{' '}
              and click <span className="italic">"Forgot Password?"</span>. You’ll receive an email with reset instructions.
            </p>
          </div>

          {/* FAQ 3 */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">3. How can I contact support?</h2>
            <p className="text-white/80">
              Fill out the contact form at{' '}
              <a href="https://www.kerliix.com/contact" className="text-blue-400 hover:underline">
                kerliix.com/contact
              </a>{' '}
              and our team will get back to you, usually within 24 hours.
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
              To permanently delete your account, go to{' '}
              <a href="https://accounts.kerliix.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                accounts.kerliix.com
              </a>, open <strong>Settings</strong>, scroll to the <strong>Danger Zone</strong>, and click <strong>Delete Account</strong>.
            </p>
          </div>

          {/* FAQ 6 */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">6. How is my data protected?</h2>
            <p className="text-white/80">
              Kerliix uses industry-standard security protocols, encryption, and access controls to safeguard your personal data. We never sell your information and only use it to provide and improve our services.
            </p>
          </div>

          {/* FAQ 7 */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">7. Can I provide feedback or suggestions?</h2>
            <p className="text-white/80">
              Absolutely! Share your ideas using the{' '}
              <a href="https://www.kerliix.com/contact" className="text-blue-400 hover:underline">
                contact form
              </a>{' '}and select <em>Feedback</em>. Your input helps us improve Kerliix.
            </p>
          </div>

          {/* FAQ 8 */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">8. Does Kerliix offer billing and invoices?</h2>
            <p className="text-white/80">
              Yes. You can view and download invoices or manage billing preferences from{' '}
              <a href="https://accounts.kerliix.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                accounts.kerliix.com
              </a>{' '}under the <strong>Billing</strong> section.
            </p>
          </div>

          {/* FAQ 9 */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">9. Can developers integrate with Kerliix?</h2>
            <p className="text-white/80">
              Yes! Developers can access our <strong>Universal API (UAPI)</strong> with documentation and examples at{' '}
              <a href="/developers" className="text-blue-400 hover:underline">
                kerliix.com/developers
              </a>.
            </p>
          </div>

          {/* FAQ 10 */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">10. How can I stay updated with new features?</h2>
            <p className="text-white/80">
              Check our <a href="/blog" className="text-blue-400 hover:underline">Blog</a> or <a href="/updates" className="text-blue-400 hover:underline">Release Notes</a> for the latest features, improvements, and announcements.
            </p>
          </div>
        </div>

        <div className="mt-16 text-sm text-white/60 border-t border-white/20 pt-6 text-center">
          Still need help? Visit{' '}
          <a href="https://www.kerliix.com/contact" className="text-blue-400 hover:underline">
            kerliix.com/contact
          </a>{' '}
          and fill out the form. Our team is happy to assist.
        </div>
      </div>
    </div>
  );
          }
