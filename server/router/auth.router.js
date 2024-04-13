import express from "express";
import {
  Login,
  SignUp,
  Refresh,
  Logout,
} from "../controller/user.controller.js";
import verifyToken from "../middleware/user.middleware.js";

const router = express.Router();

router.post("/signup", SignUp);
router.post("/login", Login);
router.post("/refresh", Refresh);
router.get("/logout", Logout);
router.get("/home", (req, res) => {
  res.json(req.username);
});
export { router as UserRouter };
