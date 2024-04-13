import express from "express";
import verifyToken from "../middleware/user.middleware.js";
import { GetProfile } from "../controller/profile.controller.js";
const router = express.Router();

router.use(verifyToken);
router.get("/", verifyToken, GetProfile);

export { router as ProfileRouter };
