import React from 'react';
// import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function Blog() {
  // const posts = [
  //   {
  //     id: 1,
  //     title: 'Why Unified Platforms Are the Future',
  //     date: 'August 10, 2025',
  //     excerpt: 'Learn how integrating your tech stack can streamline operations, reduce costs, and enhance user experience.',
  //   },
  //   {
  //     id: 2,
  //     title: 'Designing for Connection: The UI Principles We Follow',
  //     date: 'July 24, 2025',
  //     excerpt: 'Discover how our design team focuses on usability, accessibility, and connection-first UX.',
  //   },
  //   {
  //     id: 3,
  //     title: 'Security in the Cloud: Kerliix’s Approach',
  //     date: 'June 15, 2025',
  //     excerpt: 'We break down how Kerliix ensures your data stays safe through robust encryption and monitoring.',
  //   },
  // ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-black to-gray-900 text-white px-6 py-12">
      <Helmet>
        <title>Kerliix Blog | Coming Soon</title>
        <meta
          name="description"
          content="Kerliix Blog coming soon. Stay tuned for insights, updates, and stories on technology, design, and strategy."
        />
        <meta
          name="keywords"
          content="Kerliix, blog, technology, design, updates, insights, coming soon"
        />
        <meta name="author" content="Kerliix Technologies" />

        {/* Open Graph / Social Sharing */}
        <meta property="og:title" content="Kerliix Blog | Coming Soon" />
        <meta
          property="og:description"
          content="Our blog is coming soon. Stay tuned for insights, updates, and stories from the Kerliix team on technology, design, and strategy."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://raw.githubusercontent.com/kerliix/.github/main/company/logo.png" />
        <meta property="og:url" content="https://www.kerliix.com/blog" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kerliix Blog | Coming Soon" />
        <meta
          name="twitter:description"
          content="Our blog is coming soon. Stay tuned for insights, updates, and stories from the Kerliix team on technology, design, and strategy."
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
            "name": "Kerliix Blog",
            "url": "https://www.kerliix.com/blog",
            "description": "Kerliix Blog coming soon. Stay tuned for insights, updates, and stories from our team on technology, design, and strategy.",
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

      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6 text-blue-400">Kerliix Blog</h1>
        <p className="text-white/80 mb-12 text-lg">
          Our blog is coming soon! Here you’ll find insights, updates, and stories from the Kerliix team about technology, design, and strategy. Stay tuned for updates.
        </p>

        {/* Commented out blog posts */}
        {/* <div className="grid gap-8">
          {posts.map((post) => (
            <div key={post.id} className="border border-white/10 rounded-lg p-6 bg-white/5 hover:bg-white/10 transition">
              <h2 className="text-2xl font-semibold mb-2 text-blue-300">{post.title}</h2>
              <p className="text-white/70 text-sm mb-2">{post.date}</p>
              <p className="text-white/80 mb-4">{post.excerpt}</p>
              <Link to={`/blog/${post.id}`} className="text-blue-400 hover:underline">
                Read more →
              </Link>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}
