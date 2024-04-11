import ConnectToMongoDB from "../db/mongo.db.js";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { UserRouter } from "../router/auth.router.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());
app.use("/api/auth", UserRouter);
app.listen(PORT, () => {
  ConnectToMongoDB(), console.log(`Server Running on ${PORT}`);
});
