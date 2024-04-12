import ConnectToMongoDB from "../db/mongo.db.js";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { UserRouter } from "../router/auth.router.js";
import cookieParser from "cookie-parser";
import { ProfileRouter } from "../router/profile.router.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hahowa Khdam");
  res.end();
});
app.use("/api/auth", UserRouter);
app.use("/api/profile", ProfileRouter);
app.listen(PORT, () => {
  ConnectToMongoDB(), console.log(`Server Running on ${PORT}`);
});
