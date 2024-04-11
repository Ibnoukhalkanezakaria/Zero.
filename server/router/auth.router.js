import express from "express";
import { Login, SignUp } from "../controller/user.controller.js";

const router = express.Router();

router.post("/signup", SignUp);
router.post("/login", Login);
export { router as UserRouter };
