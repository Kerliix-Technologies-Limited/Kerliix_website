import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  FaCloud,
  FaCogs,
  FaLink,
  FaUsers,
  FaShieldAlt,
  FaRobot,
  FaBrain,
  FaTools,
} from 'react-icons/fa';

export default function Services() {
  const services = [
    {
      title: 'Device & App Integration',
      description:
        'Connect all your devices and applications in a single, unified ecosystem for seamless workflows and efficiency.',
      icon: <FaLink className="text-blue-400" />,
    },
    {
      title: 'Automation & Management',
      description:
        'Streamline tasks across platforms with smart automation and centralized management dashboards.',
      icon: <FaCogs className="text-blue-400" />,
    },
    {
      title: 'Cloud Connectivity',
      description:
        'Synchronize data and collaborate in real-time across multiple devices with scalable cloud solutions.',
      icon: <FaCloud className="text-blue-400" />,
    },
    {
      title: 'Community & Collaboration',
      description:
        'Connect with like-minded users and developers to share insights, resources, and best practices.',
      icon: <FaUsers className="text-blue-400" />,
    },
    {
      title: 'Security & Privacy',
      description:
        'Protect user data and manage access with secure authentication and privacy-first design.',
      icon: <FaShieldAlt className="text-blue-400" />,
    },
    {
      title: 'AI & Smart Recommendations',
      description:
        'Get personalized insights and AI-driven suggestions to optimize your technology ecosystem.',
      icon: <FaRobot className="text-blue-400" />,
    },
    {
      title: 'IT Consulting',
      description:
        'Strategic technology advisory services to help align your digital vision with business objectives.',
      icon: <FaBrain className="text-blue-400" />,
    },
    {
      title: 'Custom Software Solutions',
      description:
        'Tailored applications to solve unique challenges and streamline your organization’s operations.',
      icon: <FaTools className="text-blue-400" />,
    },
  ];

  return (
    <div className="min-h-screen text-white px-6 py-16">
      <Helmet>
        <title>Services | Kerliix Technologies</title>
        <meta
          name="description"
          content="Explore Kerliix Technologies' services, including device integration, automation, cloud solutions, AI recommendations, IT consulting, and custom software to empower businesses."
        />
        <meta
          name="keywords"
          content="Kerliix, services, IT consulting, cloud solutions, automation, device integration, AI, security, software solutions, collaboration"
        />
        <meta name="author" content="Kerliix Technologies" />

        {/* Open Graph / Social Sharing */}
        <meta property="og:title" content="Services | Kerliix Technologies" />
        <meta
          property="og:description"
          content="Discover Kerliix Technologies' innovative services to connect, empower, and unify businesses with technology."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://raw.githubusercontent.com/kerliix/.github/main/company/logo.png" />
        <meta property="og:url" content="https://www.kerliix.com/services" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Services | Kerliix Technologies" />
        <meta
          name="twitter:description"
          content="Discover Kerliix Technologies' innovative services to connect, empower, and unify businesses with technology."
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
            "name": "Services",
            "url": "https://www.kerliix.com/services",
            "description": "Explore Kerliix Technologies' services, including device integration, automation, cloud solutions, AI recommendations, IT consulting, and custom software solutions.",
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

      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-400 mb-4">Our Services</h1>
        <p className="text-white/80 mb-12 max-w-2xl">
          At Kerliix Technologies, we provide innovative digital solutions designed to connect, empower, and unify modern businesses.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition"
            >
              <div className="text-4xl mb-3">{service.icon}</div>
              <h3 className="text-xl font-semibold text-blue-300 mb-2">
                {service.title}
              </h3>
              <p className="text-white/80 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
        }
