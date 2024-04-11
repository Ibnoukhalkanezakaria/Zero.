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
    const findUser = await User.findOne({ username });
    if (!findUser)
      return res.status(401).json({ error: "this username not found" });
    const comparePassword = await bcrypt.compare(password, findUser.password);
    if (!comparePassword)
      return res
        .status(401)
        .json({ error: "the username or password is wrong" });
    const accessToken = jwt.sign({ username }, process.env.ACCESS_TOKEN, {
      expiresIn: "10s",
    });
    const refreshToken = jwt.sign({ username }, process.env.REFRESH_TOKEN, {
      expiresIn: "1d",
    });
    res.cookie("jwt", refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
      secure: false,
    });
    res.status(200).json({ accessToken });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error !!!" });
  }
};

export const Refresh = (req, res) => {
  const cookie = req.cookies;

  if (!cookie || !cookie.jwt)
    return res.status(401).json({ error: "Unauthorized" });
  const refreshToken = cookie.jwt;
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN, async (err, decoded) => {
    if (err) return res.status(403).json({ error: "Forbidden" });
    const foundUser = await User.findOne({ username: decoded.username });
    if (!foundUser) return res.status(401).json({ error: "Unauthorized" });
    const accessToken = jwt.sign(
      { username: decoded.username },
      process.env.ACCESS_TOKEN,
      {
        expiresIn: "10s",
      }
    );
    res.json({ accessToken });
  });
};

export const Logout = (req, res) => {
  const cookie = req.cookies;
  if (!cookie || !cookie.jwt) return res.sendStatus(204);
  res.clearCookie("jwt", {
    httpOnly: true,
    secure: false,
  });
  res.json({ message: "Cookie Cleared" });
};
