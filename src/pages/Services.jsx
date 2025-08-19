import React from 'react';
import {
  FaPaintBrush,
  FaCode,
  FaCloud,
  FaLink,
  FaBrain,
  FaTools,
} from 'react-icons/fa';

export default function Services() {
  const services = [
    {
      title: 'UI/UX Design',
      description:
        'Crafting seamless, user-centric interfaces that elevate experiences and drive engagement across platforms.',
      icon: <FaPaintBrush className="text-blue-400" />,
    },
    {
      title: 'Web Development',
      description:
        'Full-stack development for fast, scalable, and secure web applications tailored to your business needs.',
      icon: <FaCode className="text-blue-400" />,
    },
    {
      title: 'Cloud Integration',
      description:
        'Unify your systems with scalable cloud solutions, ensuring seamless connectivity and real-time collaboration.',
      icon: <FaCloud className="text-blue-400" />,
    },
    {
      title: 'API Development',
      description:
        'Robust and secure API design that enables smooth data exchange and powerful integrations.',
      icon: <FaLink className="text-blue-400" />,
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
