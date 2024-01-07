import mongoose from 'mongoose';
mongoose.set('strictQuery', false);
export default async function connect() {
  await mongoose.connect(process.env.MONGO_URI);
  console.log('database connected!!');
}
