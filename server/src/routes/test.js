import express from 'express';
import User from '../models/User.js';
import Product from '../models/Product.js';
import Order from '../models/Order.js';

const router = express.Router();

router.get('/test-models', async (req, res) => {
  try {
    const userCount = await User.countDocuments();
    const productCount = await Product.countDocuments();
    const orderCount = await Order.countDocuments();
    res.json({ userCount, productCount, orderCount });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
