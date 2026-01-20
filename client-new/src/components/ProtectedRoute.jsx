import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

const ProtectedRoute = ({ adminOnly, children }) => {
  const { user } = useAuth();

  if (!user) {
    // If not logged in at all, pop the login screen
    return <Navigate to="/login" />;
  }

  if (adminOnly && user.role !== 'admin') {
    // If trying to access Seller/Admin features without admin role
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;