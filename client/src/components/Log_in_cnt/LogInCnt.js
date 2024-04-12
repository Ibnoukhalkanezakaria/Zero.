import React, { useState } from "react";
import axios from "axios";

const LogInCnt = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    console.log("nice");
    e.preventDefault();
    try {
      const user = await axios.post("http://localhost:3001/api/auth/login", {
        username,
        password,
      });
      return "done";
    } catch (err) {
      return err.response.data.error;
    }
  };
  return (
    <div>
      <div className="home">
        <div className="home-cnt bg-secondary-clr Wrapper">
          <nav className="nav-bar">
            <h5 className="f5">Zero.</h5>
          </nav>
          <main className="main">
            <div>
              <div>
                <h3 className="f3 firsth3">
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
                />
                <input
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button>Sign in</button>
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

export default LogInCnt;
