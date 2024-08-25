import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./SignUpCnt.css";

const SignUpCnt = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [show, setShow] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Attempt to refresh the token to check if the user is logged in
        const refreshTokenResponse = await axios.post(
          "http://localhost:3001/api/auth/refresh"
        );
        const accessToken = refreshTokenResponse.data.accessToken;
        await axios.get("http://localhost:3001/api/profile", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        // If the user is logged in, redirect to profile
        navigate("/profile");
      } catch (err) {
        console.log("Not logged in:", err);
        // If not logged in, do nothing and let the user see the signup form
      }
    };

    checkAuth();
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setShow("Passwords do not match!");
      return;
    }
    try {
      await axios.post("http://localhost:3001/api/auth/signup", {
        username,
        password,
        confirmPassword,
        gender: "male",
      });
      setShow("Sign up successfully!!");
    } catch (err) {
      setShow(err.response.data.error);
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
              <form onSubmit={handleSubmit}>
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
                      <button type="submit">Signup</button>
                    </div>
                    <div className="firstbtn">
                      <Link to="/login">
                        <button>Login</button>
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
