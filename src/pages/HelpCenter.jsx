import React from 'react';

export default function HelpCenter() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-black to-gray-900 text-white px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-blue-400">Help Center</h1>
        <p className="mb-10 text-white/90">
          Welcome to the Kerliix Help Center. Below are some frequently asked questions and answers to help guide your experience with our platform.
        </p>

        <div className="space-y-10">
          {/* FAQ 1 */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">1. How do I create an account?</h2>
            <p className="text-white/80">
              To create an account, visit <a href="https://accounts.kerliix.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">accounts.kerliix.com</a> and follow the registration process.
            </p>
          </div>

          {/* FAQ 2 */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">2. I forgot my password. What should I do?</h2>
            <p className="text-white/80">
              Go to the login page and click on <span className="italic">"Forgot Password?"</span> to reset your password via email.
            </p>
          </div>

          {/* FAQ 3 */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">3. How can I contact support?</h2>
            <p className="text-white/80">
              You can reach our support team via email at{' '}
              <a href="mailto:support@kerliix.com" className="text-blue-400 hover:underline">
                support@kerliix.com
              </a>.
            </p>
          </div>

          {/* FAQ 4 */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">4. Where can I learn more about your services?</h2>
            <p className="text-white/80">
              Visit our <a href="/services" className="text-blue-400 hover:underline">Services</a> page for a full breakdown of what we offer.
            </p>
          </div>

          {/* FAQ 5 */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">5. How do I delete my account?</h2>
            <p className="text-white/80">
              If you'd like to permanently delete your account, please contact us at{' '}
              <a href="mailto:info@kerliix.com" className="text-blue-400 hover:underline">info@kerliix.com</a> with your request.
            </p>
          </div>
        </div>

        <div className="mt-16 text-sm text-white/60 border-t border-white/20 pt-6 text-center">
          Still need help? Reach out to us any time at{' '}
          <a href="mailto:support@kerliix.com" className="text-blue-400 hover:underline">
            support@kerliix.com
          </a>
          .
        </div>
      </div>
    </div>
  );
}
