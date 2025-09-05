import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FaBullhorn, FaTools, FaLock } from 'react-icons/fa';

export default function Announcements() {
  const announcements = [
    {
      title: 'Introducing Kerliix Pay',
      description:
        'We centralized all checkout, billings, payments, invoices, and more at pay.kerliix.com — your all-in-one payment BaaS.',
      icon: <FaTools className="text-blue-400" />,
      date: 'September 12, 2025',
      image: 'https://kerliix.com/products/kerliix_pay.png',
      link: 'https://pay.kerliix.com',
      linkLabel: 'Explore Kerliix Pay',
    },
    {
      title: "Handle All Your App's submissions with Kerliix",
      description:
        'Submit is our BaaS platform that handles all developer submissions and integrations. Get your app connected seamlessly with Kerliix.',
      icon: <FaTools className="text-blue-400" />,
      date: 'September 09, 2025',
      image: 'https://kerliix.com/company/KaliiSubmit.png',
      link: 'https://submit.kerliix.com',
      linkLabel: 'Check it out',
    },
    {
      title: 'Welcome to Our New Help Center',
      description:
        'Our Help Center is now live at help.kerliix.com — find guides, troubleshooting tips, and submit support requests.',
      icon: <FaBullhorn className="text-blue-400" />,
      date: 'September 05, 2025',
      image: 'https://kerlii.com/announcements/help_center.png',
      link: 'https://help.kerliix.com',
      linkLabel: 'Visit Help Center',
    },
    {
      title: 'Security Policy Update',
      description:
        'We’ve updated our platform’s security and compliance policies to enhance data protection and transparency.',
      icon: <FaLock className="text-blue-400" />,
      date: 'September 03, 2025',
      link: 'https://policies.kerliix.com/security',
      linkLabel: 'Read Security Policy',
    },
  ];

  const cardVariants = {
    offscreen: { opacity: 0, y: 20 },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', bounce: 0.3, duration: 0.6 },
    },
    hover: {
      scale: 1.05,
      boxShadow: '0px 10px 20px rgba(0,0,0,0.2)',
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="min-h-screen text-white px-6 py-16">
      <Helmet>
        <title>Announcements | Kerliix</title>
        <meta
          name="description"
          content="Stay updated with the latest announcements from Kerliix Technologies. Product launches, platform updates, policy changes, and more."
        />
        <meta
          name="keywords"
          content="Kerliix announcements, product updates, news, platform launches, changelog, Kerliix Technologies"
        />
        <meta name="author" content="Kerliix Technologies" />
        <meta property="og:title" content="Announcements | Kerliix" />
        <meta
          property="og:description"
          content="Explore the latest news and product updates from Kerliix Technologies."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://kerliix.com/company/kerliix_logo.png" />
        <meta property="og:url" content="https://www.kerliix.com/announcements" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Announcements | Kerliix" />
        <meta
          name="twitter:description"
          content="Latest platform updates, features, and announcements from Kerliix Technologies."
        />
        <meta name="twitter:image" content="https://kerliix.com/company/kerliix_logo.png" />
      </Helmet>

      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-400 mb-4">Latest Announcements</h1>
        <p className="text-white/80 mb-12 max-w-2xl">
          Stay informed on the latest from Kerliix — platform launches, updates, and more to keep you connected and empowered.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {announcements.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white/5 border border-white/10 rounded-lg p-6 flex flex-col justify-between"
              initial="offscreen"
              animate="onscreen"
              whileHover="hover"
              variants={cardVariants}
            >
              <div>
                <div className="text-4xl mb-3">{item.icon}</div>

                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                )}

                <h3 className="text-xl font-semibold text-blue-300 mb-2">{item.title}</h3>
                <p className="text-white/80 text-sm mb-3">{item.description}</p>
              </div>

              <div>
                <p className="text-xs text-white/40 mb-2">{item.date}</p>

                {item.link && item.linkLabel && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition"
                  >
                    {item.linkLabel} &rarr;
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
