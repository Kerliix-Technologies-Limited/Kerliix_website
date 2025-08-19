import React from 'react';
import { Link } from 'react-router-dom';

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: 'Why Unified Platforms Are the Future',
      date: 'August 10, 2025',
      excerpt: 'Learn how integrating your tech stack can streamline operations, reduce costs, and enhance user experience.',
    },
    {
      id: 2,
      title: 'Designing for Connection: The UI Principles We Follow',
      date: 'July 24, 2025',
      excerpt: 'Discover how our design team focuses on usability, accessibility, and connection-first UX.',
    },
    {
      id: 3,
      title: 'Security in the Cloud: Kerliix’s Approach',
      date: 'June 15, 2025',
      excerpt: 'We break down how Kerliix ensures your data stays safe through robust encryption and monitoring.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-black to-gray-900 text-white px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-blue-400">Kerliix Blog</h1>
        <p className="text-white/80 mb-12">
          Insights, updates, and stories from the Kerliix team. Stay informed on the latest in technology, design, and strategy.
        </p>

        <div className="grid gap-8">
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
        </div>
      </div>
    </div>
  );
}
