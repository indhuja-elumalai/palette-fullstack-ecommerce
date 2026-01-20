import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

// Routes
import testModelsRouter from './routes/test.js';
import authRoutes from './routes/authRoutes.js';
import protectedRoutes from './routes/protectedRoutes.js';
import productRoutes from './routes/productRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5050;

// -----------------------
// Middleware
// -----------------------
app.use(express.json());

// List of allowed origins for CORS
const allowedOrigins = [
  'https://palette-ecommerce.netlify.app', 
  'http://localhost:5173',               
  'http://localhost:3000'                
];

const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      console.log("Blocked by CORS:", origin); // Helps debug on Render logs
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
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

app.get('/api/test', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Palette Backend API is running 🚀',
  });
});

app.use('/api/auth', authRoutes);
app.use('/api', testModelsRouter);
app.use('/api', protectedRoutes);
app.use('/api/products', productRoutes);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});