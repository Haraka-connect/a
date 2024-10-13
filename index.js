import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './api/user.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

// Use the user routes
app.use('/api/user', userRoutes);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('MongoDB connection error:', error);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});