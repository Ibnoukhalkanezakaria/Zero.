// import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../model/user.model.js";

export const SignUp = async (req, res) => {
  try {
    const { username, password, confirmPassword, gender } = req.body;
    if (!username || !password || !confirmPassword || !gender)
      return res.status(400).json({ error: "All field required" });
    if (password !== confirmPassword)
      return res.status(401).json({ error: "password do not match" });

    const findUser = await User.findOne({ username });
    if (findUser)
      return res.status(401).json({ error: "This username already used" });
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      password: hashedPassword,
      gender,
      profilePic: `https://api.multiavatar.com/${username}`,
    });
    await newUser.save();
    res.status(201).json({ message: "Registred Successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error !!!" });
  }
};

export const Login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password)
      return res.status(400).json({ error: "All fields required" });
    const findUser = User.findOne({ username });
    if (!findUser)
      return res.status(401).json({ error: "this username not found" });
    const comparePassword = await bcrypt.compare(password, findUser.password);
    if (!comparePassword)
      return res
        .status(401)
        .json({ error: "the username or password is wrong" });
    // const
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error !!!" });
  }
};
