import React, { useState } from 'react';
import { toast } from 'react-toastify';  // Changed from react-hot-toast to react-toastify
import { Helmet } from 'react-helmet-async';
import {
  HiLocationMarker,
  HiPhone,
  HiMail,
} from 'react-icons/hi';
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebook,
} from 'react-icons/fa';
import { SiX } from 'react-icons/si';
import API from '../api';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    customSubject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const predefinedSubjects = [
    'Support',
    'Feedback',
    'Partnership',
    'General Inquiry',
    'Other',
  ];

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const subjectToSend =
      formData.subject === 'Other'
        ? formData.customSubject
        : formData.subject;

    if (!validateEmail(formData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    if (formData.subject === 'Other' && !formData.customSubject.trim()) {
      toast.error('Please specify the subject');
      return;
    }

    setIsSubmitting(true);

    try {
      const { data } = await API.post('/contact', {
        name: formData.name,
        email: formData.email,
        subject: subjectToSend,
        message: formData.message,
      });

      toast.success(data.message || 'Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        customSubject: '',
        message: '',
      });
    } catch (err) {
      if (err.response?.data?.error) {
        toast.error(err.response.data.error);
      } else {
        toast.error('Network error, please try again later.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 text-white transition-colors duration-300">
      <Helmet>
        <title>Contact Kerliix Technologies | Get in Touch</title>
        <meta
          name="description"
          content="Reach out to Kerliix Technologies for support, inquiries, partnerships, or feedback. Our team is here to assist you quickly and securely."
        />
        <meta
          name="keywords"
          content="Kerliix, contact, support, inquiry, partnership, feedback, email, phone"
        />
        <meta name="author" content="Kerliix Technologies" />

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
        <meta property="og:title" content="Contact Kerliix Technologies" />
        <meta
          property="og:description"
          content="Reach out to Kerliix Technologies for support, inquiries, partnerships, or feedback. Our team is here to assist you quickly and securely."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://raw.githubusercontent.com/kerliix/.github/main/company/logo.png" />
        <meta property="og:url" content="https://www.kerliix.com/contact" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Kerliix Technologies" />
        <meta
          name="twitter:description"
          content="Reach out to Kerliix Technologies for support, inquiries, partnerships, or feedback. Our team is here to assist you quickly and securely."
        />
        <meta
          name="twitter:image"
          content="https://raw.githubusercontent.com/kerliix/.github/main/company/logo.png"
        />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Kerliix Contact Page",
            "url": "https://www.kerliix.com/contact",
            "description":
              "Contact Kerliix Technologies for support, inquiries, partnerships, or feedback. We provide quick and secure assistance.",
            "publisher": {
              "@type": "Organization",
              "name": "Kerliix Technologies",
              "logo": {
                "@type": "ImageObject",
                "url": "https://raw.githubusercontent.com/kerliix/.github/main/company/logo.png",
              },
            },
          })}
        </script>
      </Helmet>

      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-white/80">
          We’d love to hear from you. Fill out the form below and we’ll get back to you soon.
        </p>
      </div>

      {/* Main grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Form */}
        <div className="rounded-xl p-8 text-white border border-white/20">
          <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white/90">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-2 rounded-md border border-white/30 bg-transparent text-white placeholder-white/50 focus:ring-blue-400 focus:border-blue-400"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white/90">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-2 rounded-md border border-white/30 bg-transparent text-white placeholder-white/50 focus:ring-blue-400 focus:border-blue-400"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-white/90">
                Subject
              </label>
              <select
                name="subject"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-2 rounded-md border border-white/30 bg-transparent text-white focus:ring-blue-400 focus:border-blue-400"
              >
                <option value="" disabled>
                  Select a subject
                </option>
                {predefinedSubjects.map((option) => (
                  <option key={option} value={option} className="bg-gray-900 text-white">
                    {option}
                  </option>
                ))}
              </select>
            </div>

            {formData.subject === 'Other' && (
              <div>
                <label htmlFor="customSubject" className="block text-sm font-medium text-white/90">
                  Please specify
                </label>
                <input
                  type="text"
                  name="customSubject"
                  id="customSubject"
                  value={formData.customSubject}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-2 rounded-md border border-white/30 bg-transparent text-white placeholder-white/50 focus:ring-blue-400 focus:border-blue-400"
                  placeholder="Custom subject"
                />
              </div>
            )}

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white/90">
                Your Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-2 rounded-md border border-white/30 bg-transparent text-white placeholder-white/50 focus:ring-blue-400 focus:border-blue-400"
                placeholder="Write your message here..."
              />
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-2 px-4 rounded-md font-semibold transition duration-200
                  ${
                    isSubmitting
                      ? 'bg-blue-700 text-white cursor-wait'
                      : 'bg-blue-700 hover:bg-blue-800 text-white'
                  }
                `}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      ></path>
                    </svg>
                    <span>Sending...</span>
                  </div>
                ) : (
                  'Send Message'
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-6 text-white/90">
          <div className="flex items-start space-x-3">
            <HiLocationMarker size={28} className="mt-1 text-blue-400" />
            <div>
              <p className="font-semibold text-white">Our Address</p>
              <p className="text-white/70">
                Street
                <br />
                Kampala, Uganda
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <HiPhone size={26} className="mt-1 text-blue-400" />
            <div>
              <p className="font-semibold text-white">Call Us</p>
              <p className="text-white/70">+256 707838631</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <HiMail size={26} className="mt-1 text-blue-400" />
            <div>
              <p className="font-semibold text-white">Email</p>
              <p className="text-white/70">info@kerliix.com</p>
              <p className="text-white/70">support@kerliix.com</p>
            </div>
          </div>

          <div className="pt-4">
            <p className="font-semibold text-white mb-2">Follow us</p>
            <div className="flex flex-wrap gap-4 text-xl">
              <a
                href="https://www.facebook.com/profile.php?id=61580014167875"
                aria-label="Facebook"
                className="flex items-center gap-1 text-blue-400 hover:text-blue-600 transition"
              >
                <FaFacebook />
                kerliix Technologies
              </a>
              <a
                href="https://www.instagram.com/kerliix_technologies"
                aria-label="Instagram"
                className="flex items-center gap-1 text-blue-400 hover:text-blue-600 transition"
              >
                <FaInstagram />
                kerliix_technologies
              </a>
              <a
                href="https://x.com/kerliix_technologies"
                aria-label="X"
                className="flex items-center gap-1 text-blue-400 hover:text-blue-600 transition"
              >
                <SiX />
                @kerliix_technologies
              </a>
              <a
                href="https://www.linkedin.com/company/kerliix_technologies"
                aria-label="LinkedIn"
                className="flex items-center gap-1 text-blue-400 hover:text-blue-600 transition"
              >
                <FaLinkedinIn />
                Kerliix_technologies
              </a>
            </div>
          </div>

          <div className="pt-6 space-y-2">
            <p className="font-semibold text-white">Response Time</p>
            <p className="text-white/80">We typically respond within 24 to 28 hours.</p>

            <p className="font-semibold text-white">Important Notice</p>
            <p className="text-white/80">Official responses will come from:</p>
            <ul className="list-disc list-inside text-white/70 mt-1">
              <li>noreply@kerliix.com</li>
              <li>support@kerliix.com</li>
              <li>info@kerliix.com</li>
            </ul>
            <p>
              Please be{' '}
              <span className="font-semibold text-red-500">cautious</span> of any other email addresses claiming to represent Kerliix.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
