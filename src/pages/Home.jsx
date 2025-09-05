import React from 'react';
import { Helmet } from 'react-helmet-async';

import Hero from '../components/home/Hero';
import HelpCenter from '../components/home/HelpCenter';
import FinalCTA from '../components/home/FinalCTA';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Kerliix Technologies | Connect. Understand. Unify.</title>
        <meta
          name="description"
          content="Kerliix Technologies. Unifying people and the technologies they use into a seamless digital ecosystem. Be part of the unified and connected ecosystem with Kerliix."
        />
        <meta
          name="keywords"
          content="Kerliix, kerliix technologies, kerliix technologies limited, technology, connected devices, developer tools, APIs, SDKs, innovation, digital solutions"
        />
        <meta name="author" content="Kerliix Technologies" />

        {/* Open Graph / Social Sharing */}
        <meta property="og:title" content="Kerliix Technologies" />
        <meta
          property="og:description"
          content="Kerliix Technologies. Unifying people and the technologies they use into a seamless digital ecosystem. Be part of the unified and connected ecosystem with Kerliix."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://kerliix.com/company/kerliix_logo.png" />
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
          content="Kerliix Technologies. Unifying people and the technologies they use into a seamless digital ecosystem. Be part of the unified and connected ecosystem with Kerliix."
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
            "logo": "https://kerliix.com/company/kerliix_logo.png",
            "sameAs": [
              "https://www.facebook.com/kerliix_technologies",
              "https://www.instagram.com/kerliix_technologies",
              "https://x.com/kerliix_technologies",
              "https://www.linkedin.com/company/kerliix_technologies",
              "https://github.com/kerliix_technologies"
            ],
            "description": "Kerliix Technologies. Unifying people and the technologies they use into a seamless digital ecosystem. Be part of the unified and connected ecosystem with Kerliix."
          })}
        </script>
      </Helmet>

      <Hero />
      <HelpCenter />
      <FinalCTA />
    </>
  );
}
