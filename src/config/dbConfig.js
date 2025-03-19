import mongoose from "mongoose";
import { DB_URL } from "./serverConfig.js";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(DB_URL);
    console.log(`✅ MongoDB Connected to the host`);
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
