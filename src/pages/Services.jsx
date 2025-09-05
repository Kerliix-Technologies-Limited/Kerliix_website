import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
  FaUserShield,
  FaUsersCog,
  FaCodeBranch,
  FaNetworkWired,
  FaCogs,
  FaShieldAlt,
  FaCloud,
  FaUserCircle,
  FaPaperPlane,
  FaBuilding,
  FaPeopleArrows,
} from 'react-icons/fa';

export default function Services() {
  const [activeTab, setActiveTab] = useState('services');

  const services = [
    {
      title: 'Identity & Access Management',
      description:
        'Secure user authentication, single sign-on (SSO), and access control powered by Kerliix Identity.',
      icon: <FaUserShield className="text-blue-400" />,
    },
    {
      title: 'Account & Organization Management',
      description:
        'Manage user profiles, organizational structures, subscriptions, and permissions from a unified dashboard.',
      icon: <FaUsersCog className="text-blue-400" />,
    },
    {
      title: 'Unified Developer Ecosystem',
      description:
        'Enable developers to build and integrate with Kerliix services using APIs, SDKs, and toolkits.',
      icon: <FaCodeBranch className="text-blue-400" />,
    },
    {
      title: 'Help Center',
      description: 'Get support, find guides, and explore FAQs in our Help Center.',
      icon: <FaUserShield className="text-blue-400" />, // Or choose another icon
    },
    {
      title: 'Security & Compliance',
      description:
        'Built-in security features including policy management, access logging, and data privacy controls.',
      icon: <FaShieldAlt className="text-blue-400" />,
    },
    {
      title: 'Billing and Payments',
      description:
        'Centralized checkout, billing, payments, and invoicing services at pay.kerliix.com.',
      icon: <FaCogs className="text-blue-400" />,
    },
  ];

  const products = {
    general: [
      {
        title: 'Digital Me',
        description: 'Personal identity and profile management across Kerliix services.',
        icon: <FaUserCircle className="text-blue-400" />,
      },
      {
        title: 'Kerliix Pay',
        description: 'All your payments, billing, and invoicing centralized in one service.',
        icon: <FaCogs className="text-blue-400" />,
      },
    ],
    developers: [
      {
        title: 'Submit',
        description: 'Submit your app or integration to the Kerliix platform.',
        icon: <FaPaperPlane className="text-blue-400" />,
      },
    ],
    organizations: [
      {
        title: 'Organizations',
        description: 'Tools for managing and empowering digital organizations. (Coming soon)',
        icon: <FaBuilding className="text-blue-400" />,
      },
    ],
    communities: [
      {
        title: 'Communities',
        description: 'Community-driven spaces for innovation and collaboration. (Coming soon)',
        icon: <FaPeopleArrows className="text-blue-400" />,
      },
    ],
  };

  const urlMap = {
    'Identity & Access Management': 'https://auth.kerliix.com',
    'Account & Organization Management': 'https://accounts.kerliix.com',
    'Unified Developer Ecosystem': 'https://dev.kerliix.com',
    'Help Center': 'https://help.kerliix.com',
    'Security & Compliance': 'https://security.kerliix.com',
    'Kerliix Pay': 'https://pay.kerliix.com',

    'Digital Me': 'https://accounts.kerliix.com',
    'Submit': 'https://submit.kerliix.com',
    'Organizations': 'https://org.kerliix.com',
    'Communities': 'https://communities.kerliix.com',
  };

  const getUrl = (title) => urlMap[title] || '#';

  // Framer Motion variants for card animations
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

  const renderProductSection = (sectionTitle, items) => (
    <div className="mb-16">
      <h3 className="text-2xl font-semibold text-blue-300 mb-6">{sectionTitle}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, idx) => (
          <motion.a
            key={idx}
            href={getUrl(item.title)}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white/5 border border-white/10 rounded-lg p-6 cursor-pointer"
            initial="offscreen"
            animate="onscreen"
            whileHover="hover"
            variants={cardVariants}
          >
            <div className="text-4xl mb-3">{item.icon}</div>
            <h4 className="text-xl font-semibold text-blue-300 mb-2">{item.title}</h4>
            <p className="text-white/80 text-sm">{item.description}</p>
          </motion.a>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen text-white px-6 py-16">
      <Helmet>
        <title>Products & Services | Kerliix</title>
        <meta
          name="description"
          content="Explore Kerliix Technologies' services and products, including our identity services, developer tools, organizations, community all for a unified digital ecosystem experience."
        />
        <meta
          name="keywords"
          content="Kerliix, Kerliix technologies, Kerliix Technologies Limited, services, products, identity, cloud, integration, developer platform, security, automation, digital ecosystem"
        />
        <meta name="author" content="Kerliix Technologies" />
        <meta property="og:title" content="Products & Services | Kerliix" />
        <meta
          property="og:description"
          content="Explore Kerliix Technologies' services and products, including our identity services, developer tools, organizations, community all for a unified digital ecosystem experience."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://kerliix.com/company/kerliix_logo.png"
        />
        <meta property="og:url" content="https://www.kerliix.com/services" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Products & Services | Kerliix" />
        <meta
          name="twitter:description"
          content="Explore Kerliix Technologies' services and products, including our identity services, developer tools, organizations, community all for a unified digital ecosystem experience."
        />
        <meta
          name="twitter:image"
          content="https://kerliix.com/company/kerliix_logo.png"
        />
      </Helmet>

      <div className="max-w-6xl mx-auto">
        {/* Toggle Tabs */}
        <div className="flex justify-center space-x-8 mb-12 border-b border-white/20">
          <button
            onClick={() => setActiveTab('services')}
            className={`pb-3 text-lg font-semibold transition ${
              activeTab === 'services'
                ? 'text-blue-400 border-b-2 border-blue-400'
                : 'text-white/50 hover:text-white'
            }`}
            aria-current={activeTab === 'services' ? 'page' : undefined}
          >
            Our Services
          </button>
          <button
            onClick={() => setActiveTab('products')}
            className={`pb-3 text-lg font-semibold transition ${
              activeTab === 'products'
                ? 'text-blue-400 border-b-2 border-blue-400'
                : 'text-white/50 hover:text-white'
            }`}
            aria-current={activeTab === 'products' ? 'page' : undefined}
          >
            Our Products
          </button>
        </div>

        {/* Content */}
        {activeTab === 'services' ? (
          <>
            <h1 className="text-4xl font-bold text-blue-400 mb-4">Our Services</h1>
            <p className="text-white/80 mb-12 max-w-2xl">
              We offer secure, cloud-native digital services that help individuals, developers, organizations, and communities build and unify. That's the Kerliix experience.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
              {services.map((service, idx) => (
                <motion.a
                  key={idx}
                  href={getUrl(service.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white/5 border border-white/10 rounded-lg p-6 cursor-pointer"
                  initial="offscreen"
                  animate="onscreen"
                  whileHover="hover"
                  variants={cardVariants}
                >
                  <div className="text-4xl mb-3">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-blue-300 mb-2">{service.title}</h3>
                  <p className="text-white/80 text-sm">{service.description}</p>
                </motion.a>
              ))}
            </div>
          </>
        ) : (
          <>
            <h2 className="text-3xl font-bold text-blue-400 mb-6">Our Products</h2>
            <p className="text-white/80 mb-12 max-w-2xl">
              Explore our product offerings designed to empower individuals, developers, organizations, and communities.
            </p>

            {renderProductSection('General', products.general)}
            {renderProductSection('Developers', products.developers)}
            {renderProductSection('Organizations', products.organizations)}
            {renderProductSection('Communities', products.communities)}
          </>
        )}
      </div>
    </div>
  );
}
