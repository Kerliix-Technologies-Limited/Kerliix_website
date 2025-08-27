import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaInstagram,
} from 'react-icons/fa';
import { SiX } from 'react-icons/si';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] p-6">
      <Helmet>
        <title>Kerliix Technologies | Connecting People & Technology</title>
        <meta
          name="description"
          content="Kerliix Technologies connects people with technology seamlessly. Explore our products, developer tools, and innovative solutions for individuals and organizations."
        />
        <meta
          name="keywords"
          content="Kerliix, technology, connected devices, developer tools, APIs, SDKs, innovation, digital solutions"
        />
        <meta name="author" content="Kerliix Technologies" />
        
        {/* Open Graph / Social Sharing */}
        <meta property="og:title" content="Kerliix Technologies" />
        <meta
          property="og:description"
          content="Connecting people with technology seamlessly. Explore our products, developer tools, and innovative solutions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://raw.githubusercontent.com/kerliix/.github/main/company/logo.png" />
        <meta property="og:url" content="https://www.kerliix.com" />

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
        <meta name="twitter:title" content="Kerliix Technologies" />
        <meta
          name="twitter:description"
          content="Connecting people with technology seamlessly. Explore our products, developer tools, and innovative solutions."
        />
        <meta
          name="twitter:image"
          content="https://raw.githubusercontent.com/kerliix/.github/main/company/logo.png"
        />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Kerliix Technologies",
            "url": "https://www.kerliix.com",
            "logo": "https://raw.githubusercontent.com/kerliix/.github/main/company/logo.png",
            "sameAs": [
              "https://www.facebook.com/kerliix_technologies",
              "https://www.instagram.com/kerliix_technologies",
              "https://x.com/kerliix_technologies",
              "https://www.linkedin.com/company/kerliix_technologies",
              "https://github.com/kerliix_technologies"
            ],
            "description": "Kerliix Technologies connects people with technology seamlessly. We provide products, developer tools, and innovative solutions for individuals and organizations."
          })}
        </script>
      </Helmet>

      <img
        src="https://raw.githubusercontent.com/kerliix/.github/main/company/logo.png"
        alt="Company Logo"
        className="mb-8 max-w-lg w-full object-contain"
      />

      {/* Divider line above socials */}
      <div className="w-full max-w-lg border-t border-white/20 mb-10" />

      {/* Social Icons below the divider */}
      <div className="flex space-x-5 text-white/90">
        <a
          href="https://www.facebook.com/kerliix_technologies"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="hover:text-[#1877F2] transition"
        >
          <FaFacebookF size={20} />
        </a>
        <a
          href="https://www.instagram.com/kerliix_technologies"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:text-[#E4405F] transition"
        >
          <FaInstagram size={20} />
        </a>
        <a
          href="https://x.com/kerliix_technologies"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X"
          className="hover:text-[#1DA1F2] transition"
        >
          <SiX size={20} />
        </a>
        <a
          href="https://www.linkedin.com/company/kerliix_technologies"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-[#0A66C2] transition"
        >
          <FaLinkedinIn size={20} />
        </a>
        <a
          href="https://github.com/kerliix_technologies"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-[#6e5494] transition"
        >
          <FaGithub size={20} />
        </a>
      </div>
    </div>
  );
}
