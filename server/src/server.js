// src/server.js

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

// Routes
import testModelsRouter from './routes/test.js';
import authRoutes from './routes/authRoutes.js';
import protectedRoutes from './routes/protectedRoutes.js';

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5050;

// -----------------------
// Middleware
// -----------------------

// Parse JSON bodies
app.use(express.json());

// CORS (open for dev)
app.use(
  cors({
    origin: '*', // allows Postman, frontend, etc.
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  })
);

// -----------------------
// Database Connection
// -----------------------
connectDB();

// -----------------------
// Routes
// -----------------------

// Health check
app.get('/api/test', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Palette Backend API is running 🚀',
  });
});

// Auth routes
app.use('/api/auth', authRoutes);

// Test models route
app.use('/api', testModelsRouter);

app.use('/api', protectedRoutes);

// -----------------------
// 404 Handler
// -----------------------
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});

// -----------------------
// Start Server
// -----------------------
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
