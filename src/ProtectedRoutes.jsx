import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext.jsx';

export default function ProtectedRoutes({ children, fallback = '/login' }) {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>; // Or a spinner
  }

  if (!user) {
    return <Navigate to={fallback} replace />;
  }

  return children;
}
