import React from 'react';

export default function HelpCenter() {
  return (
    <section className="text-white py-16 px-6 text-center max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Need Help?</h2>
      <p className="mb-6 text-lg">
        Visit our Help Center for FAQs, guides, and support resources to get the most out of Kerliix Technologies.
      </p>
      <a
        href="https://help.kerliix.com"
        className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md font-semibold transition"
      >
        Go to Help Center
      </a>
    </section>
  );
}
