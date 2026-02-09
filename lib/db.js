import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URL;

async function dbConnect() {
  try {
    const db = await mongoose.connect(MONGODB_URI);
    console.log("Connected to Mongodb: ", db);
  } catch (err) {
    console.log("Failed to connect : ", err);
    throw err;
  }
}

export default dbConnect;
