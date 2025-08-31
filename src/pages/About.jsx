import React from "react";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <section className="text-white py-16 px-6">
      <Helmet>
        <title>About Kerliix Technologies | Connecting People & Technology</title>
        <meta
          name="description"
          content="Learn about Kerliix Technologies, our mission to unify digital experiences, and how we connect people with technology seamlessly. Discover our vision, team, and developer tools."
        />
        <meta
          name="keywords"
          content="Kerliix, technology, digital experiences, developer tools, connected devices, APIs, SDKs, tech innovation"
        />
        <meta name="author" content="Kerliix Technologies" />
        {/* Open Graph / Social Sharing */}
        <meta property="og:title" content="About Kerliix Technologies" />
        <meta
          property="og:description"
          content="Connecting people with technology seamlessly. Explore our vision, team, and developer tools."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/assets/about-vision.jpg" />
        <meta property="og:url" content="https://www.kerliix.com/about" />

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
        <meta name="twitter:title" content="About Kerliix Technologies" />
        <meta
          name="twitter:description"
          content="Connecting people with technology seamlessly. Explore our vision, team, and developer tools."
        />
        <meta name="twitter:image" content="/assets/about-vision.jpg" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Kerliix Technologies",
            "url": "https://www.kerliix.com",
            "logo": "https://www.kerliix.com/assets/logo.png",
            "sameAs": [
              "https://twitter.com/kerliix",
              "https://www.linkedin.com/company/kerliix",
              "https://www.facebook.com/kerliix"
            ],
            "description": "Kerliix Technologies connects people with technology seamlessly. We provide APIs, SDKs, and solutions to unify digital experiences for individuals and organizations."
          })}
        </script>
      </Helmet>

      <div className="max-w-5xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">About Kerliix Technologies</h1>
          <p className="text-gray-400 text-lg">
            Connecting people with the technologies they use through intelligence, simplicity, and unity.
          </p>
        </div>

        {/* Image 1 */}
        <div className="rounded overflow-hidden shadow-lg border border-blue-700">
          <img
            src="/assets/kerliix-logo.png"
            alt="Kerliix logo"
            className="w-full h-64 object-cover"
          />
        </div>

        {/* Paragraphs */}
        <div className="space-y-6 text-gray-300 text-lg">
          <p>
            Kerliix Technologies was born from a single belief: that people and technology should work together seamlessly. In a world filled with disconnected devices, apps, and platforms, Kerliix acts as the unifying bridge, making connections effortless and meaningful.
          </p>

          <p>
            Our mission is simple: unify the digital experiences of individuals and organizations while empowering them to interact naturally with technology. From personal devices to enterprise systems, Kerliix enables everything to communicate, collaborate, and enhance human experience.
          </p>

          {/* Image 2 
          <div className="rounded overflow-hidden shadow-lg border border-blue-700">
            <img
              src="/assets/kerliix-icon.png"
              alt="Interconnected Devices"
              className="w-full h-64 object-cover"
            />
          </div>*/}

          <p>
            At Kerliix, we envision a future where every interaction with technology feels natural, helpful, and human-centric. Whether it's your smart fridge talking to your fitness app, or your car syncing with your calendar, we're making those invisible connections possible.
          </p>

          <p>
            For developers, Kerliix offers clean, well-documented APIs, SDKs, and tools that unlock powerful cross-platform capabilities. Our sandbox environment allows rapid prototyping and integration testing, all with zero friction.
          </p>

          <p>
            We also recognize the role of organizations and enterprises. While our core focus is individuals and developers, we’re building scalable solutions that help organizations personalize customer experiences, streamline infrastructure, and unlock new value from user data—securely and ethically.
          </p>

          {/* Image 3 
          <div className="rounded overflow-hidden shadow-lg border border-blue-700">
            <img
              src="/assets/about-team.jpg"
              alt="Kerliix Team Collaboration"
              className="w-full h-64 object-cover"
            />
          </div>*/}

          <p>
            Kerliix is still young—but we’re bold, agile, and focused on solving a problem that affects billions. Our team is made up of engineers, designers, and thinkers driven by curiosity, empathy, and a mission to simplify technology without compromising power.
          </p>

          <p>
            Join us in reimagining how people interact with the digital world. With Kerliix, the future is connected—intelligently, securely, and beautifully.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
