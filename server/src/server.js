import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 5000;

// CORS configuration: allow frontend on 3000
app.use(cors({
  origin: 'http://localhost:3000', // only allow your frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

app.use(express.json());

// Test route
app.get('/api/test', (req, res) => {
  res.status(200).json({ message: 'Backend API is working!' });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
