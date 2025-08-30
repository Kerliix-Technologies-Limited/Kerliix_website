import React, { createContext, useState, useEffect, useContext } from 'react';
import API from '../api.js';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch user and try refresh if needed
  const fetchUser = async () => {
    setLoading(true);
    try {
      const res = await API.get('/auth/me');
      setUser(res.data);
    } catch (error) {
      if (error.response?.status === 401) {
        try {
          // Attempt to refresh session
          await API.get('/auth/refresh-token');
          const res = await API.get('/auth/me');
          setUser(res.data);
        } catch {
          setUser(null); // user is not authenticated
        }
      } else {
        console.error('Failed to fetch user:', error);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, fetchUser }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook to consume context
export function useAuth() {
  return useContext(AuthContext);
  }
