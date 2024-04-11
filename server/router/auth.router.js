import express from "express";
import { SignUp } from "../controller/user.controller.js";

const router = express.Router();

router.post("/signup", SignUp);

export { router as UserRouter };
