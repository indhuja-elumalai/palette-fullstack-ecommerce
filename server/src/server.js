//palette-fullstack-ecommerce/server/src/server.js

// src/server.js

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

// Routes
import testModelsRouter from './routes/test.js';
import authRoutes from './routes/authRoutes.js';
import protectedRoutes from './routes/protectedRoutes.js';
import productRoutes from './routes/productRoutes.js';


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

// CORS - Updated for Vite
// app.use(
//   cors({
//     origin: 'http://localhost:5173', // Specifically allow your Vite frontend
//     methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//     credentials: true, // Required if you decide to use cookies later
//   })
// );
import cors from 'cors';

// List of allowed origins
const allowedOrigins = [
  'https://palette-ecommerce.netlify.app', // Your production URL
  'http://localhost:5173',               // Your local Vite dev URL
  'http://localhost:3000'                // Common alternative local URL
];

const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));



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

app.use('/api/products', productRoutes);

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
