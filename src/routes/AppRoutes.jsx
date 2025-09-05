import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';
import Announcements from '../pages/Announcements';
import NotFound from '../pages/NotFound';

function ExternalRedirect({ to }) {
  useEffect(() => {
    window.location.href = to;
  }, [to]);

  return null;
}

export default function AppRoutes() {
  return (
    <>
      <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/announcements" element={<Announcements />} />

        {/* External redirects */}
        <Route path="/help" element={<ExternalRedirect to="https://help.kerliix.com" />} />
        <Route path="/privacy" element={<ExternalRedirect to="https://policies.kerliix.com/privacy" />} />
        <Route path="/terms" element={<ExternalRedirect to="https://policies.kerliix.com/terms" />} />
        <Route path="/cookie" element={<ExternalRedirect to="https://policies.kerliix.com/cookie" />} />

        {/* Catch-all */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
