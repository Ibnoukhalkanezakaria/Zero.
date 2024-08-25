import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./LogInCnt.css";
import HomeCnt from "../Home/HomeCnt";

const LogInCnt = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [hide, setHide] = useState(false);
  const navigate = useNavigate();
  const getResponse = async (e) => {
    console.log(e);
    // return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await axios.post("http://localhost:3001/api/auth/login", {
        username,
        password,
      });
      setShow("Login Successfully");
      navigate("/profile");
    } catch (err) {
      console.log(err.response.data.error);
      setShow(err.response.data.error);
      return err.response.data.error;
    }
  };
  return (
    <div className="LogInHome">
      <div className="LogIn">
        <div className="LogInCnt Wrapper bg-secondary-clr">
          <div className="">
            <nav className="nav-bar">
              <h5 className="f5">
                <Link to="/" className="color3">
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
                  <div className="flex">
                    <div>
                      <p
                        className={
                          show === "Login Successfully"
                            ? "successfully"
                            : "hidden"
                        }
                      >
                        {show}
                      </p>
                    </div>
                    <div className="twobtn">
                      <div>
                        <button
                          onClick={() => setShow(!show)}
                          className="secondbtn"
                        >
                          login
                        </button>
                      </div>
                      <div>
                        <Link to="/signup">
                          <button className="firstbtn">signup</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div>
                <h5 className="f5 color3 project0">
                  p <br /> r <br /> o <br /> j <br /> e <br /> c <br /> t <br />{" "}
                  0 <br /> /
                </h5>
              </div>
            </main>
            <div className="made_by">
              <p className="fcaption">Made by Ibnoukhalkane & Meedivo 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogInCnt;
