// src/server.js

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import testModelsRouter from './routes/test.js';

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5050;

// -----------------------
// Middleware
// -----------------------

// Enable JSON parsing
app.use(express.json());

// CORS configuration
// For development, allow all origins
app.use(cors({
  origin: '*', // <-- allows Postman, frontend, etc.
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true,
}));

// -----------------------
// Database Connection
// -----------------------
connectDB(); // Connect to MongoDB Atlas

// -----------------------
// Routes
// -----------------------
app.get('/api/test', (req, res) => {
  res.status(200).json({ message: 'Backend API is working! 🚀' });
});

// Test models route
app.use('/api', testModelsRouter);

// -----------------------
// 404 handler
// -----------------------
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// -----------------------
// Start Server
// -----------------------
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
