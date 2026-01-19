import dotenv from 'dotenv';
import connectDB from './src/config/db.js';
import User from './src/models/User.js';

dotenv.config();          // Load .env variables
await connectDB();        // Connect to MongoDB

const seedAdmin = async () => {
  try {
    const adminExists = await User.findOne({
      email: 'admin@palette.com'
    });

    if (adminExists) {
      console.log('✅ Admin already exists');
      process.exit();
    }

    await User.create({
      name: 'Admin',
      email: 'admin@palette.com',
      password: 'admin123',
      role: 'admin'
    });

    console.log('✅ Admin user created successfully');
    process.exit();

  } catch (error) {
    console.error('❌ Error seeding admin:', error.message);
    process.exit(1);
  }
};

seedAdmin();
