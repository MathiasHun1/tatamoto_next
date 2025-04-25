import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

const connectToDb = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to Database..');
  } catch (error) {
    console.log('Failed connection to Database..');
    console.log(error);
  }
};

export default connectToDb;
