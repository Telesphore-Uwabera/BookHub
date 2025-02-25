require("dotenv").config();
const mongoose = require("mongoose");

const uri = process.env.MONGO_URI;

console.log("MongoDB URI:", uri); 

if (!uri) {
  console.error("❌ MONGO_URI is undefined! Check your .env file.");
  process.exit(1);
}

const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 30000, 
    });
    console.log("✅ MongoDB connected successfully!");
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
