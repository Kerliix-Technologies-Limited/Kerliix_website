import React from "react";

const About = () => {
  return (
    <section className="text-white py-16 px-6">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">About Kerliix Technologies</h1>
          <p className="text-gray-400 text-lg">
            Connecting people and technology through intelligence and simplicity.
          </p>
        </div>

        {/* Image 1 */}
        <div className="rounded overflow-hidden shadow-lg border border-blue-700">
          <img
            src="/assets/about-vision.jpg"
            alt="Kerliix Vision"
            className="w-full h-64 object-cover"
          />
        </div>

        {/* Paragraphs */}
        <div className="space-y-6 text-gray-300 text-lg">
          <p>
            Kerliix Technologies was born from a single belief: that the relationship between people and their technology should be seamless, intelligent, and empowering. In a world overwhelmed by disconnected devices, apps, and platforms, Kerliix steps in as the unifying bridge.
          </p>

          <p>
            Our flagship innovations—<strong>Digital Me</strong> and the <strong>Universal API (UAPI)</strong>—were designed to harmonize your digital life. With Digital Me, you get a personalized virtual you that understands your preferences, routines, and digital environment.
          </p>

          <p>
            The UAPI acts as the central nervous system, enabling devices, applications, and platforms to talk to each other effortlessly. No more silos. Just harmony.
          </p>

          {/* Image 2 */}
          <div className="rounded overflow-hidden shadow-lg border border-blue-700">
            <img
              src="/assets/about-devices.jpg"
              alt="Interconnected Devices"
              className="w-full h-64 object-cover"
            />
          </div>

          <p>
            At Kerliix, we envision a future where every interaction with technology feels natural, helpful, and human-centric. Whether it's your smart fridge talking to your fitness app, or your car syncing with your calendar, we're making those invisible connections possible.
          </p>

          <p>
            For developers, Kerliix offers clean, well-documented APIs, SDKs, and tools that unlock powerful cross-platform capabilities. Our sandbox environment allows rapid prototyping and integration testing, all with zero friction.
          </p>

          <p>
            We also recognize the role of organizations and enterprises. While our core focus is individuals and developers, we’re building scalable solutions that help organizations personalize customer experiences, streamline infrastructure, and unlock new value from user data—securely and ethically.
          </p>

          {/* Image 3 */}
          <div className="rounded overflow-hidden shadow-lg border border-blue-700">
            <img
              src="/assets/about-team.jpg"
              alt="Kerliix Team Collaboration"
              className="w-full h-64 object-cover"
            />
          </div>

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
