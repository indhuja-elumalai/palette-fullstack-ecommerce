import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx'; 
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';
import Products from './pages/Products.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import Cart from './pages/Cart.jsx';

function App() {
  return (
    <Router>
      <Navbar /> {/* Issue 6: Responsive UI Navigation */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} /> {/* Issue 3: Auth */}
        <Route path="/register" element={<Register />} /> {/* Issue 3: Auth */}
        <Route path="/products" element={<Products />} /> {/* Issue 6: Product UI */}
        <Route path="/cart" element={<Cart />} />
        
        {/* Issue 4 & 5: Admin Role Protection */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute adminOnly>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;