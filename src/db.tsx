
import mongoose from 'mongoose';

const mongazo = (process.env.MONGO_URI || '')

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(mongazo);
    
    console.log('Conectado a MongoDB');
  } catch (error) {
    console.error('Error al conectar con MongoDB:', error);
  }
};

export default connectDB;
