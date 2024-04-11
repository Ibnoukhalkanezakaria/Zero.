import mongoose from "mongoose";

const UserShema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  profilePic: {
    type: String,
    default: "",
  },
});

const User = mongoose.model("Users", UserShema);

export default User;
