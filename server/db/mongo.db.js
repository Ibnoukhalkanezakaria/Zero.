import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const ConnectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CONNECT);
    console.log("Connect To MongoDB");
  } catch (err) {
    console.log(`Error Connect To MongoDB`);
  }
};

export default ConnectToMongoDB;
