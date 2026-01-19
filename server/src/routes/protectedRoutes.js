import express from 'express';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

// Protected route - any logged-in user
router.get('/protected', protect, (req, res) => {
  res.json({ message: 'Access granted', user: req.user });
});

// Admin-only route
router.get('/admin', protect, admin, (req, res) => {
  res.json({ message: 'Welcome Admin', user: req.user });
});

export default router;
