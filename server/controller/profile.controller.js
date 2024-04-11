import mongoose from "mongoose";
import User from "../model/user.model.js";

export const GetProfile = async (req, res) => {
  try {
    const username = req.username;
    if (!username) return res.status(401).json({ error: "You need to login" });
    const findUser = await User.findOne({ username });
    if (!findUser)
      return res
        .status(400)
        .json({ error: "This username not found in database" });
    return res.status(200).json({
      user: {
        gender: findUser.gender,
        username: findUser.username,
        profilePic: findUser.profilePic,
      },
    });
  } catch (err) {
    res.status(500).json({ error: "Internal server Error" });
  }
};
