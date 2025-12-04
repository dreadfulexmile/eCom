import mongoose from 'mongoose';

const connectToDatabase = async () => {
  try {
    const MONGODB_URL = process.env.MONGODB_URL;
    if (!MONGODB_URL) {
        throw new Error('MongoDB connection string is not defined.');
    }
    await mongoose.connect(MONGODB_URL);
    console.log('Connected to MongoDB successfully.');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};
export default connectToDatabase;