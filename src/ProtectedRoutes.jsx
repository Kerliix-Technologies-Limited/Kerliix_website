import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext.jsx';

export default function ProtectedRoutes({ children, fallback = 'https://auth.kerliix.com' }) {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>; // Or a spinner
  }

  if (!user) {
    // Redirect to central login at auth.kerliix.com
    window.location.href = fallback;
    return null; // Prevent rendering anything while redirecting
  }

  return children;
}
