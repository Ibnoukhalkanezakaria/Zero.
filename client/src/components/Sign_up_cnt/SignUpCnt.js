import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./SignUpCnt.css";

const SignUpCnt = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [show, setShow] = useState(false);

  const handleSubmit = async (e) => {
    console.log("nice");
    e.preventDefault();
    try {
      const user = await axios.post("http://localhost:3001/api/auth/signup", {
        username,
        password,
        confirmPassword,
        gender: "male",
      });
      setShow("Sign up successfully!!");
      return "Sign up successfully!!";
    } catch (err) {
      setShow(err.response.data.error);
      return err.response.data.error;
    }
  };
  return (
    <div className="SignIn">
      <div className="SignInCnt Wrapper bg-secondary-clr">
        <div className="">
          <nav className="nav-bar">
            <h5 className="f5">
              <Link to="/login" className="color3">
                Zero.
              </Link>
            </h5>
          </nav>
          <main className="flex">
            <div>
              <div>
                <h3 className="f3 hero-title">
                  Reshaped the platform's user experience, making blockchain
                  technology more accessible.
                </h3>
              </div>
              <form className="" onSubmit={handleSubmit}>
                <input
                  placeholder="Username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <input
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <input
                  placeholder="Confirm Password"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <div className="check">
                  <div>
                    <p
                      className={
                        show === "Sign up successfully!!"
                          ? "successfully"
                          : "hidden"
                      }
                    >
                      {show}
                    </p>
                  </div>
                  <div className="twobtn">
                    <div className="secondbtn">
                      <button onClick={() => setShow(!show)}>signup</button>
                    </div>
                    <div className="firstbtn">
                      <Link to="/login">
                        <button onClick={() => setShow(!show)}>login</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div>
              <h5 className="f5 color3 project0">
                p <br /> r <br /> o <br /> j <br /> e <br /> c <br /> t <br /> 0{" "}
                <br /> /
              </h5>
            </div>
          </main>
          <div className="made_by">
            <p className="fcaption">Made by Ibnoukhalkane & Meedivo 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpCnt;
