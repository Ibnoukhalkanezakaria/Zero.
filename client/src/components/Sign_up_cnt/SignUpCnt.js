import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const SignUpCnt = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [show, setShow] = useState(false);

  console.log(username);
  console.log(password);
  console.log(confirmPassword);

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
      console.log("Sign up successfully!!");
      return "Sign up successfully!!";
    } catch (err) {
      console.log(err.response.data.error);
      setShow(err.response.data.error);
      return err.response.data.error;
    }
  };
  return (
    <div>
      <div className="home">
        <div className="home-cnt bg-secondary-clr Wrapper">
          <nav className="nav-bar">
            <h5 className="f5">
              <Link to="/">Zero.</Link>
            </h5>
          </nav>
          <main className="main">
            <div>
              <div>
                <h3 className="f3 secondh3">
                  Reshaped the platform's user experience, making blockchain
                  technology more accessible.
                </h3>
              </div>
              <form className="btns" onSubmit={handleSubmit}>
                <input
                  placeholder="Username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <input
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <input
                  placeholder="Confirm Password"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setconfirmPassword(e.target.value)}
                  required
                />
                {/* <div className="gender">
                  <div>
                    <input
                      placeholder="Male"
                      type="password"
                      // value={male}
                      onChange={(e) => setconfirmPassword(e.target.value)}
                    />
                  </div>
                  <div>
                    <input
                      placeholder="Female"
                      type="password"
                      // value={male}
                      onChange={(e) => setconfirmPassword(e.target.value)}
                    />
                  </div>
                </div> */}
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
                  <div>
                    <button onClick={() => setShow(!show)}>signup</button>
                  </div>
                </div>
              </form>
            </div>
            <div>
              <h5 className="f5 firsth4">
                p <br /> r <br /> o <br /> j <br /> e <br /> c <br /> t <br /> 0{" "}
                <br /> /
              </h5>
            </div>
          </main>
          <div className="made">
            <p className="fcaption">Made by Ibnoukhalkane & Meedivo 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpCnt;
